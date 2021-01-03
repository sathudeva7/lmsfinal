import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import LessonList from './components/LessonList'
import StartPage from './components/StartPage'
import UserModel from './components/UserModel'

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }


 render(){

  return (
   
    <Provider store={store}>
    <div className="App">
      <StartPage />
      
    </div>
    </Provider>

  );
}
}
export default App;
