import React, {Component} from "react";
import "./sidebar.css";



export default class sidebar extends Component {


  render(){
    return(
        
        <div class="wrapper" >
    
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3 style={{fontWeight:'bold',textAlign:'left',marginLeft:'10px',color:'white'}}>Dashboard</h3>
        </div>
        &nbsp;
        <ul class="container-fluid">
           
            <li class="active">
                
                
            <button id="btn"><a href='/' style={{textDecoration:'none',color:'#040010',fontWeight:'bold'}}>Home</a></button> 
                
            </li>
            &nbsp;
            
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'#040010',fontWeight:'bold'}}>Profile</a></button>
            </li>
            &nbsp;
            <h3 style={{fontWeight:'bold',textAlign:'left',color:'white'}}>Course</h3>
            &nbsp;
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'#040010',fontWeight:'bold'}}>ExamManagement</a></button>
            </li>
            &nbsp;
            
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'#040010',fontWeight:'bold'}}>Administration</a></button>
            </li>
            &nbsp;
            <li>
            <button id="btn"><a href='#' style={{textDecoration:'none',color:'#040010',fontWeight:'bold'}}>Navigation</a></button>
            </li>
        </ul>
    </nav>

</div>
     
    )
  }
}