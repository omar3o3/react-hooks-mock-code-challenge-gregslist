import React , {useState , useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsData , setListingsData] = useState([])

  const [searchValue , setSearchValue] = useState('');

  // let orderedData = listingsData.sort(function(a, b){
  //   let nameA = a.location.toLowerCase(), nameB = b.location.toLowerCase();
  //   if (nameA < nameB) //sort string ascending
  //    return -1;
  //   if (nameA > nameB)
  //    return 1;
  //   return 0; //default return value (no sorting)
  //  });

  //  console.log(orderedData)

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListingsData(data))
  } , [])

  const removeFromDom = ({id}) => {
    let updatedDelete = listingsData.filter(item => item.id !== id)
    setListingsData((oldData) => oldData = updatedDelete)
  }

  let displayedItems = listingsData.filter(item => {return item.description.toLowerCase().includes(searchValue.toLowerCase())})
  
  return (
    <div className="app">
      <Header setSearchValue = {setSearchValue}/>
      <ListingsContainer listingsData = {displayedItems} removeFromDom = {removeFromDom}/>
    </div>
  );
}

export default App;


// {
//   "id": 1,
//   "description": "heater",
//   "image": "./images/heater.jpg",
//   "location": "BROOKLYN"
// },
