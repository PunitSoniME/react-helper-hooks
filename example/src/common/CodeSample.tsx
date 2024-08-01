import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "../../../";

export default function CodeSample({ code, allowCopy = false }: any) {

    const ref = useRef<any>();

    const copyToClipboard = useCopyToClipboard();
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const process = async () => {

            const processor = await unified()
                .use(remarkParse)
                .use(remarkRehype)
                .use(rehypePrettyCode, {
                    theme: 'rose-pine',
                    grid: false
                })
                .use(rehypeStringify)
                .process("```ts \n" + code);

            if (ref.current)
                ref.current.innerHTML = processor.toString();
        }

        process();

    }, [code]);

    return (
        <div className="relative">
            <div ref={ref}></div>

            {
                allowCopy ? <div className="absolute top-4 right-4 text-white">
                    {
                        isCopied ? <Check size={20} /> : <Copy
                            size={20}
                            className='cursor-pointer'
                            onClick={() => {
                                copyToClipboard(code);
                                setIsCopied(true);

                                setTimeout(() => {
                                    setIsCopied(false)
                                }, 3000)
                            }} />
                    }
                </div> : ""
            }
        </div>
    )
}
