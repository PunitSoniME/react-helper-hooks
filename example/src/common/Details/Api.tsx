import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Api({ api }: any) {
    return (
        <Table className='bg-white border-x border-b mt-4'>
            <TableHeader>
                <TableRow className='bg-blue-600 hover:bg-blue-600'>
                    <TableHead className="w-[100px] text-white">Api</TableHead>
                    <TableHead className='text-white w-1/4'>Type</TableHead>
                    <TableHead className='text-white'>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    api.map((m: any, index: number) =>
                        <TableRow key={index}>

                            <TableCell className="font-medium">{m.execute}</TableCell>
                            <TableCell>{m.type}</TableCell>
                            <TableCell>{m.description}</TableCell>

                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}
