import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="py-5 border-t border-gray-800/85">

      <div className="mx-10 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={'/'} className="flex items-center">
            <Image
              src={Logo}
              alt='Logo'
              width={24}
              height={24}
              className='min-w-6'
            />
            <h1 className="font-oswald text-md font-bold ml-3">FITLOG</h1>
          </Link>
        </div>

        <div className="">
          <p className='text-gray-400 text-sm'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>

      </div>
    </div>
  )
}
