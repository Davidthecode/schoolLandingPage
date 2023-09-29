import leadcity from '../../../public/leadcity.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#DAE5EB] text-black py-10">
            <div className="flex justify-center smallScreen:flex-col">
                <ul className="text-center mr-20 smallScreen:mr-0 space-y-4 ">
                    <li className='font-semibold'>Security & Brand</li>
                    <li>Report copyright Infringement</li>
                    <li>Report security issue</li>
                    <li>Trademark Notice</li>
                </ul>
                <ul className="text-center mr-20 smallScreen:mr-0 space-y-4 smallScreen:mt-4">
                    <li className='font-semibold'>Website</li>
                    <li>Accessibility</li>
                    <li>Digital Accessibility</li>
                    <li>Privacy statement</li>
                </ul>
                <ul className="text-center space-y-4 smallScreen:mt-4">
                    <li className='font-semibold'>Get in Touch</li>
                    <li>Contact Leadcity</li>
                    <li>Maps & Directions</li>
                    <li>Jobs</li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center pt-12'>
                <div className='text-center'>
                    <h1 className='text-4xl'>Leadcity</h1>
                    <p className='pb-2 text-lg'>University</p>
                </div>
                <div>
                    <Image src={leadcity} alt='leadcity' width={70} height={70} />
                </div>
            </div>
            <div className='flex justify-between items-center px-20 pt-4 extrasmallTablet:flex-col extrasmallTablet:space-y-4 smallScreen:flex-col smallScreen:my-4'>
                <div>
                    <p>© 2023 The President and Fellows of Leadcity university</p>
                </div>
                <div>
                    <ul className='flex space-x-6'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}