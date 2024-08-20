import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';


const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image
                    src={assets.logo}
                    width={180}
                    height={60}
                    alt='Logo'
                    className='w-[130px] sm:w-auto'
                />
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black' style={{ boxShadow: '-7px 7px 0px #000000' }}>
                    Get Started <Image src={assets.arrow} alt="Arrow icon" />
                </button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='mt-10 max-w-[740px] mx-auto text-xs sm:text-base'>
                    Check out our latest blog posts, where we serve up the freshest content with a side of insight and a dash of inspiration. Dont miss out!
                </p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black' style={{ boxShadow: '-7px 7px 0px #000000' }} action="">
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='pl-4 outline-none flex-grow'
                    />
                    <button
                        type="submit"
                        className='border border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
