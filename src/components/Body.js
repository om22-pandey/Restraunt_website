import { useEffect, useState } from "react";
import { restraunts } from "./config";
import RestrauntCard from "./RestrauntCard";

function filterData(searchTxt, allRestraunts) {
  const filterData = allRestraunts.filter((restraunt) => {
    return restraunt.name.toLowerCase().includes(searchTxt.toLowerCase());
  });
  // console.log(filterData);
  return filterData;
}
function filtercountryData(countrytxt, data) {
  const filterData1 = data.filter((restraunt) => {
    return restraunt.cuisine.toLowerCase().includes(countrytxt.toLowerCase());
  });
  // console.log(filterData1);
  return filterData1;
}

const Body = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [countrytxt, setcountrytxt] = useState("");
  const [allRestraunts] = useState(restraunts);
  const [restrauntsSearch, setrestrauntsSearch] = useState(restraunts);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchTxt}
          onChange={(e) => setsearchTxt(e.target.value)}
          placeholder="Search your fav. restaurant"
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, allRestraunts);
            setrestrauntsSearch(data);
          }}
        >
          search
        </button>

        <input
          type="text"
          name=""
          className="countrylist"
          value={countrytxt}
          onChange={(e) => setcountrytxt(e.target.value)}
          id=""
          placeholder="Search for a country"
          list="country"
        />
        <datalist id="country">
          <option value="indian"></option>
          <option value="Japanese"></option>
          <option value="Italian"></option>
          <option value="French"></option>
          <option value="Mexican"></option>
          <option value="Vegan"></option>
          <option value="Chinese"></option>
          <option value="Mediterranean"></option>
        </datalist>

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, allRestraunts);
            const Countrydata = filtercountryData(countrytxt, data);
            setrestrauntsSearch(Countrydata);
          }}
        >
          search
        </button>
      </div>
      <div className="restraunt-list">
        {restrauntsSearch.length
          ? restrauntsSearch.map((res) => {
              return <RestrauntCard key={res.id} {...res} />;
            })
          : "no restraunt found"}
      </div>
    </>
  );
};

export default Body;
