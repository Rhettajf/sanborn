window.svgeezy=function(){return{init:function(e,t){this.avoid=e||false;this.filetype=t||"png";this.svgSupport=this.supportsSvg();if(!this.svgSupport){this.images=document.getElementsByTagName("img");this.imgL=this.images.length;this.fallbacks()}},fallbacks:function(){while(this.imgL--){if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var e=this.images[this.imgL].getAttribute("src");if(e===null){continue}if(this.getFileExt(e)=="svg"){var t=e.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",t)}}}},getFileExt:function(e){var t=e.split(".").pop();if(t.indexOf("?")!==-1){t=t.split("?")[0]}return t},hasClass:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();$(document).ready(function(){$("#pickstate").bind("change",function(){var e="http://itgm715.rhettforbes.com/projecta/sanborn/states/"+$(this).val().toUpperCase();if(e){window.location=e}return false})});if(document.supportsSvg()){}else{svgeezy.init(false,"png");document.getElementById("sanborn").style.display="none"}