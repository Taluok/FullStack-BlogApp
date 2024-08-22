"use client";
import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

    const [menu,setMenu] = useState("Todo")
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
                <button onClick={()=>setMenu('Todo')} className={menu==="Todo"?'bg-black text-white py-1 px-4 rounded-sm':""}>Todo</button>
                <button onClick={()=>setMenu('Tecnología')} className={menu==="Tecnología"?'bg-black text-white py-1 px-4 rounded-sm':""}>Tecnología</button>
                <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
                <button onClick={()=>setMenu('Estilo de vida')} className={menu==="Estilo de vida"?'bg-black text-white py-1 px-4 rounded-sm':""}>Estilo de vida</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 x1:mx-24'>
                {blog_data.filter((item)=> menu==="Todo"?true:item.category===menu).map((item, index)=>{
                    return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
                })}
            </div>
        </div>
    )
}

export default BlogList
