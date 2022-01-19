

window.onload= function(){
  let accountInfoList=[];
  var bank= (function(){
    let name;
    let balance;
    function newAcct(){
      name= document.getElementById("aName").value;
      balance=document.getElementById("aDeposit").value;
      if(name=="" || balance==""){
        return null;
      }
      return{
        accname: name,
        deposit: balance
      }
    
    }
  
    return {
      account: function(){

        return newAcct();
        
      }
    }
  
  }());


  var btn= document.getElementById("createAccount");
  btn.onclick= showResults;
  
  function showResults(){

    var ac= bank.account();
    if (ac==null){
      alert("Please enter account name and deposit ");
      return;
    }

    accountInfoList[accountInfoList.length]=ac;
    
    accounts();

  }

  function accounts(){
    var allAcc="";
    accountInfoList.forEach(function(item, index, array) {
      allAcc+= "Account Name: "+ item["accname"] + "   Balance: "+ item["deposit"]+"\n";
    })
  
    document.getElementById("outputTextArea").innerHTML= allAcc;


  }
  
} 


  
  

