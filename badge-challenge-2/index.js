function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            var datas= response.info;
            console.log(datas);
            var output="<h2 style='font-family:Monospace;'>"+"Things to buy:"+"</h2>"+"<table>"+"<tr>"+"<th>"+"Slno"+"</th>"+"<th>"+"Name"+"</th>"+
                            "<th>"+"Quantity"+"</th>"+"<th>"+"Unit"+"</th>"+"<th>"+"Department"+"</th>"+"<th>"+"Notes"+"</th>"+"</tr>";
            for(var i=0;i<datas.length;i++){
                output += "<tr><td>"+datas[i].slno+"</td>";
                output += "<td>"+datas[i].name+"</td>";
                output += "<td>"+datas[i].quantity+"</td>";
                output += "<td>"+datas[i].unit+"</td>";
                output += "<td>"+datas[i].department+"</td>";
                output += "<td>"+datas[i].notes+"</td></tr>";
            }
            output+="</table>";
            document.getElementById("content").innerHTML=output;
        }

        
    }
    xhttp.open("GET","info.json",true);
    xhttp.send();

    
}