import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container} from 'reactstrap';
import PropTypes from 'prop-types';
import LessonList from '../components/LessonList'
export class UserModel extends Component {
    static propTypes = {
        auth:PropTypes.object.isRequired
    }
  render() {
    const {isAuthenticated,user} = this.props.auth
    return (
      <div>
          {isAuthenticated ? 
        <Container>
                <Card style={{width:"200px"}}>
                    <CardBody>
                        
                            <>
                            <CardImg src={user.img}/>
                            <CardTitle tag="h5">{user.firstname}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{user.lastname}</CardSubtitle>
                            </>
                       
                    </CardBody>
                </Card>
            <LessonList />
            
            </Container>
  :""}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,null)(UserModel)
