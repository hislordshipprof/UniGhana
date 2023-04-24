import React, { useState } from "react";
import Image from "next/image";

import { images } from "@/components/Global/Image";
import Link from "next/link";
import Navbar from "@/components/Global/Navbar";
const landingPage = () => {
  const [search, setSearch] = useState("");
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <div>
      <Navbar name="UniGhana" text="login" />

      <section className="heroSection mt-5 pt-5">
        <div className="hero container mt-5">
          <div className="container mt-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 textSection">
                <h1 className="heroText">
                  Welcom to <br></br>
                  <span style={{ color: "#F28705" }}>UniGhana </span>
                  <span style={{ color: "#022873", margin: 7 }}>
                    A Tertiary School Platform
                  </span>
                </h1>
                <h3 className="semiTag my-4">
                  Looking for Best Tertiary School in Ghana?
                </h3>
                <p className="heroNote">
                  SignUp let take you on a tour to the most amazing Tertiary
                  schools in Ghana..
                </p>

                <Link
                  href="/register/signup"
                  className="btn CTA my-5 py-2 px-4"
                >
                  Register Here
                  <Image src={images.Arrow} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="col-lg-6 imgSection">
                <Image
                  src={images.school}
                  priority
                  alt=""
                  className="img-fluid"
                  style={{ bottom: 20, borderRadius: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="factsSection mt-5 pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-lg-5 Fact d-flex align-items-center">
              <Image src={images.Time} alt="" className="img-fluid" />
              <div className="factDetails mx-3">
                <h2 className="factTitle ">24/7</h2>
                <p className="factMeaning"> Customer support </p>
              </div>
            </div>
            <div className="col-lg-5 Fact d-flex align-items-center">
              <Image
                src={images.cap}
                alt=""
                className="img-fluid"
                style={{ borderRadius: 30 }}
              />
              <div className="factDetails mx-3">
                <h2 className="factTitle ">60+</h2>
                <p className="factMeaning">Univercities Available </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default landingPage;
