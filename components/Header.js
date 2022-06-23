import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavLink({ to, children }) {
  return (
    <Link href={to}>
      <a className={`mx-2`}>{children}</a>
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  const router = useRouter();

  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#040714] transform ${
        open ? '-translate-x-0' : '-translate-x-full px-4'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className='header' />
      <div className='flex flex-col px-10'>
        <Link href='/#top'>
          <a className='text-xl font-light my-3' onClick={() => setOpen(!open)}>
            Jobs
          </a>
        </Link>
        <Link href='/#top'>
          <a className='text-xl font-light my-3'>Company Review</a>
        </Link>
        <Link href='/#top'>
          <a className='text-xl font-light my-3'>Find Salaries</a>
        </Link>
        <Link href='/#top'>
          <a className='text-xl font-light my-3'>Company Review</a>
        </Link>
        <Link href='/#top' className='!bg-white text-white py-5 px-4'>
          <a className='text-xl font-light my-3'>Post Job</a>
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className='header'>
      <MobileNav open={open} setOpen={setOpen} />

      <img
        src={'/images/logo.svg'}
        alt=''
        className='flex items-center cursor-pointer'
        onClick={() => router.push('/')}
      />

      <div className='w-9/12 md:w-full flex items-center justify-end md:justify-start'>
        <div
          className='z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden'
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#36536B] rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-[#36536B] rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-[#36536B] rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className='hidden md:flex md:ml-5 text-base text-[#36536B] font-bold text-[15px] space-x-5'>
          <NavLink to='/#top'>Pricing</NavLink>
          <NavLink to='/#top'>About</NavLink>
          <NavLink to='/#top'>Contact</NavLink>
        </div>

        <div className='hidden ml-auto md:block'>
          <button className='bg-[#BA4270] text-white py-3 px-5 font-bold text-[15px] rounded-full shadow-lg'>
            Schedule a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
