
// List of sentences
var _CONTENT = [" Developer", " Designer", "Innovator"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 30);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 20);

$(window).load(function(){
	var height = window.innerHeight,
	x= 0, y= height/2,
	curveX = 10,
	curveY = 0,
	targetX = 0,
	xitteration = 0,
	yitteration = 0,
	menuExpanded = false;
	
	blob = $('#blob'),
	blobPath = $('#blob-path'),
  
	hamburger = $('.hamburger');
  
	$(this).on('mousemove', function(e){
	  x = e.pageX;
	  
	  y = e.pageY;
	});
  
	$('.hamburger, .menu-inner').on('mouseenter', function(){
	  $(this).parent().addClass('expanded');
	  menuExpanded = true;
	});
  
	$('.menu-inner').on('mouseleave', function(){
	  menuExpanded = false;
	  $(this).parent().removeClass('expanded');
	});
  
	function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
	  return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
	}
  
	var hoverZone = 150;
	var expandAmount = 20;
	
	function svgCurve() {
	  if ((curveX > x-1) && (curveX < x+1)) {
		xitteration = 0;
	  } else {
		if (menuExpanded) {
		  targetX = 0;
		} else {
		  xitteration = 0;
		  if (x > hoverZone) {
			targetX = 0;
		  } else {
			targetX = -(((60+expandAmount)/100)*(x-hoverZone));
		  }     
		}
		xitteration++;
	  }
  
	  if ((curveY > y-1) && (curveY < y+1)) {
		yitteration = 0;
	  } else {
		yitteration = 0;
		yitteration++;  
	  }
  
	  curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
	  curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);
  
	  var anchorDistance = 200;
	  var curviness = anchorDistance - 40;
  
	  var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";
  
	  blobPath.attr('d', newCurve2);
  
	  blob.width(curveX+60);
  
	  hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
	  
	  $('h2').css('transform', 'translateY('+curveY+'px)');
	  window.requestAnimationFrame(svgCurve);
	}
  
	window.requestAnimationFrame(svgCurve);
	
  });




//gallery

  var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
