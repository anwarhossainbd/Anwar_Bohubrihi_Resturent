import React, {Fragment} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const DishDetails = (props) => {
    return (
        <Fragment>
            <Card style={{marginTop:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                        <p>{props.dish.price}</p>
                    </CardText>
                </CardBody>
            </Card>
            
        </Fragment>
    );
};

export default DishDetails;