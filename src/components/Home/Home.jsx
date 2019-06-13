import React from 'react';
import { getAuthUrl } from '../../Burrito';

const Home = () => <a href={getAuthUrl()}>Login to Burrito</a>;

export default Home;
