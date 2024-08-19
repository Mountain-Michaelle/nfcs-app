import React from 'react';
import '../../Assets/scss/Blog.scss';
import recommended from '../../Assets/data/recommended';
import Image from 'next/image';
import Link from 'next/Link';


const Blog = () => {

    const handleTextCut = (text, limit) => {
        const word = text.split(" ")
        const truncateWords = word.slice(0, limit)
        let truncatedwords = truncateWords.join(" ")
        if (word.length > limit){
            truncatedwords += '...'
        }
        return truncatedwords;
    }

    return(
        <div className='blog'>
            
            <div className='side-bar'>

            </div>

            <div className='blog-bar'>
                <h2> All Blogs</h2>
                
                {
                    recommended.map((blog, index) => {
                        return(
                            <div key={index} className='blog-cards'>
                                <div className='img-cd'>
                                  <Image src={blog.img} alt='image' />
                                   
                                </div>
                                
                                <div className='content'>
                                    <h3>{blog.name}</h3>

                                    <p>{handleTextCut(blog.description, 20)}</p>
                                </div>
                                <Link href="#" className='img-cv'></Link> 
                                <Link href="#" >Read Article</Link>
                            </div>  
                        )
                    })
                }
               
            </div>
        </div>
    )
}

export default Blog;