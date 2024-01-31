import {ComponentPropsWithoutRef} from "react"
import menuIcon from "../assets/icons/menu.svg"
import component from "../bloom"
import {Button} from "./primitives/Button"

export interface AdvertProps extends ComponentPropsWithoutRef<"div"> {
    image: string
    title: string
    description: string
}

export function Advert({
    className,
    children,
    image,
    title,
    description,
    ...props
}: AdvertProps) {
    const $ = component(className, "Advert")
    return (
        <div className={$()} {...props}>
            <img src={image} alt="" className={$("Image")} />
            <div className={$("Content")}>
                <span className={$("Title")}>{title}</span>
                <span className={$("Description")}>{description}</span>
                <div className={$("Buttons")}>
                    <Button className={$("Visit")} variant="primary">
                        Visit
                    </Button>
                    <Button variant="secondary">
                        <img src={menuIcon.src}></img>
                    </Button>
                </div>
            </div>
        </div>
    )
}
