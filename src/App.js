import React,{Fragment} from 'react'
import { Router } from 'react-router';
import { Routes, Route, Link } from "react-router-dom";
import Blog from './component/blog/Blog';
import Home from "./component/home/Home"
import SignIn from './component/signIn/SignIn';
import SignUp from './component/signIn/SignUp';


const App = () => {
  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<Blog/>}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Routes>
    </Fragment>
  )
}

export default App
