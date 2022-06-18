console.log('You are running jQuery version: ' + $.fn.jquery);
$(function () {    
    $('.peta-detail').hide();
    $('.peta-detail-2').hide();
})

function viewdata(id, provinsi){

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'getpetawhere',
        data : {
                id       : id,
                provinsi : provinsi,
                param    : 'data_peta',
         },
        success: function(result){
          
          if(result.code == 1){
            if(provinsi == 1){
                $('.peta-detail').show();
                var dt = $('#data-peta').DataTable({
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
                        { 'mDataProp': 'kabupaten'},
                        { 'mDataProp': 'latitude'},
                        { 'mDataProp': 'nama'},
                        { 'mDataProp': 'alamat', 'width':'30%'},
                        { 'mDataProp': 'kapasitas', 'width':'10%'},
                        { 'mDataProp': 'luas', 'width':'10%'},
                        { 'mDataProp': 'fisik', 'width':'18%'},
                    ],
                    order: [[0, 'ASC']],
                    aoColumnDefs:[
                        {
                          mRender: function (data, type, row){
                            var kab = ['-','Kabupaten Karawang', 'Kabupaten Bekasi', 'Kabupaten Purwakarta', 'Kabupaten Cianjur', 'Kabupaten Sumedang', 'Kota Bandung', 'Kota Cimahi', 'Kabupaten Bandung Barat', 'Kabupaten Bandung'];
                            var $rowData = kab[row.kabupaten];
                          return $rowData;
                          },
                          aTargets: [1]
                        },
                        {
                          mRender: function (data, type, row){
                            var $rowData = row.latitude +' - '+ row.longitude;
                          return $rowData;
                          },
                          aTargets: [2]
                        },
                        {
                          mRender: function (data, type, row){
                            var kab = ['-','Kabupaten Karawang', 'Kabupaten Bekasi', 'Kabupaten Purwakarta', 'Kabupaten Cianjur', 'Kabupaten Sumedang', 'Kota Bandung', 'Kota Cimahi', 'Kabupaten Bandung Barat', 'Kabupaten Bandung'];
                            var $rowData = row.alamat +''+ row.desa + ', ' + row.kecamatan + ', ' + kab[row.kabupaten];
                          return $rowData;
                          },
                          aTargets: [4]
                        },
                        {
                          mRender: function (data, type, row){
                            // var $rowData = row.fisik +''+ row.keuangan;
                            var $rowData = `
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
                                            `;
                          return $rowData;
                          },
                          aTargets: [7]
                        },
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
  
                    }
                });

                $('html, body').animate({
                    scrollTop: $("#data-peta").offset().top
                }, 1000);
              }else if(provinsi == 2){
                $('.peta-detail-2').show();
                var dt = $('#data-peta-2').DataTable({
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
                        { 'mDataProp': 'kabupaten'},
                        { 'mDataProp': 'latitude'},
                        { 'mDataProp': 'nama'},
                        { 'mDataProp': 'alamat', 'width':'30%'},
                        { 'mDataProp': 'kapasitas', 'width':'10%'},
                        { 'mDataProp': 'luas', 'width':'10%'},
                        { 'mDataProp': 'fisik', 'width':'18%'},
                    ],
                    order: [[0, 'ASC']],
                    aoColumnDefs:[
                        {
                          mRender: function (data, type, row){
                            var kab = ['-','Kota Denpasar', 'kota Denpasar', 'kota Denpasar'];
                            var $rowData = kab[row.kabupaten];
                          return $rowData;
                          },
                          aTargets: [1]
                        },
                        {
                          mRender: function (data, type, row){
                            var $rowData = row.latitude +' - '+ row.longitude;
                          return $rowData;
                          },
                          aTargets: [2]
                        },
                        {
                          mRender: function (data, type, row){
                            var kab = ['-','Kota Denpasar', 'kota Denpasar', 'kota Denpasar'];
                            var $rowData = row.alamat +''+ row.desa + ', ' + row.kecamatan + ', ' + kab[row.kabupaten];
                          return $rowData;
                          },
                          aTargets: [4]
                        },
                        {
                          mRender: function (data, type, row){
                            // var $rowData = row.fisik +''+ row.keuangan;
                            var $rowData = `
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
                                            `;
                          return $rowData;
                          },
                          aTargets: [7]
                        },
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
  
                    }
                });

                $('html, body').animate({
                    scrollTop: $("#data-peta-2").offset().top
                }, 1000);

              }
            }else{
              var tb = $('#data-peta').DataTable();
              tb.clear().draw();
            }
  
        }
    });
    
}