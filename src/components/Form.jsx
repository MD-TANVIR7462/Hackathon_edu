import { CloudCog } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Form = () => {
    const [data,setData]= useState()
    const [width,setWidth]= useState(500)


  useEffect(() => {
    const fethcData = async () => {
      try {
        const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=og5B8DZSptk92wQhQxYH5qsdNjG5ZOk1FhElYWFZ");
        const response = await res.json();
        console.log(data);
        setData(response)
      } catch (err) {
        console.log(err);
      }
    };
    fethcData();
  }, []);

const handleImageChange = (e)=>{
    e.preventDefault()
    const formValue = e.target.value
    setWidth(formValue)
    
    
}
    return (
        <div className="max-w-xl mx-auto my-12">
        <div className="w-full my-11 rounded-xl"><img style={{width:`${width}px`}} src={data?.url} alt="" /></div>
            <h3 className='text-center font-bold text-2xl my-3'>Customize Your APOD Content</h3>
            <form className="flex flex-col gap-y-3">
            <input type="number" placeholder="Enter Your Width" name="width" onChange={handleImageChange}  className="py-1 px-3 text-black outline-none bg-gray-300"/>

            <button type="submit" className="w-full text-center rounded px-5 py-2.5 overflow-hidden group bg-blue-800 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">Submit</span>
</button>     

            </form>
        </div>
    );
};

export default Form;