import {ComponentProps} from "react"
import component from "../app/bloom"
import {Sidebar} from "../components/Sidebar"

export default function Layout({className, children, ...props}: ComponentProps<"div">) {
    const $ = component(className, "Layout")
    return (
        <div className={$()} {...props}>
            <Sidebar />
            {children}
        </div>
    )
}
