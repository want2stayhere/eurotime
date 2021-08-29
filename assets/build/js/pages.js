// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="press.html">Press</a></li> \
		<li><a href="news.html">News</a></li> \
		<li><a href="reviews.html">Reviews</a></li> \
		<li><a href="services.html">Services</a></li> \
		<li><a href="offers.html">Offers</a></li> \
		<li><a href="clients.html">Clients</a></li> \
		<li><a href="team.html">Team</a></li> \
		<li><a href="vacancies.html">Vacancies</a></li> \
	</ol> \
</div>');