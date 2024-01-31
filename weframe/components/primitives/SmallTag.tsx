import component from "@/app/bloom"
import {ComponentPropsWithoutRef} from "react"

export interface SmallTagProps extends ComponentPropsWithoutRef<"div"> {}

export function SmallTag({className, children, ...props}: SmallTagProps) {
    const $ = component(className, "SmallTag")
    return (
        <div className={$()} {...props}>
            {children}
        </div>
    )
}
