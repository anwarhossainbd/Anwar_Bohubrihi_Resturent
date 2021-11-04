import React, {Component, Fragment} from 'react';
import {Col, Input, Label, From, FormGroup, Form, Button} from "reactstrap";

class Contact extends Component {

    constructor() {
        super();
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"Tel.",
            message:""
        }
        this.handleInputChange =this.handleInputChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)

    }

    handleInputChange=(event)=>{
        const value=event.target.type ==='checkbox'?event.target.checked:event.target.value ;
        const name=event.target.name ;
        this.setState({
            [name]:value
        })
    }

    handleSubmit =(event)=>{



        this.setState({
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:false,
            contactType:"Tel.",
            message:""
        })
        console.log(this.state);
        event.preventDefault();
    }

    render() {

        document.title="Contact"


        return (
            <Fragment>

                <div className="container mt-5">
                    <div className="row row-content" style={{paddingLeft:"20px",textAlign:"left"}}>
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-7">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" name="firstname" onChange={this.handleInputChange} placeholder="First Name" value={this.state.firstname} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" name="lastname" onChange={this.handleInputChange} placeholder="Last Name" value={this.state.lastname} />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="telnum" md={2}>Contact No.</Label>
                                    <Col md={10}>
                                        <Input type="tel" name="telnum" onChange={this.handleInputChange} placeholder="Phone Number " value={this.state.telnum} />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" onChange={this.handleInputChange} name="email" placeholder="Email" value={this.state.email} />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Col md={{size:5,offset:1}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" onChange={this.handleInputChange} name="agree" checked={this.state.agree} /> <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3,offset:1}}>
                                        <Input type="select" name="contactType" onChange={this.handleInputChange}  value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" name="message" onChange={this.handleInputChange} placeholder="Write Your Message" value={this.state.message} rows="12"></Input>
                                    </Col>
                                </FormGroup>


                                <FormGroup>
                                    <Col md={{size:10,offset:2}}>
                                        <Button type="submit" color="primary">
                                            Sent Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>



                            </Form>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Contact;