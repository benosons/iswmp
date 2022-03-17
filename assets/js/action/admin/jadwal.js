$(function () {

  console.log('You are running jQuery version: ' + $.fn.jquery);
  $('[name="summernote"]').summernote({
    height: 200,   //set editable area's height
    codemirror: { // codemirror options
      theme: 'monokai'
    }
  });

  $('#reservationdatetime').datetimepicker({
      format : 'MM/DD/YYYY HH:mm',
      icons: { time: 'far fa-clock' }
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
  $("#stat").each(function(){
    // $(this).bootstrapSwitch('state', $(this).prop('checked'));
    $(this).bootstrapSwitch({
      onSwitchChange: function(e, state) {
        st = state;
      }
    });
  });

  $('#listjadwal').DataTable();
  
  $('#modal-default').on('show.bs.modal', function(){
  })

  $('.bootstrap-switch-handle-on').html('Ya');
  $('.bootstrap-switch-handle-off').html('Tidak');

  $('#jadwal > a').attr('class','nav-link active');

  $('#add-jadwal').on('click', function(){

    $('#modal-default').modal({
      show: true
    });
    $('#id').val('');
    $('#tanggal').val('');
    $('#event').val('');

  });

  $('#save-jadwal').on('click', function(){
    
    savedata(st);
  });

  loaddata();

  $("[name='image_input']").on('change',function() {
    readURL(this);
  });


  $("#stat").bootstrapSwitch();

  $("#stat").on('switchChange.bootstrapSwitch', function (event, state) {
    
  });

  
$(".select2bs4").change(function () {
    if($(".select2bs4 option:selected").length > 1) {

    }
});

$("#tag").on('keyup',function () {
alert();
});



});

function loaddata(){

  $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'getglobalwhereby',
      data : {
              param       : 'data_jadwal',
              type        : 'jadwal',
       },
      success: function(result){
        
        if(result.code == 1){
              var dt = $('#listjadwal').DataTable({
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
                      { 'mDataProp': 'event'},
                      { 'mDataProp': 'tanggal'},
                      { 'mDataProp': 'status'},
                      { 'mDataProp': 'id'},
                  ],
                  order: [[0, 'ASC']],
                  aoColumnDefs:[
                      {
                          mRender: function (data, type, row){
                            var mydate = new Date(row.create_date);
                            var date = ("0" + mydate.getDate()).slice(-2);
                            var month = ("0" + (mydate.getMonth() + 1)).slice(-2);
                            var year = mydate.getFullYear();
                            var str = date+'/'+month+'/'+year;

                            var stat = row.status;
                            if(stat == 1){
                              var st = 'Publish'
                              var tex = 'text-success';
                            }else{
                              var st = 'No Publish'
                              var tex = 'text-danger';
                            }
                            var $rowData = '';
                                  $rowData += `<div class="card">
                                  <div class="card-body">
                                      <div class="d-flex justify-content-between">
                                      <p class="text-success text-sm">
                                        <i class="far fa-user"></i>
                                      </p>
                                      <p class="d-flex flex-column">
                                        <span class="text-muted"> `+row.username+`</span>
                                      </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                      <p class="text-primary text-sm">
                                        <i class="far fa-calendar-alt"></i>
                                      </p>
                                      <p class="d-flex flex-column">
                                        <span class="text-muted"> `+str+`</span>
                                      </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                      <p class="`+tex+` text-sm">
                                        <i class="fas fa-sign-in-alt"></i>
                                      </p>
                                      <p class="d-flex flex-column ">
                                        <span class="text-muted">`+st+`</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>`;

                              return $rowData;
                          },
                          aTargets: [3]
                      },
                      {
                          mRender: function (data, type, row){
                              var stat = row.status;
                              console.log(stat);
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
                                    <a class="dropdown-item" href="#" onclick="editdong('`+row.id+`','`+row.event+`','`+row.tanggal+`','`+row.status+`')"><i class="far fa-edit"></i> Edit</a>
                                    <a class="dropdown-item" href="#" onclick="deleteData(`+row.id+`)"><i class="far fa-trash-alt"></i> Hapus</a>
                                    <div class="dropdown-divider"></div>
                                    `+st+`
                                  </div>
                                </div>`;

                              return $rowData;
                          },
                          aTargets: [4]
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
          }

      }
  });
}

    function savedata(st){
      var id = $('#id').val();

      var event = $('#event').val();
      var tanggal = $('#tanggal').val();
      
      var stat;
      switch (st) {
        case false:
            stat = '0';
          break;
        default:
            stat = '1'
      }

      var formData = new FormData();
      formData.append('id', id);
      formData.append('event', event);
      formData.append('tanggal', tanggal);
      formData.append('status', stat);

        if(id){
          var baseurl = 'updatedatajadwal';
          var msg = 'Update Jadwal';

        }else{
          var baseurl = 'savedatajadwal';
          var msg = 'Tambah Jadwal';
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

function editdong(id,event,tanggal,status){
  $('#add-jadwal').trigger('click');
  $('.modal-title').html('<i class="fas fa-calendar-alt"></i> Edit Jadwal');
  $('#id').val(id);
  $('#event').val(event);
  $('#tanggal').val(tanggal);

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
    title: 'Anda yakin, hapus jadwal ini?',
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
      url: 'deletejadwal',
      data : {
              id    : id,
            },
      success: function(data)
      {
        Swal.fire({
          title: 'Sukses!',
          text: 'Hapus Jadwal',
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


    function addgambar(){
      var count = $("#gambar-container").children().length + 1;

      var elemen = `<div class="col-md-4">
      <div class="card card-light card-outline">
        <div class="card-tools">
          <a onclick="$(this).parent().parent().parent().remove()" class="btn btn-tool">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label></label>
            <div class="text-center">
                <img id="blah_`+count+`" name="images" class="img-fluid" src="assets/img/no-image.png" alt="picture">
                <canvas hidden id="myCanvas_`+count+`"/>
            </div>
            <div class="custom-file" style="margin-bottom: 10px;margin-top: 10px;">
              <input type="file" class="custom-file-input" id="image_`+count+`" name="image_input" onChange="pilihgambar(this)">
              <label class="custom-file-label" for="image_`+count+`">Pilih foto</label>
            </div>
          <input id="caption_`+count+`" name="caption" type="text" class="form-control" placeholder="Caption">
          </div>
        </div>
      </div>
    </div>`;
    $("#gambar-container").append(elemen);
      
    }

    function pilihgambar(ini){
      readURL(ini);
    }

    function updatepublish(id,stat){
      var formData = new FormData();
      formData.append('id', id);
      formData.append('stat', stat);
      
      $.ajax({
        type: 'post',
        url: 'updatejadwalstat',
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        async:false,
          success: function(result){
            Swal.fire({
              title: 'Sukses!',
              text: 'Berita telah di publish',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            });

            $('#modal-default').modal('hide');
            loaddata();
          }
        });
    }