//import TopButtonCSS from "../Components/TopButtons.module.css";

const TopButtons = () => {

    const cities = [
        {
            id : 1,
            title:'london',
        },
        {
            id : 2,
            title:'sydney',
        },
        {
            id : 3,
            title:'blore',
        },
        {
            id : 4,
            title:'delhi',
        },
    ]
  return (
    <div>
      
      <div>{cities.map((city)=>(
        <button key={city.id}>
            {city.title}
        </button>
      ))}</div>
    </div>
  );
};

export default TopButtons;
