import component from "./bloom"
import {Sidebar} from "./components/Sidebar"
import {Content} from "./pages/Content"

export default function Home() {
    const $ = component(undefined, "Home")
    return (
        <div className={$()}>
            <Sidebar />
            <Content />
        </div>
    )
}
