jQuery(document).ready(function($) {
	var jobs_button = document.getElementById("services");
	var contact_button = document.getElementById("contactus");
	var subject_box = document.getElementById("subject");

	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		jobs_button.style.backgroundColor = "";
		contact_button.style.backgroundColor = "";
		subject_box.value = "";
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});

	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.pink-button").click(function(){	
		var jobs_button = document.getElementById("services");
		jobs_button.style.backgroundColor = "#4e91c9";
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	function which_avail_button(clicked_id){
		var subject = "";
		switch(clicked_id){
			case "ILOVEYOUUUUUUUUUUUU":
				subject = "100000000000000%";
				break;
			case "software":
				subject = "Software";
				break;
			case "hardware":
				subject = "Hardware";
				break;
			case "networking":
				subject = "Networking";
				break;
		}
		console.log("MAHAL KITAAA!!!!");
		return subject;
	}

	function set_subj_txt(subject){
		subject_box.value = subject;
	}

	$(".main-menu a.avail-button").click(function(){	
		set_subj_txt(which_avail_button(this.id));
		contact_button.style.backgroundColor = "#4e91c9";
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		//loadScript();
		return false;
	});

	$(".main-menu a.blogbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .project-section").slideDown('slow');
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		//loadScript();
		return false;
	});



	$('a.toggle-nav').click(function(){
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function() {
		$('.menu-responsive').slideToggle().hide();
	});


});


function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	      'callback=initialize';
	  document.body.appendChild(script);
	}

	function initialize() {
	    var mapOptions = {
	      zoom: 15,
	      center: new google.maps.LatLng(16.8496189,96.1288854)
	    };
	    var map = new google.maps.Map(document.getElementById('map_canvas'),  mapOptions);
	}