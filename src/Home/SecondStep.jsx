import React from 'react';
import '../Home/Home.css'
const SecondStep = () => {
    return (
        <div className='mt-5'>
      <h2 className='text-center'>What Shopex Offer!</h2>

     <div className="container-fluid">

        <div className="row mt-5  mb-5">
            <div className="col-md-3 text-center border-design">
                <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Foffer-logos%2Ffree-delivery.png&w=64&q=75" alt="" srcset="" />
                <h4 className='text-center'>Free Home Delivery</h4>
               <small>
               <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </small>
            </div>


            <div className="col-md-3 text-center border-design">
                <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Foffer-logos%2Fcashback.png&w=64&q=75" alt="" srcset="" />
                <h4 className='text-center'>Cashback </h4>
               <small>
               <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </small>
            </div>




            <div className="col-md-3 text-center border-design">
                <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Foffer-logos%2Fsupport.png&w=64&q=75" alt="" srcset="" />
                <h4 className='text-center'>24 Hours Support </h4>
               <small>
               <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </small>
            </div>






            <div className="col-md-3 text-center border-design">
                <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Foffer-logos%2Fpremium-quality.png&w=64&q=75 " alt="" srcset="" />
                <h4 className='text-center'>Premium Quality </h4>
               <small>
               <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
               </small>
            </div>



        </div>
     </div>
        </div>
    );
};

export default SecondStep;