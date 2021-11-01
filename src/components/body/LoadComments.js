import React from 'react';
import dateFormat, { masks } from "dateformat";

const LoadComments = (props) => {
    return (
       props.comments.map(comments=>{
           return(
               <div key={comments.id}>
                   <h5>{comments.author}</h5>
                   <h6>{comments.comment}</h6>
                   <h6>{
                       dateFormat(comments.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                   </h6>
               </div>
           )
       })
    );
};

export default LoadComments;