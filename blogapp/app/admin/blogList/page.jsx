'use client'; // Indicando que este código se ejecuta en el lado del cliente
import BlogTableItem from '@/Components/AdminComponent/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = () => { // Nombres de componentes en mayúscula según convenciones de React

    const [blogs, setBlogs] = useState([]); // Estado para almacenar la lista de blogs

    // Función para obtener los blogs desde la API
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blog'); // Llamada a la API
            setBlogs(response.data.blogs); // Actualiza el estado con los datos obtenidos
        } catch (error) {
            console.error("Error fetching blogs:", error); // Manejo de errores
        }
    };

    // Hook useEffect para cargar los blogs al montar el componente
    useEffect(() => {
        fetchBlogs();
    }, []); // [] asegura que el efecto se ejecute solo una vez al montar el componente

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>Todos los blogs</h1>
            <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-3'>
                                Nombre del autor
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Título del Blog
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Fecha del Blog
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => (
                            <BlogTableItem 
                                key={index} 
                                mongoId={item._id} 
                                title={item.title} 
                                author={item.author} 
                                authorImg={item.authorImg} 
                                date={item.date} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Page;

