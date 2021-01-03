import React,{Component} from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container} from 'reactstrap';
import a11 from '../assets/a11.png'
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
                <Card style={{width:"200px"}}>
                    <CardBody>
                        {lessons.map(({id,lesson,grade}) => (
                            <>
                            <CardImg width="50px" src={a11} alt="Card image cap" />
                            <CardTitle tag="h5">{lesson}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">grade: {grade}</CardSubtitle>
                            </>
                        ))}
                    </CardBody>
                </Card>

            
            </Container>
        )
    }
}
LessonList.propTypes = {
    getLessons:PropTypes.func.isRequired,
    lesson:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    lesson:state.lesson
})

export default connect(mapStateToProps, {getLessons})(LessonList);