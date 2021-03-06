import React from 'react'
import image from '../images/flame.svg'
import { loader, ring } from '../styles/modules/loader.module.css'

const AlbumLoader = () => {
    return (
        <div className={loader} title="Loading. Please wait">
            <div className={ring}><div></div></div>
            <img src={image} alt="Loading. Please wait" />
        </div>
    );
};
  
  export default AlbumLoader