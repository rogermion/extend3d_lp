function decide(){   
	var content;
	if ($(window).width() >= 1025){

		content = 
				'<div class="container-fluid">' +
					'<div class="row">' +
						'<div class="col-6 offset-2" id="msg-col-desk">' +
							'<div class="row">' +
								'<div class="col" id="msg-col-desk-inner">' +
									'<img src="images/msg.png" class="img-fluid">' +
								'</div>' +
							'</div>' +
							'<div class="row">' +
								'<div class="col-10" id="msg-mail-col">' +
									'<p id="msg-mail"><img src="images/close-envelope.png" id="img-mail-desk">admin@extend3d.com.br</p>' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="col-4" id="logo-col-desk">' +
							'<img src="images/logo.png" class="img-fluid">' +
						'</div>' +

					'</div>' +
				'</div>';
				
		$("#content-box").append(content);
	}
	else {
		content = 
		'<div class="container-fluid">' +
		  '<div class="row">'	+
		    '<div class="col">'	+
		    	'<div class="row">'	+
		    		'<div class="col" id="logo-col">'	+
		    			'<img src="images/logo.png" class="img-fluid">'	+
		    		'</div>' +
		    	'</div>' +
		    	'<div class="row">'	+
		    		'<div class="col" id="msg-col">'	+
		    			'<img src="images/msg.png" class="img-fluid">'	+
		    		'</div>'	+
		    	'</div>'	+
	    		'<div class="row">'	+
	    			'<div class="col-2">'	+
		    			'<img src="images/close-envelope.png" id="img-mail" class="img-fluid">'	+
		    		'</div>'	+
		    		'<div class="col-10">'	+
		    			'<p id="msg-mail">admin@extend3d.com.br</p>'	+
		    		'</div>'	+
		    	'</div>'	+
		    '</div>'	+
		  '</div>'	+
		'</div>';
		$("#content-box").append(content);
	}
}
