"use client"
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import navItem from '../../Assets/data/navItem';
import Link from 'next/link';
import '../../Assets/scss/Navbar.scss';
import NavImg from '../../Assets/Images/world.png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const getStorageTheme = () => {
        if(typeof window != 'undefined'){
            return localStorage.getItem('theme') || 'light-theme';
        }
        return 'light-theme'
    }

    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(getStorageTheme());

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme)
    },[theme])

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleTheme = () => {
      setTheme((prevTheme) => ((prevTheme) === 'light-theme' ? 'dark-theme' : 'light-theme'));
    }
    return (
        <div className='navbar'>
            <div className='nav-left'>
                <div className='circle'>
                    <Image src={NavImg} alt=''/>
                    <strong className='nm'>NFCS</strong>   
                </div> 
                <div className='name'>
                        <Link href="/">
                            St. Augustine Catholic <br/> Chaplaincy IMT, Enugu
                        </Link>
                </div>

                <div className='mode' style={theme === 'light-theme' ?  {color: 'white'}: {color: '#ffcd7f'}}>
                    {
                        theme === 'light-theme' ? 
                        <button onClick={toggleTheme}> <LightModeIcon /> </button>
                        :
                        <button onClick={toggleTheme}> <DarkModeIcon />  </button>
                    } 

                </div> 
                
                <div className='menu'>
                    <button onClick={handleDropdownToggle} className={isOpen ? 'btn icon-border': 'btn'}>
                        <MenuIcon />
                    </button>
                    
                </div>
            </div>

            <div className='nav-right'>
                {
                    navItem.map(nav => {
                        return(
                            <Link href={nav.url}>
                                {nav.name}
                            </Link>
                        )
                    })
                }
            </div>

            <div class={ isOpen ? 'drop-down' : 'inactive'}>
            {
                    navItem.map(nav => {
                        return(
                            <Link href='#'>
                                {nav.name}
                            </Link>
                        )
                    })
            }
            </div>
        </div>
    )
}

export default Navbar;