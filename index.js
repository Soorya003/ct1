function label_create(tagname,attrname,attrvalue,content){
    var l_e=document.createElement(tagname);
    l_e.setAttribute(attrname,attrvalue);
    l_e.innerHTML = content;
    return l_e;
}
function break_create(){
    var break_create=document.createElement("br");
    return break_create;
}
function input_create(inputtag,attrname,attrvalue,attrname1,attrvalue1){
    var i_e = document.createElement(inputtag);
    i_e.setAttribute(attrname,attrvalue);
    i_e.setAttribute(attrname1,attrvalue1);
    return i_e;
}
var fn=label_create("label","for","fn","firstname");
var i_f=input_create("input","type","text","id","fn");
var b=break_create();
document.body.append(fn,i_f,b);
var mn=label_create("label","for","mn","middlename");
var im=input_create("input","type","text","id","mn");
var b=break_create();
document.body.append(mn,im,b);
var ln=label_create("label","for","ln","lastname");
var il=input_create("input","type","text","id","ln");
var b=break_create();
document.body.append(ln,il,b);
var em=label_create("label","for","em","email");
var ei=input_create("input","type","email","id","em");
var b=break_create();
document.body.append(em,ei,b);
var lo=label_create("label","for","lo","location");
var li=input_create("input","type","text","id","lo");
var b=break_create();
document.body.append(lo,li,b);
var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick",foo());
button.innerHTML="click me";
document.body.append(lo,li,b,button)

function foo(){
    var res = document.getElementById("fn").value;
    console.log(res);
    var res1 = document.getElementById("mn").value;
    console.log(res1);
    var res2 = document.getElementById("ln").value;
    console.log(res2);
    var res3 = document.getElementById("em").value;
    console.log(res3);
    var res4 = document.getElementById("lo").value;
    console.log(res4);
}

