import { React, useState } from "react";

const ANIMALS = ["cat", "bird", "dog", "crocodile", "snake"];

const SearchParams = () => {
  const [location, setLocation] = useState("Manitou Springs, CO");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("Breed");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            placeholder="location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(event) => setAnimal(event.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <input
            id="breed"
            onChange={(event) => setBreed(event.target.value)}
            value={breed}
            placeholder="breed"
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

// HOOK COULD BE DONE AS A FUNCTION INSTEAD
// const updateLocation = (event) => {
//     setLocation(event.target.value);
// }
// onChange = { updateLocation };
