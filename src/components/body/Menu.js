import React, {Component, Fragment} from 'react';
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";

class Menu extends Component {
    constructor() {
        super();
        this.state={
            dishes:DISHES,
            selecteDish:null ,
        }
    }

    onDishSelect =dish =>{

        console.log(dish)

        this.setState({
            selecteDish:dish
        })
    }


    render() {

        const dish =this.state.dishes ;
        const menu =dish.map(item=>{
            return(
                <MenuItem dish={item} onDishSelect={this.onDishSelect.bind(item)} key={item.id}/>
            )
        })

        let dishDetails = null
        if (this.state.selecteDish !=null){
            dishDetails = <DishDetails dish={this.state.selecteDish}/>
        }


        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {menu}
                        </div>

                        <div className="col-6">
                            {dishDetails}
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Menu;