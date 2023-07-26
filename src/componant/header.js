import React from "react";

const Header = () => {
    const getTheYear =()=>{
      const newDate= new Date();
      return newDate.getFullYear();

    }
    return(
        <>
         the Date is  {getTheYear()}
        </>
    )
}
export default Header