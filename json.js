$(document).ready(function () {
  var serverUrl = "https://projectakhir-tcc-c45zlhm6jq-uc.a.run.app";

  $("#login").on("click", function () {
    var user = $("#username").val();
    var pass = $("#password").val();
    if (user == "") {
      alert("input username!!");
    } else if (pass == "") {
      alert("input password!!");
    } else {
      var data = {};
      data["email"] = user;
      data["password"] = pass;
      console.log(JSON.stringify(data));

      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: serverUrl + "/auth/login",
        data: JSON.stringify(data),
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          console.log(JSON.stringify(data));
          console.log(result);
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (status == "success") {
              var accessToken = result.data.accessToken;
              var idPegawai = result.data.user.id;
              console.log(accessToken);
              var endpoint = window.location.href.substring(
                window.location.href.lastIndexOf("/") + 1
              );
              var link = window.location.href.replace(endpoint, "data.php");

              $.post(
                "session_write.php",
                {
                  token_name: accessToken,
                  id_pegawai: idPegawai,
                },
                function (data, status) {
                  //var link  = window.location.href.replace(endpoint, "data.php");
                  //$('#refreshBarang').click();
                  window.location.replace(link);
                }
              );
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });

  $("#refreshBarang").on("click", function () {
    $.ajax({
      type: "GET",
      url: serverUrl + "/barang",
      dataType: "json",
      timeout: 100000,
      success: function (res) {
        if (res == null) {
          alert("error");
        } else {
          var status = res.status;
          var message = res.message;

          if (status == "success") {
            var table = $("#tableBarang").DataTable();
            table.rows().remove().draw();
            var data_barang = res.data;
            var button = "";
            for (var i = 0; i < data_barang.length; i++) {
              //table.row.add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10).draw(false);

              //table.row.add([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]).draw();
              //editbtn = '<td><button type="button" class="btn btn-success" id="btnEditGrupMedis"><i class="fa fa-edit"></i></button></td>';
              //checklist = '<td><center><input type="checkbox" id="checkItem" class="checkItem" value="'+result[i].LGM_ID+'"></center></td>';

              button =
                '<button type="button" id="btnEditBarang" class="btn btn-primary">Edit</button><button type="button" id="btnDeleteBarang" class="btn btn-danger">Hapus</button>';
              content =
                "<tr><td>" +
                data_barang[i].id +
                "</td><td>" +
                data_barang[i].kode +
                "</td><td>" +
                data_barang[i].barang +
                "</td><td>" +
                data_barang[i].jumlah +
                "</td><td>" +
                data_barang[i].satuan +
                "</td><td>" +
                data_barang[i].tanggal.split("T")[0] +
                "</td><td>" +
                data_barang[i].kategori +
                "</td><td>" +
                data_barang[i].kondisi +
                "</td><td>" +
                data_barang[i].harga +
                "</td><td>" +
                button +
                "</td></tr>";

              table.row.add($(content)).draw();
            }
          } else {
            alert(message);
          }
        }
      },
      error: function (e) {
        alert(e.responseJSON.message);
      },
      done: function (e) {
        console.log("DONE");
      },
    });
  });

  $("#btnTambahBarang").on("click", function () {
    $("#btnPopUpBarang").click();
    $("#btnUpdateBarang").hide();
    $("#btnSubmitBarang").show();
  });

  $("#btnSubmitBarang").on("click", function () {
    $("#modalBarangTitle").val("Tambah Barang");
    var IdPegawai = $("#inputBarangIdPegawai").val();
    var KodeBarang = $("#inputBarangKode").val();
    var NamaBarang = $("#inputBarangNama").val();
    var JumlahBarang = $("#inputBarangJumlah").val();
    var SatuanBarang = $("#inputBarangSatuan").val();
    var TanggalBarang = $("#inputBarangTanggal").val();
    var KategoriBarang = $("#inputBarangKategori").val();
    var KondisiBarang = $("#inputBarangKondisi").val();
    var HargaBarang = $("#inputBarangHarga").val();

    if (IdPegawai == "") {
      alert("Id Pegawai Harus Diisi!");
    } else if (KodeBarang == "") {
      alert("Kode Barang Harus Diisi!");
    } else if (NamaBarang == "") {
      alert("Nama Barang Harus Diisi!");
    } else if (JumlahBarang == "") {
      alert("Jumlah Barang Harus Diisi!");
    } else if (SatuanBarang == "") {
      alert("Statuan Barang Harus Diisi!");
    } else if (TanggalBarang == "") {
      alert("Tanggal Barang Harus Diisi!");
    } else if (KategoriBarang == "") {
      alert("Kategori Barang Harus Diisi!");
    } else if (KondisiBarang == "") {
      alert("Kondisi Barang Harus Diisi!");
    } else if (HargaBarang == "") {
      alert("Harga Barang Harus Diisi!");
    } else {
      var data = {};
      data["id_pegawai"] = IdPegawai;
      data["kode"] = KodeBarang;
      data["barang"] = NamaBarang;
      data["jumlah"] = JumlahBarang;
      data["satuan"] = SatuanBarang;
      data["tanggal"] = TanggalBarang;
      data["kategori"] = KategoriBarang;
      data["kondisi"] = KondisiBarang;
      data["harga"] = HargaBarang;
      //console.log(JSON.stringify(data));

      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: serverUrl + "/barang",
        data: JSON.stringify(data),
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          console.log(JSON.stringify(data));
          console.log(result);
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (status == "success") {
              $("#closeModalBarang").click();
              alert(message);
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });

  $("body").on("click", "#btnEditBarang", function () {
    var row = $(this).parents("tr")[0];
    var idBarang = $("#tableBarang").DataTable().row(row).data()[0];
    var kodeBarang = $("#tableBarang").DataTable().row(row).data()[1];
    var namaBarang = $("#tableBarang").DataTable().row(row).data()[2];
    var jumlahBarang = $("#tableBarang").DataTable().row(row).data()[3];
    var satuanBarang = $("#tableBarang").DataTable().row(row).data()[4];
    var tanggalBarang = $("#tableBarang")
      .DataTable()
      .row(row)
      .data()[5]
      .split("T")[0];
    var kategoriBarang = $("#tableBarang").DataTable().row(row).data()[6];
    var statusBarang = $("#tableBarang").DataTable().row(row).data()[7];
    var hargaBarang = $("#tableBarang").DataTable().row(row).data()[8];

    $("#modalBarangTitle").val("Edit Barang");
    $("#inputBarangId").val(idBarang);
    $("#inputBarangKode").val(kodeBarang);
    $("#inputBarangNama").val(namaBarang);
    $("#inputBarangJumlah").val(jumlahBarang);
    $("#inputBarangSatuan").val(satuanBarang);
    $("#inputBarangTanggal").val(tanggalBarang);
    $("#inputBarangKategori").val(kategoriBarang);
    $("#inputBarangKondisi").val(statusBarang);
    $("#inputBarangHarga").val(hargaBarang);
    $("#btnPopUpBarang").click();
    $("#btnUpdateBarang").show();
    $("#btnSubmitBarang").hide();
  });

  $("#btnUpdateBarang").on("click", function () {

    var idBarang = $("#inputBarangId").val();
    var KodeBarang = $("#inputBarangKode").val();
    var NamaBarang = $("#inputBarangNama").val();
    var JumlahBarang = $("#inputBarangJumlah").val();
    var SatuanBarang = $("#inputBarangSatuan").val();
    var TanggalBarang = $("#inputBarangTanggal").val();
    var KategoriBarang = $("#inputBarangKategori").val();
    var KondisiBarang = $("#inputBarangKondisi").val();
    var HargaBarang = $("#inputBarangHarga").val();

    if (NamaBarang == "") {
      alert("Nama Barang Harus Diisi!");
    } else if (JumlahBarang == "") {
      alert("Jumlah Barang Harus Diisi!");
    } else if (SatuanBarang == "") {
      alert("Statuan Barang Harus Diisi!");
    } else if (TanggalBarang == "") {
      alert("Tanggal Barang Harus Diisi!");
    } else if (KategoriBarang == "") {
      alert("Kategori Barang Harus Diisi!");
    } else if (KondisiBarang == "") {
      alert("Kondisi Barang Harus Diisi!");
    } else if (HargaBarang == "") {
      alert("Harga Barang Harus Diisi!");
    } else {
      var data = {};

      data["kode"] = KodeBarang;
      data["barang"] = NamaBarang;
      data["jumlah"] = JumlahBarang;
      data["satuan"] = SatuanBarang;
      data["tanggal"] = TanggalBarang;
      data["kategori"] = KategoriBarang;
      data["kondisi"] = KondisiBarang;
      data["harga"] = HargaBarang;
      console.log(JSON.stringify(data));

      $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: serverUrl + "/barang/" + idBarang,
        data: JSON.stringify(data),
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          console.log(JSON.stringify(data));
          console.log(result);
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (status == "success") {
              $("#closeModalBarang").click();
              alert(message);
              $("#refreshBarang").click();
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });

  $("body").on("click", "#btnDeleteBarang", function () {
    var row = $(this).parents("tr")[0];
    var idBarang = $("#tableBarang").DataTable().row(row).data()[0];

    var result = confirm("Want to delete No. " + idBarang + " ?");
    if (result) {
      $.ajax({
        type: "DELETE",
        url: serverUrl + "/barang/" + idBarang,
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (status == "success") {
              alert(message);
              $("#refreshBarang").click();
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });

  $("#refreshPegawai").on("click", function () {
    $.ajax({
      type: "GET",
      url: serverUrl + "/pegawai",
      dataType: "json",
      timeout: 100000,
      success: function (res) {
        if (res == null) {
          alert("error");
        } else {
          var status = res.status;
          var message = res.message;

          if (res) {
            var table = $("#tablePegawai").DataTable();
            table.rows().remove().draw();
            var data_pegawai = res;
            var button = "";
            for (var i = 0; i < data_pegawai.length; i++) {

              button =
                '<button type="button" id="btnEditPegawai" class="btn btn-primary">Edit</button><button type="button" id="btnDeletePegawai" class="btn btn-danger">Hapus</button>';
              content =
                "<tr><td>" +
                data_pegawai[i].id +
                "</td><td>" +
                data_pegawai[i].email +
                "</td><td>" +
                data_pegawai[i].password +
                "</td><td>" +
                data_pegawai[i].nama_lengkap +
                "</td><td>" +
                data_pegawai[i].alamat +
                "</td><td>" +
                data_pegawai[i].no_hp +
                "</td><td>" +
                button +
                "</td></tr>";

              table.row.add($(content)).draw();
            }
          } else {
            alert(message);
          }
        }
      },
      error: function (e) {
        alert(e.responseJSON.message);
      },
      done: function (e) {
        console.log("DONE");
      },
    });
  });

  $("#btnTambahPegawai").on("click", function () {
    $("#btnPopUpPegawai").click();
    $("#btnUpdatePegawai").hide();
    $("#btnSubmitPegawai").show();
  });

  $("#btnSubmitPegawai").on("click", function () {
    $("#modalPegawaiTitle").val("Tambah Pegawai");
    var Email = $("#inputEmail").val();
    var Password = $("#inputPassword").val();
    var Nama_lengkap = $("#inputNama_lengkap").val();
    var Alamat = $("#inputAlamat").val();
    var No_hp = $("#inputNo_hp").val();

    if (Email == "") {
      alert("Email Harus Diisi!");
    } else if (Password == "") {
      alert("Password Harus Diisi!");
    } else if (Nama_lengkap == "") {
      alert("Nama Lengkap Harus Diisi!");
    } else if (Alamat == "") {
      alert("Alamat Harus Diisi!");
    } else if (No_hp == "") {
      alert("No HP Harus Diisi!");
    } else {

      var data = {};
      data["email"] = Email;
      data["password"] = Password;
      data["nama_lengkap"] = Nama_lengkap;
      data["alamat"] = Alamat;
      data["no_hp"] = No_hp;
      //console.log(JSON.stringify(data));

      $.ajax({
        type: "POST",
        contentType: "application/json",
        url: serverUrl + "/auth/register",
        data: JSON.stringify(data),
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          console.log(JSON.stringify(data));
          console.log(result);
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (result) {
              $("#closeModalPegawai").click();
              alert(message);
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });

  $("body").on("click", "#btnEditPegawai", function () {
    var row = $(this).parents("tr")[0];
    var idPegawai = $("#tablePegawai").DataTable().row(row).data()[0];
    var Email = $("#tablePegawai").DataTable().row(row).data()[1];
    var Password = $("#tablePegawai").DataTable().row(row).data()[2];
    var Nama_lengkap = $("#tablePegawai").DataTable().row(row).data()[3];
    var Alamat = $("#tablePegawai").DataTable().row(row).data()[4];
    var No_hp = $("#tablePegawai").DataTable().row(row).data()[5];

    $("#modalPegawaiTitle").val("Edit Pegawai");
    $("#inputIdPegawai").val(idPegawai);
    $("#inputEmail").val(Email);
    $("#inputPassword").val(Password);
    $("#inputNama_lengkap").val(Nama_lengkap);
    $("#inputAlamat").val(Alamat);
    $("#inputNo_hp").val(No_hp);
    $("#btnPopUpPegawai").click();
    $("#btnUpdatePegawai").show();
    $("#btnSubmitPegawai").hide();
  });

  $("#btnUpdatePegawai").on("click", function () {

    var idPegawai = $("#inputIdPegawai").val();
    var Email = $("#inputEmail").val();
    var Nama_lengkap = $("#inputNama_lengkap").val();
    var Alamat = $("#inputAlamat").val();
    var No_hp = $("#inputNo_hp").val();

    if (Email == "") {
      alert("Email Harus Diisi!");
    } else if (Nama_lengkap == "") {
      alert("Nama Lengkap Harus Diisi!");
    } else if (Alamat == "") {
      alert("Alamat Harus Diisi!");
    } else if (No_hp == "") {
      alert("No HP Harus Diisi!");
    } else {
      var data = {};
      data["email"] = Email;
      data["nama_lengkap"] = Nama_lengkap;
      data["alamat"] = Alamat;
      data["no_hp"] = No_hp;
      console.log(JSON.stringify(data));

      $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: serverUrl + "/pegawai/" + idPegawai,
        data: JSON.stringify(data),
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          console.log(JSON.stringify(data));
          console.log(result);
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (result) {
              $("#closeModalPegawai").click();
              $("#refreshPegawai").click();
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });

  $("body").on("click", "#btnDeletePegawai", function () {
    var row = $(this).parents("tr")[0];
    var idPegawai = $("#tablePegawai").DataTable().row(row).data()[0];

    var result = confirm("Want to delete No. " + idPegawai + " ?");
    if (result) {
      $.ajax({
        type: "DELETE",
        url: serverUrl + "/pegawai/" + idPegawai,
        dataType: "json",
        timeout: 100000,
        success: function (result) {
          if (result == null) {
            alert("error");
          } else {
            var status = result.status;
            var message = result.message;

            if (status == "success") {
              alert(message);
              $("#refreshPegawai").click();
            } else {
              alert(message);
            }
          }
        },
        error: function (e) {
          alert(e.responseJSON.message);
        },
        done: function (e) {
          console.log("DONE");
        },
      });
    }
  });
});
