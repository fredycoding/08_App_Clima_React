import { FormEvent, useRef, useState, useEffect } from 'react';

export const SearchBox = ({ handleSearch}:{
    handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string)=> void;

}) => {

 const [search, setSearch] = useState("")
 const inputRef = useRef<HTMLInputElement>(null)


const handleChange = (e: FormEvent)=>{
    const {value} = e.target as HTMLInputElement
    setSearch(value)
}



  return (
    <form id="form" onSubmit={(e)=>{ 
        handleSearch(e, search)
        setSearch("")}}>
      <label htmlFor="search"></label>
      <input value={search} onChange={handleChange} type="search" autoComplete="off" id="search" name="search"  placeholder="Buscar ubicación" className="mb-10 rounded-lg px-5 py-2 w-80 text-slate-800" />

      </form>
  )
}
