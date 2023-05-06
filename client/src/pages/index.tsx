import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import Navbar from "@/components/Global/Navbar";
import { image } from "@/components/Global/Images";
import { useRouter } from "next/router";
const landingPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleListView = () => {
    router.push("/listView");
  };
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <div>
      {/* <Navbar name="UniGhana" text="login" /> */}

      <section className="mt-5 pt-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="mb-4">
            <Image src={image.PokebookImg} alt="placeholder" />
          </div>
          <div className="mb-4">
            <h2 className="text-center">Landing Page</h2>
          </div>
          <div className="search-container row">
            <div className="input-group col-sm-8 col-12 mx-auto">
              <input
                type="search"
                className="form-control border-end-0 border border-0 rounded-pill search-input "
                value={search}
                onChange={handleInputChange}
                placeholder="Enter pokemon name"
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-pink border-bottom-0 border rounded-pill ms-n5 search-btn"
                  type="button"
                  onClick={handleListView}
                >
                  <i className="fa fa-search search-icon"></i>
                </button>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-center">
              <Link href="/listView" className="underline-link">
                List view
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default landingPage;
