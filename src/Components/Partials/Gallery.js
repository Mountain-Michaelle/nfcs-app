"use client";
import React, {useState, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@mui/material';
import '../../Assets/scss/Gallery.scss';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EastIcon from '@mui/icons-material/East';
import TypewriterComponent from '../Partials/TypeWriterComp';
import TypeWriterComp from '../Partials/TypeWriterComp';

function Gallery({background, windowWidth, pixel, trend}) {

    const swiperRef = useRef(null);

    const handleSlideChange = () => {

        if(swiperRef.current && swiperRef.current.swiper){
        const activeSlide = swiperRef.current?.swiper?.slides[swiperRef.current.activeIndex]
        const textElements = activeSlide.querySelectorAll('.btn-btn');

        if(activeSlide){
            textElements.forEach((element) => {
            element.style.animation = 'none';
            element.offsetHeight;
            element.style.animation = '';
            element.style.background = 'red';

        }) 
        }


        }
    }

    const handleTextCut = (text, limit) => {
        const word = text.split(" ")
        const truncateWords = word.slice(0, limit)
        let truncatedwords = truncateWords.join(" ")
        if (word.length > limit){
            truncatedwords += '...'
        }
        return truncatedwords;
    }

  return (
    <div className='slider-container'>
        <Swiper
        onSlideChange={handleSlideChange}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={windowWidth >= 900 ? pixel : 1}
        spaceBetween={50}
        speed={"1500"}
        autoplay={
            {
                delay: '9900',
                disableOnInteraction: false,
                
            }
        }
        
        coverflowEffect={
            {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            centeredSlides: true
            }
        }
        pagination={{el: '.swiper-pagination', clickable: true}}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
                {
                    trend.map((post, index) => {
                        return(
                            <>
                                <SwiperSlide style={{ height: '100%'}} key={index}> 
                                    <div className='cover-banner'>
                                        <div className='btnn'>
                                            <div className='txt'>
                                                <h2 className='slide-text' style={background}><TypeWriterComp text={post.name} /></h2>

                                                <article>{handleTextCut(post.description, 20)}</article>
                                            </div>
                                            
                                            <div className='read-more'>
                                                 <span className='btn-btn'> <KeyboardDoubleArrowRightIcon /> Read More <EastIcon sx={{marginLeft: '1rem', color: 'yellow'}} /> </span>
                                            </div>
                                        </div>
                                    </div> 
                                    <Image src={post.img} alt="" style={{ objectFit:'cover'}} width="100%" height='100%' />
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            <div className='slider-controller'>
                <div className="swiper-button-prev slider-arrow" style={{color:'#ffd6002e'}}>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                
                <div className="swiper-button-next slider-arrow" style={{color:'#ffd6002e'}}>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className='swiper-pagination'></div>
            </div>

        </Swiper>
    </div>
  )
}

export default Gallery