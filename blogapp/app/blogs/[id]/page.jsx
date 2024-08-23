'use client';
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        const foundData = blog_data.find(blog => Number(params.id) === blog.id);
        if (foundData) {
            setData(foundData);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, [params.id]);

    return (
        data ? <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className="flex justify-between items-center">
                    <Image src={assets.logo_gris} width={180} alt='Logo gris' className='w-[130px] sm:w-auto' />
                    <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
                        Comenzar <Image src={assets.arrow} alt='Flecha' />
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt='Autor' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image  className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
                <h1 className='my-8 text-[26px] font-semibold'>Introduccion</h1>
                <p>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Paso 1: Autorreflexión y Establecimiento de Metas.</h3>
                <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que quieres lograr. Comienza reflexionando sobre tus valores, aspiraciones y metas a largo plazo..</p>
                <h3 className='my-5 text-[18px] font-semibold'>Paso 2: Autorreflexión y Establecimiento de Metas.</h3>
                <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que quieres lograr. Comienza reflexionando sobre tus valores, aspiraciones y metas a largo plazo..</p>
                <h3 className='my-5 text-[18px] font-semibold'>Paso 3: Autorreflexión y Establecimiento de Metas.</h3>
                <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que quieres lograr. Comienza reflexionando sobre tus valores, aspiraciones y metas a largo plazo..</p>
                <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
                <p className='my-3'>Gestionar tu estilo de vida comienza con un profundo entendimiento de tus deseos y metas. 
                    Al tomarte el tiempo para reflexionar sobre lo que realmente valoras y aspiras a lograr, estarás en una mejor 
                    posición para tomar decisiones que te acerquen a una vida plena y satisfactoria. Recuerda que cada paso que das, 
                    guiado por tus valores, es un avance hacia el logro de tus objetivos a largo plazo. La claridad en tus metas es 
                    la clave para un estilo de vida equilibrado y exitoso.</p>
                    <div className='my-24'>
                        <p className='text-black font font-semibold my-4'>Comparte este articulo en redes sociales</p>
                        <div className='flex'>
                            <Image src={assets.facebook_icon} width={50} alt=''/>
                            <Image src={assets.twitter_icon} width={50} alt=''/>
                            <Image src={assets.googleplus_icon} width={50} alt=''/>
                        </div>
                    </div>
            </div>
            <Footer/>                                              

        </>:<></>
    )
};

export default Page;

