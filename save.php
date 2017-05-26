<?php
	$data	= $_REQUEST['base64data'];
	$image = explode('base64,',$data);
	file_put_contents('l.jpg',base64_decode($image[1]));
?>