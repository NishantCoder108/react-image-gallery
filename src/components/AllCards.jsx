import React, { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import Search from "./Search";
import Footer from "./Footer";

const AllCards = () => {
  const BASE_KEY = process.env.REACT_APP_PIXABAY_BASE_API;
  const REACT_APP_PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
  const [allData, setAllData] = useState(null);
  const [query, setQuery] = useState("lion");
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `${BASE_KEY}/?key=${REACT_APP_PIXABAY_API_KEY}&q=${query}&image_type=photo`
      )
        .then((response) => response.json())
        .catch((err) => console.log(err));

      setAllData(actualData);
      setIsLoading(false);
    }

    getData();
  }, [query]);

  const items = allData?.hits;

  return (
    <>
      {isloading || <Search searchText={(e) => setQuery(e)} />}
      {/* {console.log(allData.length, items.length)}{" "} */}
      {!isloading && items?.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32 py-6">
          No Images Found
        </h1>
      )}
      <div className="flex m-3 justify-evenly flex-wrap ">
        {isloading ? (
          <div className="text-center">LOADING...</div>
        ) : (
          items?.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <ImageGallery
                  id={item.id}
                  downloads={item.downloads}
                  likes={item.likes}
                  tags={item.tags}
                  views={item.views}
                  image={item.webformatURL}
                />{" "}
              </React.Fragment>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllCards;
