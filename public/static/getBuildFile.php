<?php

$file = $_GET['file'];

if(preg_match('#^[a-z0-9]+\.(css)|(js)$#i',$file)) {
       
	$filename = __DIR__.'/build/'.$file;
	

		$comp = explode('.', $file);
		$final_filename = $comp[0].'.*.'.$comp[1];

		if($comp[1]=='js')
			header("Content-Type: text/javascript;charset=UTF-8: PASS");
		if($comp[1]=='css')
			header("Content-Type: text/css");
		
		$file = glob('./build/'.$final_filename);
			if($file and $file[0])
			echo file_get_contents(__DIR__.$file[0]);
		
		exit();
	

}
   exit();
