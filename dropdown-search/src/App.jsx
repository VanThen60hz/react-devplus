import { useState } from "react";
import Card from "./components/Card";
import "./App.scss";

const cars = [
  {
    id: 1,
    name: "BMW M6",
    year: 2020,
    thumbnailURL:
      "https://th.bing.com/th/id/R.34b68ed03941b1d8784050d712c34c22?rik=Bi9rxFu6YIjFXQ&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2015_bmw_m6_coupe-wide.jpg&ehk=hco0OWrrVDR%2bNsVmDsv5xPLLBjlyiHZVsixMmmeUclA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "VW Polo",
    year: 2018,
    thumbnailURL:
      "https://th.bing.com/th/id/R.ec50a951aa5c8ff5aebba4f43d28acfe?rik=TCAfKYVFltwIog&riu=http%3a%2f%2fimages.car.bauercdn.com%2fpagefiles%2f73559%2fz_vw-polo.jpg&ehk=JdN6Wv3xGTeQiDoq5HvzERT1noGlOm9dSaHCFeaxN%2bk%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "Audi F6",
    year: 2020,
    thumbnailURL:
      "https://th.bing.com/th/id/OIP.EbAXCopJOHhe92C0dM9ASwHaFj?pid=ImgDet&rs=1",
  },
  {
    id: 4,
    name: "BMW 2",
    year: 2019,
    thumbnailURL:
      "https://th.bing.com/th/id/OIP.mPqy3QJtmim2v0cOUXVTOgHaE2?pid=ImgDet&rs=1",
  },
  {
    id: 5,
    name: "Audi A3",
    year: 2019,
    thumbnailURL:
      "https://th.bing.com/th/id/R.54c7d24177fe2b93c04a9ae4741892b4?rik=kIvZBJQiPOztVA&riu=http%3a%2f%2fcdn-imgsvr.cars.co.za%2fimages%2f2017%2f1%2fAudi-A3%2fx.jpg%2fIMG_9276.JPG&ehk=Fc5h3mzQt%2bRq1OEoFpVP2Cj3WQ4UPuF%2fopge9m7r4tc%3d&risl=&pid=ImgRaw&r=0",
  },
];

const App = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedBrand(selectedValue);
    setSelectedYear("All");
  };

  const handleFilterByYear = (year) => {
    setSelectedYear(year);
  };

  const filteredCars = cars.filter((car) => {
    const brandMatch =
      selectedBrand === "All" || car.name.includes(selectedBrand);
    const yearMatch =
      selectedYear === "All" || car.year === parseInt(selectedYear);
    return brandMatch && yearMatch;
  });

  return (
    <div>
      <label htmlFor="">Find By Brand: </label>
      <select value={selectedBrand} onChange={handleChange}>
        <option value="All">All</option>
        <option value="BMW">BMW</option>
        <option value="VW">VW</option>
        <option value="Audi">Audi</option>
      </select>

      <p>Filter By Year</p>
      <div className="year-choice">
        <span onClick={() => handleFilterByYear(2018)}>2018</span>
        <span onClick={() => handleFilterByYear(2019)}>2019</span>
        <span onClick={() => handleFilterByYear(2020)}>2020</span>
      </div>

      <div className="card-container">
        {filteredCars.map((car) => (
          <li key={car.id}>
            <Card car={car} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default App;
