import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [fruits] = useState([
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "	Pineapple",
    "Watermelon",
  ]);
  const [findWord, setFindWord] = useState("");

  const searchFruits = useMemo(() => {
    return fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(findWord.toLowerCase());
    });
  }, [fruits, findWord]);

  return (
    <>
      <span>Search:</span>
      <input
        value={findWord}
        placeholder=" what u find?"
        onChange={(e) => setFindWord(e.target.value)}
        type="search"
      />
      <br />
      {searchFruits.map((fruit) => (
        <div key={fruit}>
          <p>{fruit}</p>
        </div>
      ))}
    </>
  );
}

export default App;
