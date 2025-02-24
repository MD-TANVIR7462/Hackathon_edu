import { CloudCog } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Asteroid = () => {
    const [data,setData]= useState()
    const [width,setWidth]= useState(500)


  useEffect(() => {
    const fethcData = async () => {
      try {
        const res = await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=og5B8DZSptk92wQhQxYH5qsdNjG5ZOk1FhElYWFZ");
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
            <div>
                {/* {
                    data.map(single=>console.log(single))
                } */}
            </div>
        </div>

    );
};

export default Asteroid;