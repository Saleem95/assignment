// import React from 'react'

import React,{useEffect,useState} from "react";
import axios from 'axios';
import '../App'


function get(){
 let [data ,setData] = useState([])
    useEffect( () =>{
        fetch("https://assignmentapis.herokuapp.com/machstatz/get_all_users")
    .then(res=>{ res.json()
        .then((resp) =>{ console.log(resp)
        })
    });
    })
    return (
        <div className="get">
           <h1> Get API </h1>

           <table border="2">
           <tr>
             <td>Id</td>
             <td>FirstName</td>
             <td>LastName</td>
             <td>UserNAme</td>
             <td>Email</td>
           </tr>
           {
               data.map((item)=>{
                <tr>
                <td>{item.id}</td>
                <td>{item.fist_name}</td>
                <td>{item.last_name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>

               })
           }
               
           </table>
          </div>
        
    )

}
get()


export default function get1(){
    const [data,setdata] = useState([])

    const get = (e)=>{
        axios.get("https://assignmentapis.herokuapp.com/machstatz/get_all_users").then(res => setdata(res.data))
    }
    useEffect( ()=> {get()},[])
  
const handleDelete = (id)=>{
    axios.delete(`https://assignmentapis.herokuapp.com/machstatz/delete_existing_user${id}`)
}

    {data.map((ele , key)=>{
        return( 
            <div className="row">
               <div className="card" key={key}>
                 <div className="card-body">
                    <p className="card-text">{ele.fist_name}</p>
                    <p className="card-text">{ele.last_name}</p>
                    <p className="card-text">{ele.username}</p>
                    <p className="card-text">{ele.email}</p>
                    <button id="btn" type="button" onClick={()=>{handleDelete(ele.id)}}>delete</button>
                 </div>
           </div>
         </div>
        )
    })
    
    }

}
