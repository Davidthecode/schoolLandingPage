export default function Navbar() {
    return (
        <nav className="flex items-center bg-[#5F96B4] px-40 py-4 h-12">
            <ul className="text-white flex items-center space-x-40 text-xs">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Governance</li>
                <li className="cursor-pointer">Admissions</li>
                <li className="cursor-pointer">Academics</li>
                <li className="cursor-pointer">Faculty&Research</li>
                <li className="cursor-pointer">Campus Life</li>
            </ul>
        </nav>
    )
} 