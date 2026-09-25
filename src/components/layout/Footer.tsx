import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'

export default function Footer() {
  return (
    <div className="py-5 border-t border-gray-800/85">

      <div className="mx-10 flex justify-between items-center">
        <div className="flex items-center">
          <div className="">
            <Image
              src={Logo}
              alt='Logo'
              width={24}
              height={24}
              className='min-w-6'
            />
          </div>
          <h1 className="font-oswald text-md font-bold ml-3">FITLOG</h1>
        </div>

        <div className="">
          <p className='text-gray-400 text-sm'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>

      </div>
    </div>
  )
}
