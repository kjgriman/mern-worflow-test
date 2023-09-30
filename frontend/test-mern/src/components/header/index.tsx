import * as React from "react"
import { typeProps } from "./interfaces"
import SearchSVG from "../../assets/searchSVG"

export default function Header(props: typeProps) {
    const {
        srcLogoImg,
        titleLogo,
        navClassTW
    } = props
    
    return (
        <nav className={` ${navClassTW ? navClassTW : ''} bg-white border-gray-200 dark:bg-gray-900`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center">
                    <img src={srcLogoImg} className="h-8 mr-3" alt="vkym - valery kerbin yulexis mathias" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{titleLogo ? titleLogo : 'VKYM' }</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                        <SearchSVG/>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <SearchSVG/>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>
            </div>
        </nav>

    )
}