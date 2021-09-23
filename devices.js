debugger;
function getMacAddress(elem) {
    x=$(elem).text();
    return x.slice(x.length-17,x.length);
}
function speedFormat(speedStr) {
    let speed = parseInt(speedStr);
    if (speed > 1048576) {
        return (speed / 1024.0 / 1024.0).toFixed(2) + "MB/S"
    }
    else {
        return (speed / 1024.0).toFixed(2) + "KB/S"
    }
}
function replaceNames() {

    items = $("body").find(".devnetinfo").map(function () { return { item: $(this).children().last(), parent: $(this).parent() } })
    if (!items.length) {
        return;
    }
    clearInterval(interval);
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        macItem = item.item
        parent = item.parent
        x=$(macItem).text();
        mac = x.slice(x.length-17,x.length);
        (function (key, parent) {
            chrome.storage.sync.get(key, function (r) {
                $(parent).find('div').html(r[key]);
                console.log(r);
            })
        })(mac, parent);
        console.log(mac)

    }

}
function getSpeed(){
    if($("body").find('table.mod-table-devices').find('thead').find('th').length==2){
        $("body").find('table.mod-table-devices').find('thead').find('tr').append('<th class="s1"> Stats </th>')
    }
    const start=location.href.indexOf(';');
    const end=start + ';stok=fe8b82a0aecba330281eb372dedb0c8e'.length;
    const token=location.href.slice(start,end);
    $.get("/cgi-bin/luci/"+token+"/api/misystem/devicelist", function (response, status) {
        console.log(response);
        data = JSON.parse(response);
        let devices = {};
        data.list.forEach(d => {
            devices[d.mac] = { dspeed: speedFormat(d.statistics.downspeed), upspeed: speedFormat(d.statistics.upspeed) };
        });
        items = $("body").find(".devnetinfo").map(function () { return { mac: getMacAddress($(this).children().last()), parent: $(this).parents('.device-item') } })
        for (let i = 0; i < items.length; i++) {
            item = items[i];
            const mac = item.mac;
            const parent = item.parent;
            const stats = devices[mac];
            const td = $("<td></td>", { css: {"text-align":"center"} }).append("<div>" + stats.dspeed + "</div>");
            if($(parent).find('td').length>2){
                $(parent).find('td').last().find('div').first().html(stats.dspeed+"/"+stats.upspeed);
            }
            else{
                $(parent).append(td)
            }
        }
    });
}


chrome.runtime.onMessage.addListener(
    function (msg, sender, sendResponse) {
        if (msg.action = "refresh") {
            replaceNames();
        }
    }
);
if(location.href.indexOf("devices")!=-1){
    interval = setInterval(replaceNames, 500);
    setInterval(getSpeed, 4000);
}