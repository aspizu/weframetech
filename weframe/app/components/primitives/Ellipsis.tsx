import component from "@/app/bloom"
import {ComponentPropsWithoutRef} from "react"

export interface EllipsisProps extends ComponentPropsWithoutRef<"div"> {}

export function Ellipsis({className, children, ...props}: EllipsisProps) {
    const $ = component(className, "Ellipsis")
    return (
        <div className={$()} {...props}>
            {children}
        </div>
    )
}
