import { useEffect , useState } from "react";
import CardPhoto from "./components/CardPhoto";
import SearchInput from './components/SearchInput';
import { Button } from 'react-bootstrap';


  function App() {

    const [value, setValue] = useState([])
    const [page, setPage] = useState({})
    const [search, setSearch] = useState('')
    const [get, setGet] = useState('')
    const getFetch = (get)=>{

  fetch(`https://api.pexels.com/v1/search?query=${get? get : 'all'}`,{
    headers: {
      Authorization: "563492ad6f91700001000001437318d404b14395984043f6d24cf343"
    }
  })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data);
        if( data)
        { 
          setPage(data)
          setValue(data.photos)
        
        }
        
      })
        .catch(error => error)
     
}


    useEffect(() => {
      getFetch(get)
}, [get])

  return (
   <div>
   <SearchInput search={search} setSearch={setSearch} get={get} setGet={setGet} />
   <CardPhoto  value={value} setValue={setValue}/>
  
   </div>
  );
}

export default App;












