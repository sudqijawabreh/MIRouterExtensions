  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/
 // appAPI.message.addListener(function(msg){
	// });





	
var finished=1;
var clicked=0;

 copymsg=[];
var recPlan="";
 copymsg=[];
  colors=["FEF7CF","DCB8CB","B1D6D8","A7AFFC","A8E8FB","A8E8FB","FBD6FE","FDD09F","C5A6FD","C2C8A4","D8A48D","FBBBA8","9FCCFD","AAA4C8"];
 colorIndex=0;
 color="";
var text =decodeURIComponent('%D9%8A%D9%88%D8%AC%D8%AF%20%D8%AA%D8%B9%D8%A7%D8%B1%D8%B6%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B9%D9%8A%D8%AF');
var sunday=decodeURIComponent("%D8%A7%D8%AD%D8%AF");
var mondayShort=decodeURIComponent("%D8%A7%D8%AB%D9%86");
var tuseday=decodeURIComponent("%D8%AB%D9%84%D8%A7%D8%AB");
var wednsdayShort=decodeURIComponent("%D8%A7%D8%B1%D8%A8%D8%B9")
var thursday=decodeURIComponent("%D8%AE%D9%85%D9%8A%D8%B3");
var saturday=decodeURIComponent("%D8%B3%D8%A8%D8%AA");
var monday=decodeURIComponent("%D8%A7%D8%AB%D9%86%D9%8A%D9%86");
var wednsday=decodeURIComponent("%D8%A7%D8%B1%D8%A8%D8%B9%D8%A7%D8%A1");
var backToPlan=decodeURIComponent("%D8%A7%D9%84%D8%B1%D8%AC%D9%88%D8%B9%20%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D8%AE%D8%B7%D8%A9%20");
var hideTableText=decodeURIComponent("%D8%A7%D8%AE%D9%81%D8%A7%D8%A1%20%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84%0A");
var showTableText=decodeURIComponent("%D8%A7%D8%B8%D9%87%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%AF%D9%88%D9%84");
var finaltext=showTableText;
function planIt(){
	plan=$('body').first().find('center').find('table').first().next().next().next();
	var planId=$('input[type="hidden"]').attr('value');
	var year=$('select[name=curVal]').find('option').attr('value');
	planTrNum=$(plan).find('tr').length;
	for(var i=2;i<planTrNum;i++){
		var tr=$(plan).find('tr:eq('+i+')');
		var numPlan=$(tr).find('td').first().text();
		var innerText=$(tr).find('td').first().next().next().text();
		$(tr).find('td').first().next().next().text("");
		$(tr).find('td').first().next().next().append('<a class="courseLink" href=http://zajellb.najah.edu/servlet/materials?b=num&var='+numPlan+'>'+innerText+'</a>')
	}
	$(plan).on('click','.courseLink',function(){
		var url=document.URL;
		//var index=url.indexOf('&dispOpt=');
		//url=url.slice(0,index);
		url+="?majVal="+planId+"&curVal="+year;
    chrome.runtime.sendMessage({action:'savePlan',planUrl:url}, function(response) {
          console.log(response.farewell);
    });
    });






		var selectString='<select size="1" name="b">\
<option selected="" value="0"> ------------------------</option>\
<option value="10601">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1583;&#1606;&#1610;&#1577;</option>\
<option value="10606">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1593;&#1605;&#1575;&#1585;&#1610;&#1577;</option>\
<option value="10611">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1576;&#1606;&#1575;&#1569;</option>\
<option value="10616">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1578;&#1582;&#1591;&#1610;&#1591; &#1575;&#1604;&#1593;&#1605;&#1585;&#1575;&#1606;&#1610;</option>\
<option value="10621">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1610;&#1603;&#1575;&#1606;&#1610;&#1603;&#1610;&#1577;</option>\
<option value="10626">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1603;&#1610;&#1605;&#1610;&#1575;&#1574;&#1610;&#1577;</option>\
<option value="10631">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1589;&#1606;&#1575;&#1593;&#1610;&#1577;</option>\
<option value="10636">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1581;&#1575;&#1587;&#1608;&#1576;</option>\
<option value="10641">&#1575;&#1604;&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1603;&#1607;&#1585;&#1576;&#1575;&#1574;&#1610;&#1577;</option>\
<option value="10646">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1575;&#1578;&#1589;&#1575;&#1604;&#1575;&#1578;</option>\
<option value="10651">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1610;&#1603;&#1575;&#1578;&#1585;&#1608;&#1606;&#1603;&#1587;</option>\
<option value="10656">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1591;&#1575;&#1602;&#1577; &#1608;&#1575;&#1604;&#1576;&#1610;&#1574;&#1577;</option>\
<option value="10661">&#1607;&#1606;&#1583;&#1587;&#1577; &#1575;&#1604;&#1605;&#1608;&#1575;&#1583;</option>\
<option value="10671">&#1593;&#1604;&#1605; &#1575;&#1604;&#1581;&#1575;&#1587;&#1608;&#1576;</option>\
<option value="18">&#1583;&#1603;&#1578;&#1608;&#1585; &#1589;&#1610;&#1583;&#1604;&#1610;</option>\
<option value="21">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1591;&#1576;&#1610;&#1577; &#1575;&#1604;&#1605;&#1582;&#1576;&#1585;&#1610;&#1577;</option>\
<option value="10201">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1581;&#1610;&#1575;&#1578;&#1610;&#1577;</option>\
<option value="10206">&#1575;&#1604;&#1571;&#1581;&#1610;&#1575;&#1569; &#1576;&#1610;&#1608;&#1578;&#1603;&#1606;&#1608;&#1604;&#1608;&#1580;&#1610;&#1575;</option>\
<option value="10211">&#1575;&#1604;&#1585;&#1610;&#1575;&#1590;&#1610;&#1575;&#1578;</option>\
<option value="10216">&#1575;&#1604;&#1575;&#1581;&#1589;&#1575;&#1569;</option>\
<option value="10221">&#1575;&#1604;&#1601;&#1610;&#1586;&#1610;&#1575;&#1569;</option>\
<option value="10226">&#1575;&#1604;&#1601;&#1610;&#1586;&#1610;&#1575;&#1569; /&#1601;&#1585;&#1593;&#1610; &#1575;&#1604;&#1603;&#1578;&#1585;&#1608;&#1606;&#1610;&#1575;&#1578;</option>\
<option value="10231">&#1575;&#1604;&#1603;&#1610;&#1605;&#1610;&#1575;&#1569;</option>\
<option value="10236">&#1603;&#1610;&#1605;&#1610;&#1575;&#1569; &#1578;&#1591;&#1576;&#1610;&#1602;&#1610;&#1577;</option>\
<option value="10301">&#1575;&#1604;&#1604;&#1594;&#1577; &#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577; &#1608;&#1570;&#1583;&#1575;&#1576;&#1607;&#1575;</option>\
<option value="10306">&#1575;&#1604;&#1604;&#1594;&#1577; &#1575;&#1604;&#1573;&#1606;&#1580;&#1604;&#1610;&#1586;&#1610;&#1577; &#1608;&#1570;&#1583;&#1575;&#1576;&#1607;&#1575;</option>\
<option value="10311">&#1575;&#1604;&#1604;&#1594;&#1577; &#1575;&#1604;&#1601;&#1585;&#1606;&#1587;&#1610;&#1577;</option>\
<option value="10316">&#1575;&#1604;&#1587;&#1610;&#1575;&#1581;&#1577; &#1608;&#1575;&#1604;&#1570;&#1579;&#1575;&#1585;</option>\
<option value="10321">&#1575;&#1604;&#1578;&#1575;&#1585;&#1610;&#1582; </option>\
<option value="10401">&#1575;&#1604;&#1601;&#1602;&#1607; &#1608;&#1575;&#1604;&#1578;&#1588;&#1585;&#1610;&#1593;</option>\
<option value="10406">&#1571;&#1589;&#1608;&#1604; &#1575;&#1604;&#1583;&#1610;&#1606;</option>\
<option value="10411">&#1588;&#1585;&#1610;&#1593;&#1577; &#1608;&#1605;&#1589;&#1575;&#1585;&#1601; &#1573;&#1587;&#1604;&#1575;&#1605;&#1610;&#1577;</option>\
<option value="10506">&#1585;&#1610;&#1575;&#1590; &#1575;&#1604;&#1571;&#1591;&#1601;&#1575;&#1604;</option>\
<option value="10516">&#1603;&#1604;&#1610;&#1577; &#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1578;&#1585;&#1576;&#1608;&#1610;&#1577; &#1608;&#1573;&#1593;&#1583;&#1575;&#1583; &#1575;&#1604;&#1605;&#1593;&#1604;&#1605;&#1610;</option>\
<option value="10531">&#1575;&#1604;&#1578;&#1585;&#1576;&#1610;&#1577; &#1575;&#1604;&#1585;&#1610;&#1575;&#1590;&#1610;&#1577;</option>\
<option value="10535">&#1575;&#1604;&#1578;&#1583;&#1585;&#1610;&#1576; &#1575;&#1604;&#1585;&#1610;&#1575;&#1590;&#1610;</option>\
<option value="10676">&#1571;&#1606;&#1592;&#1605;&#1577; &#1575;&#1604;&#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578; &#1575;&#1604;&#1573;&#1583;&#1575;&#1585;&#1610;&#1577;</option>\
<option value="10681">&#1571;&#1606;&#1592;&#1605;&#1577; &#1575;&#1604;&#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578; &#1575;&#1604;&#1581;&#1575;&#1587;&#1608;&#1576;&#1610;&#1577;</option>\
<option value="10686">&#1575;&#1604;&#1588;&#1576;&#1603;&#1575;&#1578; &#1608;&#1571;&#1605;&#1606; &#1575;&#1604;&#1605;&#1593;&#1604;&#1608;&#1605;&#1575;&#1578;</option>\
<option value="10701"> &#1605;&#1587;&#1575;&#1585;&#1593;&#1604;&#1608;&#1605; &#1591;&#1576;&#1610;&#1577; &#1581;&#1610;&#1608;&#1610;&#1577;</option>\
<option value="10706">&#1575;&#1604;&#1589;&#1610;&#1583;&#1604;&#1577;</option>\
<option value="10707">&#1583;&#1603;&#1578;&#1608;&#1585; &#1589;&#1610;&#1583;&#1604;&#1610;</option>\
<option value="10711">&#1575;&#1604;&#1576;&#1589;&#1585;&#1610;&#1575;&#1578;</option>\
<option value="10716">&#1575;&#1604;&#1578;&#1605;&#1585;&#1610;&#1590;</option>\
<option value="10717">&#1575;&#1604;&#1602;&#1576;&#1575;&#1604;&#1577;</option>\
<option value="10721">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1591;&#1576;&#1610;&#1577; &#1575;&#1604;&#1605;&#1582;&#1576;&#1585;&#1610;&#1577;</option>\
<option value="10726">&#1575;&#1604;&#1578;&#1589;&#1608;&#1610;&#1585; &#1575;&#1604;&#1591;&#1576;&#1610;</option>\
<option value="10801">&#1575;&#1604;&#1575;&#1602;&#1578;&#1589;&#1575;&#1583;</option>\
<option value="10806">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1587;&#1610;&#1575;&#1587;&#1610;&#1577; </option>\
<option value="10811">&#1575;&#1604;&#1580;&#1594;&#1585;&#1575;&#1601;&#1610;&#1575;</option>\
<option value="10816">&#1593;&#1604;&#1605; &#1575;&#1604;&#1575;&#1580;&#1578;&#1605;&#1575;&#1593; &#1608;&#1575;&#1604;&#1582;&#1583;&#1605;&#1577; &#1575;&#1604;&#1575;&#1580;&#1578;&#1605;&#1575;&#1593;&#1610;&#1577;</option>\
<option value="10821">&#1593;&#1604;&#1605; &#1575;&#1604;&#1606;&#1601;&#1587; _ &#1601;&#1585;&#1593;&#1610; &#1573;&#1585;&#1588;&#1575;&#1583; &#1606;&#1601;&#1587;&#1610;</option>\
<option value="10841">&#1575;&#1604;&#1589;&#1581;&#1575;&#1601;&#1577; &#1575;&#1604;&#1605;&#1603;&#1578;&#1608;&#1576;&#1577; &#1608;&#1575;&#1604;&#1575;&#1604;&#1603;&#1578;&#1585;&#1608;&#1606;&#1610;&#1577;</option>\
<option value="10846">&#1575;&#1604;&#1573;&#1584;&#1575;&#1593;&#1577; &#1608;&#1575;&#1604;&#1578;&#1604;&#1601;&#1586;&#1610;&#1608;&#1606;</option>\
<option value="10851">&#1575;&#1604;&#1593;&#1604;&#1575;&#1602;&#1575;&#1578; &#1575;&#1604;&#1593;&#1575;&#1605;&#1577; &#1608;&#1575;&#1604;&#1575;&#1578;&#1589;&#1575;&#1604;</option>\
<option value="10861">&#1575;&#1604;&#1605;&#1581;&#1575;&#1587;&#1576;&#1577;</option>\
<option value="10866">&#1573;&#1583;&#1575;&#1585;&#1577; &#1575;&#1604;&#1571;&#1593;&#1605;&#1575;&#1604;</option>\
<option value="10871">&#1575;&#1604;&#1593;&#1604;&#1608;&#1605; &#1575;&#1604;&#1605;&#1575;&#1604;&#1610;&#1577; &#1608;&#1575;&#1604;&#1605;&#1589;&#1585;&#1601;&#1610;&#1577;</option>\
<option value="10876">&#1575;&#1604;&#1578;&#1587;&#1608;&#1610;&#1602;</option>\
<option value="10901">&#1575;&#1604;&#1591;&#1576; &#1575;&#1604;&#1576;&#1610;&#1591;&#1585;&#1610;</option>\
<option value="10911">&#1575;&#1604;&#1573;&#1606;&#1578;&#1575;&#1580; &#1575;&#1604;&#1606;&#1576;&#1575;&#1578;&#1610; &#1608;&#1575;&#1604;&#1608;&#1602;&#1575;&#1610;&#1577; </option>\
<option value="10916">&#1575;&#1604;&#1573;&#1606;&#1578;&#1575;&#1580; &#1575;&#1604;&#1581;&#1610;&#1608;&#1575;&#1606;&#1610; &#1608;&#1589;&#1581;&#1577; &#1575;&#1604;&#1581;&#1610;&#1608;&#1575;&#1606; </option>\
<option value="10921">&#1575;&#1604;&#1578;&#1594;&#1584;&#1610;&#1577; &#1608;&#1575;&#1604;&#1578;&#1589;&#1606;&#1610;&#1593; &#1575;&#1604;&#1594;&#1584;&#1575;&#1574;&#1610;</option>\
<option value="11101">&#1575;&#1604;&#1602;&#1575;&#1606;&#1608;&#1606;</option>\
<option value="11201">&#1575;&#1604;&#1605;&#1608;&#1587;&#1610;&#1602;&#1609;</option>\
<option value="11206">&#1575;&#1604;&#1578;&#1589;&#1605;&#1610;&#1605; &#1575;&#1604;&#1583;&#1575;&#1582;&#1604;&#1610; (&#1583;&#1610;&#1603;&#1608;&#1585;)</option>\
<option value="11211">&#1575;&#1604;&#1585;&#1587;&#1605; &#1608;&#1575;&#1604;&#1578;&#1589;&#1608;&#1610;&#1585;</option>\
<option value="11216">&#1575;&#1604;&#1578;&#1589;&#1605;&#1610;&#1605; &#1575;&#1604;&#1580;&#1585;&#1575;&#1601;&#1610;&#1603;&#1610;</option>\
<option value="11221">&#1601;&#1606; &#1575;&#1604;&#1582;&#1586;&#1601;</option>\
</select>'
	select=document.createElement('select');
	$(select).html(selectString);
	$('body').find('center').first().find('tr').first().append(select);
	searchButton=document.createElement('button');
	$(searchButton).html('&#1576;&#1581;&#1579;');

	$('body').find('center').first().find('tr').first().append(searchButton);
	$(searchButton).on('click',function(){
		var textbox=document.getElementsByName('majVal')
		var selectText=select.options[select.selectedIndex].innerHTML;
        selectText=selectText.substr(0,16);

		if(selectText==decodeURIComponent("%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9%20%D9%88%D9%85%D8%B5%D8%A7%D8%B1%D9%81%20%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9")){
			selectText=decodeURIComponent("%D8%B4%D8%B1%D9%8A%D8%B9%D8%A9");}
		if(selectText==decodeURIComponent("%D9%83%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D9%84%D9%88%D9%85%20%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%88%D9%8A%D8%A9%20%D9%88%D8%A5%D8%B9%D8%AF%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%85%D9%8A")){
			selectText=decodeURIComponent("%D9%85%D8%B9%D9%84%D9%85");}	
		 $(textbox).attr('value',selectText);
		 var radio=document.getElementsByName("majOpt")[1];
		 $(radio).prop('checked',true);
		 $(radio).closest('tr').find('form').submit();
	});
}
planIt();
