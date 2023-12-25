import React from 'react';
import Layout from '../Layout/Layout';
import Message from './Message';

const Contact = () => {
    return (
        <Layout>
            <div className='mt-5'>
                <h1 className='text-center mb-5 mt-5'> Contact Page </h1>


                {/* Line 1  */}


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <h3>
                            Information About Us
                            </h3>

                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio sint eveniet quibusdam aliquam reiciendis totam. Asperiores harum numquam in dolor. Distinctio quia quasi, itaque totam repellat numquam, dolorum sed odit nemo recusandae temporibus vel, eum neque asperiores incidunt qui.</p>
                        </div>


                        <div className="col-md-6 ms-4">
                            <h3>
                            Contact Way
                            </h3>

                            <div className="d-flex mt-5 mb-5">
                          
                          <div className="one d-flex">
                          <img width="48" height="48" src="https://img.icons8.com/color/48/address--v1.png" alt="address--v1" className='ms-2'/>

<p className='ms-2'>Tel: 877-67-88-99 <br/>zahidul.haque767@gmail.com </p>
                          </div>

                          <div className="two ms-5 d-flex">
                          <img width="48" height="48" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone"/>
                          <p className='mt-3'>Support fourm for over 24hr</p>

                          </div>



                            </div>



                          <div className="d-flex ms-2">
                            <div className="d-flex">
                            <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/location.png" alt="location"/>
                            <p>20 Margaret st, London, Great britain, <br/> 3NM98-LK</p>
                            </div>


                            <div className="d-flex ms-3">
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/delivery.png" alt="delivery"/>
                           <p>Free standart shipping on all <br/>orders</p>
                            </div>
                          </div>



                        </div>


                    </div>
                </div>
            </div>

            <Message/>
        </Layout>
    );
};

export default Contact;