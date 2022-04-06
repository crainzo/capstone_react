import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserService from "../Services/UserService";

const AddUser = () =>{

    const navigate = useNavigate();
    const {fullname,usermail,userphone,userpassword,usergender}= useSelector((state)=>state);
    const dispatch = useDispatch();

    const submitHandler = (event)=>{
        event.preventDefault();

        UserService.postUser({
            fullname:fullname,
            email:usermail,
            gender:usergender,
            phone:userphone,
            password:userpassword
        }).then((res)=>{
            console.log(res);
            if(res.status==200){
                navigate("/list");
            }
        })

    }
    return (
       <div className="container m-2">
           <h3>Create New Users</h3>

           <form onSubmit={submitHandler}>
               <div className="form-group">
                   <label htmlFor="fullname">FullName</label>
                   <input type="text"
                   name="fullname"
                   id="fullname"
                   className="form-control"
                   placeholder="Enter FullName"
                   onChange={(event)=> dispatch({type:"userfullname",value:event.target.value})}
                   />
               </div>

               <div className="form-group">
                   <label htmlFor="email">Email</label>
                   <input type="email"
                   name="email"
                   id="email"
                   className="form-control"
                   placeholder="Enter Email"
                   onChange={(event)=> dispatch({type:"usermail",value:event.target.value})}
                   />
               </div>

               <div className="form-group">
                   <label htmlFor="password">Phone</label>
                   <input type="password"
                   name="password"
                   id="password"
                   className="form-control"
                   placeholder="Enter Password"
                   onChange={(event)=> dispatch({type:"userpassword",value:event.target.value})}
                   />
               </div>

               <div className="form-group">
                   <label htmlFor="phone">Phone</label>
                   <input type="text"
                   name="phone"
                   id="phone"
                   className="form-control"
                   placeholder="Enter Phone"
                   onChange={(event)=> dispatch({type:"userphone",value:event.target.value})}
                   />
               </div>

               <div className="form-group">
                   <div className="form-check form-check-inline">
                       <input type="radio"
                        name="gender"
                        id="gender"
                        className="form-check-input"
                        value="Male"
                        checked={usergender === "Male"}
                        onChange={(event)=> dispatch({type:"usergender",value:event.target.value})}
                       />

                       <label htmlFor="gender" className="form-check-label">
                           Male
                       </label>

                     </div>

                    <div className="form-check form-check-inline">
                        <input type="radio"
                        name="gender"
                        id="gender"
                        className="form-check-input"
                        value="Female"
                        checked={usergender === "Female"}
                        onChange={(event)=> dispatch({type:"usergender",value:event.target.value})}
                        />

                        <label htmlFor="gender" className="form-check-label">
                        Female
                        </label>

                    </div>

                       <div className="form-check form-check-inline">

                                <input type="radio"
                                name="gender"
                                id="gender"
                                className="form-check-input"
                                value="Other"
                                checked={usergender === "Other"}
                                onChange={(event)=> dispatch({type:"usergender",value:event.target.value})}
                                />

                       <label htmlFor="gender" className="form-check-label">
                           Other
                       </label>
                   </div>

                   
               </div>

               <div className="form-group">
                       <input type="submit" value="Add User" className="btn btn-primary"/>
                   </div>

           </form>
       </div>
    );
};

export default AddUser;