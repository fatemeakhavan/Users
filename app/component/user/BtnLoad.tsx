"use client"
import ShowMore from "./ShowMore";

const BtnLoad=()=>{
  const handleClick = () => {
    <ShowMore/>
  };
    return(
        <>
          <button className="btn bg-red-300" onClick={()=>handleClick()}>LoadMore</button>
 
        </>
    )
}
export default BtnLoad;