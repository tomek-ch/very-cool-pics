import React from 'react';

function Time({ time }) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = String(time.getDate());
    const month = months[String(time.getMonth())];

    return (
        <div className='time'>
            {`${hours}:${minutes}, ${month} ${day}`}
        </div>
    );
}

export default Time;