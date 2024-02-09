import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="seacrh for city....." />
        <UilSearch />
        <UilLocationPoint />
      </div>
      <div>
        <button>°C</button>
        <p>|</p>
        <button>°F</button>
      </div>
    </div>
  );
};

export default Inputs;
