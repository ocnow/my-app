import Login  from './login';
import PostLogin from './postLogin';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logined" element={<PostLogin  />}/>
      </Routes>
    </Router>
    
  );
}

export default App;