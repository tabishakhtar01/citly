import React, { useEffect, useState } from "react";
import shortnersApi from "apis/shortners";
const Home = props => {
  const [link, setLink] = useState([]);
  const fetchUrls = async () => {
    const response = await shortnersApi.list();
    setLink(response.data.shortners);
  };
  useEffect(() => {
    fetchUrls();
  }, [props.state]);

  return (
    <>
      <div className="text-center mt-10 bg-green-200 h-screen">
        <input
          className="border mt-10 md:w-1/3 border-b-gray py-2 px-4 rounded"
          type="text"
          onChange={e => props.OnChange(e.target.value)}
          placeholder="Enter The URL To Short.."
          autoComplete="off"
          value={props.data}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={props.OnClick}
        >
          Short My URL...
        </button>

        {link.map(currVal => {
          return (
            <>
              <div className="mt-10 text-center grid grid-cols-2 divide-x-2 divide-blue-600">
                <span key={currVal.code} className="text-gray-700">
                  {currVal.url}
                </span>
                <span>
                  <a
                    href={currVal.short_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-800"
                  >
                    {currVal.short_url}
                  </a>
                </span>
              </div>
              <hr
                style={{
                  display: "inline-block",
                  width: "70%",
                  height: "3px",
                  backgroundColor: "black",
                }}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
