import { Icon } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { ComponentProps } from "react"
import Link from "next/link"

type AppSidebarProps = ComponentProps<typeof Sidebar>

export type { AppSidebarProps }

export const AppSidebar = ({...props}: AppSidebarProps) => { 
    return (
        <Sidebar collapsible="icon" {...props} >
            <SidebarHeader className="py-4"> 
                <Link href="/" >
                    <p>LOGO</p>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <nav>
                    <ul>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </SidebarContent>
            <SidebarFooter>
                <p>© 2024 Codelab</p>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    );
}