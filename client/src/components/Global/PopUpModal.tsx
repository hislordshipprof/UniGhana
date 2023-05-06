import Image from "next/image";
import React, { useEffect, useState } from "react";
import { image } from "./Images";
import About from "./About";
import Stats from "./Stats";
import Similar from "./Similar";
import axios from "axios";
const PopUpModal = ({ name }: any) => {
  console.log("---name", name);
  const [activeButton, setActiveButton] = useState("about");

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };
  const [pokemonDetails, setPokemonDetails] = useState<any>({});
  const [similarPokemon, setSimilarPokemon] = useState([]);

  useEffect(() => {
    async function fetchDetails() {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await axios.get(pokemonUrl);
      const data = response?.data;
      setPokemonDetails({
        name: data?.name,
        types: data?.types?.map((type: any) => type.type.name),
        image: data?.sprites?.front_default,
        height: data?.height / 10,
        weight: data?.weight / 10,
        abilities: data?.abilities?.map((ability: any) => ability.ability.name),
        stats: data?.stats?.map((stat: any) => {
          const name = stat.stat.name;
          const displayName =
            name === "special-attack"
              ? "Sp. Atk"
              : name === "special-defense"
              ? "Sp. Def"
              : name;
          return {
            id: name.toLowerCase().replace(/\s/g, "-"),
            name: displayName,
            value: stat.base_stat,
          };
        }),
      });
    }
    fetchDetails();
  }, [name]);
  async function fetchSimilarPokemon() {
    const typeUrl = `https://pokeapi.co/api/v2/type/${pokemonDetails.types[0]}`;
    const response = await axios.get(typeUrl);
    const data = response?.data;
    const pokemonList = data?.pokemon?.slice(0, 4);
    const promises = pokemonList?.map((pokemon: any) =>
      axios.get(pokemon.pokemon.url)
    );
    const pokemonData = await Promise.all(promises);
    const similarPokemonData = pokemonData.map(
      (response: any) => response?.data
    );
    const similarPokemon: any = similarPokemonData?.map((pokemon: any) => {
      return {
        name: pokemon.name,
        image: pokemon?.sprites?.front_default,
      };
    });
    setSimilarPokemon(similarPokemon);
  }
  useEffect(() => {
    if (pokemonDetails?.types?.length) {
      fetchSimilarPokemon();
    }
  }, [pokemonDetails]);
  return (
    <>
      <div
        className="modal  fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div
            style={{
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
            className="modal-content"
          >
            <div className="row h-100">
              <div className="col-md-6 h-100"></div>
              <div className="col-md-6 h-100">
                <div className="card h-100 simila">
                  <div
                    style={{
                      backgroundColor: "red",
                      height: 220,
                      borderRadius: 20,
                      margin: "18px",
                      background:
                        "linear-gradient(180deg, #7FCAD1 0%, #3DA0A9 100%)",
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        padding: "13px",
                        position: "absolute",
                        left: "20px",
                        top: "20px",
                      }}
                      className="modal-header "
                    >
                      <a
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                      >
                        <div className="arrow-icon">
                          <i
                            className="bi bi-arrow-left"
                            style={{
                              fontSize: "24px",
                              lineHeight: "1",
                            }}
                          ></i>
                        </div>
                      </a>
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "60%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1,
                      }}
                    >
                      <Image
                        src={pokemonDetails?.image}
                        alt=""
                        className="card-img-modal"
                        width={200}
                        height={200}
                        style={{
                          height: 250,
                          width: 300,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        left: 0,
                        top: 0,
                        borderRadius: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        zIndex: 0,
                      }}
                    ></div>
                  </div>
                  <div className="my-card-title pt-2">
                    <h5 className="card-title align-items-center">
                      {pokemonDetails?.name}
                    </h5>

                    <div
                      style={{
                        width: "85%",
                        margin: "auto",
                      }}
                      className="d-flex justify-content-center align-items-center"
                    >
                      {pokemonDetails?.types?.map(
                        (type: string, index: number) => (
                          <div
                            key={index}
                            className="d-flex align-items-center justify-content-center"
                            style={{
                              marginRight:
                                index !== pokemonDetails?.types?.length - 1
                                  ? 20
                                  : 0,
                              borderRadius: 20,
                              backgroundColor: "#f2f2f2",
                              width: 100,
                              padding: 5,
                            }}
                          >
                            <i
                              className={`fas fa-${type?.toLowerCase()} text-${type?.toLowerCase()} mr-1`}
                            ></i>
                            <span className="font-weight-bold">{type}</span>
                          </div>
                        )
                      )}
                    </div>

                    {activeButton === "about" && (
                      <About details={pokemonDetails} />
                    )}
                    {activeButton === "stats" && (
                      <Stats details={pokemonDetails} />
                    )}
                    {activeButton === "contact" && (
                      <Similar similarPokemon={similarPokemon} />
                    )}
                    <div className="my-footer pt-3">
                      <div className="button-container">
                        <button
                          className={`button ${
                            activeButton === "about" ? "active" : ""
                          }`}
                          onClick={() => handleButtonClick("about")}
                        >
                          About
                        </button>
                        <button
                          className={`button ${
                            activeButton === "stats" ? "active" : ""
                          }`}
                          onClick={() => handleButtonClick("stats")}
                        >
                          Stats
                        </button>
                        <button
                          className={`button ${
                            activeButton === "contact" ? "active" : ""
                          }`}
                          onClick={() => handleButtonClick("contact")}
                        >
                          Similar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;
