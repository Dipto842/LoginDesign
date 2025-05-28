import {
  createBrowserRouter,
 
} from "react-router-dom";
import LoginPages from '../Pages/LoginPages'
import Login from '../loginBar/Login'
import CreateAccount from '../loginBar/CreateAccount'
import Account from "../Pages/Account Settings/Account";

 const router = createBrowserRouter([
  {
    path: "/",
    element:<LoginPages></LoginPages>  ,
    children:[
       
       

    ]
  },
  {
     path:'/login',
     element:<Login></Login>
  },
  {
     path:'/CreateAccount',
      element:<CreateAccount></CreateAccount>
  },
  {
     path:'/Account',
    element:<Account></Account>
  }

]);

export default router