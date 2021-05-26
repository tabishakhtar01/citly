import React, { useEffect, useState } from "react";
import shortnersApi from "apis/shortners";
import Container from "./components/Container";
import Table from "./components/Table/index";
import { isNil, isEmpty, either } from "ramda";

const Home = props => {
  const [link, setLink] = useState([]);

  const fetchUrls = async () => {
    try {
      const response = await shortnersApi.list();
      setLink(response.data.shortners);
    } catch (error) {
      alert(error);
    }
  };

  const starUrl = async code => {
    try {
      await shortnersApi.update(code);
      fetchUrls();
    } catch (error) {
      alert(error);
    }
  };

  const countClicks = () => {
    setTimeout(() => {
      fetchUrls();
    }, 500);
  };

  useEffect(() => {
    fetchUrls();
  }, [props.state]);

  return (
    <>
      <div className="text-center mt-10">
        <input
          className="border mt-10 md:w-1/3 border-b-gray py-2 px-4 transition duration-150 ease-in-out
          border-gray-300 rounded-md appearance-none
          focus:outline-none focus:shadow-outline-blue
          focus:border-blue-300 sm:text-sm sm:leading-5"
          type="text"
          onChange={e => props.OnChange(e.target.value)}
          placeholder="Enter The URL To Short.."
          autoComplete="off"
          value={props.data}
        />
        <button
          className="bg-blue-500 w-auto hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={props.OnClick}
        >
          Short My URL...
        </button>
      </div>
      {either(isNil, isEmpty)(link) ? (
        <Container>
          <h1 className="text-xl mt-10 leading-5 text-center">
            Currently we have no shorten Url but sure you can try one 😋
          </h1>
        </Container>
      ) : (
        <Container>
          <Table
            data={link}
            starUrl={starUrl}
            countClicks={countClicks}
          ></Table>
        </Container>
      )}
    </>
  );
};

export default Home;
