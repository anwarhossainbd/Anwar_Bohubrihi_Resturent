import React from 'react';
import dateFormat, { masks } from "dateformat";
import Loading from "./Loading";

const LoadComments = (props) => {

    if (props.commentIsLoading==true){
       return <Loading />
    }
    else {


        return (
            props.comments.map(comments => {
                return (
                    <div key={comments.id}>
                        <h5>  {comments.author}</h5>
                        <h6>{comments.comment}</h6>
                        <h6>Rating:{comments.rating}</h6>
                        <h6>{
                            dateFormat(comments.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                        </h6>
                    </div>
                )
            })
        );
    }
};

export default LoadComments;