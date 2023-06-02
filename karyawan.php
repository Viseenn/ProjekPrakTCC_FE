<?php
session_start();

if (isset($_SESSION['token_name'])) {
} else {
	header("location: login.php", true, 301);
}
?>
<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- Bootstrap CSS -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" href="css.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
	<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.css" />
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js"></script>
	<script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
		integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
		crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
	<script src="json.js"></script>
	<style>
		@font-face {
			font-family: 'Cooper';
			src: url('Cooper/Cooper.ttf');
		}

		.datang {
			font-family: 'Cooper';
			background-color: #16174f;
			padding-bottom: 1px;
			padding-top: 2px;
		}

		.h1 {
			color: white;
			padding-top: 2px;
			text-align: center;
		}
	</style>

	<script>
		//var contextPath = "${pageContext.request.contextPath}"

		$(document).ready(function () {
			let table = new DataTable('#tablePegawai');
			$('#refreshPegawai').click();
		});


	</script>
	<title>Data Pegawai</title>
</head>

<body>
	<div class="datang">
		<div class="h1"> DAFTAR PEGAWAI </div>
	</div>

	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<div class="refresh">
							<button type="button" id="btnTambahPegawai" class="btn btn-primary">
								Tambah
							</button>
							<button id="refreshPegawai" class="tambah1"
								style="border:none; padding: 4px 8px 4px 7px;"><i class="bi bi-plus"></i>
								Refresh</button>
						</div>
					</li>
					<li class="nav-item pl-3">
						<button type="button" id="btnPopUpPegawai" class="btn btn-primary" data-bs-toggle="modal"
							data-bs-target="#inputPegawai" style="display:none;">
							Tambah
						</button>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="data.php">Daftar Barang</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="login.php">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>



	<!-- Modal -->
	<div class="modal fade" id="inputPegawai" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="modalPegawaiTitle"></h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">

					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Id Pegawai</label>
						<input type="input" class="form-control" id="inputIdPegawai"
					 disabled>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Email</label>
						<input type="input" class="form-control" id="inputEmail">
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="input" class="form-control" id="inputPassword">
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Nama Lengkap</label>
						<input type="input" class="form-control" id="inputNama_lengkap">
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Alamat</label>
						<input type="input" class="form-control" id="inputAlamat">
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">No HP</label>
						<input type="number" class="form-control" id="inputNo_hp">
					</div>
				</div>
				<div class="modal-footer">
					<button id="btnUpdatePegawai" name="btnUpdatePegawai" type="button"
						class="btn btn-primary">Update</button>
					<button id="btnSubmitPegawai" name="btnSubmitPegawai" type="button"
						class="btn btn-primary">Insert</button>
					<button id="closeModalPegawai" type="button" class="btn btn-secondary"
						data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>



	<div class="tabel border='1'" style="font-family: 'Open Sans', sans-serif;">
		<table id="tablePegawai" class="display">
			<thead>
				<tr>
					<th>No</th>
					<th>Email</th>
					<th>Password</th>
					<th>Nama Lengkap</th>
					<th>Alamat</th>
					<th>No HP</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>

	</div>

	<!-- footer -->
	<footer class="footer" style="margin-top: 33px;">
		<p class="text-center fw-bold"> Inventaris 2016 </p>
	</footer>


	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
		integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
		crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
		integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
		crossorigin="anonymous"></script>
</body>

</html>