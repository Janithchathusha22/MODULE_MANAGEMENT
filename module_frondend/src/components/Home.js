import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {
constructor(props){
  super(props)

  this.state={
    posts:[]
  };

}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)

     }
  });
}

onDelete=(id)=>{
  axios.delete(`/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}

filterData(posts,searchKey){
  const result=posts.filter((post)=>
  posts.Name.toLowerCase().includes(searchKey)||
  posts.Email.toLowerCase().includes(searchKey)||
  posts.course.toLowerCase().includes(searchKey)||
  posts.ModuleName.toLowerCase().includes(searchKey)||
  posts.ModuleId.toLowerCase().includes(searchKey)||
  posts.ModuleDate.toLowerCase().includes(searchKey)
 
  )
  this.setState({posts:result})
}

handleSearchArea=(e)=>{

  const searchKey=e.currentTarget.value;

  axios.get("/posts").then(res =>{
    if(res.data.success){
     
      this.filterData(res.data.existingPosts,searchKey)

     }
  });
}

render(){
  return(
    <div className="container">
     <div className="row"> 
       <div className="col-log-9 mt-2 mb-2">
         <h4>All Posts</h4>

       </div>
       <div>
       <img class="image" src="admin.jpg"></img>
     </div>
       <div className="col-lg-3 mt-2 mb-2">
         <input
         className="from-control"
         type="search"
         placeholder="search"
         name="searchQuery"
         onChange={this.handleSearchArea}>

         </input>
         
       </div>
     </div>
     
      <table className="table table-hover" style={{marginTop:'40px'}}>
        <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">course</th>
             <th scope='col'>ModuleName</th>
             <th scope='col'>ModuleId</th>
             <th scope='col'>ModuleDate</th>
             <th scope="col">Action</th>
           </tr>
        </thead>
        <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                
                  <th scope="row">{index+1}</th>
                  <td>
                    <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}>
                    {posts.Name}
                    </a>
                  </td>
                 
                  <td>{posts.Email}</td>
                  <td>{posts.course}</td>
                  <td>{posts.ModuleName}</td>
                  <td>{posts.ModuleId}</td>
                  <td>{posts.ModuleDate}</td>
                  <td>
                    <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                      <i className="far fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>

            ))}



        </tbody>

      </table>

      <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Creat New Module</a></button>



    </div>
  )
}
}