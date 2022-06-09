$(function () {

  console.log('You are running jQuery version: ' + $.fn.jquery);
  $('[name="summernote"]').summernote({
    height: 200,   //set editable area's height
    codemirror: { // codemirror options
      theme: 'monokai'
    }
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

  $('#listvideo').DataTable();
  
  $('#modal-default').on('show.bs.modal', function(){
  })

  $('.bootstrap-switch-handle-on').html('Ya');
  $('.bootstrap-switch-handle-off').html('Tidak');

  $('#pasca > a').attr('class','nav-link active');
  $('#pasca').attr('class','nav-item menu-is-opening menu-open');
  $('#evaluasi > a').attr('class','nav-link active');
  $('#evaluasi > a > i').addClass('text-info');


  $('#add-laporan').on('click', function(){
    $('#modal-default').modal({
      show: true
    });
    $('#id').val('');
    $('.modal-title').html('<i class="fas fa-file"></i> Tambah Laporan');
    $('#username').attr('disabled', false);
    $('#password').attr('disabled', false);
    $("#judul").val('');
    $("#deskripsi").summernote('reset');
    $("#tanggal").val('');
    $("#jenis").val('');
    $("#url").val('');

  });

  $('#save-laporan').on('click', function(){
    savedata(st);
  });

  loaddata();

});

    function loaddata(){
      
      $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'getglobal',
          data : {
                  param       : 'data_laporan',
                  type        : 'laporan',
           },
          success: function(result){
            
            if(result.code == 1){
                  var dt = $('#listlaporan').DataTable({
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
                          { 'mDataProp': 'judul'},
                          { 'mDataProp': 'deskripsi'},
                          { 'mDataProp': 'tanggal'},
                          { 'mDataProp': 'jenis'},
                          { 'mDataProp': 'url'},
                          { 'mDataProp': 'id'},
                      ],
                      order: [[0, 'ASC']],
                      aoColumnDefs:[
                          {
                              mRender: function (data, type, row){
                                  var $rowData = '';
                                  $rowData += `<a target="blank_" href="`+row.url+`">Download</a>`;
                                  
                                  return $rowData;
                              },
                              aTargets: [5]
                          },
                          {
                              mRender: function (data, type, row){
                                  var stat = row.stat;
                                  
                                  if(stat == 1){
                                    var st = `<a class="dropdown-item" href="#" onclick="updatepublish(`+row.id+`,0)"><i class="fas fa-sign-out-alt"></i> No Publish</a>`
                                  }else{
                                    var st = `<a class="dropdown-item" href="#" onclick="updatepublish(`+row.id+`,1)"><i class="fas fa-sign-out-alt"></i> Publish</a>`;
                                  }
                                  var $rowData = '';
                                      $rowData += `
                                      <div class="btn-group">
                                      <button type="button" class="btn btn-info">Action</button>
                                      <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                        <span class="sr-only">Toggle Dropdown</span>
                                      </button>
                                      <div class="dropdown-menu" role="menu">
                                        <a class="dropdown-item" href="#" onclick="editdong('`+row.id+`','`+row.judul+`','`+row.deskripsi+`','`+row.tanggal+`','`+row.jenis+`','`+row.url+`')"><i class="far fa-edit"></i> Edit</a>
                                        <a class="dropdown-item" href="#" onclick="deleteData(`+row.id+`)"><i class="far fa-trash-alt"></i> Hapus</a>
                                        <div class="dropdown-divider"></div>
                                        `+st+`
                                      </div>
                                    </div>`;
    
                                  return $rowData;
                              },
                              aTargets: [6]
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
                $('#listlaporan').DataTable()
              }
    
          }
      });
    }

    function savedata(st){

      var formData = new FormData();
      formData.append('judul', $('#judul').val());
      formData.append('deskripsi', $('#deskripsi').val());
      formData.append('tanggal', $('#tanggal').val());
      formData.append('jenis', $('#jenis').val());
      formData.append('url', $('#url').val());
            
      var stat;
        switch (st) {
          case false:
              stat = '0';
            break;
          default:
              stat = '1'
        }

        if($('#id').val()){
          var baseurl = 'updatelaporan';
          var msg = 'Update Laporan';

        }else{
          var baseurl = 'saveLaporan';
          var msg = 'Tambah Laporan';
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

function editdong(id, judul, deskripsi, tanggal, jenis, url){
  $('#add-laporan').trigger('click');
  $('.modal-title').html('Edit Lapaoran');
  $('#id').val(id);
  $('#judul').val(judul);
  $('#deskripsi').summernote('code', deskripsi);
  $('#tanggal').val(new Date(tanggal));
  $('#jenis').val(jenis);
  $('#url').val(url);

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
    title: 'Anda Yakin, hapus laporan ini?',
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
      url: 'deletelaporan',
      data : {
              id    : id,
            },
      success: function(data)
      {
        Swal.fire({
          title: 'Sukses!',
          text: 'Hapus Laporan',
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