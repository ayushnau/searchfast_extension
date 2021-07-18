


   const searchYoutube = (e) =>
    {
     
       console.log("you searched something");
       let message ={text:e.target.value,searchbar:"data"};

       if(e.target.placeholder==="youtube")
       {
         message.searchbar="youtube"
      }
      else{
          message.searchbar="google"
       }
         
         chrome.runtime.sendMessage(message);
    }
   
   

       const select = document.getElementById('select');
console.log(select);

select.addEventListener("change", searchYoutube);


const selectgoogle=document.getElementById('selectgoogle');
console.log(selectgoogle);
selectgoogle.addEventListener("change",searchYoutube);





