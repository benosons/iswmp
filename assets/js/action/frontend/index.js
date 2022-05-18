$( document ).ready(function() {
    loaddata();
    loaddataberita();
    $('.peta-detail').hide();
    $('.peta-detail-2').hide();
    // selectEvent
    $('#calendar').on('selectEvent', function(event, activeEvent) {
        
        $('#myModal').modal('show');
        $('#event').html(activeEvent.name);
        $('.modal-title').html(activeEvent.date);
    });

    $('#tab-jabar').on('click', function (event) {
        event.preventDefault();
        
        $('.tab-active').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('#jabar').show();
        $('#bali').hide();
    });

    $('#tab-bali').on('click', function (event) {
        event.preventDefault();
        
        $('.tab-active').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('#jabar').hide();
        $('#bali').show();

    });
    
})


function loaddata(){
  $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'getglobal',
      data : {
              param       : 'data_jadwal',
              type        : 'jadwal',
      },
      success: function(result){
          let code = result.code;
          let data = result.data;
          
          let myEvents = [
              
          ]

          for (let index = 0; index < data.length; index++) {
              
              if(data[index]['status'] == 1){
                  const d = new Date(data[index]['tanggal']);
                  let time = d.toLocaleTimeString();
                  var hours = Number(time.match(/^(\d+)/)[1]);
                  var minutes = Number(time.match(/:(\d+)/)[1]);
                  var AMPM = time.match(/\s(.*)$/)[1];
                  if(AMPM == "PM" && hours<12) hours = hours+12;
                  if(AMPM == "AM" && hours==12) hours = hours-12;
                  var sHours = hours.toString();
                  var sMinutes = minutes.toString();
                  if(hours<10) sHours = "0" + sHours;
                  if(minutes<10) sMinutes = "0" + sMinutes;
                  
                  myEvents.push(
                      { 
                          id: data[index]['id'],
                          name: sHours + ":" + sMinutes + ' - ' + data[index]['event'], 
                          date: data[index]['tanggal'], 
                          type: "holiday", 
                          everyYear: true,
                          color: "#222"
                      }
                  )
              }

          }
          
          myEvents.sort(function (a, b) {
              var dateA = new Date(a.date), dateB = new Date(b.date)
              return dateB - dateA
          });

          $('#calendar').evoCalendar({
              theme: 'Orange Coral',
              calendarEvents : myEvents.reverse()
          })

      }
  })
}

function loaddataberita(){

  $.ajax({
      type: 'post',
      dataType: 'json',
      url: 'getglobal',
      data : {
              param       : 'data_berita',
              type        : 'berita',
      },
      success: function(result){
          let code = result.code;
          let data = result.data;
          var elem = "";
          elem += '<div class="owl-stage-outer">'
          elem += '<div class="owl-stage">'
          for (let index = 0; index < data.length; index++) {
                
              let id = data[index]['id'];
              let path = data[index]['files'][0]['path'];
              let filename = data[index]['files'][0]['filename'];
              let judul = data[index]['judul'];
              let username = data[index]['username'];
              let tag = data[index]['tag'];
              let intro = data[index]['isi'].substring(0, 200);

              var mydate = new Date(data[index]['create_date']);
              
              var date = ("0" + mydate.getDate()).slice(-2);
              var month = ("0" + (mydate.getMonth() + 1)).slice(-2);
              var year = mydate.getFullYear();
              var str = date+'/'+month+'/'+year;
            
            $('[name="list-'+index+'-href"]').attr("href",'viewnews?id='+id)
            $('[name="list-'+index+'-title"]').attr("href",'viewnews?id='+id)
            $('[name="list-'+index+'-continue"]').attr("href",'viewnews?id='+id)
            $('[name="list-'+index+'-src"]').attr("src",path+`/`+filename)
            $('[name="list-'+index+'-date"]').html(str)
            $('[name="list-'+index+'-username"]').html(username)
            $('[name="list-'+index+'-title"]').html(judul)
            $('[name="list-'+index+'-intro"]').html(intro)

                elem += '<div class="owl-item" style="width: 380px; margin-right: 30px;">'
                elem += `<div class="blog-listing fadein">
                            <div class="cause-avatar">
                                <a href="single-blog.html" title=""><img src="`+path+`/`+filename+`" alt=""></a>
                            </div>
                            <div class="listing-meta" style="padding-left:1px">
                                <ul class="post-date">
                                    <li><span>at-</span> <a href="blog-listing-leftbar.html#" title="">`+str+`</a></li>
                                    <li><span>by-</span> <a href="blog-listing-leftbar.html#" title="">`+username+`</a></li>
                                </ul>
                                <h2><a href="viewnews?id=`+id+`" title="">`+judul+`</a></h2>
                                <p>
                                    `+intro+`...
                                </p>
                                <ul class="socials">
                                    <li><a href="blog-listing-leftbar.html#" title=""><i class="ion-social-facebook"></i></a></li>
                                    <li><a href="blog-listing-leftbar.html#" title=""><i class="ion-social-twitter"></i></a></li>
                                    <li><a href="blog-listing-leftbar.html#" title=""><i class="ion-social-googleplus"></i></a></li>
                                </ul>
                                <a href="viewnews?id=`+id+`" title="" class="button-small" data-ripple="">continue</a>
                            </div>
                        </div>`
                elem += '</div>'
                
                
          }
          elem += '</div>'
          elem += '</div>'
          

        //   $('#berita-beranda').append(elem);
      }
  })
}

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
                            var kab = ['-','Kota Denpasar'];
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
                            var kab = ['-','Kota Denpasar'];
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
