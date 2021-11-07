import React, {Component, Fragment} from 'react';
import {Button, Form, Input} from "reactstrap";


class CommentForm extends Component {
    constructor() {
        super();
        this.state={
            author:"",
            rating:"",
            comment:""
        }

        this.handleInputChange =this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit=(event)=>{

        event.preventDefault();
        this.props.addComment(this.props.dishId,this.state.author,this.state.rating,this.state.comment)
        this.setState({
            author:"",
            rating:"",
            comment:""
        })
    }

    render() {



        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" name="author" onChange={this.handleInputChange} value={this.state.author} placeholder="Your name" required /> <br/>
                    <Input type="select" name="rating" value={this.state.rating} onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input> <br/>

                    <Input type="textarea" name="comment" onChange={this.handleInputChange} value={this.state.comment} placeholder="Your Comment" required></Input> <br/>
                    <Button type="submit">Submit Comment</Button>
                </Form>

            </Fragment>
        );
    }
}

export default CommentForm;