browser.browserAction.setIcon({path:"a.png"});
 
 browser.contextMenus.create({
     title:"Translate to tamil",
     id:"Translate_Tamil",
     contexts:["selection"]
     });

     browser.contextMenus.create({
        title:"Translate to English",
        id:"Translate_English",
        contexts:["selection"]
        });

        browser.contextMenus.create({
            title:"Translate to Hindi",
            id:"Translate_Hindi",
            contexts:["selection"]
            });
   

browser.contextMenus.onClicked.addListener(onClick);
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";


function onClick(info,tab){
    console.log("hi")
     var idget = info.menuItemId;
     console.log(idget);
     if(idget == "Translate_Tamil" )
     {
         browser.windows.create({
            url: ["https://translate.google.com/#auto/ta/" + info.selectionText],
            type : "popup",
            height: 500,
            width: 1000,
            titlePreface: "Translation of " + info.selectionText + " into Tamil "

          })
     }
     if(idget == "Translate_English" )
     {
         browser.windows.create({
            url: ["https://translate.google.com/#auto/en/" + info.selectionText],
            type : "popup",
            height: 500,
            width: 1000,
            titlePreface: "Translation of " + info.selectionText + " into English "

          })
     }
     if(idget == "Translate_Hindi" )
     {
         browser.windows.create({
            url: ["https://translate.google.com/#auto/hi/" + info.selectionText],
            type : "popup",
            height: 500,
            width: 1000,
            titlePreface: "Translation of " + info.selectionText + " into Hindi "

          })
     }
    }