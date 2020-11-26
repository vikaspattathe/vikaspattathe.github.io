function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {

          var response = JSON.parse(this.responseText);
          var datas= response;
          console.log(datas);
          var output="<h2 style='font-family:cursive;'>"+"Your Todo-List:"+"</h2>"+"<table>"+"<tr>"+"<th>"+"User Id"+"</th>"+"<th>"+"Id"+"</th>"+
                          "<th>"+"Title"+"</th>"+"<th>"+"Completed"+"</th>"+"</tr>";
          for(var i=0;i<datas.length;i++){
              output += "<tr><td>"+datas[i].userId+"</td>";
              output += "<td>"+datas[i].id+"</td>";
              output += "<td>"+datas[i].title+"</td>";
              output += `<td><input type="checkbox" id="checkbox ${i+1}" value="completed ${i+1}"></td>`;
          }
          output+="</table>";
          document.getElementById("content").innerHTML=output;
      }

      
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();

}

var total=0;
document.querySelector('#content').onclick = function(ev) {
  let f=0;  //flag=0 for all checkbox clicks, disregard when flag==1;
  
  if(ev.target.checked==true) {
    console.log('Checked '+ ev.target.id);
    total++;
  }
  else if(ev.target.checked==false){
    console.log('Unchecked '+ ev.target.id);
    total--;
  }
  else {
    f=1;
  }

  var promise = new Promise(function(resolve,reject){
    if(total==5 && f==0){
      resolve();
    }
    else if(f==0){
      reject(total)
    }
  })
  
  promise
  .then(function(){
    alert('Congrats. 5 Tasks have been Successfully Completed');
    console.log(`5 tasks completed`);
  })
  .catch(function(c){
    console.log(`${c} tasks completed`);
    
  })
}

