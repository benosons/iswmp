    loaddata();
    loaddataberita();

    // selectEvent
    $('#calendar').on('selectEvent', function(event, activeEvent) {
        
        $('#myModal').modal('show');
        $('#event').html(activeEvent.name);
        $('.modal-title').html(activeEvent.date);
    });

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
          for (let index = 0; index < 5; index++) {
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
            
            console.log(index);
            $('#list-'+index+'-href').attr("href",'viewnews?id='+id)
            $('#list-'+index+'-title').attr("href",'viewnews?id='+id)
            $('#list-'+index+'-continue').attr("href",'viewnews?id='+id)
            $('#list-'+index+'-src').attr("src",path+`/`+filename)
            $('#list-'+index+'-date').html(str)
            $('#list-'+index+'-username').html(username)
            // $('#list-1-title').attr("href",'viewnews?id='+id)
            $('#list-'+index+'-title').html(judul)
            $('#list-'+index+'-intro').html(intro)
            // $('#list-1-continue').



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
