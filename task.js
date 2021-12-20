let api = window.fetch('https://assignmentapis.herokuapp.com/machstatz/get_all_users')

console.log(api)

api.then((res)=>{return res.json()})
.then(data => {console.log(data)
    let data1=""
    data.map((value)=>{

        var row1 = [];
        var row2 = [];
        // var row3 = [];
        // var row3 = [];
        
        var n = 1;
        var x = 0;
        data1 = 
            
        function get(){
            var Addrow = document.getElementById("mytable")
            var newrow = Addrow.insertRow(n)
        
             row1[x] = document.getElementById("fstname").value;
             row2[x] = document.getElementById("lstname").value;
            //  row3[x] = document.getElementById("username").value;
            //  row[x] = document.getElementById("").value;
            
            var cell1= newrow.insertCell(0)
            var cell2= newrow.insertCell(1)
            // var cell3= newrow.insertCell(2)
            // var cell4= newrow.insertCell(3)
        
                cell1.innerHTML = row1[x];
                cell2.innerHTML = row2[x];
                // cell3.innerHTML = row3[x];
                // cell4.innerHTML = row4[x];

             
                n++;
                x++;
        
        }
        get()
        
        

      document.getElementById("d1").innerHTML=data1
      function dlt(){
        //  document.getElementById("mytable").replaceChild[0]
         document.getElementsByTagName("tr")[1].remove();
    }
    dlt()
    })
})
.catch(err =>{console.log(err)})


