import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
const Stats = ({ details }: any) => {
  const stats = [
    { id: 1, name: "Hp", value: 60 },
    { id: 2, name: "Attack", value: 62 },
    { id: 3, name: "Defense", value: 63 },
    { id: 4, name: "Sp.Atk", value: 89 },
    { id: 5, name: "Sp. Def", value: 80 },
    { id: 6, name: "Speed", value: 82 },
  ];
  // console.log(
  //   "---details",
  //   details.stats.map((stat: any) => stat.name)
  // );
  return (
    <>
      {/* <div className="container">
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
                Stats
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="my-stats py-2">
        {stats.map((stat) => (
          <div className="row align-items-center" key={stat.id}>
            <div className="col-3">
              <p className="mb-0">{stat.name}</p>
            </div>
            <div className="col-6">
              <ProgressBar
                now={stat.value}
                variant="danger"
                style={{ backgroundColor: "#CBCBCB" }}
              />
            </div>
            <div className="col-3">
              <p className="mb-0 text-end">{stat.value}</p>
            </div>
          </div>
        ))}
      </div> */}

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
                Stats
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-stats py-2">
        {stats.map((stat) => (
          <div className="row align-items-center" key={stat.id}>
            <div className="col-sm-3 col-12">
              <p className="mb-0">{stat.name}</p>
            </div>
            <div className="col-sm-6 col-9">
              <ProgressBar
                now={stat.value}
                variant="danger"
                style={{ backgroundColor: "#CBCBCB" }}
              />
            </div>
            <div className="col-sm-3 col-3">
              <p className="mb-0 text-end">{stat.value}</p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="my-stats py-2">
        {details?.stats?.map((stat: any, index: number) => (
          <div className="row align-items-center" key={index}>
            <div className="col-sm-3 col-12">
              <p className="mb-0">{stat.name}</p>
            </div>
            <div className="col-sm-6 col-9 prog">
              <ProgressBar
                now={stat.value}
                variant="danger"
                style={{ backgroundColor: "#CBCBCB" }}
              />
            </div>
            <div className="col-sm-3 col-3">
              <p className="mb-0 text-end">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stats;
