'use client';
import SubsTableItem from '@/Components/AdminComponent/SubsTableItem';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [emails, setEmails] = useState([]);

    // Función para obtener las subscripciones desde el servidor
    const fetchEmails = async () => {
        try {
            const response = await axios.get('/api/email');
            setEmails(response.data.emails);
        } catch (error) {
            toast.error("Error al obtener los emails");
        }
    };

    useEffect(() => {
        fetchEmails(); // Llama a la función cuando se carga el componente
    }, []);

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>Todas las subscripciones</h1>
            <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Email de Subscripción
                            </th>
                            <th scope='col' className='hidden sm:block px-6 py-3'>
                                Fecha
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {emails.map((item, index) => (
                            <SubsTableItem key={index} mongoId={item._id} deleteEmail={deleteEmail} email={item.email} date={item.date} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;

