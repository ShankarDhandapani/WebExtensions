chrome.browserAction.setIcon({path:"a.png"});

chrome.contextMenus.create({
    title:"Translate to Tamil",
    id:"Translate_Tamil",
    contexts:["selection"]
    });

    chrome.contextMenus.create({
       title:"Translate to English",
       id:"Translate_English",
       contexts:["selection"]
       });

       chrome.contextMenus.create({
        title:"Translate to Hindi",
        id:"Translate_Hindi",
        contexts:["selection"]
        });
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

chrome.contextMenus.onClicked.addListener(onClick);

function onClick(info,tab){
    var idget = info.menuItemId;
    console.log(idget);
    if(idget == "Translate_Tamil" )
    {
        chrome.windows.create({
            url: ["https://translate.google.com/#auto/ta/" + info.selectionText],
            type : "popup",
            height: 500,
            width: 1000
     })
    
    }
    if(idget == "Translate_English" )
    {
        chrome.windows.create({
            url: ["https://translate.google.com/#auto/en/" + info.selectionText],
            type : "popup",
            height: 500,
            width: 1000
     })
    }
    if(idget == "Translate_Hindi" )
    {
        chrome.windows.create({
            url: ["https://translate.google.co.in/#auto/hi/" + info.selectionText],
            type : "popup",
            height: 500,
            width: 1000
     })
    }
   }