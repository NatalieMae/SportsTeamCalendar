import * as React from 'react';
import BaseballImage from '../assets/images/baseball-unsplash.jpg'

export default function Home() {

    return(
        <div className='baseball-image'>
            <img src={BaseballImage}  alt= 'little league baseball'/> 
            {/* BaseballImage source: https://unsplash.com/photos/Ql2n3JsUpww */}
        </div>

    )


}