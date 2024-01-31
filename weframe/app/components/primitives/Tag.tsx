import component from "@/app/bloom"
import {ComponentPropsWithoutRef} from "react"

export interface TagProps extends ComponentPropsWithoutRef<"div"> {
    variant?: "primary" | "secondary" | "success" | "ternary"
}

export function Tag({className, children, variant, ...props}: TagProps) {
    const $ = component(className, "Tag", variant)
    return (
        <div className={$()} {...props}>
            {children}
        </div>
    )
}
