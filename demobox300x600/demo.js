
function BoxApp300x600(){
    var divwrap = document.createElement("div");
    var divspace1 = document.createElement("div");
    var textdivsapce1 = document.createTextNode(" Gi�p b?n t�m l?i gi?c ng? ngon");
    divspace1.appendChild(textdivsapce1);
}

var divbox1largea = document.createElement("a");
var divbox1largeimg = document.createElement("img");
divbox1largea.appendChild(divbox1largeimg);
var divbox1largeCtn = document.createElement("div");
var divbox1ItemlargeTitle = document.creatElement("div");
var divbox1ItemlargeTitlect = document.createTextNode("B� quy?t ngon gi?c tu?i trung ni�n");
divbox1ItemlargeTitle.appendChild(divbox1ItemlargeTitlect);
divbox1largeCtn.appendChild(divbox1ItemlargeTitle);
var divbox1ItemlargeContent = document.createElement("div");
var divbox1ItemlargeContentct = document.createTextNode("Cho ??n nay ?� c� nhi?u ng??i kh� ng?, ng? kh�ng ngon gi?c ???c c?i thi?n gi?c ng? nh? Goldream.");
divbox1ItemlargeContent.appendChild(divbox1ItemlargeContentct);
divbox1largeCtn.appendChild(divbox1ItemlargeContent);
divbox1largea.appendChild(divbox1largeCtn);
divbox1.appendChild(divbox1largea);
divwrap.appendChild(divbox1);