import Link from "next/link"
import { ActiveLink } from "@/components";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
    {path:'/about', text:'About'},
    {path:'/pricing', text:'Pricing'},
    {path:'/contact', text:'Contact'}
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            
            <Link href="/" className="flex item-center">
                <HomeIcon className="mr-2 mt-1" />
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>
        {
            navItems.map( navItem => (
                <ActiveLink key={navItem.path} {...navItem}/>
            ))
        }

        </nav>
    )
}