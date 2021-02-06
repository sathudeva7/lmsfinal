import React,{Component} from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container,Button} from 'reactstrap';
import a11 from '../assets/a11.png'
import {connect} from 'react-redux';
import {getLessons} from '../actions/lessonActions'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import PropTypes from 'prop-types';
import CourseDetail from './CourseDetail' 

class LessonList extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedCourse: null
        }
    
    }

    onCourseSelect(lesson){
        this.setState({selectedCourse:lesson});
    }


    componentDidMount(){
       
        this.props.getLessons();

    }




    renderCourse(lesson){
        if(lesson != null){
            return(
                
              
                <CourseDetail course={lesson} />
             
            );
        }
        else{
            return (
                <div></div>
            )
        }
    }

    render(){
        const {lessons} = this.props.lesson;
        return(
            <Container>
                <Card style={{width:"200px"}}>
                    <CardBody>
                        {lessons.map((lesson) => (
                            <div key={lesson.id}>
                            <CardImg width="50px" src={a11} alt="Card image cap" />
                            <CardTitle tag="h5">{lesson.lesson}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">grade: {lesson.grade}</CardSubtitle>
                            <Router>


                            
                            <Link to={`/lesson/${lesson._id}`}> <Button onClick={() => this.onCourseSelect(lesson)}>View</Button></Link>
                            </Router>
                            </div>
                        ))}
                    </CardBody>
                </Card>

            <div>
               {this.renderCourse(this.state.selectedCourse)} 
            </div>
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