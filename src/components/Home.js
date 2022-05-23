import * as React from 'react';
import BaseballImage from '../assets/images/baseball-unsplash.jpg'
// import Calendarview from './Calendarview';
import UserSignIn from './userSignIn';

export default function Home() {

    return(
        <div className='baseball-image'>
            <UserSignIn />
              {/* <Calendarview /> */}
            <img src={BaseballImage}  alt= 'little league baseball'/> 
            {/* BaseballImage source: https://unsplash.com/photos/Ql2n3JsUpww */}
        </div>
    )


}