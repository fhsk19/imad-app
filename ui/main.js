//Counter code
var button= document.getElementById('counter');

button.onclick=function (){
    
        //Creating a request onject
    var request= new XMLHttpRequest();
    
    //Capture a response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE){
            //Take some action
            if (request.status===200){
                //Capture a list and render it as a list
    var names= request.responseText;
    names=JSON.parse(names);
    var list='';
    for (var i=0; i<names.lenght; i++){
        list+='<li>'+ names[i] + '</li>';
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML= list;
      }
        }//Not done yet
};
//Make a request
request.open('GET', 'http://fhsk19.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
};