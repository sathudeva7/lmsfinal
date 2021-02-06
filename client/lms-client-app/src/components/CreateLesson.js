import React,{Component} from 'react';
import {Button,NavLink,Alert,Modal,ModalBody,Form,FormGroup,ModalHeader,Label,Input} from 'reactstrap'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {clearErrors} from '../actions/errorActions'
import {createLesson} from '../actions/lessonActions'
class CreateLesson extends Component {
    state = {
        modal:false,
        lesson:'',
        grade:'',
        msg:null
    }

    static propTypes = {
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        createLesson:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const {error,isAuthenticated} = this.props;
        if(error !== prevProps.error){
            if(error.id === 'LESSON_FAIL'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
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
        const {lesson,grade} = this.state

        const newLesson = {
            lesson,grade
        };
        this.props.createLesson(newLesson)
    }

    render(){
        return(
            <div>
                <NavLink onClick={this.toggle} href='#' style={{fontSize:'1rem'}}>
                    Create Lesson
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Create Lesson</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert>:null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="lesson">Lesson Name</Label>
                                <Input
                                    type="text"
                                    name="lesson"
                                    id="lesson"
                                    placeholder="lesson"
                                    onChange={this.onChange}
                                />
                                <Label for="grade">Grade</Label>
                                <Input
                                    type="text"
                                    name="grade"
                                    id="grade"
                                    placeholder="grade"
                                    onChange={this.onChange}
                                />
                                <Button color='dark' 
                                style={{marginTop:'2rem'}}
                                block>
                                    Create
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
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error
})

export default connect(mapStateToProps,{createLesson,clearErrors})(CreateLesson);