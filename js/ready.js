$(document).ready(function() {
		$("img.rollover").hover( 
function() { this.src = this.src.replace("_off", "_on"); 
}, 
function() { this.src = this.src.replace("_on", "_off"); 
});
//preload images
var cache = new Array();
//cycle through all rollover elements and add rollover img src to cache array
$("img.rollover").each(function(){
var cacheImage = document.createElement('img');
cacheImage.src = this.src.replace("_on", "_off");
cache.push(cacheImage);
});
    });	

window.svgeezy=function(){return{init:function(t,i){this.avoid=t||false;this.filetype=i||"png";this.svgSupport=this.supportsSvg();if(!this.svgSupport){this.images=document.getElementsByTagName("img");this.imgL=this.images.length;this.fallbacks()}},fallbacks:function(){while(this.imgL--){if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var t=this.images[this.imgL].getAttribute("src");if(t===null){continue}if(this.getFileExt(t)=="svg"){var i=t.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",i)}}}},getFileExt:function(t){var i=t.split(".").pop();if(i.indexOf("?")!==-1){i=i.split("?")[0]}return i},hasClass:function(t,i){return(" "+t.className+" ").indexOf(" "+i+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();

	
$(document).ready(function() {
// bind change event to select
$('#pickstate').bind('change', function () {
var url = 'states/' + $(this).val().toUpperCase(); // get selected option value
if (url) { // require url to have value
window.location = url; // open url
}
return false;
});
});	

if(document.supportsSvg()) {
	}
else {
	svgeezy.init(false, 'png');	
	document.getElementById("sanborn").style.display = "none"};