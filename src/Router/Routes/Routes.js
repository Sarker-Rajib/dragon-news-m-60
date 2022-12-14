import { createBrowserRouter } from "react-router-dom";
import Profile from "../../Component/Profile/Profile";
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
            loader: () => fetch('https://dragon-news-server-mo-60-node.vercel.app/news')
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`https://dragon-news-server-mo-60-node.vercel.app/category/${params.id}`)
         },
         {
            path: '/news/:id',
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({ params }) => fetch(`https://dragon-news-server-mo-60-node.vercel.app/news/${params.id}`)
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
         },
         {
            path: '/profile',
            element:
               <PrivateRoute>
                  <Profile></Profile>
               </PrivateRoute>
         }
      ]
   },
]);