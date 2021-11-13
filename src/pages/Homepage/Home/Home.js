import React from 'react';
import LimitedOffer from '../../LimitedOffer/LimitedOffer';
import BestSellers from '../BestSellers/BestSellers';
import Brand from '../Brand/Brand';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <LimitedOffer></LimitedOffer>
            <BestSellers></BestSellers>
            <TeamMember></TeamMember>
            <Review></Review>
            <Feature></Feature>
            <Brand></Brand>
        </div>
    );
};

export default Home;