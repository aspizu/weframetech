import {ComponentPropsWithoutRef} from "react"
import component from "../bloom"

export interface ProjectProps extends ComponentPropsWithoutRef<"div"> {
    icon: string
    title: string
    description: string
}

export function Project({
    className,
    children,
    icon,
    title,
    description,
    ...props
}: ProjectProps) {
    const $ = component(className, "Project")
    return (
        <div className={$()} {...props}>
            <div className={$("Icon")}>
                <img src={icon} />
            </div>
            <div className={$("Content")}>
                <span className={$("Title")}>{title}</span>
                <span className={$("Description")}>{description}</span>
            </div>
        </div>
    )
}
