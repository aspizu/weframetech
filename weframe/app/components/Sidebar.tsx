import {ComponentPropsWithoutRef} from "react"
import component from "../bloom"

import analyticsIcon from "../assets/icons/analytics.svg"
import contentIcon from "../assets/icons/content.svg"
import devicesIcon from "../assets/icons/devices.svg"
import homeIcon from "../assets/icons/home.svg"
import mediaIcon from "../assets/icons/media.svg"
import notificationIcon from "../assets/icons/notification.svg"
import settingsIcon from "../assets/icons/settings.svg"
import teamIcon from "../assets/icons/team.svg"
import userIcon from "../assets/icons/user.svg"

export interface SidebarProps extends ComponentPropsWithoutRef<"div"> {}

export function Sidebar({
    className,
    children,

    ...props
}: SidebarProps) {
    const $ = component(className, "Sidebar")
    return (
        <div className={$()} {...props}>
            <button className={$("Page")}>
                <img src={homeIcon.src} />
                Dashboard
            </button>
            <button className={$("Page", "active")}>
                <img src={contentIcon.src} />
                Content
            </button>
            <button className={$("Page")}>
                <img src={teamIcon.src} />
                Team
            </button>
            <button className={$("Page")}>
                <img src={userIcon.src} />
                User
            </button>
            <button className={$("Page")}>
                <img src={devicesIcon.src} />
                App/Web
            </button>
            <button className={$("Page")}>
                <img src={analyticsIcon.src} />
                Analytics
            </button>
            <button className={$("Page")}>
                <img src={mediaIcon.src} />
                Media
            </button>
            <button className={$("Page")}>
                <img src={notificationIcon.src} />
                Notification
            </button>
            <button className={$("Page")}>
                <img src={settingsIcon.src} />
                Settings
            </button>
        </div>
    )
}
