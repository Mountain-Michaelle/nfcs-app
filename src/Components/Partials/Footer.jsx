import React from 'react';
import Link from 'next/link';
import '../../Assets/scss/Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Footer = () => {
    return(
        <div className='footer'>
            <div className='waves'>
                <div className='wave' id='wave1'>
                </div>

                <div className='wave' id='wave2'>
                </div>

                <div className='wave' id='wave3'>
                </div>

                <div className='wave' id='wave4'>
                </div>
            </div>

            <div className='main'>
                <div className='footer-links'>
                    <Link href="#">Learn More</Link>
                    <Link href="#">Get Involved</Link>
                    <Link href="#">Get Help</Link>
                    <Link href="#">Learn More</Link>
                </div>
                 <div className='socail-icon'>
                    <span><FacebookIcon /></span>
                    <span><XIcon /></span>
                    <span><WhatsAppIcon /></span>
                </div> 
                
                <div className='sub-footer'>
                    <p>@2023 NFCS Excos/Officials St. Augustine Catholic Chaplaincy IMT Enugu Nigeria | All Rights Reserved </p>
                </div>
            </div>
                
           
        
    </div>
    
    )
}

export default Footer;