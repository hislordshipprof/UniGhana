import { image } from "@/components/Global/Images";
import PopUpModal from "@/components/Global/PopUpModal";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
const listView = () => {
  const [search, setSearch] = useState("");
  // const [isHovered, setIsHovered] = useState(false);
  const [hoveredImgId, setHoveredImgId] = useState(null);
  const [show, setShow] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [detail, setDetail] = useState("");
  async function fetchPokemon(offset: number) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    const data = response.data.results;

    const pokemonList = await Promise.all(
      data.map(async (result: any) => {
        const pokemonResponse = await axios.get(result.url);
        const pokemonData = pokemonResponse.data;
        const types = pokemonData.types.map((type: any) => ({
          name: type.type.name,
          iconUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon-types/${type.type.name}.png`,
        }));
        const imageUrl = pokemonData.sprites.front_default;
        const name = pokemonData.name;
        return {
          name,
          types,
          imageUrl,
        };
      })
    );
    return pokemonList;
  }
  function handlePaginationClick(newOffset: number) {
    setOffset(newOffset);
    fetchPokemon(newOffset).then((pokemonList: any) => {
      setPokemon(pokemonList);
    });
  }

  useEffect(() => {
    async function getPokemon(offset: number) {
      const pokemonList: any = await fetchPokemon(offset);
      setPokemon(pokemonList);
    }

    async function getTotal() {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const data = response.data;
      setTotal(data.count);
    }

    getPokemon(offset);
    getTotal();
  }, [offset]);
  // console.log("----data", JSON.stringify(pokemon, null, 2));

  const handleImgHover = (imgId: any) => {
    setHoveredImgId(imgId);
  };

  const handleImgLeave = () => {
    setTimeout(() => {
      setHoveredImgId(null);
    }, 9000);
  };
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const numbers = [1, 2, 3];

  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleDropdownItemClick = (number: any) => {
    setSelectedNumber(number);
  };

  const handleDetails = (data: string) => {
    setDetail(data);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center">
            <Image
              src={image.Logo}
              alt="Logo"
              width="100"
              height="70"
              className="d-inline-block align-text-top me-2"
            />
            <span className="text-black fw-bold" style={{ fontSize: "24px" }}>
              Poke<span className="text-pink">book</span>
            </span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSearch"
            aria-controls="navbarSearch"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            style={{ justifyContent: "center" }}
            className="collapse navbar-collapse"
            id="navbarSearch"
          >
            <div className="search-container row">
              <div className="input-group col-sm-8 col-12 mx-auto">
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-secondary bg-pink border-bottom-0 border rounded-pill ms-n5 search-btn"
                    type="button"
                  >
                    <i className="fa fa-search search-icon"></i>
                  </button>
                </span>
                <input
                  type="search"
                  className="form-control border-end-0 border border-0 rounded-pill search-input "
                  value={search}
                  onChange={handleInputChange}
                  placeholder="Enter pokemon name"
                />
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex">
            <div
              className="rounded-circle bg-gray border border-gray d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <div
                className="rounded-circle bg-red d-flex align-items-center justify-content-center"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#E85382",
                }}
              >
                {/* <i className="bi bi-person-fill"></i> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            {pokemon.map((p: any) => (
              <div key={p.name} className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                  <div id="imgCon" className="card-img-wrapper">
                    <Image
                      className="card-img-top"
                      src={p.imageUrl}
                      priority
                      width={300}
                      height={300}
                      style={{
                        width: 250,
                        height: 200,
                        objectFit: "contain",
                      }}
                      alt={p.name}
                      onMouseEnter={() => handleImgHover(p.name)}
                      onMouseLeave={handleImgLeave}
                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title align-items-center">{p.name}</h5>
                    <div
                      style={{
                        width: "85%",
                        margin: "auto",
                      }}
                      className="d-flex  justify-content-center align-items-center"
                    >
                      {p.types.map((type: any) => (
                        <div
                          key={type.name}
                          style={{
                            marginRight: 20,
                            borderRadius: 20,
                            backgroundColor: "#f2f2f2",
                            width: 100,
                            padding: 5,
                          }}
                        >
                          <Image
                            src={type.iconUrl}
                            alt=""
                            width={20}
                            height={20}
                            className="mr-1"
                            style={{ height: "auto", width: "auto" }}
                          />
                          <span className="font-weight-bold">{type.name}</span>
                        </div>
                      ))}
                    </div>
                    {hoveredImgId === p.name && (
                      <div
                        id="footerbtn"
                        style={{
                          backgroundColor: "#E85382",
                          borderRadius: 20,
                        }}
                      >
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          className=" btn btn-pink d-flex align-items-center justify-content-center mt-3"
                          onClick={() => handleDetails(p.name)}
                        >
                          <span style={{ color: "white" }} className="mr-auto ">
                            View Pokemon
                          </span>
                          <i
                            style={{ marginLeft: 50, color: "white" }}
                            className="fas fa-eye"
                          ></i>
                        </button>
                      </div>
                    )}
                    <PopUpModal name={detail} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-3 pt-2">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      // href="#"
                      aria-label="Previous"
                      onClick={() => handlePaginationClick(offset - 20)}
                      disabled={offset === 0}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                  {Array.from(Array(Math.ceil(total / 20)).keys())
                    .filter(
                      (page) =>
                        page === 0 ||
                        page === Math.ceil(total / 20) - 1 ||
                        Math.abs(page * 20 - offset) <= 40
                    )
                    .map((page) => (
                      <li className="page-item" key={page}>
                        <a
                          className={`page-link ${
                            offset === page * 20 ? "active" : ""
                          }`}
                          href="#"
                          onClick={() => handlePaginationClick(page * 20)}
                        >
                          {page + 1}
                        </a>
                      </li>
                    ))}
                  <li className="page-item">
                    <button
                      className="page-link"
                      // href="#"
                      aria-label="Next"
                      onClick={() => handlePaginationClick(offset + 20)}
                      disabled={offset + 20 >= total}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default listView;
