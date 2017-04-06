function getA(){
    return "<a id = 'pop-top-MD' class='pop-top-MD'></a> <div class='pop-style'>  <div class = 'Modal-Background-Gray'>  </div>  <div>";
}
function getHeader(cancelFunction , title ,okFunction){
    return "<dateheader  class='pop-header' id='pop-header'  >    <div class='menu-left'>        <img src='"+getImgSrc()+"' onclick='"+cancelFunction+"'>    </div>    <div class='header-title'>"+title+"</div>    <div class='menu-right'>        <div class='menu-text' onclick='"+okFunction+"'>确定</div>    </div></dateheader>"
}
function getImgSrc(){
    var imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVdJREFUeNrk29sNwjAMBdCCGIBNYAQ2oaPBJowAm7BByQdIUdSWpLEd35tKVh8/1VFfybW6m6ZpaLDcvuvR+sSHRthrtG+K3jfGnkMdWcEp9hXqEurNCHaBtQK7wVqAXWG1we6wmmCXWC2wW6wG2DVWGuweKwmGwEqBYbASYChsLRgOWwOGxG4Fw2K3gKGxpWB4bAmYApsLpsHmgKmw/8B02DUwJXYJTIudA1NjUzA9NgZ3gf2Bu8FKJh5Q4DHUPTp2CvUYjJtc1le4G3R8S3eBTp9hevTcS4savfSWpkWvfZYo0f++w3TonIEHFTp3pEWDLhlaUqBLx9Lw6C2TB2j01tkSLLpmegiJrp0Pw6ElAgAotFTiAYOWjHgg0NKZlnu0RojnGq2VWrpFa8a0LtHaubQ7tEUQ7wpt1Xlwg7ZstbhAW/eWUvRzMG7atfgzbVzYNlk+AgwAJHSRmFYDDtwAAAAASUVORK5CYII=";
    return imgSrc;
}
function webGetDate(json){
    var replaceJson = json.replace(/\'/g, '\"'); //json值传递时用‘’传递的要转换成“”
    initWebDatePicker(replaceJson);
}
function initWebDatePicker(json){
    var year, month, day;

    var jsonObj = JSON.parse(json);
    var origDate = jsonObj.date;
    var callBackFun = jsonObj.callBack;

    if(origDate == null){
        var myDate = new Date();
        year = myDate.getFullYear();
        month = myDate.getMonth()+1;
        day = myDate.getDate();
    }else{
        year = origDate.substr(0,4);
        month = origDate.substr(4,2);
        if(origDate.length > 6){
            day = origDate.substr(6,2);
        }
    }
    var title="";
    var innerStr = "";
    if(origDate != null && origDate.length > 6){
        innerStr =getA()+getHeader("cancelInnerHtml()" ,title,"webSetDate(\""+callBackFun+"\")")+"<div class='date-picker-area'> <table class='date-table nicky-center'> <tr> <td><button onclick=\"changeDate('1', '1','2')\"></button></td> <td><button onclick=\"changeDate('1', '2','2')\"></button></td> <td><button onclick=\"changeDate('1', '3','2')\"></button></td> </tr> <tr> <td><input id='pop-top-year1' type='text' readonly='readonly' value='"+year+"'></td> <td><input id='pop-top-month1' type='text' readonly='readonly' value='"+month+"'></td> <td><input id='pop-top-day1' type='text' readonly='readonly' value='"+day+"'></td> </tr> <tr> <td><button onclick=\"changeDate('1', '1','1')\"></button></td> <td><button onclick=\"changeDate('1', '2','1')\"></button></td> <td><button onclick=\"changeDate('1', '3','1')\"></button></td> </tr> </table> </div>  </div> </div>";

    }else if(origDate != null){
        innerStr =getA()+getHeader("cancelInnerHtml()" ,title,"webSetDate(\""+callBackFun+"\")")+ "<div class='date-picker-area'> <table class='date-table nicky-center'> <tr> <td><button onclick=\"changeDate('1', '1','2')\"></button></td> <td><button onclick=\"changeDate('1', '2','2')\"></button></td> </tr> <tr> <td><input id='pop-top-year1' type='text' readonly='readonly' value='"+year+"'></td> <td><input id='pop-top-month1' type='text' readonly='readonly' value='"+month+"'></td> </tr> <tr> <td><button onclick=\"changeDate('1', '1','1')\"></button></td> <td><button onclick=\"changeDate('1', '2','1')\"></button></td> </tr> </table> </div>  </div> </div>";

    }else{

    }
    innerHtml(innerStr);
}

function innerHtml(innerStr){
    var nElement= document.getElementById("innerArea") ;
    if(nElement == null){
        nElement  = document.createElement("div");
        nElement.setAttribute('id', 'innerArea');
    }
    nElement.innerHTML = innerStr;
    document.getElementsByTagName("body")[0].appendChild(nElement);
    scrollTop = document.body.scrollTop;
    document.body.style.overflow='hidden';
    document.body.style.position='fixed';
    document.body.style.width='100%';
    if(document.getElementsByClassName("pop-header")[0]){
        document.getElementsByClassName("pop-header")[0].parentElement.style.overflowY='scroll';
        document.getElementsByClassName("pop-header")[0].parentElement.style.overflowX='hidden';
        screenChange();
    }
    document.getElementsByTagName("body")[0].setAttribute('onresize',"screenChange()");
    document.body.scrollTop =0;

    //覆盖原有返回实体按键触发方法
    if(os == "Android"){
        document.removeEventListener("backbutton", onBackKeyDown, false);
        document.addEventListener("backbutton", webComBack, false);
    }
}
function screenChange(){
    var obj =document.getElementsByClassName("pop-header")[0];
    if(obj)
        obj.parentElement.style.height = document.getElementsByClassName("Modal-Background-Gray")[0].offsetHeight+'px';
}
function changeDate(index, row, line){
    var year = document.getElementById('pop-top-year'+index);
    var month = document.getElementById('pop-top-month'+index);
    var day = document.getElementById('pop-top-day'+index);
    var intYear, intMonth, intDay, maxDay;
    if(year != null){
        intYear = parseInt(year.value, 10);
    }else{
        var myDate = new Date();
        intYear = myDate.getFullYear();
    }
    if(month != null){
        intMonth = parseInt(month.value, 10);
    }
    if(day != null){
        intDay = parseInt(day.value, 10);
    }

    if(row == '1'){
        if(line == '1'){
            year.value = intYear - 1;
        }else{
            year.value = intYear + 1;
        }
        if(month != null && day != null){
            maxDay = maxDayNum(parseInt(year.value, 10), intMonth);
            if(intDay > maxDay){
                day.value = maxDay;
            }
        }
    }else if(row == '2'){
        if(line == '1'){
            if(intMonth == 1){
                month.value = 12;
            }else{
                month.value = intMonth - 1;
            }
        }else{
            if(intMonth == 12){
                month.value = 1;
            }else{
                month.value = intMonth + 1;
            }
        }
        if(month != null && day != null){
            maxDay = maxDayNum(intYear, parseInt(month.value, 10));
            if(intDay > maxDay){
                day.value = maxDay;
            }
        }
    }else{
        if(month != null && day != null){
            maxDay = maxDayNum(intYear, intMonth);
        }
        if(line == '1'){
            if(intDay == 1){
                day.value = maxDay;
            }else{
                day.value = intDay - 1;
            }
        }else{
            if(intDay == maxDay){
                day.value = 1;
            }else{
                day.value = intDay + 1;
            }
        }
    }

    if(day != null && parseInt(day.value, 10) < 10){
        day.value = "0"+parseInt(day.value, 10);
    }
    if(month != null && parseInt(month.value, 10) < 10){
        month.value = "0"+parseInt(month.value, 10);
    }
}
function webSetDate(callBackFun){
    var rtnStr = "";
    var year = document.getElementById('pop-top-year1').value;
    var month = document.getElementById('pop-top-month1').value;
    var dayDoc = document.getElementById('pop-top-day1');

    if(dayDoc != null){
        rtnStr = year+"-"+month+"-"+dayDoc.value;
    }else{
        rtnStr = year+"-"+month;
    }

    eval("("+callBackFun+")")(rtnStr);
    cancelInnerHtml();
}
function cancelInnerHtml(){
    var driveLetter = document.getElementById("innerArea");
    driveLetter.innerHTML = "";
    document.body.scrollTop = scrollTop;
    document.body.style.overflow='';
    document.body.style.position='';
    document.body.style.width='';
    if(os == "Android"){
        document.addEventListener("backbutton", onBackKeyDown, false);
        document.removeEventListener("backbutton", webComBack, false);
    }
}