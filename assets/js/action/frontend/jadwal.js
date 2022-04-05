console.log('You are running jQuery version: ' + $.fn.jquery);
$( document ).ready(function() { 
    loaddata();

    // selectEvent
    $('#calendar').on('selectEvent', function(event, activeEvent) {
        
        $('#myModal').modal('show');
        $('#event').html(activeEvent.name);
        $('.modal-title').html(activeEvent.date);
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