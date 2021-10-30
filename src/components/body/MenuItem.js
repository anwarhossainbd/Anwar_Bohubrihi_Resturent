import React, {Fragment} from 'react';
import {Button, Card, CardBody, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

const MenuItem = (props) => {

    return (
        <Fragment>
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg
                    width="100%"
                    alt={props.dish.name}
                    src={props.dish.image}
                    style={{opacity:"0.5"}}
                    />
                    <CardImgOverlay>
                            <CardTitle  style={{cursor:"pointer"}} >{props.dish.name}</CardTitle>

                        <Button onClick={()=>props.onDishSelect(props.dish)} color="primary">
                            Details
                        </Button>

                    </CardImgOverlay>

                </CardBody>
            </Card>
            
        </Fragment>
    );
};

export default MenuItem;