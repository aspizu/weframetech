import {useRouter} from "next/router"
import {useEffect} from "react"

export default function Page() {
    const router = useRouter()
    useEffect(() => {
        // navigate to /Content automatically because we don't have any other pages yet.
        router.replace("/Content")
    })
    return null
}
