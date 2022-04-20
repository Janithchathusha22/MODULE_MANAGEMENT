import React, {Component} from "react";


export default class NavBar extends Component {

  handleSearchArea =(e) =>{

    console.log(e.currentTarget.value);

  }

  render(){
    return(
        
        <nav class="navbar navbar-expand-lg " style={{position:'sticky',top:'0',zIndex:'999',backgroundColor:'rgb(6, 70, 98)'}}>
        <a class="navbar-brand" href="#"><h1  style={{color:'rgb(145, 222, 255)',fontWeight:'bold',marginLeft:'20px'}}>Techno Online</h1></a>
        

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/" style={{color:'white'}}> All Vacancies <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">N</a>
            
          </div>
        </div>

        
          <div className="row">
            <div className="col-lg-12 mt-2 mb-2" >
              <input 
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
                
              </input>
            </div>
          </div>
        
      </nav>
     
    )
  }
}