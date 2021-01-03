import React, {Component} from 'react';
import {Button,NavLink,Alert,Modal,ModalBody,Form,FormGroup,ModalHeader,Label,Input} from 'reactstrap'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../actions/authActions'
import {clearErrors} from '../../actions/errorActions'
class RegisterModel extends Component {
    state = {
        modal: false,
        firstname:'',
        lastname:'',
        grade:'',
        email:'',
        gender:'',
        schoolName:'',
        password:'',
        roles:'student',
        msg:null
        }

    static propTypes = {
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error,isAuthenticated} = this.props;
        if(error !== prevProps.error){
            //check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
            }
        }
        //if authenticated close modal
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal:!this.state.modal
        })
    }

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        const {firstname,lastname,grade,email,password,gender,schoolName,roles} = this.state
        //create user obj
        const newUser = {
            firstname,lastname,grade,email,password,gender,schoolName,roles
        };
        //attempt to register
        this.props.register(newUser)
        
        
      //  this.toggle()

    }

    render(){
        return (
            <div>
               <NavLink onClick={this.toggle} href="#" style={{fontSize:'1rem'}}>
                   Register
               </NavLink>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                <ModalBody>
                    {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert>:null}
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="First Name"
                                onChange={this.onChange}
                                />
                            <Label for="lastname">Last Name</Label>
                            <Input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="Last Name"
                                onChange={this.onChange}
                                />
                            <Label for="email">Email</Label>
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={this.onChange}
                                />
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={this.onChange}
                                />
                            <Label for="grade">Grade</Label>
                            <Input
                                type="text"
                                name="grade"
                                id="grade"
                                placeholder="Grade"
                                onChange={this.onChange}
                                />
                            <Label for="gender">Gender</Label>
                            <Input
                                type="text"
                                name="gender"
                                id="gender"
                                placeholder="Gender"
                                onChange={this.onChange}
                                />
                            <Label for="schoolName">School Name</Label>
                            <Input
                                type="text"
                                name="schoolName"
                                id="schoolName"
                                placeholder="School Name"
                                onChange={this.onChange}
                                />
                            <Label for="roles">Roles</Label>
                            <Input
                                type="text"
                                name="roles"
                                id="roles"
                                placeholder="Roles"
                                onChange={this.onChange}
                                />
                            <Button color='dark' 
                                style={{marginTop:'2rem'}}
                                block>
                                    Register
                                </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>






            </div>
        )
    }
}

const mapStateToProps = state => ({
  isAuthenticated:state.auth.isAuthenticated  ,
  error:state.error
})

export default connect(mapStateToProps,{register,clearErrors})(RegisterModel);
