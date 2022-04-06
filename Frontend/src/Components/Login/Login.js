import { useDispatch,useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";


const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {email,password,isLogged} = useSelector((state)=>state);
    
    useEffect(()=>{
      const localdata = localStorage.getItem("token");
      if(localdata){
          navigate("/list");
      }
    },[])
    const emailChangeHandler = (event)=>{
        dispatch({type:"email",value:event.target.value});
    };

    const passwordChangeHandler = (event)=>{
        dispatch({type:"password",value:event.target.value});
    };

    const loginHandler =(event)=>{
       event.preventDefault();
       UserService.loginUser({"email":email,"password":password}).then((res)=>{
        if(res.data!=""){
        
            localStorage.setItem("token",res.data.token);
            dispatch({type:"logged",value:true});
            navigate("/list");
        }

        else{

            dispatch({type:"logged",value:false});
        }
       })
    }

    return (
        <div className="container mt-3">
            {
                isLogged === false ? (
                     <div className="alert alert-danger">
                         <strong>Error:</strong>Login Credential Error
                     </div>
                ): ("")
            }
            <form onSubmit={loginHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email"></label>
                    <input type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={emailChangeHandler}
                    />
                </div>

                <div className="mt-3 mb-3">
                    <label htmlFor="password"></label>
                    <input type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-control"
                    onChange={passwordChangeHandler} 
                    />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>

        </div>
    );
};


export default  Login;