import './App.css';
import React from 'react'
import Get from './components/get';
import Post from './components/post';
import Delete from './components/delete';


function App() { 

  
  return (
      // <>
      <div>
        <h1>WELCOME TO MACHSTATZ</h1>

       <div>
          <Get />
          <Post />
          <Delete />
       </div>
      </div>
    // <marquee behavior="alternate" direction="right"><h1 style="  color: rgb(105, 105, 238);">WELCOME TO MACHSTATZ</h1></marquee>
    //   <div style="text-align: center;">
    // </div><hr /><hr />


    //   <div id="d1">
    //   </div>
    //   <div style="border: 3px solid rgb(117, 115, 115);">
    //     <h2 style="padding: 10px;">Add User</h2> <hr />

    //       <form action="">
    //         <div class="container">
    //           <div>
    //             <label for="">First Name</label><br />
    //               <input class="inp" type="text" placeholder="Enter your First Name" name="firstname" id="fstname" /></div>
    //           <div>
    //             <label for="">Last Name</label><br />
    //               <input class="inp" type="text" placeholder="Enter your last Name" name="lastname" id="lstname" /></div>
    //           <div>
    //             <label for="">Profiles</label> <br />
    //               <select style="width: 100%;" name="" placeholder="select" id="">
    //                 <option value=""></option>
                    
    //               </select>
    //             </div>
    //           <div>
    //             <label for="">Username</label><br />
    //               <input class="inp" type="text" placeholder="Enter your Name" name="" id="username" /></div>
    //           <div>
    //             <label for="">Email Address</label><br />
    //               <input class="inp" type="email" placeholder="Enter your email id" name="email" id="email" /></div>
    //           <div>
    //             <label for="">Password</label><br />
    //               <input class="inp" type="password" placeholder="Enter password" name="" id="" /></div>
    //         </div>
    //         <br />
    //           <hr />
    //             <div class="dd1"><input class="btn1" type="button" value="cancel" onclick="dlt()" /> ;
    //               <input class="btn2" type="button" name="button" id="btn" value="Add" onsubmit="get()" onclick="get()" />
    //             </div>
    //           </form>
    //         </div>
            );
            
          }
            export default App;
          
