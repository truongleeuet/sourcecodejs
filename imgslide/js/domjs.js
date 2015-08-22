/**
 * Created by Admin on 8/12/2015.
 */
function showA(){
    p = document.getElementById("divid");
    t = document.getElementById("t");
    t.setAttribute("value", p.attributes[1].name +"->"+p.attributes[0].value);
}