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
      <div className="text-center mt-10">
        <input
          className="border mt-10 w-1/3 border-b-gray py-2 px-4 rounded"
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
      </div>
      {link.map(currVal => {
        return (
          <>
            <div className="mt-10 text-center grid grid-cols-2 divide-x">
              <span key={currVal.code}>{currVal.url}</span>
              <span>
                <a href={currVal.short_url} target="_blank" rel="noreferrer">
                  {currVal.short_url}
                </a>
              </span>
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default Home;
