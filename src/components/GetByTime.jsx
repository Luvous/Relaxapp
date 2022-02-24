import React from 'react';
import image_earlymorning from '../images/time_00_earlymorning.jpg';
import image_midday from '../images/time_01_midday.jpg';
import image_evening from '../images/time_02_evening.jpg';
import image_night from '../images/time_03_night.jpg';

function GetByTime() {
    const D = new Date();
    let hour = D.getHours();

    console.log(hour)

    if (hour > 7 && hour <= 11) {
        return (
            <div className='container'>
                {/* <h1>Morning</h1> */}
                <img alt='' className='time-background' src={image_earlymorning} />
            </div>
        )
    } else if (hour > 11 && hour <= 15) {
        return (
            <div className='container'>
                {/* <h1>Mid Day</h1> */}
                <img alt='' className='time-background' src={image_midday} />
            </div>
        )
    } else if (hour > 15 && hour <= 20) {
        return (
            <div className='container'>
                {/* <h1>Evening</h1> */}
                <img alt='' className='time-background' src={image_evening} />
            </div>
        )
    } else if (hour > 20 && (hour <= 7 || hour === 0)) {
        return (
            <div className='container'>
                {/* <h1>Night</h1> */}
                <img alt='' className='time-background' src={image_night} />
            </div>

        )
    }

    return (
        <div>
            <h1>
                Something went wrong...
            </h1>
        </div>
    )
}

export default GetByTime
