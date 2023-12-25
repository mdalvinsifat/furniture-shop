import React from 'react';
import Layout from '../Layout/Layout';
import '../About/About.css'

import SecondStep from '../Home/SecondStep';
const About = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row mt-5 ms-3">
                    <div className="col-md-6">
                        <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fabout%2Fabout-banner.png&w=750&q=75" alt="" srcset="" />
                    </div>



                    <div className="col-md-5 mt-5">
                        <h1 className='fs-1'>Know About Our <br/> Ecomerce Business, History</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maiores fuga earum, sed incidunt eos provident soluta optio at ratione odit? Repellat, quasi magni. Reiciendis ut quibusdam accusamus eum ducimus.</p>

                        
                    <div className="btn product">
                        Contact Now 
                    </div>
                    </div>

                </div>
            </div>


            <SecondStep/>
        </Layout>
    );
};

export default About;