import React from "react";
import educator from "../images/educator.png";
// import unsplash from "../images/unsplash1.jpg";

const Home = () => {
  return (
    <div>
      <section id="welcome" className="text-gray-400 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-5">
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-8 text-gray-500">
              Welcome to J-Library, the research hub of knowledge
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Check our collections
            </p>
            {/* search box */}
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <div className="input-group relative flex items-stretch w-full">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-gray-30 transition ease-in-out m-0 focus:text-gray-500 focus:bg-white focus:border-blue-300 focus:outline-none"
                    placeholder="Search for books/journals"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-300 hover:shadow-lg focus:bg-blue-300 focus:outline-none focus:ring-0 active:bg-blue-300 transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full mb-8">
          <img src={educator} alt="educator" className="h-48 mx-auto w-50"/>
        </div>
        {/* <div className="flex">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-red-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            architecto quibusdam voluptate dicta aliquam placeat eos, ullam ipsa
            nisi possimus voluptas sit alias porro libero deserunt rerum rem
            labore corporis!
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 bg-green-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            ipsa quas inventore veritatis impedit perferendis incidunt pariatur
            eaque odio adipisci magnam fugit voluptatibus dignissimos nulla,
            numquam perspiciatis unde ab voluptates.
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
