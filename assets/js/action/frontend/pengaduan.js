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
                param       : 'data_video',
                type        : 'video',
        },
        success: function(result){
            let code = result.code;
            let data = result.data;
            let elem = '';
            for (let index = 0; index < data.length; index++) {
                elem += 
                `<div class="col-sm-4">
                        <div class="video-post">
                            <div class="video-widget">
                                <img src="http://img.youtube.com/vi/`+data[index]['code']+`/0.jpg" alt="">
                                <a target="_blank" href="https://www.youtube.com/embed/`+data[index]['code']+`?autoplay=0&amp;controls=1&amp;showinfo=0&amp;autohide=1&amp;rel=0&amp;iv_load_policy=3" data-showsocial="false" class="html5lightbox" data-group="set2" title=""><i class="ion-android-arrow-dropright-circle"></i></a>
                            </div>
                            <h4><a href="#" title=""></a>`+data[index]['judul']+`</h4>
                        </div>
                    </div>`

            }
            $('#itemContainer').append(elem);


        }
    })
}