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
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
               
      }
        }//Not done yet
    }
    //Make the request
    request.open('GET','http://fhsk19.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
