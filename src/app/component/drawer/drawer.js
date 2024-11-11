import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
 import './drawer.css'
 export  const contentStyle1 = {
  fill: 'white',  // Set background image with no-repeat, centered, and cover the container

};

const Drawer1 = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const contentStyle = {
    margin: 0,
    height: '100vh',  // Height set to 70% of the viewport height
    width: '100vw',  // Full viewport width
    lineHeight: '50px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.137)',  // Set background image with no-repeat, centered, and cover the container
    position: 'relative',  // Allow for positioning overlay if needed
    backdropFilter: 'blur(8px)',  // Apply blur to the background
  };
  const contentStyle1 = {
  
    color: 'white'  // Apply white color to the text
  };
  
  return (
    <>
    <button className='flex px-1 rounded-full  py-1 justify-center items-center' onClick={showDrawer}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify">
  <line x1="21" y1="10" x2="3" y2="10"/>
  <line x1="21" y1="6" x2="3" y2="6"/>
  <line x1="21" y1="14" x2="3" y2="14"/>
  <line x1="21" y1="18" x2="3" y2="18"/>
</svg>

    </button>
      <Drawer  title=""  style={contentStyle}  onClose={onClose} open={open}>

<div className=' h-full'>


    
     <ul className='text-white'>
        <li className=' border-black py-3 my-2 mx-3  rounded-lg text-[30px]'>Home</li>
        <li className=' border-black py-3 my-2 mx-3  rounded-lg text-[30px]'>Aboute</li>

        
        <li className=' border-black py-3 my-2 mx-3  rounded-lg text-[30px]'>Playlists</li>
        <li className=' border-black py-3 my-2 mx-3  rounded-lg text-[30px]'>Blog</li>
        <li className=' border-black py-3 my-2 mx-3  rounded-lg text-[30px]'>Shop</li>
        

        

     </ul>
</div>
      </Drawer>
    </>
  );
};

export default Drawer1;