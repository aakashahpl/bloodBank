import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className=" px-11"
    >

      <section id="banner">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="img/sl1.jpg" alt="First slide" style={{ height: '600px' }} />
              <div className="carousel-caption text-left text-danger">
                <h5>DONATE BLOOD SAVE LIFE.</h5>
                <h1 className="display-4 font-weight-bold">DONATE BLOOD<br /> AND INSPIRES OTHERS</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/sl4.jpg" alt="Second slide" style={{ height: '600px' }} />
              <div className="carousel-caption text-left text-white">
                <h5>DONATE BLOOD SAVE LIFE.</h5>
                <h1 className="display-4 font-weight-bold">DONATE BLOOD<br /> AND INSPIRES OTHERS</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/sl3.jpg" alt="Third slide" style={{ height: '600px' }} />
              <div className="carousel-caption text-left text-danger">
                <h5 className="">DONATE BLOOD SAVE LIFE.</h5>
                <h1 className="display-4 font-weight-bold">DONATE BLOOD <br />AND INSPIRES OTHERS</h1>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </section>

      <section id="donationprocess" className="bg-secondary">

        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">

              <h1 className="py-2 mt-4 text-white display-4 font-weight-bold">DONATION PROCESS</h1>
              <h3 className="font-weight-normal py-4 text-white">The donation process from the time you arrive center until the time you leave</h3>

            </div>
          </div>


          <div className="row text-center  text-white">
            <div className="col-lg-4">

              <div className="card bg-dark">
                <img className="card-img-top" src="img/rg.jpg" alt="Card image cap" style={{ height: '200px' }} />
                <div className="card-body text-white">
                  <h5 className="card-title">REGISTRATION</h5>
                  <p className="card-text">You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>

                </div>
              </div>

            </div>

            <div className="col-lg-4">

              <div className="card bg-dark">
                <img className="card-img-top" src="/img/scr.jpg" alt="Card image cap" style={{ height: '200px' }} />
                <div className="card-body text-white">
                  <h5 className="card-title">SCREENING</h5>
                  <p className="card-text">A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>

                </div>
              </div>

            </div>

            <div className="col-lg-4">

              <div className="card bg-dark" >
                <img className="card-img-top" src="/img/bd.jpg" alt="Card image cap" style={{ height: '200px' }} />
                <div className="card-body text-white">
                  <h5 className="card-title">DONATION</h5>
                  <p className="card-text">After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>

                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      <section id="join">

        <div className="container-fluid bg-secondary text-white">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1 className="display-4 mt-4 py-3 font-weight-bold">JOIN US</h1>
              <p className="font-weight-bold py-3">FEEL THE REAL PEACE</p>

            </div>
          </div>

          <div className="card card-body bg-dark text-white">
            <div className="card-title text-center">
              <h3>REGISTRATION FORM</h3>
              <p className="font-weight-light"><small>Please fill the following information to register as voluntary blood donor and become part of our vision. Kindly update your date of donation once done, so that your name will be hidden automatically till next 4 Months. Also please update your profile/information if in case you relocate in future
              </small></p>
            </div>
            <form className="">
              <div className="form-row ">

                <div className="form-group col-md-6">
                  <input type="name" name="name" id="name" placeholder="Name" className="form-control" />
                </div>

                <div className="form-group col-md-3">
                  <input type="text" name="age" id="age" placeholder="Age" className="form-control" min="50" max="" />
                </div>

                <div className="form-group col-md-3">
                  <input type="text" name="weight" id="weight" placeholder="Weight" className="form-control" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" name="Address" id="address" placeholder="Address" className="form-control" />
                </div>

                <div className="form-group col-md-3">
                  <input type="number" name="number" id="number" placeholder="Number" className="form-control" maxlength="11" />
                </div>
                <div className="form-group col-md-3">
                  <select className="form-control" id="bloodgroup">
                    <option selected="">Choose Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>
              </div>

              <input type="submit" name="submit" className="btn btn-outline-success btn-lg btn-block" />
            </form>
          </div>

        </div>


      </section>
    </main >
  );
}
