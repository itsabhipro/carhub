"use client"

import Image from "next/image";
import { SearchMenufacture } from ".."
import { useState} from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({style}:{style:string}) => (
  <button type="submit" className={`-ml-3 z-10 ${style}`}>
    <Image src="/magnifying-glass.svg" alt="magnifying-glass" width={40} height={40} className="object-contain"/>
  </button>
);
type Props = {
  model:string;
  manufacturer:string,
  setModel:(value:string)=>void;
  setManufacturer:(value:string)=>void;
}
const SearchBar = ({model,manufacturer,setModel,setManufacturer}:Props) => {
  const [selectedMenufacturer, setselectedMenufacturer] = useState();
  const router = useRouter();
  const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("form submit called")
    if(model === '' && manufacturer === '') return;
    console.log("api called")
    updateSearch(model.toLowerCase(),manufacturer.toLowerCase());
  }
  const updateSearch = (model:string,manufacturer:string)=>{
    setModel(model);
    setManufacturer(manufacturer)
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacture manufacturer={manufacturer} setmanufacturer={setManufacturer}/>
        <SearchButton style="sm:hidden flex"/>
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="model icon"/>
        <input type="text" value={model} onChange={(e)=>setModel(e.target.value) } placeholder="Audi" className="searchbar__input"/>
        <SearchButton style="sm:hidden"/>
      </div>
      <SearchButton style="max-sm:hidden"/>
     
    </form>
  )
}

export default SearchBar