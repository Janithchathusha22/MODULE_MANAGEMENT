import React ,{ Component }from 'react'
import axios from 'axios'

export default class EditPost extends Component {

    
  constructor(props){
    super(props);
    this.state={
      
      Name:"",
      Email:"",
      course:"",
      ModuleName:"",
      ModuleId:"",
      ModuleDate:"",




    }
  }

  handleInputChange = (e)=>{

    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit = (e)=>{

    e.preventDefault();
    const id=this.props.match.params.id;

    const {Name,Email,course,ModuleName,ModuleId,ModuleDate} = this.state;

    const data = {

      Name:Name,
      Email:Email,
      course:course,
      ModuleName:ModuleName,
      ModuleId:ModuleId,
      ModuleDate:ModuleDate
    }

    console.log(data)

    axios.put('/post/update/${id}',data).then((res)=>{
      if(res.data.success){
          alert("Post Updated Successfully")
        this.setState(
          {
            Name:"",
            Email:"",
            course:"",
            ModuleName:"",
            ModuleId:"",
            ModuleDate:""
          }
        )
      }
    })

  }

    componentDidMount(){

        const id=this.props.match.params.id;

        axios.get(`/post/$)${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    
                    Name:res.data.posts.Name,
                    Email:res.data.posts.Email,
                    course:res.data.posts.course,
                    ModuleName:res.data.posts.ModuleName,
                    ModuleId:res.data.posts.ModuleId,
                    ModuleDate:res.data.posts.ModuleDate
                });
                console.log(this.state.post);
            }
        });
    }


   
  
    handleInputChange = (e)=>{
  
      const {name,value} = e.target;
  
      this.setState({
        ...this.state,
        [name]:value
      })
    }
  
    onSubmit = (e)=>{
  
      e.preventDefault();
  
      const {Name,Email,course,ModuleName,ModuleId,ModuleDate} = this.state;
  
      const data = {
  
        Name:Name,
        Email:Email,
        course:course,
        ModuleName:ModuleName,
        ModuleId:ModuleId,
        ModuleDate:ModuleDate
      }
  
      console.log(data)
  
      axios.post("/post/save",data).then((res)=>{
        if(res.data.success){
          this.setState(
            {
              Name:"",
              Email:"",
              course:"",
              ModuleName:"",
              ModuleId:"",
              ModuleDate:""
            }
          )
        }
      })
  
    }
  
    render(){
      return(
       <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
          
            <form className="needs-validation" noValidate>
            
  
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Name</label>
                <input type="text"
                className="form-control"
                name="Name"
                placeholder="Enter Name"
                value={this.state.Name}
                onChange={this.handleInputChange}/>
              </div>
  
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Email</label>
                <input type="text"
                className="form-control"
                name="Email"
                placeholder="Enter Email"
                value={this.state.Email}
                onChange={this.handleInputChange}/>
              </div>
  
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>course</label>
                <input type="text"
                className="form-control"
                name="course"
                placeholder="Enter course"
                value={this.state.course}
                onChange={this.handleInputChange}/>
              </div>
  
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>  ModuleName</label>
                <input type="text"
                className="form-control"
                name="ModuleName"
                placeholder="Enter ModuleName"
                value={this.state.ModuleName}
                onChange={this.handleInputChange}/>
              </div>
  
  
   <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>ModuleId</label>
                <input type="text"
                className="form-control"
                name="Id"
                placeholder="Enter ID"
                value={this.state.ModuleId}
                onChange={this.handleInputChange}/>
              </div>
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>ModuleDate</label>
                <input type="text"
                className="form-control"
                name="Date"
                placeholder="Enter Date"
                value={this.state.zz}
                onChange={this.handleInputChange}/>
              </div>
  
  
              <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-squar"></i>
                &nbsp; Submit
              </button>
  
            </form>
       </div>
       
      );
    }
  }
