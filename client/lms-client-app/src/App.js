import {useEffect} from 'react'
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/authActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import LessonList from './components/LessonList'
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  })

  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <LessonList />
    </div>
    </Provider>
  );
}

export default App;
