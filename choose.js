var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var manual_or_random="manual"
var randomsetting="3 days"
function getCookie(Name) { 
var re=new RegExp(Name+"=[^;]+", "i");
if (document.cookie.match(re))
return document.cookie.match(re)[0].split("=")[1]
return null}
function setCookie(name, value, days) {
var expireDate = new Date()
var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";}
function deleteCookie(name){
setCookie(name, "moot")}
function setStylesheet(title, randomize){
var i, cacheobj, altsheets=[""]
for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) {
cacheobj.disabled = true
altsheets.push(cacheobj)
if(cacheobj.getAttribute("title") == title)
cacheobj.disabled = false}}
if (typeof randomize!="undefined"){
var randomnumber=Math.floor(Math.random()*altsheets.length)
altsheets[randomnumber].disabled=false}
return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : ""}
function chooseStyle(styletitle, days){
if (document.getElementById){
setStylesheet(styletitle)
setCookie("mysheet", styletitle, days)}}
function indicateSelected(element){
if (selectedtitle!=null && (element.type==undefined || element.type=="select-one")){
var element=(element.type=="select-one") ? element.options : element
for (var i=0; i<element.length; i++){
if (element[i].value==selectedtitle){
if (element[i].tagName=="OPTION")
element[i].selected=true
else
element[i].checked=true
break}}}}
if (manual_or_random=="manual"){
var selectedtitle=getCookie("mysheet")
if (document.getElementById && selectedtitle!=null)
setStylesheet(selectedtitle)}
else if (manual_or_random=="random"){
if (randomsetting=="eachtime")
setStylesheet("", "random")
else if (randomsetting=="sessiononly"){
if (getCookie("mysheet_s")==null)
document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/"
else
setStylesheet(getCookie("mysheet_s"))}
else if (randomsetting.search(/^[1-9]+ days/i)!=-1){
if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){
setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting))
setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting))}
else
setStylesheet(getCookie("mysheet_r"))} }

}
/*
     FILE ARCHIVED ON 15:29:44 Feb 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:18:21 Mar 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 222.152
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.062
  RedisCDXSource: 4.029
  esindex: 0.007
  LoadShardBlock: 199.696 (3)
  PetaboxLoader3.datanode: 110.104 (4)
  load_resource: 63.429
  PetaboxLoader3.resolve: 50.108
*/
