import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../Global/Image";

const LoginContent = () => {
  return (
    <>
      <section className="heroSection mt-5 pt-5">
        <div className="hero container mt-5">
          <div className="container mt-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 textSection">
                <h1 className="heroText">
                  <span></span>
                  <span className="highlight">Sign In</span>
                </h1>
                <div className="form-floating my-5">
                  <input
                    type="text"
                    className="form-control input"
                    id="floatingInput"
                    placeholder="Kirk Wolf"
                  />
                  <label htmlFor="floatingInput">Full name</label>
                </div>
                <div className="form-floating mb-5">
                  <input
                    type="email"
                    className="form-control input"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <Link href="/Home" className="btn px-5">
                  Login
                </Link>
              </div>
              <div style={{ marginBottom: 20 }} className="col-lg-6 imgSection">
                <Image
                  src={images.school}
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginContent;
