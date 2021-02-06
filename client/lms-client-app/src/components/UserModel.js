import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container} from 'reactstrap';
    import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import PropTypes from 'prop-types';
import LessonList from '../components/LessonList'
import { Route ,Link} from 'react-router-dom';
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
                
            <LessonList />
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                       {user.firstname} 
                       {user.lastname}
              
            </NavText>
        </NavItem>
        <NavItem>
            <Route>
            <Link to="/lessonlist">Lesson</Link>
            </Route>
        </NavItem>
        
    </SideNav.Nav>
</SideNav>
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
