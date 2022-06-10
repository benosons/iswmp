$(function () {

  console.log('You are running jQuery version: ' + $.fn.jquery);
  $('[name="summernote"]').summernote({
    height: 200,   //set editable area's height
    codemirror: { // codemirror options
      theme: 'monokai'
    },
    toolbar: false
  });
  $('.select2').select2();
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  //Date picker
  $('#reservationdate').datetimepicker({
    format: 'L'
  });

  var st = true;
  window.img = '';
  $("input[data-bootstrap-switch]").each(function(){
    // $(this).bootstrapSwitch('state', $(this).prop('checked'));
    $(this).bootstrapSwitch({
      onSwitchChange: function(e, state) {
        st = state;
      }
    });
  });

  $('#listpeta').DataTable();
  
  $('#modal-default').on('show.bs.modal', function(){
  })

  $('.bootstrap-switch-handle-on').html('Ya');
  $('.bootstrap-switch-handle-off').html('Tidak');

  $('#peta > a').attr('class','nav-link active');


  $('#add-peta').on('click', function(){
    $('#modal-default').modal({
      show: true
    });
    $('#id').val('');
    $('.modal-title').html('<i class="fas fa-map"></i> Tambah Peta TPST');

    $('#latitude').val('');
    $('#longitude').val('');
    $('#nama').val('');
    $('#alamat').summernote('reset');
    $('#kabupaten').val('');
    $('#kecamatan').val('');
    $('#desa').val('');
    $('#kapasitas').val('');
    $('#luas').val('');
    $('#fisik').val('');
    $('#keuangan').val('');
    $('#provinsi').val(0).trigger('change');

  });

  $('#save-laporan').on('click', function(){
    savedata(st);
  });

  loaddata();

  $('#provinsi').on('change', function(){
    
    var opt = '<option value="0">-Pilih-</option>'
    if(this.value == '1'){
      opt += `<option value="1"> Kabupaten Karawang </option>
              <option value="2"> Kabupaten Bekasi </option>
              <option value="3"> Kabupaten Purwakarta </option>
              <option value="4"> Kabupaten Cianjur </option>
              <option value="5"> Kabupaten Sumedang </option>
              <option value="6"> Kota Bandung </option>
              <option value="7"> Kota Cimahi </option>
              <option value="8"> Kabupaten Bandung Barat </option>
              <option value="9"> Kabupaten Bandung </option>`
    }else if(this.value == '2'){
      opt += `<option value="1"> Kota Denpasar </option>
              <option value="2"> Kota Denpasar </option>
              <option value="3"> Kota Denpasar </option>`
    }

    $('#kabupaten').html(opt);
  })

});

    function loaddata(){
      
      $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'getglobal',
          data : {
                  param       : 'data_peta',
                  type        : 'peta',
           },
          success: function(result){
            
            if(result.code == 1){
                  var dt = $('#listpeta').DataTable({
                    destroy: true,
                    paging: true,
                    lengthChange: false,
                    searching: true,
                    ordering: true,
                    info: true,
                    autoWidth: false,
                    responsive: false,
                    pageLength: 10,
                    aaData: result.data,
                      aoColumns: [
                          { 'mDataProp': 'id', 'width':'5%'},
                          { 'mDataProp': 'latitude'},
                          { 'mDataProp': 'nama'},
                          { 'mDataProp': 'provinsi'},
                          { 'mDataProp': 'alamat', 'width':'30%'},
                          { 'mDataProp': 'kapasitas', 'width':'10%'},
                          { 'mDataProp': 'luas', 'width':'10%'},
                          { 'mDataProp': 'fisik', 'width':'18%'},
                          { 'mDataProp': 'id'},
                      ],
                      order: [[0, 'ASC']],
                      aoColumnDefs:[
                          {
                            mRender: function (data, type, row){
                              var $rowData = row.latitude +' - '+ row.longitude;
                            return $rowData;
                            },
                            aTargets: [1]
                          },
                          {
                            mRender: function (data, type, row){
                              var prov = ['','Jawa Barat', 'Bali']
                            return prov[row.provinsi];
                            },
                            aTargets: [3]
                          },
                          {
                            mRender: function (data, type, row){
                              if (row.provinsi == 1){
                              
                                var kab = ['-','Kabupaten Karawang', 'Kabupaten Bekasi', 'Kabupaten Purwakarta', 'Kabupaten Cianjur', 'Kabupaten Sumedang', 'Kota Bandung', 'Kota Cimahi', 'Kabupaten Bandung Barat', 'Kabupaten Bandung'];
                              }else{
                                var kab = ['-','Kota Denpasar', 'kota Denpasar', 'kota Denpasar'];
                              }
                              var $rowData = row.alamat +''+ row.desa + ', ' + row.kecamatan + ', ' + kab[row.kabupaten];
                            return $rowData;
                            },
                            aTargets: [4]
                          },
                          {
                            mRender: function (data, type, row){
                              // var $rowData = row.fisik +''+ row.keuangan;
                              var $rowData = `<div class="card">
                                                <div class="card-body">
                                                  <div class="row">
                                                    <div class="col-sm-6">
                                                      <h6>Fisik :</h6>
                                                    </div>
                                                    <div class="col-sm-1">
                                                      <h6>:</h6>
                                                    </div>
                                                    <div class="col-sm-3">
                                                      <h6>${row.fisik}</h6>
                                                    </div>
                                                  </div>
                                                  <div class="row">
                                                    <div class="col-sm-6">
                                                      <h6>Keuangan</h6>
                                                    </div>
                                                    <div class="col-sm-1">
                                                      <h6>:</h6>
                                                    </div>
                                                    <div class="col-sm-3">
                                                      <h6>${row.keuangan}</h6>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>`;
                            return $rowData;
                            },
                            aTargets: [7]
                          },
                          {
                              mRender: function (data, type, row){
                                  var stat = row.stat;
                                  
                                  if(stat == 1){
                                    var st = `<a class="dropdown-item" href="#" onclick="updatepublish(`+row.id+`,0)"><i class="fas fa-sign-out-alt"></i> No Publish</a>`
                                  }else{
                                    var st = `<a class="dropdown-item" href="#" onclick="updatepublish(`+row.id+`,1)"><i class="fas fa-sign-out-alt"></i> Publish</a>`;
                                  }

                                  console.log(row.alamat);

                                  if(row.isi){
                                      var alamat = row.alamat.replace(/</g, '~');
                                      var alamat_1 = alamat.replace(/"/g, '`');
                                  }else{
                                    var alamat_1 = ''
                                  }
                                  
                                  var $rowData = '';
                                      $rowData += `
                                      <div class="btn-group">
                                      <button type="button" class="btn btn-info">Action</button>
                                      <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                        <span class="sr-only">Toggle Dropdown</span>
                                      </button>
                                      <div class="dropdown-menu" role="menu">
                                        <a class="dropdown-item" href="#" onclick="editdong('`+row.id+`','`+row.latitude+`','`+row.longitude+`','`+row.nama+`','`+alamat_1+`','`+row.kabupaten+`','`+row.kecamatan+`','`+row.desa+`','`+row.kapasitas+`','`+row.luas+`','`+row.fisik+`','`+row.keuangan+`','${row.provinsi}')"><i class="far fa-edit"></i> Edit</a>
                                        <a class="dropdown-item" href="#" onclick="deleteData(`+row.id+`)"><i class="far fa-trash-alt"></i> Hapus</a>
                                        <div class="dropdown-divider"></div>
                                        `+st+`
                                      </div>
                                    </div>`;
    
                                  return $rowData;
                              },
                              aTargets: [8]
                          }
                      ],
    
                      fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull){
                          var index = iDisplayIndexFull + 1;
                          $('td:eq(0)', nRow).html(' '+index);
                          return  ;
                      },
    
                      fnInitComplete: function () {
                          var that = this;
                          var td ;
                          var tr ;
    
                          this.$('td').click( function () {
                              td = this;
                          });
                          this.$('tr').click( function () {
                              tr = this;
                          });
    
    
                          $('#listproj_filter input').bind('keyup', function (e) {
                              return this.value;
                          });
    
                      }
                  });
              }else{
                var tb = $('#listpeta').DataTable();
                tb.clear().draw();
              }
    
          }
      });
    }

    function savedata(st){

      var formData = new FormData();
      formData.append('id', $('#id').val());
      formData.append('latitude', $('#latitude').val());
      formData.append('longitude', $('#longitude').val());
      formData.append('nama', $('#nama').val());
      formData.append('alamat', $('#alamat').val());
      formData.append('kabupaten', $('#kabupaten').val());
      formData.append('kecamatan', $('#kecamatan').val());
      formData.append('desa', $('#desa').val());
      formData.append('kapasitas', $('#kapasitas').val());
      formData.append('luas', $('#luas').val());
      formData.append('fisik', $('#fisik').val());
      formData.append('keuangan', $('#keuangan').val());
      formData.append('provinsi', $('#provinsi').val());
            
      var stat;
        switch (st) {
          case false:
              stat = '0';
            break;
          default:
              stat = '1'
        }

        if($('#id').val()){
          var baseurl = 'updatePeta';
          var msg = 'Update Peta TPST';

        }else{
          var baseurl = 'savePeta';
          var msg = 'Tambah Peta TPST';
        }

        $.ajax({
          type: 'post',
          url: baseurl,
          dataType: 'json',
          cache: false,
          contentType: false,
          processData: false,
          data: formData,
          async:false,
            success: function(result){
              Swal.fire({
                title: 'Sukses!',
                text: msg,
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
              });

              $('#modal-default').modal('hide');
              loaddata();
            }
          });
        };

