import Image from "next/image"
import Leadcity from '../../../public/leadcity.png'
import { RiSearchLine } from 'react-icons/ri'

export default function Navbar() {
    return (
        <nav className="flex items-center bg-gray-100 px-40 py-4">
            <div className="bg-gray-100">
                <Image src={Leadcity} alt="image" width={50} height={50} />
            </div>
            <div className="mx-20">
                <ul className="flex space-x-12 text-xs font-semibold">
                    <li className="cursor-pointer">Stident's Noticeboard</li>
                    <li className="bg-black w-[1.5px] h-4"></li>
                    <li className="cursor-pointer">News</li>
                    <li className="bg-black w-[1.5px] h-4"></li>
                    <li className="cursor-pointer">Events</li>
                    <li className="bg-black w-[1.5px] h-4"></li>
                    <li className="cursor-pointer">Apply now</li>
                    <li className="bg-black w-[1.5px] h-4"></li>
                    <li className="cursor-pointer">Alumini</li>
                    <li className="bg-black w-[1.5px] h-4"></li>
                    <li className="cursor-pointer">Contacts</li>
                </ul>
            </div>
            <div className="flex items-center ml-auto bg-white px-4 py-1 rounded-md w-[10%]">
                <div className="mr-2">
                    <RiSearchLine />
                </div>
                <div className="w-full">
                    <input
                        className="w-full outline-none text-xs"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
            </div>
        </nav>
    )
} 