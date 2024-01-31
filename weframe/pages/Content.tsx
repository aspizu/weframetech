import component from "@/app/bloom"
import {adverts, articles, stories} from "@/app/data"
import advertIcon from "@/assets/icons/advert.svg"
import articleIcon from "@/assets/icons/article.svg"
import categoryIcon from "@/assets/icons/category.svg"
import storyIcon from "@/assets/icons/story.svg"
import {Advert} from "@/components/Advert"
import {Article} from "@/components/Article"
import {Project} from "@/components/Project"
import {Story} from "@/components/Story"

export default function Content() {
    const $ = component(undefined, "Content")
    return (
        <div className={$()}>
            <div className={$("Greeting")}>
                <span className={$("GreetingHeading")}>Hello Admin,</span>
                This is what we got for you today
            </div>
            <div className={$("Section", "SameWidth")}>
                <Project
                    icon={articleIcon.src}
                    title="Articles"
                    description="4,950 New Updates"
                />
                <Project
                    icon={categoryIcon.src}
                    title="Categories"
                    description="10,275 New Updates"
                />
                <Project
                    icon={storyIcon.src}
                    title="Stories"
                    description="4,193 New Updates"
                />
                <Project
                    icon={advertIcon.src}
                    title="Advertisements"
                    description="928 New Updates"
                />
            </div>
            <div className={$("SectionHeading")}>
                <span className={$("SectionTitle")}>Top Articles</span>
                <a className={$("SectionLink")} href="#">
                    See all
                </a>
            </div>
            <div className={$("Section")}>
                {articles.map(({id, ...article}) => (
                    <Article key={id} {...article} />
                ))}
            </div>
            <div className={$("SectionHeading")}>
                <span className={$("SectionTitle")}>Top Stories</span>
                <a className={$("SectionLink")} href="#">
                    See all
                </a>
            </div>
            <div className={$("Section")}>
                {stories.map(({id, ...story}) => (
                    <Story key={id} pathid={id} {...story} />
                ))}
            </div>
            <div className={$("SectionHeading")}>
                <span className={$("SectionTitle")}>Advertisements</span>
                <a className={$("SectionLink")} href="#">
                    See all
                </a>
            </div>
            <div className={$("Section")}>
                {adverts.map(({id, ...advert}) => (
                    <Advert key={id} {...advert} />
                ))}
            </div>
        </div>
    )
}
