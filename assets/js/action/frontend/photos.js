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
                param       : 'data_foto',
                type        : 'foto',
        },
        success: function(result){
            let code = result.code;
            let data = result.data;
            let elem = '';
            for (let index = 0; index < data.length; index++) {
                elem += `<div class="tab-1 col-sm-4">
                            <div class="gallery-avatar">
                                <a target="_blank" href="`+data[index]['files'][0]['path']+'/'+data[index]['files'][0]['filename']+`" data-showsocial="false"  class="html5lightbox crop" data-group="set2" title="">
                                    <img src="`+data[index]['files'][0]['path']+'/'+data[index]['files'][0]['filename']+`" alt="">
                                </a>
                            </div>
                            <h4>`+data[index]['judul']+`</h4>
                        </div>`;

            }
            $('.masonry').append(elem);


        }
    })
}