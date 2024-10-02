import React from 'react';
import './Service.css';
import ECOM from '../../assets/e.png';
import BUSINESS from '../../assets/business.jpg';
import Mana from '../../assets/mana.png';
import PORT from '../../assets/port.jfif';
import BOOK from '../../assets/book.png';

function Service() {
    const tools = [
        {
            name: "E-Commerce Website",
            pic: ECOM
        },
        {
            name: "Business/Corporate Websites",
            pic: BUSINESS
        },
        {
            name: "Management Systems",
            pic: Mana
        },
        {
            name: "Portfolio Websites",
            pic: PORT
        },
        {
            name: "Booking/Reservation Websites",
            pic: BOOK
        }
    ];

    return (
        <section className='service--main' id="Service">
            <h1 className='h1'>Types Of <span className='lol2'>Services</span> I Offer</h1>
            <div className='service--types--container'>
                {tools.map((tool, index) => (
                    <div className='service--type--item' key={index}>
                        <img src={tool.pic} alt={tool.name} className='service--type---img' />
                        <h2 className='h2'>{tool.name}</h2> 
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Service;
