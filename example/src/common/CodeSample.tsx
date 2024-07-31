import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { useEffect, useRef } from "react";

export default function CodeSample({ code }: any) {

    const ref = useRef<any>();

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
        <div ref={ref}></div>
    )
}
