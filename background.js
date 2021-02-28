table=[];
row=[];
isNotClicked=1;
plan=""
 
chrome.contextMenus.create({
    title: "add device: %s", 
    contexts:["selection"], 
    onclick:function(a){
        console.log(a);
        key=a.selectionText;
        value=prompt("enter a name")
        jsonfile={}
        jsonfile[key]=value
        chrome.storage.sync.set(jsonfile, function() {
            console.log('Value is set to ' + key);
          });
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action:"refresh"}, function(response) {});  
        });
    }
  });
var sendMsgToTab=function(tab,msg) {
                chrome.tabs.sendMessage(tab.id, msg, function(response){});
}
chrome.browserAction.onClicked.addListener(function(){
    // var w=window.open("https://www.facebook.com/v2.10/dialog/oauth? client_id=154620008433771&display=popup&response_type=token&redirect_uri=https://www.facebook.com/connect/login_success.html","MsgWindow", "width=500,height=500");

// window.open("https://www.facebook.com/dialog/feed?  app_id=154620008433771&display=popup&amp;caption=An%20example%20caption&link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https://developers.facebook.com/tools/explorer");
// FB.ui(
//  {
//   method: 'share',
//   href: 'https://zajel.najah.edu'
// }, function(response){});
    chrome.tabs.create({ url: "http://zajellb.najah.edu/servlet/UniCurricula" });
});
chrome.runtime.onMessage.addListener(
        function(msg, sender, sendResponse) {
            console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
            if(msg.action=='savePlan'){
                plan=msg.planUrl;
                isNotClicked=0;
            }
            else if(msg.action=='remove'){
                for(var i=0;i<table.length;i++){


                    if(msg.sTime.trim()==table[i][1].trim()&&msg.sDay==table[i][3])table.splice(i,1);


                }
            }
            else if(msg.action=='removeAll')table=[];
            if(msg.action=="copy"){
                row=[msg.courseName,msg.timeCourse,msg.teacherName,msg.day,msg.room];

                table.push(row);
            }
            else if(msg.action=='getTable'){
                if(table.length){sendMsgToTab(sender.tab,{action:'sendTable',timeTable:table,buttonStatus:!isNotClicked,sendPlan:plan});}
                else sendMsgToTab(sender.tab,{action:'sendTable',timeTable:[],buttonStatus:!isNotClicked,sendPlan:plan});
            }

            else if(msg.action=="hideTable"){
                isNotClicked=!isNotClicked;

                if(isNotClicked)sendMsgToTab(sender.tab,{action:'refresh'});
                if(table.length){sendMsgToTab(sender.tab,{action:'sendTable',timeTable:table,buttonStatus:!isNotClicked,sendPlan:plan})}
                else sendMsgToTab(sender.tab,{action:'sendTable',timeTable:[],buttonStatus:!isNotClicked,sendPlan:plan});

            }
            else if(msg.action=='savePlan'){
                plan=msg.planUrl;
                isNotClicked=0;
            }
        });
