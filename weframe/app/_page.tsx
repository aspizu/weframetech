import advertImage1 from "./assets/advert_1.png"
import articleImage1 from "./assets/article_image_1.png"
import articleIcon from "./assets/icons/article.svg"
import eyeIcon from "./assets/icons/eye.svg"
import menuIcon from "./assets/icons/menu.svg"
import statusUpIcon from "./assets/icons/status-up.svg"

function Story() {
    return (
        <div className="story">
            <div className="story__info">
                <div className="small-tag">
                    <img src={eyeIcon.src}></img>
                    428
                </div>
                <div className="small-tag">
                    <img src={statusUpIcon.src}></img>
                </div>
            </div>
            <span className="story__title">
                How 7 lines code turned into $36 Billion Empire
            </span>
            <div className="story__details">
                <span className="story__category">BUSINESS</span>
                <span className="story__ellipsis">🞄</span>
                <span className="story__date">20 Sep 2022</span>
                <div className="tag tag--success">Published</div>
            </div>
            <div className="story__buttons">
                <button className="button button--primary story__view">View</button>
                <button className="button button--secondary button--on-dark">
                    <img src={menuIcon.src}></img>
                </button>
            </div>
        </div>
    )
}

function Article() {
    return (
        <div className="article">
            <img className="article__image" src={articleImage1.src} alt="" />
            <div className="article__details">
                <span className="article__category">BUSINESS</span>
                <span className="article__ellipsis">🞄</span>
                <span className="article__date">20 Sep 2022</span>
                <img src="" alt="" className="article__pfp" />
                <span className="article__author">Maria Doe</span>
            </div>
            <div>
                <div className="article__heading">
                    <span className="article__title">
                        7 Rules of Effective Branding
                    </span>
                    <div className="tag tag--primary">Created</div>
                </div>
                <span className="article__subtitle">
                    Why Branding matters for your Business
                </span>
            </div>
            <div className="article__tags">
                <div className="tag tag--secondary">Branding</div>
                <div className="tag tag--secondary">Communication</div>
                <div className="tag tag--secondary">Branding</div>
            </div>
            <div className="article__buttons">
                <button className="button button--primary story__view">View</button>
                <button className="button button--secondary">
                    <img src={menuIcon.src}></img>
                </button>
            </div>
        </div>
    )
}

function Advert() {
    return (
        <div className="advert">
            <img src={advertImage1.src} alt="" className="advert__image" />
            <div className="advert__content">
                <span className="advert__title">Build your business</span>
                <span className="advert__description">
                    Shopify has all the tools you need to start, sell, market, and
                    manage.
                </span>
                <div className="advert__buttons">
                    <button className="button button--primary advert__visit">
                        Visit
                    </button>
                    <button className="button button--secondary">
                        <img src={menuIcon.src}></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

function Project() {
    return (
        <div className="project">
            <div className="project__icon">
                <img src={articleIcon.src} alt="" />
            </div>
            <div className="project__content">
                <span className="project__title">Articles</span>
                <span className="project__description">4,950 New Updates</span>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main>
            <Project />
            <Article />
            <Story />
            <Advert />
        </main>
    )
}
