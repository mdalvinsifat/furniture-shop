import React from 'react';

const Caroulse = () => {
    return (

<div className='mt-5 mb-5'>


    <h3 className='text-center'> Featured Products
 </h3>
<div id="carouselExampleIndicators" className="carousel slide mt-5">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
     <div className="row">
        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>

        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>

        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>
     </div>
    </div>
    <div className="carousel-item">

    <div className="row">
        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>

        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>

        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>
     </div>
    </div>
    <div className="carousel-item">
    <div className="row">
        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>

        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>


        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>

        <div className="col-md-2">
            <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fwhite-chair.png&w=256&q=75" alt="" srcset="" />
        </div>
     </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    );
};

export default Caroulse;