import React,{Component} from 'react';
import {Container,ListGroup,Button,ListGroupItem} from 'reactstrap';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getLessons} from '../actions/lessonActions'
import PropTypes from 'prop-types';

class LessonList extends Component{

    componentDidMount(){
        this.props.getLessons();
    }

    render(){
        const {lessons} = this.props.lesson;
        return(
            <Container>
              <ListGroup>
                  {lessons.map(({id,lesson}) => (
                      <ListGroupItem>{lesson}</ListGroupItem>
                  ))}
              </ListGroup>
            </Container>
        )
    }
}
LessonList.propTypes = {
    getLessons:PropTypes.func.isRequired,
    lesson:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    lesson:state.lesson
})

export default connect(mapStateToProps, {getLessons})(LessonList);