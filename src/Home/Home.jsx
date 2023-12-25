import React from 'react';
import '../Home/Home.css'
import Caroulse from './Caroulse';
import NextStep from './NextStep';
import SecondStep from './SecondStep';
import Background from './Background';
import Latest from './Latest';
import Layout from '../Layout/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-5 mt-5 heading">
<p className='pragraph mt-5'>Best Furniture For Your Castle....</p>

<h1 className='heading1 '>New Furniture <br/> Collection Trends in <br/> 2023</h1>


<small>
<p className='normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam veniam! Ad animi harum suscipit eveniet magni expedita modi adipisci?</p>
</small>

<div className="btn button p-2">Shop Now </div>
                    </div>


                    <div className="col-md-6">
<img className='img-fluid' src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fsofa-promotional-header.png&w=828&q=75"  alt="" srcset="" />
                    </div>



                </div>
            </div>


            <Caroulse/>

            <NextStep/>

            <SecondStep/>

            <Background/>

            <Latest/>
        </Layout>
    );
};

export default Home;