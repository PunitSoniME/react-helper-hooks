import { CodeBlock, dracula } from 'react-code-blocks'
import Usage from './Details/Usage'

export default function CodeSample({ code }: any) {
    return (
        <Usage title="Syntex">
            <CodeBlock
                customStyle={{
                    padding: "0 0.1rem"
                }}
                theme={dracula}
                text={code}
                language="jsx"
                wrapLongLines
                showLineNumbers={false}
            />
        </Usage>
    )
}
