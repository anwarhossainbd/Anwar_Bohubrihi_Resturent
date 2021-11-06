import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from "reactstrap";

const mapStateToProps=(state)=>{
    return{
        dishes:state.dishes,
        comments:state.comments,
    }
}

class Menu extends Component {
    constructor() {
        super();
        this.state={

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


        const dish =this.props.dishes ;
        const menu =dish.map(item=>{
            return(
                <MenuItem dish={item} onDishSelect={this.onDishSelect.bind(item)} key={item.id}/>
            )
        })

        let dishDetails = null
        if (this.state.selecteDish !=null){
            const comments =this.props.comments.filter(comment=>{
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

export default connect(mapStateToProps)(Menu);