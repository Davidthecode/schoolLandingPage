import leadcityOne from '../../../public/leadcity1.png'
import leadcityTwo from '../../../public/leadcity2.png'
import leadcityThree from '../../../public/leadcity3.png'
import leadcityFour from '../../../public/leadcity4.png'
import leadcityFive from '../../../public/leadcity5.png'
import leadcitySux from '../../../public/leadcity6.png'
import Image from 'next/image'

export default function YoutubeVideo() {
    const images = [leadcityOne, leadcityTwo, leadcityThree, leadcityFour, leadcityFive, leadcitySux];
    return (
        <div className="flex items-center pb-6 bg-[#F8F8F8] pt-12">
        {images.map((image, index) => (
          <div key={index} className="mr-4">
            <Image src={image} alt={`LeadCity Image ${index + 1}`} width={600} height={600} />
          </div>
        ))}
      </div>
    )
}