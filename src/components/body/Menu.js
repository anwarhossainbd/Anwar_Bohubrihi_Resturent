import React, {Component, Fragment} from 'react';
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/Comments";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from "reactstrap";

class Menu extends Component {
    constructor() {
        super();
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            selecteDish:null ,
            modalOpen:false,
        }
    }

    toggleModel=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen,
        })
    }

    onDishSelect =dish =>{
        this.setState({
            selecteDish:dish,
            modalOpen:!this.state.modalOpen,
        })
    }


    render() {

        document.title="Menu"


        const dish =this.state.dishes ;
        const menu =dish.map(item=>{
            return(
                <MenuItem dish={item} onDishSelect={this.onDishSelect.bind(item)} key={item.id}/>
            )
        })

        let dishDetails = null
        if (this.state.selecteDish !=null){
            const comments =this.state.comments.filter(comment=>{
                return comment.dishId === this.state.selecteDish.id
            })
            dishDetails = <DishDetails dish={this.state.selecteDish} comments={comments}/>
        }


        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                       <CardColumns>
                           {menu}
                       </CardColumns>
                        <Modal size="md" isOpen={this.state.modalOpen} onClick={this.toggleModel}>
                            <ModalBody>
                                {dishDetails}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary">
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Menu;