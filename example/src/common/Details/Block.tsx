import { cn } from '@/lib/utils'

export default function Block({ title, children, className, ...rest }: any) {
    return (
        <div className={`${cn('border rounded-md p-4 bg-slate-50', className)}`} {...rest}>
            {children}
        </div>
    )
}
