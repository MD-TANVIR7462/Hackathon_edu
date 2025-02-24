import React from 'react';

const Form = () => {
    return (
        <div className="max-w-xl mx-auto mt-40">
            <h3 className='text-center font-bold text-2xl my-3'>Customize Your APOD Content</h3>
            <form className="flex flex-col gap-y-3">
            <input type="text" placeholder="Enter Your Width" className="py-1 px-3 text-black outline-none bg-gray-300" value="Enter Width"/>
            <input type="text" placeholder="Enter Your Height" className="py-1 px-3 text-black outline-none bg-gray-300"/>

            <a href="#_" className=" rounded px-5 py-2.5 overflow-hidden group bg-blue-800 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">Submit</span>
</a>     

            </form>
        </div>
    );
};

export default Form;