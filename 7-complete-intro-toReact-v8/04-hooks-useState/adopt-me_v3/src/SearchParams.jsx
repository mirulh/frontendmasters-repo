import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("");
  const BREEDS = ["Poodle"]; // fetch from the API
  const [animal, setAnimal] = useState("");
  // the useState will give back array
  // the variable above is equivalent to these =
  // const locationHook = useState("");
  // const location = locationHook[0];
  // const setLocation = locationHook[1]

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed(""); // set empty when onChange
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={BREEDS.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
// cannot call as class, instead use className for javascript
// {location} in the curly braces is where you can pass the input later
// set location is used to rerender the page in real time when changes happened
// it must be stateless

// hooks - useState()

// rules of using hooks - they have to be called every single time in the same order
