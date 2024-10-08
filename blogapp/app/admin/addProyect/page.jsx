'use client'
import { assets } from '@/Assets/assets';  
import axios from 'axios';  
import Image from 'next/image';  
import React, { useState } from 'react';  
import { toast } from 'react-toastify';  

const Page = () => {
    // Estado para almacenar la imagen seleccionada
    const [image, setImage] = useState(null);
    
    // Estado para almacenar los datos del formulario
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png"
    });

    // Maneja el cambio de valores en los campos del formulario
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }

    // Maneja el envío del formulario
    const onSubmitHandler = async (e) => {
        e.preventDefault();  // Previene el comportamiento predeterminado del formulario
        const formData = new FormData();  // Crea un objeto FormData para enviar archivos
        // Añade todos los campos del formulario a formData
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);
        
        // Realiza una solicitud POST a la API para crear un nuevo blog
        const response = await axios.post('/api/blog', formData);
        if (response.data.success) {
            toast.success(response.data.msg);  // Muestra un mensaje de éxito
            // Reinicia los campos del formulario y la imagen seleccionada
            setImage(null);
            setData({
                title: "",
                description: "",
                category: "Startup",
                author: "Alex Bennett",
                authorImg: "/author_img.png"
            });
        } else {
            toast.error("Error");  // Muestra un mensaje de error
        }
    }

    // Maneja la selección de una nueva imagen
    const onImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
            <p>Subir miniatura</p>
            <label htmlFor="image">
                <Image
                    className='mt-4'
                    src={image ? URL.createObjectURL(image) : assets.upload_area}  // Muestra la imagen seleccionada o un área de carga por defecto
                    alt='Miniatura del blog'
                    width={140}
                    height={70}
                />
            </label>
            <input
                onChange={onImageChange}
                type="file"
                id='image'
                hidden
                required
            />
            <p className='text-xl mt-4'>Título del Blog</p>
            <input
                name='title'
                onChange={onChangeHandler}
                value={data.title}
                className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
                type="text"
                placeholder='Escribe aquí'
                required
            />
            <p className='text-xl mt-4'>Descripción del Blog</p>
            <textarea
                name='description'
                onChange={onChangeHandler}
                value={data.description}
                className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
                placeholder='Escribe contenido aquí'
                rows={6}
                required
            />
            <p className='text-xl mt-4'>Categoría del Blog</p>
            <select
                name="category"
                onChange={onChangeHandler}
                value={data.category}
                className='mt-4 px-4 py-3 border'
            >
                <option value="Startup">Startup</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Estilo de vida">Estilo de vida</option>
            </select>
            <br />
            <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>
                Añadir
            </button>
        </form>
    );
}

export default Page;


