
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Landingpage from './components/Landingpage';
import BootstrapNavbar from './components/Navbar';
import Posts from './components/Posts';
import Contact from './components/Contact';
import About from './components/About';
import HOC from './components/HOC';
import Page404 from './components/Page404';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Post from './components/Post';
import Count from './components/Count';
import { Provider } from 'react-redux'
import store from './redux/Store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BootstrapNavbar />
        <Container>
          <Routes>
            <Route path='/' element={<Landingpage></Landingpage>} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<HOC component={About} />} />
            <Route path='/contact' element={<HOC component={Contact} />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/count' element={<Count />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>



  )
}

export default App;
