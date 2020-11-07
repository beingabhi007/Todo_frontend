import React, {useState} from "react"
import axios from 'axios'


const Home = () =>{
  
const[shoppingList,setShoppingList]=useState([]);  
const[todo,setTodo]=useState('');

axios.get('api/items/')
  .then(function (response) {
    // handle success
   // console.log(response);
    setShoppingList(response.data);   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  const createTodo = () => {
      
      axios.post(`api/items`,{
        name: todo
      }).then(()=> console.log('Done'))
     // console.log(todo);
  }

  const deleteTodo = (id) =>{
axios.delete(`api/items/${id}`)
     }

    return(
       <>
        <h1 id="main">TODO LIST</h1> <br/>  <br/>
      
      <div className="row" style={{marginRight: "0px", marginLeft: "0px"}}>
      <div className="col-lg-6 mx-auto">
      <form onSubmit={createTodo}>
      <div className="form-group">
      <input 
      className="form-control"
      placeholder="Type here..."
      type="text" 
      value={todo}
      onChange={ (e) => { setTodo(e.target.value) }}
      />    
      </div>
      <button
      className="btn btn-danger btn-block"
      type="submit"
      >
       Add todo...   
      </button>
      </form>
       <br/> 
       </div>   </div>  


      {shoppingList.map(shop =>{
       return(
      <div key={shop._id} >
      <div className="row" style={{marginRight: "0px", marginLeft: "0px"}}>
      <div className="col-lg-6 mx-auto">
      <div className="alert alert-primary" role="alert">
      {shop.name}
      <i 
       className="fa fa-trash mt-1 float-right"
       style={{fontSize: "20px"}}
       onClick={ () => {deleteTodo(shop._id)}}
       ></i>
      </div>
      </div>  
      
      </div> 
      </div>
       )
      })} 

       </>
    )
}

export default Home;