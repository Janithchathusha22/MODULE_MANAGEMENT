import React ,{ Component }from 'react';
import axios from 'axios';

export default class PostDetails extends Component{
    constructor(prpos){
        super(prpos);

        this.state={
            post:{}
        };
    }
    
    componentDidMount(){

        const id=this.props.match.params.id;

        axios.get(`/post/$)${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
    }

    render(){
        const {Name,Email,course,ModuleName,ModuleId}=this.state.post;
        return(
            <div style={{margin:'20px'}}>
            <h4>{Name}</h4> 
            <hr/>   
               
               
            <dl className="row">
       

       <dt className="col-sm-3">Email</dt>
       <dd className="col-sm-9">{Email}</dd>
       
       <dt className="col-sm-3">course</dt>
       <dd className="col-sm-9">{course}</dd>

       <dt className="col-sm-3">ModuleName</dt>
       <dd className="col-sm-9">{ModuleName}</dd>

       <dt className="col-sm-3">ModuleId</dt>
       <dd className="col-sm-9">{ModuleId}</dd>

       <dt className="col-sm-3">ModuleDate</dt>
       <dd className="col-sm-9">{ModuleDate}</dd>






        
     </dl>
      </div>
     
    )
  }
}