import {ComponentPropsWithoutRef} from "react"
import menuIcon from "../assets/icons/menu.svg"
import component from "../bloom"
import {Button} from "./primitives/Button"
import {Ellipsis} from "./primitives/Ellipsis"
import {Tag} from "./primitives/Tag"

export interface ArticleProps extends ComponentPropsWithoutRef<"div"> {
    image: string
    category: string
    date: string
    pfp: string
    author: string
    title: string
    subtitle: string
    tags: Readonly<string[]>
    context: "created" | "published"
}

export function Article({
    className,
    children,
    image,
    category,
    date,
    pfp,
    author,
    title,
    subtitle,
    tags,
    context,
    ...props
}: ArticleProps) {
    const $ = component(className, "Article")
    return (
        <div className={$()} {...props}>
            <img className={$("Image")} src={image} />
            <div className={$("Details")}>
                <span className={$("Category")}>{category}</span>
                <Ellipsis />
                <span className={$("Date")}>{date}</span>
                <img className={$("Pfp")} src={pfp} />
                <span className={$("Author")}>{author}</span>
            </div>
            <div>
                <div className={$("Heading")}>
                    <span className={$("Title")}>{title}</span>
                    {context == "created" ? (
                        <Tag variant="primary">Created</Tag>
                    ) : (
                        <Tag variant="success">Published</Tag>
                    )}
                </div>
                <span className={$("Subtitle")}>{subtitle}</span>
            </div>
            <div className={$("Tags")}>
                {tags.map((tag) => (
                    <Tag variant="secondary">{tag}</Tag>
                ))}
            </div>
            <div className={$("Buttons")}>
                <Button className={$("View")} variant="primary">
                    View
                </Button>
                <Button variant="secondary">
                    <img src={menuIcon.src} />
                </Button>
            </div>
        </div>
    )
}
