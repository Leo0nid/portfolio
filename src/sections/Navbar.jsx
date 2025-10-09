import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  function Navigation() {
    return (
      <ul className='nav-ul'>
        <li className='nav-li'><a className='nav-link' href="/">Главная</a></li>
        <li className='nav-li'><a className='nav-link' href="/about">Обо мне</a></li>
        <li className='nav-li'><a className='nav-link' href="/work">Работа</a></li>
        <li className='nav-li'><a className='nav-link' href="/contacts">Контакты</a></li>
      </ul>
    )
  }

  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      <div className='mx-auto c-space max-w-7xl'>
        <div className='flex items-center justify-between py-2 sm:py-0'>
          <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>Leonid</a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'
            onClick={() => setIsOpen((v) => !v)}
          >
            <img className='w-6 h-6' src={isOpen ? 'src/assets/close.svg' : 'src/assets/menu.svg'} alt="" />
          </button>

          <nav className='hidden sm:flex'>
            <Navigation />
          </nav>
        </div>
        
          {isOpen && (
            <motion.nav
              key="mobile-nav"
              className='block overflow-hidden text-center sm:hidden pb-5'
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              style={{ maxHeight: '100vh' }}
            >
              <Navigation />
            </motion.nav>
          )}
   
      </div>
    </div>
  )
}

export default Navbar
