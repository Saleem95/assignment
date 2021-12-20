// import React from 'react';
// import React,{ useEffect } from "react";
import React,{useState ,useEffect} from "react";
import axios from 'axios'






const post = ()=>{
   
    const [fistname,setfistname] = useState("");
    const [lastname,setlastname] = useState("")
    const [email,setemail] = useState("")
    const [pasword,setpassword] = useState("")
    const [username,setusername] = useState("")

    let history = usedHistory();
    const Add =(e)=>{
        e.preventDefault()
        axios.post("https://assignmentapis.herokuapp.com/machstatz/add_new_user",{fstname:fistname,lastname:lastname,username:username, email:email,pasword:pasword})
        history.push('/post')
    }
     return(
        <div className="container">
            <form onSubmit={Add} type="submit">
                <h1>Add Users</h1> <hr />
            <input type="text" name="fistname" value="{fistname}" className="form group" onChange={(e)=>{setfistname(e.target.value)}} />
            <input type="text" name="lastname" value="{lastname}" className="form group" onChange={(e)=>{setlastname(e.target.value)}} />
            <input type="text" name="username" value="{username}" className="form group" onChange={(e)=>{setusername(e.target.value)}} />
            <input type="email" name="email" value="{email}" className="form group" onChange={(e)=>{setemail(e.target.value)}} />
            <input type="password" name="password" value="{password}" className="form group" onChange={(e)=>{setpassword(e.target.value)}} />
            <button type="submit">Cancel</button>
            <button id="btn2" type="submit" >Add</button>
            </form>
        
        </div>
     )
}
post()



