jQuery(function($) {
      'use strict';
	
	
/* 	jQuery.fn.getCoord = function()
	{
		var elem = $(this);
		var x = elem.offset().left;
		var y = elem.offset().top;
		console.log('x: ' + x + ' y: ' + y);
	//output: x: 70 y: 40
		return {
			"x" : x,
			"y" : y
		};
	}; */

      // -------------------------------------------------------------
      //   Basic Navigation
      // -------------------------------------------------------------
      (function() {
	  
        var $frame = $('#basic');
        var $slidee = $frame.children('ul').eq(0);
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          pagesBar: $wrap.find('.pages'),
          activatePageOn: 'click',
          speed: 300,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,

          // Buttons
        //  forward: $wrap.find('.forward'),
        //  backward: $wrap.find('.backward'),
          prev: $wrap.find('.prev'),
          next: $wrap.find('.next')
        //  prevPage: $wrap.find('.prevPage'),
        //  nextPage: $wrap.find('.nextPage')
        });
		
		$frame.sly('on','active',function(e,i){
		   console.log("e",e);
		   console.log("i",i);
		   // Call 3ami Hbibi 
		   var ele = this.items[i].el;
		    console.log(ele);
			
			var bodyRect = document.body.getBoundingClientRect(),
		    rect = ele.getBoundingClientRect(),
			offset   = rect.top - bodyRect.top;
			console.log(bodyRect.top, bodyRect.right, bodyRect.bottom, bodyRect.left);
		    console.log(rect.top, rect.right, rect.bottom, rect.left);
			console.log('Element is ' + offset + ' vertical pixels from <body>');
			
		});
		
        // To Start button
        $wrap.find('.toStart').on('click', function() {
          var item = $(this).data('item');
          // Animate a particular item to the start of the frame.
          // If no item is provided, the whole content will be animated.
          $frame.sly('toStart', item);
        });

        // To Center button
        $wrap.find('.toCenter').on('click', function() {
          var item = $(this).data('item');
          // Animate a particular item to the center of the frame.
          // If no item is provided, the whole content will be animated.
          $frame.sly('toCenter', item);
        });

        // To End button
        $wrap.find('.toEnd').on('click', function() {
          var item = $(this).data('item');
          // Animate a particular item to the end of the frame.
          // If no item is provided, the whole content will be animated.
          $frame.sly('toEnd', item);
        });

/*         // Add item
        $wrap.find('.add').on('click', function() {
          $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
        });

        // Remove item
        $wrap.find('.remove').on('click', function() {
          $frame.sly('remove', -1);
        }); */
      }());
		
      // -------------------------------------------------------------
      //   Centered Navigation
      // -------------------------------------------------------------
      (function() {
        var $frame = $('#centered');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: 1,
          itemNav: 'centered',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 4,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          speed: 300,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,

          // Buttons
          prev: $wrap.find('.prev'),
          next: $wrap.find('.next')
        });
      }());

      // -------------------------------------------------------------
      //   Force Centered Navigation
      // -------------------------------------------------------------
      (function() {
        var $frame = $('#forcecentered');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: 1,
          itemNav: 'forceCentered',
          smart: 1,
          activateMiddle: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          speed: 300,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,

          // Buttons
          prev: $wrap.find('.prev'),
          next: $wrap.find('.next')
        });
      }());

      // -------------------------------------------------------------
      //   Cycle By Items
      // -------------------------------------------------------------
      (function() {
        var $frame = $('#cycleitems');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          speed: 300,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,

          // Cycling
          cycleBy: 'items',
          cycleInterval: 2000,
          pauseOnHover: 1,

          // Buttons
          prev: $wrap.find('.prev'),
          next: $wrap.find('.next')
        });

        // Pause button
        $wrap.find('.pause').on('click', function() {
          $frame.sly('pause');
        });

        // Resume button
        $wrap.find('.resume').on('click', function() {
          $frame.sly('resume');
        });

        // Toggle button
        $wrap.find('.toggle').on('click', function() {
          $frame.sly('toggle');
        });
      }());

      // -------------------------------------------------------------
      //   Cycle By Pages
      // -------------------------------------------------------------
      (function() {
        var $frame = $('#cyclepages');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          pagesBar: $wrap.find('.pages'),
          activatePageOn: 'click',
          speed: 300,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,

          // Cycling
          cycleBy: 'pages',
          cycleInterval: 1000,
          pauseOnHover: 1,
          startPaused: 1,

          // Buttons
          prevPage: $wrap.find('.prevPage'),
          nextPage: $wrap.find('.nextPage')
        });

        // Pause button
        $wrap.find('.pause').on('click', function() {
          $frame.sly('pause');
        });

        // Resume button
        $wrap.find('.resume').on('click', function() {
          $frame.sly('resume');
        });

        // Toggle button
        $wrap.find('.toggle').on('click', function() {
          $frame.sly('toggle');
        });
      }());

      // -------------------------------------------------------------
      //   One Item Per Frame
      // -------------------------------------------------------------
      (function() {
        var $frame = $('#oneperframe');
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: false,
          itemNav: 'forceCentered',
          smart: 1,
          activateMiddle: 1,
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 0,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          speed: 2000,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,
		  
          // Buttons
          prev: $wrap.find('.prev'),
          next: $wrap.find('.next')
		  
        });
		// Current Selection
		$frame.sly('on','active',function(e,i){
		
			var id = eval($(".dates li.active").attr('Pos'));
			if(id)
				TreeVisualisation(id);
			else
				TreeVisualisation(0);
		});
		 // Pause button
		 
        $wrap.find('.pause').on('click', function() {
          $frame.sly('pause');
        });
		
      }());

      // -------------------------------------------------------------
      //   Crazy
      // -------------------------------------------------------------
      (function() {
        var $frame = $('#crazy');
        var $slidee = $frame.children('ul').eq(0);
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 3,
          scrollBar: $wrap.find('.scrollbar'),
          scrollBy: 1,
          pagesBar: $wrap.find('.pages'),
          activatePageOn: 'click',
          speed: 300,
          elasticBounds: 1,
          easing: 'swing',
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,

          // Buttons
          forward: $wrap.find('.forward'),
          backward: $wrap.find('.backward'),
          prev: $wrap.find('.prev'),
          next: $wrap.find('.next'),
          prevPage: $wrap.find('.prevPage'),
          nextPage: $wrap.find('.nextPage')
        });

        // To Start button
        $wrap.find('.toStart').on('click', function() {
          var item = $(this).data('item');
          // Animate a particular item to the start of the frame.
          // If no item is provided, the whole content will be animated.
          $frame.sly('toStart', item);
        });

        // To Center button
        $wrap.find('.toCenter').on('click', function() {
          var item = $(this).data('item');
          // Animate a particular item to the center of the frame.
          // If no item is provided, the whole content will be animated.
          $frame.sly('toCenter', item);
        });

        // To End button
        $wrap.find('.toEnd').on('click', function() {
          var item = $(this).data('item');
          // Animate a particular item to the end of the frame.
          // If no item is provided, the whole content will be animated.
          $frame.sly('toEnd', item);
        });

        // Add item
        $wrap.find('.add').on('click', function() {
          $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
        });

        // Remove item
        $wrap.find('.remove').on('click', function() {
          $frame.sly('remove', -1);
        });
      }());
	  
});
	
	
/* 	$frame.sly('on','active',function(e,i){
   console.log("e",e);
   console.log("i",i);
   console.log(this.items[i].el.getAttribute("data-filter"));
}); */