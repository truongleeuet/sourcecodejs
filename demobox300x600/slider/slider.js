/**
 * Created by Admin on 8/18/2015.
 */
function slider(){
    var PaginationItem = document.getElementsByClassName("admBoxappLibPaginationItem");

    PaginationItem[0].style.display="block";
    PaginationItem[0].style.zIndex="2";
    PaginationItem[0].style.opacity="1";
    for(var i=1;i<PaginationItem.length;i++){
        PaginationItem[i].style.opacity="1";
        PaginationItem[i].style.display="none";
        PaginationItem[i].style.zIndex="1";
    }
    var next_Slide = document.getElementById("admBoxappMod2Next");

    var prevSlide = document.getElementById("admBoxappMod2Prev");

    var idSet = setInterval('next()',3000);

    next_Slide.onclick = function(){
        next(); clearInterval(idSet);
        idSet =setInterval('next()',3000);
    }
    prevSlide.onclick = function(){
        previous(); clearInterval(idSet);
        idSet =setInterval('next()',3000);
    }
}

function next(){
    var PaginationItem = document.getElementsByClassName("admBoxappLibPaginationItem");

    for(var i=0;i<PaginationItem.length;i++)
    {
        if(PaginationItem[i].style.display == "block")
        {
            if(i == (PaginationItem.length - 1)){
                PaginationItem[i].style.display = "none";
                PaginationItem[i].style.zIndex = "1";

                PaginationItem[0].style.display = "block";
                PaginationItem[0].style.zIndex = "2";
            }else {
                PaginationItem[i].style.zIndex = "1";
                PaginationItem[i].style.display = "none";

                PaginationItem[i+1].style.zIndex = "2";
                PaginationItem[i+1].style.display = "block";
            }
            break;
        }
    }
}

function previous(){
    var PaginationItem = document.getElementsByClassName("admBoxappLibPaginationItem");
    var imgl= PaginationItem.length;
    for(var i=0;i<imgl;i++){
        if(PaginationItem[i].style.display == "block") {
            if(i == 0){
                PaginationItem[i].style.display = "none";
                PaginationItem[i].style.zIndex = "1";

                PaginationItem[imgl-1].style.display = "block";
                PaginationItem[imgl-1].style.zIndex = "2";
            }else {
                PaginationItem[i].style.display = "none";
                PaginationItem[i].style.zIndex = "1";

                PaginationItem[i-1].style.zIndex = "2";
                PaginationItem[i-1].style.display = "block";
            }
            break;
        }
    }
}
function manufacturer(){
    var Manufacturer = document.getElementsByClassName("admBoxappBanner300x600Manufacturer")[0];
    Manufacturer.style.width = "35px";
    var divfont = document.getElementsByClassName("divfont")[0];
    Manufacturer.style.backgroundImage = "url(\"//adi.vcmedia.vn/adt/cpc/adsapp/template/300x385/bgManufacturerShort.png\")";
    Manufacturer.onmouseover = function(){
        Manufacturer.style.width = "125px";
        Manufacturer.style.backgroundImage = "url(\"//adi.vcmedia.vn/adt/cpc/adsapp/template/300x385/bgManufacturerLong.png\")";
    }
    Manufacturer.onmouseout = function(){
        Manufacturer.style.width = "35px";
        Manufacturer.style.backgroundImage = "url(\"//adi.vcmedia.vn/adt/cpc/adsapp/template/300x385/bgManufacturerShort.png\")";
    }
}