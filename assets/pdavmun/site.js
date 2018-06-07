$(document).ready(function(){
	then = new Date(2017, 10, 18).getTime()
	refreshTimer()
	setInterval(refreshTimer, 1000)
})

function refreshTimer(){
	_second = 1000
	_minute = _second * 60
	_hour = _minute * 60
	_day = _hour * 24
	now = new Date().getTime()
	distance = then-now
	if(distance < 0){
		$(".timer").html("Countdown has finished!")
	}else{
		days = Math.floor(distance / _day)
		hours = Math.floor((distance % _day) / _hour)
		minutes = Math.floor((distance % _hour) / _minute)
		seconds = Math.floor((distance % _minute) / _second)
		$(".timer-days").html(days + " days")
		$(".timer-hours").html(hours + " hours")
		$(".timer-minutes").html(minutes + " min")
		$(".timer-seconds").html(seconds + " sec")
	}
}

function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(31.3122242,75.616445),mapTypeId: google.maps.MapTypeId.HYBRID};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(31.3122242,75.616445)});infowindow = new google.maps.InfoWindow({content:'<strong>Police DAV Public School Auditorium</strong><br>Police DAV Public School, PAP Campus, Jalandhar, Punjab, India<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map)