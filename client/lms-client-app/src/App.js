import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import CourseDetail from './components/CourseDetail'
import LessonList from './components/LessonList'
import StartPage from './components/StartPage'
import UserModel from './components/UserModel'
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }

  static propTypes = {
    auth:PropTypes.object.isRequired
}

 render(){
  const {isAuthenticated,user} = this.props.auth

 


  return (
 <BrowserRouter>  
    <div className="App">
      <AppNavbar />
      
      {!isAuthenticated ? 
      <StartPage /> : 
      <Switch>
        
      <Route path="/" component={UserModel}/>
     
    </Switch>
      }
   
 
    </div>
   </BrowserRouter>

  );
}
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default  connect(mapStateToProps,null)(App);
