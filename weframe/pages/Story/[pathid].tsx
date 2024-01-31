import component from "@/app/bloom"
import {stories} from "@/app/data"
import {Tag} from "@/components/primitives/Tag"
import {useRouter} from "next/router"

export default function StoryPage() {
    const $ = component(undefined, "StoryPage")
    const router = useRouter()
    const pathid: number = parseInt(router.query.pathid as string)
    const story = stories[pathid - 1]
    return (
        <div
            className={$()}
            style={{
                ["--story-page-image" as any]: `url(${story.image})`,
            }}
        >
            <div className={$("Wrapper")}>
                <div className={$("Content")}>
                    <span className={$("Title")}>{story.title}</span>
                    <div className={$("Details")}>
                        <Tag variant="primary">{story.category}</Tag>
                    </div>
                </div>
            </div>
        </div>
    )
}
