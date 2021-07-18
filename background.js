chrome.runtime.onMessage.addListener(reciever);

function reciever(request){
   console.log(request);
   var url;
   if(request.searchbar==="youtube"){
    url=`https://www.youtube.com/results?search_query=+${request.text}`;
  }
  
  else{
    url=`https://www.google.com/search?q=${request.text}`;
   }
   
   console.log(url);

   main(url);

   function chromeTabsCreateAsync(createProperties) {
    return new Promise((resolve, reject) => {
        chrome.tabs.create(createProperties, tab => {
            if (chrome.runtime.lastError) {
                reject(new Error(chrome.runtime.lastError));
            } else {
                resolve(tab);
            }
        });
    });
}


async function main(searchurl) {
     
      let tab = await chromeTabsCreateAsync({ url: searchurl, active: true});
      console.log('Tab created: ' + tab.id);
}

}

