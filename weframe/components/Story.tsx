import component from "@/app/bloom"
import eyeIcon from "@/assets/icons/eye.svg"
import menuIcon from "@/assets/icons/menu.svg"
import statusUpIcon from "@/assets/icons/status-up.svg"
import {useRouter} from "next/router"
import {ComponentPropsWithoutRef} from "react"
import {Button} from "./primitives/Button"
import {Ellipsis} from "./primitives/Ellipsis"
import {SmallTag} from "./primitives/SmallTag"
import {Tag} from "./primitives/Tag"

export interface StoryProps extends ComponentPropsWithoutRef<"div"> {
    pathid: number
    image: string
    views: number
    title: string
    category: string
    date: string
    context: "published" | "created" | "draft"
}

export function Story({
    className,
    children,
    pathid,
    image,
    views,
    title,
    category,
    date,
    context,
    ...props
}: StoryProps) {
    const router = useRouter()
    const $ = component(className, "Story")
    function onView() {
        router.push(`/Story/${pathid}`)
    }
    return (
        <div
            className={$()}
            style={{
                ["--story-image" as any]: `url(${image})`,
            }}
            {...props}
        >
            <div className={$("Info")}>
                <SmallTag>
                    <img src={eyeIcon.src} />
                    {views}
                </SmallTag>
                <SmallTag>
                    <img src={statusUpIcon.src} />
                </SmallTag>
            </div>
            <span className={$("Title")}>{title}</span>
            <div className={$("Details")}>
                <span className={$("Category")}>{category}</span>
                <Ellipsis />
                <span className={$("Date")}>{date}</span>
                {context == "created" ? (
                    <Tag variant="ternary">Created</Tag>
                ) : context == "draft" ? (
                    <Tag variant="secondary">Draft</Tag>
                ) : (
                    <Tag variant="success">Published</Tag>
                )}
            </div>
            <div className={$("Buttons")}>
                <Button className={$("View")} variant="primary" onClick={onView}>
                    View
                </Button>
                <Button variant="secondary">
                    <img src={menuIcon.src} />
                </Button>
            </div>
        </div>
    )
}
