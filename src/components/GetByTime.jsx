import React from 'react';

function GetByTime() {
    const D = new Date();
    let hour = D.getHours();

    console.log(hour)

    return (
        <div>
            <h1>
                Noon
            </h1>
        </div>
    )
}

export default GetByTime