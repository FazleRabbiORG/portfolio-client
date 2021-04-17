import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";


const TestimonialCard = ({info}) => {
  return (
   
     <div className="p-5 bg-white rounded shadow border">
         <FontAwesomeIcon className="text-info h1" icon={faQuoteLeft}></FontAwesomeIcon>
       <h6 className="text-secondary mt-5 mb-5">
         comment
         {info.data.comment}
       </h6>
       <FontAwesomeIcon className="text-info h1" icon={faQuoteRight}></FontAwesomeIcon>
       <h2 className="text-info">{info.data.name}</h2>
       <h4 className="text-danger">{info.data.companyName}</h4>
     </div> 

   
  );
};

export default TestimonialCard;
