import { useEffect } from "react";
import UserService from "../Services/UserService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ListUser = () =>{

    const getUserData = ()=>{
        UserService.getUser().then((res)=>{
            dispatch({type:"users",value:res.data});
            });
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        getUserData();
    },[]);


    const userDeleteHandler=(id)=>{
        UserService.deleteUser(id).then((res)=>{
            console.log(res);
            getUserData();
        })
    }

    const {users} = useSelector((state)=>state);
    console.log(users);
    return (
      <div className="container">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Phone no.</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                     users.map((user)=>(
                    <tr key={user._id}>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                          <Link to="/edit" className="btn btn-warning m-1">Edit</Link>
                          <button type="button" className="btn btn-danger m-1" onClick={()=>userDeleteHandler(user._id)}>Delete</button>
                      </td>

                  </tr>
                     ))
                  
                  }
              </tbody>
          </table>
      </div>
    );
};

export default ListUser;