import React from 'react';
// import Footer from './footer';
// import NavBar from '../components/navbar';
import NavBar from '../components/navigation';
import Pagination from '../components/pagination';

const Home = (props) => {
    return (
        <div>
            <NavBar/>
            {props.childern}
            <Pagination/>
            {/* <Footer/> */}
        </div>
    );
}

export default Home;
