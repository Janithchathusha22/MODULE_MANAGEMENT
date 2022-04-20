import React, {Component} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import Sidebar from './components/sidebar';
import './App.css';
 
export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <div className="sidebar">
          <Sidebar></Sidebar>
        <div className="others">

          <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path="/add" element={<CreatePost/>}/>
          <Route exact path="/edit/:id" element={<EditPost/>}/>
          <Route exact path="/posts/:id" element={<PostDetails/>}/>
          </Routes>
          </div>
          </div>

        </div>
      </BrowserRouter>
     
    )
  }
}