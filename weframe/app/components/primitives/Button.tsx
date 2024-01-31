import component from "@/app/bloom"
import {ComponentPropsWithoutRef} from "react"

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant?: "primary" | "secondary"
}

export function Button({className, children, variant, ...props}: ButtonProps) {
    const $ = component(className, "Button", variant)
    return (
        <button className={$()} {...props}>
            {children}
        </button>
    )
}
