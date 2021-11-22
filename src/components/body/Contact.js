import React, {Component, Fragment} from 'react';
import {Col,  Label,  FormGroup,  Button} from "reactstrap";
import { Control, Form, Errors,actions } from 'react-redux-form';
import {connect} from "react-redux";

const mapDispatchToProps=dispatch=>{
    return{
        resetFeedbackForm:()=>{
            dispatch(actions.reset('feedback'))
        }
    }
}


const required =val=> val && val.length;
const isNumber=val=>!isNaN(Number(val));
const validEmail=val=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {


    handleSubmit =(values)=>{

        console.log(values);
        this.props.resetFeedbackForm();
    }

    render() {

        document.title="Contact"


        return (
            <Fragment>

                <div className="container mt-5 mb-5">

                    <div className="row row-content" style={{paddingLeft:"20px",textAlign:"left"}}>
                        <div className="col-12">
                            <h3>Send us your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-7">
                            <Form model="feedback" onSubmit={values=>this.handleSubmit(values)}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" validators={{required}} name="firstname"  placeholder="First Name" className="form-control" />
                                        <Errors className="text-danger" model=".firstname" show="touched" messages={{required:"Required"}}/>

                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastname" validators={{required}}  name="lastname"  placeholder="Last Name" className="form-control" />
                                        <Errors className="text-danger" model=".lastname" show="touched" messages={{required:"Required"}}/>

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="telnum" md={2}>Contact No.</Label>
                                    <Col md={10}>
                                        <Control.text model=".telnum"  validators={{required , isNumber}}  name="telnum"  placeholder="Phone Number " className="form-control" />
                                        <Errors className="text-danger" model=".telnum" show="touched" messages={{ isNumber:"Phone number must be Number",required:"Required"}}/>

                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email"  validators={{required , validEmail}}  name="email" placeholder="Email" className="form-control" />
                                        <Errors className="text-danger" model=".email" show="touched" messages={{ validEmail:"Email formet does not match",required:"Required"}}/>

                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Col md={{size:5,offset:1}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Control.checkbox model=".agree"    name="agree" className="form-check-input"  /> <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size:3,offset:1}}>
                                        <Control.select model=".contactType" validators={{required}}  name="contactType" className="form-control" >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                        </Control.select>
                                        <Errors className="text-danger" model=".contactType" show="touched" messages={{ required:"Required"}}/>

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" name="message" validators={{required}}   placeholder="Write Your Message" className="form-control"  rows="6"></Control.textarea>
                                        <Errors className="text-danger" model=".message" show="touched" messages={{ required:"Required"}}/>
                                    </Col>
                                </FormGroup>


                                <FormGroup>
                                    <Col md={{size:10,offset:2}}>
                                        <Button type="submit" color="primary" >
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

export default connect(null,mapDispatchToProps)(Contact);














