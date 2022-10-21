import { createBrowserRouter } from "react-router-dom";
import TermsAndCondition from "../../Component/TermsAndCondition/TermsAndCondition";
import Main from "../../Layout/Main/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import Register from "../../Pages/Login/Register";
import News from "../../Pages/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/news')
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
         },
         {
            path: '/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
         },
         {
            path: '/login',
            element: <LogIn></LogIn>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/terms',
            element: <TermsAndCondition></TermsAndCondition>
         }
      ]
   },
]);