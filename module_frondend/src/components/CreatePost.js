import React, { Component } from 'react';
import axios from 'axios';


export default class CreatePost extends Component {
     constructor(props){
         super(props);
         this.handleInputName=this.handleInputName.bind(this);
         this.handleInputEmail=this.handleInputEmail.bind(this);
         this.handleInputcourse=this.handleInputcourse.bind(this);
         this.handleInputModuleName=this.handleInputModuleName.bind(this);
         this.handleInputModuleId=this.handleInputModuleId.bind(this);
         this.handleInputModuleDate=this.handleInputModuleDate.bind(this);
         this.savedate=this.savedata.bind(this);
         this.state={
            Name:'',
            Email:'',
            course:'',
            ModuleName:'',
            ModuleId:'',
            ModuleDate:''


         }
     }

     handleInputName (e) {
         this.setState({
            Name:e.target.value,
              
                     })
     }
     handleInputEmail (e){
         this.setState(
             {
                 Email:e.target.value,
             }
         )
     }
     handleInputcourse(e){
         this.setState({
            course:e.target.value,
         })
     }
     handleInputModuleName(e){
         this.setState({
             ModuleName:e.target.value,
         })
     }
     handleInputModuleId(e){
         this.setState({
             ModuleId:e.target.value,
         })
     }
     handleInputModuleDate(e){
      this.setState({
          ModuleDate:e.target.value,
      })
  }
     savedata(e){

          e.preventDefault();
         const data={
             Name:this.state.Name,
             Email:this.state.Email,
             course:this.state.course,
             ModuleName:this.state.ModuleName,
             ModuleId:this.state.ModuleId,
             ModuleDate:this.state.ModuleDate

         }
         axios.post("http://localhost:8000/posts",data)
         .then(()=>{
             alert('Data successfully inserted!');
         })
         .catch(error=>{
             alert(error.message);
         });
     }

     
 
     render(){
        return(
          
          <div className = "container" >
           
           
            <h1 ><center> Create New Post</center></h1>
            <form className="row" style={{ margin:"25px 85px 75px 100px"}}>

            <div className="form-group" style={{marginBottom:'15px'}}>
                   <label style={{marginBottom:'5px'}}>Name</label>
                   <input type="text"
                   className="form-control"
                   name="Name"
                   placeholder="Enter Name"
                   value={this.state.Name}
                   onChange={this.handleInputName}
                   required/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                   <label style={{marginBottom:'5px'}}>Email</label>
                   <input type="text"
                   className="form-control"
                   name="Email"
                   placeholder="Enter Email"
                   value={this.state.Email}
                   onChange={this.handleInputEmail}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>course</label>
                  <input type="text"
                  className="form-control"
                  name="course"
                  placeholder="Enter course"
                  value={this.state.course}
                  onChange={this.handleInputcourse}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>ModuleName</label>
                  <input type="text"
                  className="form-control"
                  name="ModuleName"
                  placeholder="Enter Name"
                  value={this.state.ModuleName}
                  onChange={this.handleInputModuleName}/>
                </div>
    
                <div className="form-group" style={{marginBottom:'15px'}}>
                  <label style={{marginBottom:'5px'}}>ModuleId</label>
                  <input type="text"
                  className="form-control"
                  name="Attendence"
                  placeholder="Enter Attendence"
                  value={this.state.ModuleId}
                  onChange={this.handleInputModuleId}/>
                </div>

                <div class="form-group col-md-2">
          <label for="inputDate"><b>ModuleDate</b></label>


          value={this.state.ModuleDate}
                  onChange={this.handleInputModuleDate}
          <input type="Date" class="form-control" id="inputDate" />

          
        </div>
                 
                </form>
    
                <button className="btn btn-success" type="submit" style={{margin:"25px 85px 75px 100px"}} onClick={this.savedata}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Add
                </button>
    
    
            
    
          </div>
         
          
          
          
        )
        }
    }