<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js"></script>
	<script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.js"></script>
	<script src="json.js"></script>
	
    <title>Login Data Buku</title>
</head>
<body class="body">
    <div id="awal" class="awal">
        <div class="container mt-5">
            <div class="row pt-3">
            <div class="col mt-5">
                <div class="row">
                    <h2>Login</h2>
                    
                        <!-- Username -->
                        <div class="col-md-10 up pt-5">
                            <i class="bi bi-person-fill"></i> 
                            <input type="text" placeholder="Username" aria-label="username" id="username" name="username">
                        </div>

                        <!-- Password -->
                        <div class="col-md-10 up">
                            <i class="bi bi-lock-fill"></i> 
                            <input type="password" placeholder="Password" aria-label="password" id="password" name="password">
                        </div>

                        <!-- Submit -->
                        <div class="col-md-10">
                            <button type="submit" id="login" name="login" value="login" class="button">Login</button>
                        </div>
                   
                </div>
            </div>
        </div>
    </div>
</body>
</html>