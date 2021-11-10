import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import {Button, CardColumns, Modal, ModalBody, ModalFooter} from "reactstrap";
import * as actionTypes from '../../redux/actionType'
import {addComment,fetchDishes} from "../../redux/actionCreators";
import Loading from "./Loading";

const mapStateToProps=(state)=>{
    return{
        dishes:state.dishes,
        comments:state.comments,
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        addComment:(dishId,author,rating,comment)=>dispatch(
            addComment(dishId,author,rating,comment)
        ),
        fetchDishes:()=>dispatch(fetchDishes())
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

    componentDidMount() {
        this.props.fetchDishes()
    }


    render() {

        document.title = "Menu"

        if (this.props.dishes.isLoading) {
            return (
                <Loading/>
            )
        } else {


            const dish = this.props.dishes.dishes;
            const menu = dish.map(item => {
                return (
                    <MenuItem dish={item} onDishSelect={this.onDishSelect.bind(item)} key={item.id}/>
                )
            })

            let dishDetails = null
            if (this.state.selecteDish != null) {
                const comments = this.props.comments.filter(comment => {
                    return comment.dishId === this.state.selecteDish.id
                })
                dishDetails =
                    <DishDetails dish={this.state.selecteDish} addComment={this.props.addComment} comments={comments}/>
            }


            return (
                <Fragment>
                    <div className="container">
                        <div className="row">
                            <CardColumns>
                                {menu}
                            </CardColumns>
                            <Modal size="md" isOpen={this.state.modalOpen}>
                                <ModalBody>
                                    {dishDetails}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggleModel}>
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
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);