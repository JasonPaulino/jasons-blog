import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
            <h1 className='text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                <Link 
                  className='text-white/90 no-underline hover:text-white' 
                  href='/'
                >
                  Jason Paulino
                </Link>
            </h1>
            <div className='sm: mt-3 flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl'>
              <Link 
                className='text-white/90 hover:text-white' 
                href='https://github.com/JasonPaulino' 
                target='_blank'
              >
                <FaGithub />
              </Link>
              <Link 
                className='text-white/90 hover:text-white' 
                href='https://www.linkedin.com/in/jason-paulino-1a2a76180/' 
                target='_blank'
              >
                <FaLinkedin />
              </Link>
            </div>
        </div>
    </nav>
  )
}