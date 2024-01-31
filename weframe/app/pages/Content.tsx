import advertImage1 from "../assets/adverts/advert-1.png"
import advertImage2 from "../assets/adverts/advert-2.png"
import advertImage3 from "../assets/adverts/advert-3.png"
import articleImage1 from "../assets/articles/article-1.png"
import articleImage2 from "../assets/articles/article-2.png"
import articleImage3 from "../assets/articles/article-3.png"
import advertIcon from "../assets/icons/advert.svg"
import articleIcon from "../assets/icons/article.svg"
import categoryIcon from "../assets/icons/category.svg"
import storyIcon from "../assets/icons/story.svg"
import mariaDoeImage from "../assets/pfp/maria-doe.png"
import storyImage1 from "../assets/stories/story-1.png"
import storyImage2 from "../assets/stories/story-2.png"
import storyImage3 from "../assets/stories/story-3.png"
import storyImage4 from "../assets/stories/story-4.png"
import storyImage5 from "../assets/stories/story-5.png"
import component from "../bloom"
import {Advert} from "../components/Advert"
import {Article} from "../components/Article"
import {Project} from "../components/Project"
import {Story} from "../components/Story"

const articles = [
    {
        id: 1,
        image: articleImage1.src,
        category: "BUSINESS",
        date: "20 Sep 2022",
        pfp: mariaDoeImage.src,
        author: "Maria Doe",
        title: "7 Rules of Effective Branding",
        subtitle: "Why Branding matters for your Business",
        tags: ["Branding", "Communication", "Branding"],
        context: "created",
    },
    {
        id: 2,
        image: articleImage2.src,
        category: "ECONOMY",
        date: "20 Sep 2022",
        pfp: mariaDoeImage.src,
        author: "Maria Doe",
        title: "Research on biodiversity and bananas",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        tags: ["World", "Population"],
        context: "published",
    },
    {
        id: 3,
        image: articleImage3.src,
        category: "POLITICS",
        date: "20 Sep 2022",
        pfp: mariaDoeImage.src,
        author: "Maria Doe",
        title: "Close and historical ties to hamburgers",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        tags: ["Politics", "Defence"],
        context: "published",
    },
    {
        id: 4,
        image: articleImage1.src,
        category: "BUSINESS",
        date: "20 Sep 2022",
        pfp: mariaDoeImage.src,
        author: "Maria Doe",
        title: "7 Rules of Effective Branding",
        subtitle: "Why Branding matters for your Business",
        tags: ["Branding", "Communication", "Branding"],
        context: "created",
    },
] as const

const stories = [
    {
        id: 1,
        image: storyImage1.src,
        category: "BUSINESS",
        title: "How 7 lines code turned into $36 Billion Empire",
        date: "20 Sep 2022",
        views: 428,
        context: "published",
    },
    {
        id: 2,
        image: storyImage2.src,
        category: "BUSINESS",
        title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
        date: "20 Sep 2022",
        views: 428,
        context: "created",
    },
    {
        id: 3,
        image: storyImage3.src,
        category: "Politics",
        title: "Teknion wins Gold at 2022 International Design Awards",
        date: "20 Sep 2022",
        views: 428,
        context: "draft",
    },
    {
        id: 4,
        image: storyImage4.src,
        category: "BUSINESS",
        title: "How 7 lines code turned into $36 Billion Empire",
        date: "20 Sep 2022",
        views: 428,
        context: "published",
    },
    {
        id: 5,
        image: storyImage5.src,
        category: "BUSINESS",
        title: "Chez pierre restaurant in Monte Carlo by Vuidafieri Partner",
        date: "20 Sep 2022",
        views: 428,
        context: "created",
    },
] as const

const adverts = [
    {
        id: 1,
        image: advertImage1.src,
        title: "Build your business",
        description:
            "Shopify has all the tools you need to start, sell, market, and manage.",
    },
    {
        id: 2,
        image: advertImage2.src,
        title: "Libre Coffee",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
        id: 3,
        image: advertImage3.src,
        title: "KFC",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
] as const

export function Content() {
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
                    <Story key={id} {...story} />
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
