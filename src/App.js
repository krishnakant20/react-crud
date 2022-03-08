import './App.css';
import AddUser from './Components/AddUser/AddUser';
import AllUsers from './Components/AllUsers/AllUsers';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import EditUser from './Components/EditUser/EditUser';

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all" element={<AllUsers />} />
          <Route exact path="/add" element={<AddUser />} />
          <Route exact path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
