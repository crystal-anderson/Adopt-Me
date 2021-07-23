import { React, useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => updateLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => updateAnimal(event.target.value)}
            onBlur={(event) => updateAnimal(event.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(event) => updateBreed(event.target.value)}
            onBlur={(event) => updateBreed(event.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

// ===> HOOK COULD BE DONE AS A FUNCTION INSTEAD <===
// const updateLocation = (event) => {
//     setLocation(event.target.value);
// }
// onChange = { updateLocation };

// ===> THIS IS A WAY TO CLEAR OUT THE EFFECT <===
// useEffect(() => {
//   const timer = setTimeout(() => alert('hey there buddy'), 3000);

//   return () => clearTimeout(timer);
// })
