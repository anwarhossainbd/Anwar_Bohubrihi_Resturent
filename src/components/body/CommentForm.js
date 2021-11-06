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
    }
    render() {
        return (
            <Fragment>
                <Form>
                    <Input type="text" name="author" value={this.state.author} placeholder="Your name" required /> <br/>
                    <Input type="select" name="rating" value={this.state.rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>

                    <Input type="textarea" name="comment" value={this.state.comment} placeholder="Your Comment" required></Input> <br/>
                    <Button type="submit">Submit Comment</Button>
                </Form>

            </Fragment>
        );
    }
}

export default CommentForm;