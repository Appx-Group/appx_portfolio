import React from 'react'
import Header from '../components/Header';
import Card from '../components/cards/card'
import Service from "../components/services/service";
import Offer from '../components/offer/offer';

function Home() {
    return (
        <div>
            <Header />
            <Card />
            <Service />
            <Offer />
        </div>
    )
}

export default Home;
