import { images } from "@/components/Global/Image";
import Navbar from "@/components/Global/Navbar";
import Image from "next/image";
import React from "react";

const details = () => {
  return (
    <>
      <header
        className="bg-image"
        style={{
          height: 600,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${images.techBg.src})`,
        }}
      >
        {/* <div className="overlay">
          <div className="container">
            <h1 className="#022873">Knust</h1>
          </div>
        </div> */}
        <Navbar name="Knust" text="" />
      </header>
      <section id="history" className="section bg-light ">
        <div className="container ">
          <div className="row mt-5">
            <div className="col-md-6">
              <h2 className="section-title">School History</h2>
              <p>
                Kwame Nkrumah University of Science and Technology (KNUST) is a
                university located in Kumasi, Ghana. It was established in 1952
                as the Kumasi College of Technology and was later renamed to the
                present name in 1961 in honor of Kwame Nkrumah.The university
                has a rich history of innovation and has been a pioneer in
                science, technology, and innovation in Ghana and the West
                African sub-region. It was the first university in Ghana to
                offer degree programs in engineering, and it has continued to
                lead in science, technology, and innovation.
              </p>
              <p>
                KNUST has over the years produced a lot of prominent alumni in
                various fields such as science, technology, engineering,
                business, and politics. Today, KNUST is a leading university in
                Ghana and Africa, offering a wide range of undergraduate and
                graduate programs in various fields such as engineering,
                science, technology, business, law, and the humanities.
              </p>
            </div>
            <div className="col-md-6 ">
              <Image
                src={images.techBg}
                className="img-fluid h-400 "
                alt="School History"
                style={{ borderRadius: 30 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="programs" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Programs Offered</h2>
          <ul className="list-group">
            <li className="list-group-item">Program 1</li>
            <li className="list-group-item">Program 2</li>
            <li className="list-group-item">Program 3</li>
            <li className="list-group-item">Program 4</li>
          </ul>
        </div>
      </section>

      <section id="colleges" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Colleges</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <Image
                  src={images.cameras}
                  className="card-img-top"
                  alt="College 1"
                />
                <div className="card-body">
                  <h5 className="card-title">College 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla, magna a tempor accumsan, risus magna accumsan
                    augue.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image
                  src={images.cameras}
                  className="card-img-top"
                  alt="College 2"
                />
                <div className="card-body">
                  <h5 className="card-title">College 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla, magna a tempor accumsan, risus magna accumsan
                    augue.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <Image
                  src={images.cameras}
                  className="card-img-top"
                  alt="College 3"
                />
                <div className="card-body">
                  <h5 className="card-title">College 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla, magna a tempor accumsan, risus magna accumsan
                    augue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cutoff" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Cut Off Points</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subject 1</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Subject 2</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Subject 3</td>
                <td>80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default details;
