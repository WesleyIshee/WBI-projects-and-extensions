<!---- NON MODAL PULSATING ---->
function wbiDivPulsateOpen(thisDivToOpen,thisDivToFadeIn,finishedDivHeight,finishedDivWidth){
	
	
	const arraySteps = [100,-150,70,-40,16];
	const arrayLeftTopSteps = [-50,75,-35,20,-8];
	const arrayTimeSpans = [400,400,500,600,800];	
	
	
	$("#" + thisDivToOpen).css({ 'opacity' : 0 });// make sure thouter div is transparent
	$("#" + thisDivToFadeIn).css({ 'opacity' : 0 });// make sure the html content div is transparent
	$("#spanOuterXButton").css({ 'opacity' : 0 });// make sure the svg close ICON is transparent
	
	
	
	$("#" + thisDivToOpen).draggable();//make this draggable
	
	// locate the origin of the div while its still invisible
	$("#" + thisDivToOpen).css("top", Math.max(0, ($(window).height() / 2) + $(window).scrollTop()) + "px");
    $("#" + thisDivToOpen).css("left", Math.max(0, ($(window).width() / 2) +  $(window).scrollLeft()) + "px");

	
	// calc the opening pulse
	var thisNewHeight = finishedDivHeight + arraySteps[0] + "px" ;
	var thisNewWidth = finishedDivWidth + arraySteps[0] + "px" ;
	var thisNewTop = (parseInt($("#" + thisDivToOpen).css("top")) + arrayLeftTopSteps[0] - (finishedDivHeight/2)) + "px";
	var thisNewLeft = (parseInt($("#" + thisDivToOpen).css("left")) + arrayLeftTopSteps[0] - (finishedDivWidth/2)) + "px";
	
	// animate the opacity as it grows
	$("#" + thisDivToOpen).animate({'opacity' : '1'},{duration:1000,queue:false});
		
	
	// first pulse to a larger size
	$("#" + thisDivToOpen).animate({'height' : thisNewHeight, 'top' : thisNewTop, 'width' : thisNewWidth, 'left' : thisNewLeft},{duration:arrayTimeSpans[0],queue:true});
	
	// then iterate through the sizes
	for (let i = 1; i < arraySteps.length; i++) {
	thisNewHeight = parseFloat(thisNewHeight) + arraySteps[i] + "px" ;
	thisNewWidth = parseFloat(thisNewWidth) + arraySteps[i] + "px" ;
	thisNewTop = parseInt(thisNewTop) + arrayLeftTopSteps[i] + "px";
	thisNewLeft = parseInt(thisNewLeft) + arrayLeftTopSteps[i] + "px";		
	$("#" + thisDivToOpen).animate({'height' : thisNewHeight, 'width' : thisNewWidth, 'top' : thisNewTop, 'left' : thisNewLeft},{duration:arrayTimeSpans[i],queue:true});
	}
	
	// finally, fade in the innerhtml content div
	$("#" + thisDivToFadeIn).animate({'opacity' : '1'},{duration:3000,queue:true});
	$("#spanOuterXButton").delay(2000).animate({'opacity' : '1'},{duration:2000, queue:true});
	
}// end the pulse open function

function bounceOutDiv(thisDivToClose,thisDivToFadeOut){	
	
	// hide the close button
	$("#spanOuterXButton").css({ 'opacity' : 0 });	
	
	// fade out the inner html div
	$("#" + thisDivToFadeOut).animate({'opacity' : '0'},{duration:1000,queue:true});		
	
	// pulsate larger one time
	var thisNewHeight = parseFloat($("#" + thisDivToClose).height()) + 200 + "px" ;
	var thisNewWidth = parseFloat($("#" + thisDivToClose).width()) + 200 + "px" ;
	var thisNewTop = parseInt($("#" + thisDivToClose).css("top")) - 100 + "px";
	var thisNewLeft = parseInt($("#" + thisDivToClose).css("left")) - 100 + "px";
	$("#" + thisDivToClose).animate({'height' : thisNewHeight, 'top' : thisNewTop, 'width' : thisNewWidth, 'left' : thisNewLeft},{duration:300,queue:true});
	
	// then make it tiny and invisible
	 thisNewHeight =  "0px" ;
	 thisNewWidth =  "0px" ;
	thisNewTop = Math.max(0, (($(window).height() ) / 2) + $(window).scrollTop()) + "px";
	thisNewLeft = Math.max(0, (($(window).width() ) / 2) + $(window).scrollLeft()) + "px";
	$("#" + thisDivToClose).animate({'height' : thisNewHeight, 'top' : thisNewTop, 'width' : thisNewWidth, 'left' : thisNewLeft},{duration:300,queue:true});
	
	$("#" + thisDivToClose).animate({'opacity' : '0'},{duration:1000,queue:false});
	
	// close the overlay in case this is MODAL 
	$("#divModalOverlayPulsating").css("display","none");
	
}// end the close function