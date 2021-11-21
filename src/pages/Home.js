import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Service from '../components/Service';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Delux rooms starting $299 ">
                    <Link to='/rooms' className="btn-primary"> Our Rooms</Link>
                </Banner>
            </Hero>
            <Service />
            <FeaturedRooms />
        </>
    )
}
