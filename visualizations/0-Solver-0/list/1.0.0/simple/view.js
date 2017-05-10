var VISUALIZATION = (function (visualization, window, document) {
    'use strict';

    visualization.config = {
        // Define CSS & JS resources for visualization
		//'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
    	styles: [
            'https://fonts.googleapis.com/css?family=Cairo:400,300',
            'https://fonts.googleapis.com/css?family=Open+Sans:300',
			'simple/css/Slide-css.css',
			'simple/css/index.css'
        ],

        scripts: [
            'simple/js/jquery-3.2.1.min.js',
			'simple/js/jsrender.min.js', 
			'simple/js/modernizr.js',
			'simple/js/sly.min.js',
			'simple/js/d3.min.js',
			'simple/js/TreeVertical.js',
			'simple/js/Slide-js.js'
        ]
    };
	
    visualization.navigate = function (index) {
        // Add functionality to navigate events via Player controls if desired
		 console.log(index);
		 
		//$("button.next").click();
		 
		 /* var $frame = $('#oneperframe ');
		 $frame.sly.slideTo(5,true); */
		// .click ();
		//$frame.sly('next');
		//TreeVisualisation(index);		
    };

    visualization.start = function (containerId, schedule, handlers, settings) {
        
        // Set defaults 
        var defaults = {
            // default setting value used to hide or show images for event
            showImage: true
        }
        var options = _.assign({}, defaults, settings);
		
        // Add properties for formatted date and resized image leveraging wcHelper methods
        for (var i = 0; i < schedule.events.length; i++) {
            // set event date - wcHelper.formatDateRange(type=event, event and timeOnly=false)
            schedule.events[i].date = wcHelper.formatDateRange('event', schedule.events[i], false);
			
            // set event image - wcHelper.getImage(event, size=sm)
            schedule.events[i].image = options.showImage ?
										wcHelper.getImage(schedule.events[i], 'xl') : '';
			
			//schedule.events[i].image = options.showImage ? wcHelper.getImageDefault(schedule.events[i]) : '';
			
        }

        var tmpl = $.templates("#itemTemplate");    // Get compiled template
        var html = tmpl.render(schedule.events);    // Render template using data - as HTML string

		var selectedColor = settings.theme; // current default theme color
		var selectedTheme = wcHelper.getCurrentTheme(selectedColor);
		if(schedule.events.length>0)
			InitTreeVisualisation(schedule.events, options,selectedTheme, handlers);
		else
			alert("Event List is Empty");
		
		//handlers.focusScheduleEvent(0);		
        // Call handlers.ready for visualization to load
        handlers.ready();
		
        // Add detail view link after view is loaded
        $(function() {
            $('.details-link').on('click', function(e){
                e.preventDefault();

                // Get event id that was set in eventTemplate
                var id = $(this).attr('data-id');
			
				console.log(d3.select(".details-link").attr('data-id'));
                // Call showDetail method with event id passed to display built in player detail window
                handlers.showDetail(id);
            });
        });
    };

    return visualization;

})(VISUALIZATION || {}, window, document);