<?php

session_start();
	
	if (isset($_POST['token_name'])){
		$_SESSION['token_name'] = $_POST['token_name'];
	}
	if (isset($_POST['id_pegawai'])){
		$_SESSION['id_pegawai'] = $_POST['id_pegawai'];
	}

?>