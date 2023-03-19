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

var qTipTag = "a,label,input";
var qTipX = 0;
var qTipY = 15;
tooltip = {name : "qTip",offsetX : qTipX,offsetY : qTipY,tip : null}
tooltip.init = function () {
var tipNameSpaceURI = "http://www.w3.org/1999/xhtml";
if(!tipContainerID){ var tipContainerID = "qTip";}
var tipContainer = document.getElementById(tipContainerID);
if(!tipContainer) {
tipContainer = document.createElementNS ? document.createElementNS(tipNameSpaceURI, "div") : document.createElement("div");
tipContainer.setAttribute("id", tipContainerID);
document.getElementsByTagName("body").item(0).appendChild(tipContainer);}
if (!document.getElementById) return;
this.tip = document.getElementById (this.name);
if (this.tip) document.onmousemove = function (evt) {tooltip.move (evt)};
var a, sTitle, elements;
var elementList = qTipTag.split(",");
for(var j = 0; j < elementList.length; j++){	
elements = document.getElementsByTagName(elementList[j]);
if(elements){
for (var i = 0; i < elements.length; i ++){
a = elements[i];
sTitle = a.getAttribute("title");				
if(sTitle){
a.setAttribute("tiptitle", sTitle);a.removeAttribute("title");a.removeAttribute("alt");a.onmouseover = function() {tooltip.show(this.getAttribute('tiptitle'))};a.onmouseout = function() {tooltip.hide()};}}}}}
tooltip.move = function (evt) {
var x=0, y=0;
if (document.all) {
x = (document.documentElement && document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
y = (document.documentElement && document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
x += window.event.clientX;
y += window.event.clientY;
} else {
x = evt.pageX;
y = evt.pageY;}
this.tip.style.left = (x + this.offsetX) + "px";this.tip.style.top = (y + this.offsetY) + "px";}
tooltip.show = function (text) {if (!this.tip) return;this.tip.innerHTML = text;this.tip.style.display = "block";}
tooltip.hide = function () {
if (!this.tip) return;this.tip.innerHTML = "";this.tip.style.display = "none";}
window.onload = function () {tooltip.init ();}

}
/*
     FILE ARCHIVED ON 15:39:39 Feb 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:17:14 Mar 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 99.491
  exclusion.robots: 0.132
  exclusion.robots.policy: 0.119
  RedisCDXSource: 0.631
  esindex: 0.01
  LoadShardBlock: 73.634 (3)
  PetaboxLoader3.datanode: 79.929 (4)
  load_resource: 49.349
  PetaboxLoader3.resolve: 33.18
*/
