import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import Link from 'next/link'
import NavBtn from './NavBtn'

export default function Navbar() {
  return (
  <div className="navbar bg-base-100 shadow-sm border-b border-gray-900">
    <div className="navbar-start sm:ml-10">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li className='font-bold'><Link href={"/"}>Workouts</Link></li>
          <li className='font-bold'><Link href={"/myplan/"}>My Plan</Link></li>
        </ul>
      </div>
      <div className="">
        <Image
          src={Logo}
          alt='Logo'
          width={28}
          height={28}
          className='min-w-7'
        />
      </div>
      <h1 className="font-oswald text-2xl font-bold ml-3">FITLOG</h1>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
          <li className='font-bold'><Link href={"/"}>Workouts</Link></li>
          <li className='font-bold'><Link href={"/myplan/"}>My Plan</Link></li>
      </ul>
    </div>
    <NavBtn />
  </div>
  )
}
