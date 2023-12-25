import React from 'react';
import '../Contact/Contact.css'
const Message = () => {
    return (
        <div>


            <div className="container-fluid mt-5">
                <div className="row">
                <div className="col-md-5">
            <h2> Get In Touch </h2>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium vitae commodi veniam cumque incidunt ipsum laboriosam nam voluptas enim?</p>




            {/* form  */}






  <form>
  <div className="mb-3">

    <input type="text" placeholder=' Your Name*' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">

    <input type="text" placeholder='Your Email*' className="form-control" id="exampleInputPassword1" />
  </div>
 

  <div className="mb-3">

<input type="text" placeholder='Subject *' className="form-control" id="exampleInputPassword1" />
</div>
  <div className="mb-3">

    <textarea name="message"  placeholder='Message*' id="" cols="70" rows="10"></textarea>
  </div>







  <button type="submit" className="btn button-color">Submit</button>
</form>




                </div>



                <div className="col-md-6">
                    <img src="https://hekto-furniture-shop.vercel.app/_next/image?url=%2Fimages%2Fcontact-us%2Fcontact-us.png&w=640&q=75" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;