function editdong(id, latitude, longitude, nama, alamat, kabupaten, kecamatan, desa, kapasitas, luas, fisik, keuangan, provinsi){
  $('#add-peta').trigger('click');
  $('.modal-title').html('Edit Peta TPST');
  $('#id').val(id);
  $('#latitude').val(latitude);
  $('#longitude').val(longitude);
  $('#nama').val(nama);
  var alamatnya = alamat.replace(/~/g, '<');
  var alamat_1 = alamatnya.replace(/`/g, '"');
  
  $('#alamat').summernote('code', alamat_1);
  $('#kecamatan').val(kecamatan);
  $('#desa').val(desa);
  $('#kapasitas').val(kapasitas);
  $('#luas').val(luas);
  $('#fisik').val(fisik);
  $('#keuangan').val(keuangan);
  $('#provinsi').val(provinsi).trigger('change');
  if($('#provinsi').change()){
    $('#kabupaten').val(kabupaten);
  }
  

}

function deleteData(id)
{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success btn-sm swal2-styled-custom',
      cancelButton: 'btn btn-danger btn-sm swal2-styled-custom'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: 'Anda Yakin, hapus Peta ini?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '<i class="fas fa-check"></i> Ya',
    cancelButtonText: '<i class="fas fa-times"></i> Tidak',
    reverseButtons: true
  }).then((result) => {
  if (result.isConfirmed) {
    $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'deletepeta',
      data : {
              id    : id,
            },
      success: function(data)
      {
        Swal.fire({
          title: 'Sukses!',
          text: 'Hapus Peta TPST',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        loaddata();
      }
    });
  }
})

}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var blah = input.id.replace("image", "blah");
    reader.onload = function(e) {
      $('#'+blah).attr('src', e.target.result);
      window.img = e.target.result;
    }
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

function modaldetail(id,username,role,status,name,foto){
    $('#modal-detail').modal({
      show: true
    });

    $('.modal-title').html('Detail');

    var stt = '';
    if(status == 1){
      stt +=`<span class="badge badge-primary right">Aktif</span>`;
    }else{
      stt +=`<span class="badge badge-warning right">Non Aktif</span>`;
    }

    $('#detail-foto').attr('src', foto);
    $('#detail-name').text(name);
    $('#detail-username').html('username: <i>'+username+'</i>');
    $('#detail-status').html(stt);
    $('#detail-role').text(role);
}