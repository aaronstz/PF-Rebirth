import React, { useEffect } from "react";
import exButton from '../../Assets/Filterbar/xbutton.svg'
import "./FilterBarSelectedButton.css";
import {
  filterByLocation,
  filterBySex,
  filterBySize,
  fullFilterAge,
  fullFilterLocation,
  fullFilterSex,
  fullFilterSize,
  orderByAge,
} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function FilterbarSelect(){

    const dispatch = useDispatch();
  let filterTabLocation=useSelector(state=> state.filterLocation)
  let filterTabAge=useSelector(state=> state.filterAge)
  let filterTabSex=useSelector(state=> state.filterSex)
  let filterTabSize=useSelector(state=> state.filterSize)
  useEffect(() => {
  // dispatch(fullFilterAge("age"));
  }, [dispatch]);

  function handleOrderByAge(e) {
    dispatch(orderByAge(e));
    dispatch(fullFilterAge(e))
  }

  function handleFilterBySex(e) {
    dispatch(filterBySex(e));
    dispatch(fullFilterSex(e))
  }
  function handleFilterBySize(e) {
    dispatch(filterBySize(e));
    dispatch(fullFilterSize(e))
  }
  function handleFilterByLocation(e) {
    dispatch(filterByLocation(e));
    dispatch(fullFilterLocation(e))
  }

return(
    <div className="filters-tabs"> 
        {filterTabLocation==="All"? "":  <div className="filter-tabs-item" >
            {filterTabLocation}
           <img className="exbutton" onClick={e=>{handleFilterByLocation("All")}} src={exButton}/>
    </div>}
        {filterTabAge==="age"? "":  <div className="filter-tabs-item" >
            {filterTabAge}
           <img className="exbutton" onClick={e=>{handleOrderByAge("age")}} src={exButton}/>
    </div>} 
    {filterTabSex==="All"? "":  <div className="filter-tabs-item" >
            {filterTabSex}
           <img className="exbutton" onClick={e=>{handleFilterBySex("All")}} src={exButton}/>
    </div>}
    {filterTabSize==="Any"? "":  <div className="filter-tabs-item" >
            {filterTabSize}
            <img className="exbutton" onClick={e=>{handleFilterBySize("Any")}} src={exButton}/>
    </div>}  
   
    </div>
)

}