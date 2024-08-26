'use client'; // Esto indica que este código se ejecutará en el cliente (navegador).
import { assets } from '@/Assets/assets'; 
import Footer from '@/Components/Footer'; 
import Image from 'next/image'; 
import Link from 'next/link'; 
import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

const Page = ({ params }) => {
    const [data, setData] = useState(null); // Hook de estado para almacenar los datos del blog.

    // Función para obtener los datos del blog desde la API usando axios.
    const fetchBlogData = async () => {
        try {
            const response = await axios.get('/api/blog', { // Corrige un error de sintaxis.
                params: {
                    id: params.id // Pasa el id del blog como parámetro a la API.
                }
            });
            setData(response.data); // Actualiza el estado con los datos obtenidos.
        } catch (error) {
            console.error("Error fetching blog data:", error); // Manejo de errores.
        }
    };

    // useEffect se ejecuta una vez cuando el componente se monta para obtener los datos del blog.
    useEffect(() => {
        fetchBlogData();
    }, []); // Dependencia vacía significa que se ejecuta solo una vez al montar.

    return (
        data ? ( // Renderiza el contenido solo si hay datos disponibles.
            <>
                <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                    <div className="flex justify-between items-center">
                        <Link href='/'>
                            <Image src={assets.logo_gris} width={180} alt='Logo gris' className='w-[130px] sm:w-auto' />
                        </Link>
                        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
                            Comenzar <Image src={assets.arrow} alt='Flecha' />
                        </button>
                    </div>
                    <div className='text-center my-24'>
                        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='Autor' />
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                </div>
                <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                    <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt='' />
                    <h1 className='my-8 text-[26px] font-semibold'>Introducción</h1>
                    <p>{data.description}</p>
                    
                    <h3 className='my-5 text-[18px] font-semibold'>Paso 1: Autorreflexión y Establecimiento de Metas</h3>
                    <p className='my-3'>Antes de poder gestionar tu estilo de vida, debes tener una comprensión clara de lo que quieres lograr. Comienza reflexionando sobre tus valores, aspiraciones y metas a largo plazo.</p>
                    
                    <h3 className='my-5 text-[18px] font-semibold'>Conclusión</h3>
                    <p className='my-3'>Gestionar tu estilo de vida comienza con un profundo entendimiento de tus deseos y metas...</p>
                    <div className='my-24'>
                        <p className='text-black font-semibold my-4'>Comparte este artículo en redes sociales</p>
                        <div className='flex'>
                            <Image src={assets.facebook_icon} width={50} alt='' />
                            <Image src={assets.twitter_icon} width={50} alt='' />
                            <Image src={assets.googleplus_icon} width={50} alt='' />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        ) : (
            <></> // Renderiza nada si no hay datos.
        )
    );
};

export default Page;


