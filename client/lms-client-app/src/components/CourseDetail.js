import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { List } from 'reactstrap';
export class CourseDetail extends Component {
    constructor(props){
        super(props);
        
    }

    renderUser(user){
        if(user == null || user.length == 0){
            return (<div></div>)
        } else{
            const user_detail = user.map((userdetail) => {
                return(
                    <li>
                        <p>
                        {userdetail.studentid.firstname}<br></br>
                            {JSON.stringify(userdetail.isVerified)}
                            
                            
                           
                        </p>
                    </li>
                )
            })
            return (
                <div>
                    <h4>Students</h4>
                    <List type="unstyled">
                        {user_detail}
                    </List>
                </div>
            );
        }
    }

    renderCourse(lesson){
        if(lesson != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>{lesson.lesson}</CardTitle>
                            <CardText>{lesson.grade}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderUser(lesson.students)}
                    </div>
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }

  render() {
    return (
      <div>
        {this.renderCourse(this.props.course)}
      </div>
    )
  }
}

export default CourseDetail
