import React from "react";
import { image } from "./Images";
import Image from "next/image";

const Similar = ({ similarPokemon }: any) => {
  const img = [
    { id: 1, image: image.Bee, title: "bee" },
    {
      id: 2,
      image: image.Cat,
      title: "yoo",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="my-about">
              <h1
                style={{
                  fontFamily: "'Clash Display Variable', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "30px",
                }}
              >
                Similar
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-5 pt-3">
        <div className="container">
          <div className="row justify-content-center">
            {similarPokemon?.slice(0, 2).map((item: any) => (
              <div key={item?.name} className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                  <div id="imgCon" className="card-img-wrapper">
                    <Image
                      className="card-img-top"
                      src={image.Ivy}
                      alt={item?.name}
                      width={300}
                      height={300}
                      style={{
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </div>

                  <div className="card-bodyi text-center">
                    <h5 className="card-title align-items-center">
                      {item?.name}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Similar;
