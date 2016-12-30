function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var id = getRandomInt(1, 365);

if(localStorage.getNextId)
	id = localStorage.getNextId;
	
var id1 = getRandomInt(1, 365);
if (id == id1)
	id1 = getRandomInt(1, 365);

if(!localStorage.currentDay)
	localStorage.currentDay = (new Date()).getDate();

var currentDay = (new Date()).getDate();
if(localStorage.currentDay != currentDay)
{
	jQuery.ajax({
		method:'GET',
		url: 'https://www.happyhey.com/share/the-twilight-saga-tab/share.php?noscript=Yes&r=' + Math.random()
	}).done(function(data){
		if(data!='')
		{
			localStorage.currentDay = currentDay;
			localStorage.currentHtml = data;
		}
	});
}
if(localStorage.currentHtml){
	jQuery('#main_container').html( localStorage.currentHtml );
}

document.write('<meta property="og:image" content="https://www.happyhey.com/images/the-twilight-saga-tab/' + id + '.jpg"/>');
document.write('<meta name="twitter:image" content="https://www.happyhey.com/images/the-twilight-saga-tab/' + id + '.jpg"/>');

jQuery('#imgPh').html('<img id="back-img" alt="Do you like it? Share it!" title="Do you like it? Share it! Scroll down for more!" src="https://www.happyhey.com/images/the-twilight-saga-tab/'+id+'.jpg" style="width: 100%; height: auto; position: fixed; top: 0; left: 0; "/>');

jQuery(function () {
	setTimeout(loadFirstPic, 100);
	var id2 = getRandomInt(1, 365);
	var img = new Image();
	img.src = "https://www.happyhey.com/images/the-twilight-saga-tab/" + id2 + ".jpg";
	img.onload = function(){
		localStorage.getNextId = id2;
	};
});
function loadFirstPic() {
	var img = new Image();
	img.src = "https://www.happyhey.com/images/the-twilight-saga-tab/" + id1 + ".jpg";
}
var navigating = false;
jQuery(window).mousewheel(function (event, delta, deltaX, deltaY) {
	if (deltaY < 0 && !navigating) {
		navigating = true;
		document.location = jQuery('#down').attr('href');
	}
})
jQuery.ajax({
	method:'GET',
	url: 'https://www.happyhey.com/share/the-twilight-saga-tab/getUrl.php?id='+id + '&id1='+id1 + "&r=" + Math.random()
}).done(function(data){
	if(data.indexOf('happyhey.com'))
	{
		var tmp = data.split('|');
		jQuery('#down').prop('href', tmp[0]).show();
		
		var share = new ShareButton({
			url: tmp[1] || 'http://www.happyhey.com',
			title: "Do You Like The Twilight Saga?",
			description: "Get awesome The Twilight Saga HD images in each new Chrome tab!"
		});
		share.open();
	}
})
var communicationID = 'ext_' + (new Date()).getTime() + '_' + Math.random();
(function () {

	window.addEventListener('message', function(evt){
		if(evt&&evt.data&&evt.data.indexOf(communicationID)!=-1){
			var o = false;
			try{
				o = JSON.parse(evt.data);				
			}catch(ex){};
			if(o.cmd == 'redir'){
				document.location = jQuery('#down').attr('href');
			}
		}
	})

	//document.write("<iframe src=\"http:\/\/www.vbank.ro\/extensie\/banner5\" width=\"100%\" height=\"90px\" scrolling=\"no\" frameBorder=\"0\"><\/iframe>");
	var cnt = jQuery('#run_container');
	var ifr = jQuery('<iframe src="http://www.vbank.ro/extensie/banner5/?cid=' + communicationID + '" width="100%" height="90px" scrolling="no" frameBorder="0"></iframe>');
	cnt.append(ifr);
})(jQuery);