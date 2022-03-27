function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="clumsy"&& password=="6672")
{
 alert("Login Success!") ;
 window.location.replace("proxy.html"); 
 return false;
}
else
{
  alert("Login failed!");
}

  
  
}