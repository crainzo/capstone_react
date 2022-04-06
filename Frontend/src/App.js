import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import {Route,Routes} from 'react-router-dom'
import {useSelector} from 'react-redux';
import ListUser from "./User/ListUser";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import Header from "./Components/Header/Header";

function App() {
  const {isLogged} = useSelector((state)=>state);
  return (
    <div className="container">
      <h2>This is CRUD App</h2>
      {/* {!isLogged ?<Login/> : ""} */}
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/list" element={<ListUser/>}/>
        <Route path="/create" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>

    </div>
  );
}

export default App;
