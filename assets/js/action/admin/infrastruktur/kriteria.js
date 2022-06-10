$(function () {

  console.log('You are running jQuery version: ' + $.fn.jquery);
  $('.summernote').summernote({
    height: 200,   //set editable area's height
    codemirror: { // codemirror options
      theme: 'monokai'
    },
    toolbar:{},
    disableResizeEditor: true,
    focus: true
  });

  $('.note-editable').attr('name','profile-input');

  $('.select2').select2();
  $('.select2bs4').select2({
    theme: 'bootstrap4'
  })

  $('.datatable').DataTable()

  //Date picker
  $('#reservationdate').datetimepicker({
    format: 'L'
  });

  window.img = '';
  $("input[data-bootstrap-switch]").each(function(){
    // $(this).bootstrapSwitch('state', $(this).prop('checked'));
    $(this).bootstrapSwitch({
      onSwitchChange: function(e, state) {
        st = state;
      }
    });
  });
  
  $('#save-data-1').attr('disabled', true);
  $('#modal-default').on('show.bs.modal', function(){
  })

  $('#rencana > a').attr('class','nav-link active');
  $('#rencana').attr('class','nav-item menu-is-opening menu-open');
  $('#kriteria > a').attr('class','nav-link active');
  $('#kriteria > a > i').addClass('text-info');


  $('#add-data-1').on('click', function(){
    $('#modal-kriteria').modal({
      show: true
    });
    $('[name="profile-input"]').val('');
    $(".summernote").summernote('reset');
    $('#id_profile').val('');
    // $('.modal-title').html('<i class="fas fa-file"></i> Tambah Laporan');
    // $('#username').attr('disabled', false);
    // $('#password').attr('disabled', false);
    // $("#judul").val('');
    // $("#tanggal").val('');
    // $("#jenis").val('');
    // $("#url").val('');

  });

  $('#save-data-1').on('click', function(){
    savedata('1');
  });

  $('[name="profile-input"]').on("summernote.change", function (e) { 
    
    var profile = $('[name="profile-input"]')
    var disab = []
    for (let i = 0; i < profile.length; i++) {
      var elem = profile[i];
      if(elem.value){
        disab.push(elem.id)
      }
    }

    if(disab.length == '6'){
      $('#save-data-1').prop('disabled', false)
    }else{
      $('#save-data-1').prop('disabled', true)
    }
  });

  $('[name="profile-input"]').keyup(function(e){
    
    var profile = $('[name="profile-input"]')
    var disab = []
    for (let i = 0; i < profile.length; i++) {
      var elem = profile[i];
      if(elem.value){
        disab.push(elem.id)
      }
    }

    if(disab.length == '6'){
      $('#save-data-1').prop('disabled', false)
    }else{
      $('#save-data-1').prop('disabled', true)
    }
  })

  loaddata('data_profil_usulan');

});

    function loaddata(param){
      
      $.ajax({
          type: 'post',
          dataType: 'json',
          url: 'getcriteria',
          data : {
                  param       : param,
           },
          success: function(result){
            
            if(result.code == 1){
                  var dt = $('#list_1').DataTable({
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
                          { 'mDataProp': 'tpst'},
                          { 'mDataProp': 'desa'},
                          { 'mDataProp': 'kecamatan'},
                          { 'mDataProp': 'kabupaten'},
                          { 'mDataProp': 'uraian'},
                          { 'mDataProp': 'direktif'},
                          { 'mDataProp': 'id'},
                      ],
                      order: [[0, 'ASC']],
                      aoColumnDefs:[
                          {
                              mRender: function (data, type, row){                                  
                                  var $rowData = '';
                                      $rowData += `
                                      <div class="btn-group">
                                      <button type="button" class="btn btn-info">Action</button>
                                      <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                        <span class="sr-only">Toggle Dropdown</span>
                                      </button>
                                      <div class="dropdown-menu" role="menu">
                                        <a class="dropdown-item" href="#" onclick="editprofile(${row.id},'${row.tpst}', '${row.desa}', '${row.kecamatan}', '${row.kabupaten}', '${row.uraian}', '${row.direktif}')"><i class="far fa-edit"></i> Edit</a>
                                        <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_profil_usulan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                      </div>
                                    </div>`;
    
                                  return $rowData;
                              },
                              aTargets: [7]
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
                var table = $('#list_1').DataTable()
                table.clear().draw();
              }
    
          }
      });
    }

    function savedata(param){

      var formData = new FormData();
      if(param == '1'){
          var profile = $('[name="profile-input"]')
          for (let i = 0; i < profile.length; i++) {
            var elem = profile[i];
            formData.append(elem.id, elem.value);
          }
          formData.append('table', 'data_profil_usulan')
          if($('#id_profile').val()){
            formData.append('id', $('#id_profile').val())
          }
          if($('#id_profile').val()){
            var baseurl = 'updateCriteria';
            var msg = 'Update Data Profile Usulan Lokasi';
          }else{
            var baseurl = 'saveCriteria';
            var msg = 'Tambah Data Profile Usulan Lokasi';
          }
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

                $('.modal').modal('hide');
                loaddata('data_profil_usulan');
              }
          });
        };

function editprofile(id, tpst, desa, kecamatan, kabupaten, uraian, direktif){
  $('#add-data-1').trigger('click');
  $('#id_profile').val(id);
  $('#tpst').val(tpst);
  $('#desa').val(desa);
  $('#kecamatan').val(kecamatan);
  $('#kabupaten').val(kabupaten);
  $('#uraian').summernote('code', uraian);
  $('#direktif').val(direktif);

}

function deleteData(id, table)
{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success btn-sm swal2-styled-custom',
      cancelButton: 'btn btn-danger btn-sm swal2-styled-custom'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: 'Anda Yakin, hapus data ini?',
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
      url: 'deletecriteria',
      data : {
              id    : id,
              table : table
            },
      success: function(data)
      {
        Swal.fire({
          title: 'Sukses!',
          text: 'Hapus Data',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        loaddata(table);
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