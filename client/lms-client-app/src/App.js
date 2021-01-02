import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import LessonList from './components/LessonList'
function App() {
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
