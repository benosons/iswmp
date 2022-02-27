console.log('You are running jQuery version: ' + $.fn.jquery);
$(function () {    
    loaddata();
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
                myEvents.push(
                    { 
                    id: data[index]['id'],
                    name: data[index]['event'], 
                    date: data[index]['tanggal'], 
                    type: "holiday", 
                    everyYear: true,
                    color: "#222"
                }
                )
            }
            
            console.log(myEvents);
            $('#calendar').evoCalendar({
                theme: 'Orange Coral',
                calendarEvents : myEvents
            })

        }
    })
}