function todo_lis(){
    var itm=document.getElementById("inp").value;
    var txt=document.createTextNode(itm);
    var newItm=document.createElement("li");
    newItm.appendChild(txt);
    if(itm ===''){
      alert("Please enter your task");
    }
    else{
        document.getElementById("list").appendChild(newItm);
    }
    document.getElementById("inp").value ="";
    newItm.onclick = remove;
  }
  function remove(e){
    e.target.parentElement.removeChild(e.target);
  }