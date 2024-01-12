import { cn } from '@/lib/utils'

export default function Block({ title, children, className, ...rest }: any) {
    return (
        <div className={`${cn('mt-4 border rounded-md p-4 bg-slate-50', className)}`} {...rest}>
            <p className='text-lg border-b pb-2 font-semibold tracking-wider mb-4 text-slate-800'>
                {title}
            </p>

            {children}
        </div>
    )
}
