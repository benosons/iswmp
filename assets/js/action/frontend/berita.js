console.log('You are running jQuery version: ' + $.fn.jquery);
$(function () {
    const idnews = $('#id_news').val();

    if(!idnews){
        loaddata();
    }else{
        loaddatawhere(idnews);
    }

})

function loaddata(){

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

                elem += `<div class="blog-listing fadein">
                            <div class="avatar-listing">
                                <a href="single-blog.html" title=""><img src="`+path+`/`+filename+`" alt=""></a>
                            </div>
                            <div class="listing-meta">
                                <ul class="post-date">
                                    <li><span>date-</span> <a href="blog-listing-rightbar.html#" title="">`+str+`</a></li>
                                    <li><span>by-</span> <a href="blog-listing-rightbar.html#" title="">`+username+`</a></li>
                                </ul>
                                <h2><a href="/viewnews?id=`+id+`" title="">`+judul+`</a></h2>
                                <p>
                                    `+intro+`...
                                </p>
                                
                                <div class="tags-in fromright animated fadeInRight">
                                            <span><i class="ion-bookmark"></i>tags </span>
                                            <ul class="tags-cloud">
                                                <li><a href="" title="">`+tag+`</a></li>
                                            </ul>
                                </div>
                                <a href="/viewnews?id=`+id+`" title="" class="button-small" data-ripple="">continue</a>
                            </div>
                        </div>`;         
            }

            $('#itemContainer').append(elem);
        }
    })
}

function loaddatawhere(id){

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'getglobalwhere',
        data : {
                param       : 'data_berita',
                type        : 'berita',
                id          : id,
        },
        success: function(result){
            let code = result.code;
            let data = result.data;
            var elem = "";
            if(code == 1){
                for (let index = 0; index < data.length; index++) {
                    let id = data[index]['id'];
                    let path = data[index]['files'][0]['path'];
                    let filename = data[index]['files'][0]['filename'];
                    let judul = data[index]['judul'];
                    let username = data[index]['username'];
                    let tag = data[index]['tag'];
                    let intro = data[index]['isi'].substring(0, 200);
                    let isi = data[index]['isi'];
                    var mydate = new Date(data[index]['create_date']);
                    
                    var date = ("0" + mydate.getDate()).slice(-2);
                    var month = ("0" + (mydate.getMonth() + 1)).slice(-2);
                    var year = mydate.getFullYear();
                    var str = date+'/'+month+'/'+year;

                    $('#image-news').attr('src',path+'/'+filename);
                    $('#date-news').html(str);
                    $('#by-news').html(username);
                    $('#judul-news').html(judul);
                    $('#isi-news').html(isi);
                    $('#tag-news').html(tag);
                }
            }else{
                window.location.href = "/404";
            }
        }
    })
}