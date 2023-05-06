import React from "react";

const About = ({ details }: any) => {
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
                About
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-table pt-2">
        <table
          style={{
            position: "absolute",
            width: "100%",
          }}
          className="table table-borderless"
        >
          <tbody
            style={{
              marginTop: 0,
            }}
          >
            <tr>
              <td
                className="height"
                style={{
                  position: "absolute",
                  right: "0px",
                  left: "-150px",
                  top: "50px",
                  bottom: "0px",
                  padding: "10px 0",
                }}
              >
                Height
              </td>
              <td
                className="cm"
                style={{
                  margin: "0",
                  position: "absolute",
                  left: 330,
                  top: "50px",
                  bottom: "0px",
                  padding: "10px 0",
                }}
              >
                {details?.height}m
              </td>
            </tr>
            <tr>
              <td
                className="weight"
                style={{
                  position: "absolute",
                  right: "0px",
                  left: "-150px",
                  top: "80px",
                  padding: "10px 0",
                }}
              >
                Weight
              </td>
              <td
                className="kg"
                style={{
                  margin: "0",
                  position: "absolute",
                  left: 330,
                  top: "80px",
                  padding: "10px 0",
                }}
              >
                {details?.weight}kg
              </td>
            </tr>
            <tr>
              <td
                className="abilities"
                style={{
                  position: "absolute",
                  right: "0px",
                  left: "-150px",
                  top: "130px",
                  padding: "10px 0",
                }}
              >
                Abilities
              </td>
              <td>
                <ul
                  className="ability"
                  style={{
                    margin: "0",
                    position: "absolute",
                    left: 320,
                    top: "130px",
                  }}
                >
                  {details?.abilities &&
                    details?.abilities.map((ability: string) => (
                      <li key={ability}>{ability}</li>
                    ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div className="container my-table pt-2">
        <table
          style={{
            position: "absolute",
            width: "100%",
          }}
          className="table table-borderless"
        >
          <tbody
            style={{
              marginTop: 0,
            }}
          >
            <tr>
              <td
                className="height"
                style={{
                  position: "absolute",
                  right: "0px",
                  left: "-150px",
                  top: "50px",
                  bottom: "0px",
                  padding: "10px 0",
                }}
              >
                Height
              </td>
              <td
                className="cm"
                style={{
                  margin: "0",
                  position: "absolute",
                  left: 330,
                  top: "50px",
                  bottom: "0px",
                  padding: "10px 0",
                }}
              >
                1cm
              </td>
            </tr>
            <tr>
              <td
                className="weight"
                style={{
                  position: "absolute",
                  right: "0px",
                  left: "-150px",
                  top: "80px",
                  padding: "10px 0",
                }}
              >
                Weight
              </td>
              <td
                className="kg"
                style={{
                  margin: "0",
                  position: "absolute",
                  left: 330,
                  top: "80px",
                  padding: "10px 0",
                }}
              >
                2kg
              </td>
            </tr>
            <tr>
              <td
                className="abilities"
                style={{
                  position: "absolute",
                  right: "0px",
                  left: "-150px",
                  top: "130px",
                  padding: "10px 0",
                }}
              >
                Abilities
              </td>
              <td>
                <ul
                  className="ability"
                  style={{
                    margin: "0",
                    position: "absolute",
                    left: 320,
                    top: "130px",
                  }}
                >
                  <li>Ability 1</li>
                  <li>Ability 2</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default About;
