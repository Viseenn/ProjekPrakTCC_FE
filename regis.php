<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">

    <title>Registrasi</title>
</head>

<body class="body">
    <div id="awal" class="awal">
        <div class="container mt-5">
            <div class="col mt-5">
                <div class="row pt-5">
                    <h2>Registrasi</h2>
                    <form method="POST" action="">
                        <!-- Username -->
                        <div class="col up pt-5">
                            <i class="bi bi-person-fill"></i>
                            <input type="text" placeholder="Username" aria-label="username" name="username">
                        </div>

                        <!-- Nama Lengkap -->
                        <div class="col up">
                            <i class="bi bi-person-fill"></i>
                            <input type="text" placeholder="Nama Lengkap" aria-label="nama_lengkap" name="nama_lengkap">
                        </div>

                        <!-- Alamat -->
                        <div class="col up">
                            <i class="bi bi-geo-alt"></i>
                            <input type="text" placeholder="Alamat" aria-label="alamat" name="alamat">
                        </div>

                        <!-- No HP -->
                        <div class="col up">
                            <i class="bi bi-phone"></i>
                            <input type="text" placeholder="No HP" aria-label="no_hp" name="no_hp">
                        </div>

                        <!-- Password -->
                        <div class="col up">
                            <i class="bi bi-lock-fill"></i>
                            <input type="password" placeholder="Password" aria-label="password" name="password">
                        </div>

                        <!-- Submit -->
                        <div class="col">
                            <button type="submit" name="pesan" value="pesan" class="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>