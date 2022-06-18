console.log('You are running jQuery version: ' + $.fn.jquery);
$(function () {    
    loaddata();
})

function loaddata(){

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: 'getglobalwhere',
        data : {
                param       : 'data_laporan',
                type        : 'laporan',
                mode        : '2',
        },
        success: function(result){
            let code = result.code;
            let data = result.data;
            let elem = '';
            for (let index = 0; index < data.length; index++) {
                var str1 = data[index]['url'];
                var str2 = "https://";

                if(str1.indexOf(str2) != -1){
                    var urel = data[index]['url'];
                }else{
                    var urel = 'https://'+data[index]['url']
                }

                elem += 
                `<tr class="wptb-row">
                <td class="wptb-cell" data-y-index="1" data-x-index="0" style="border: 1px solid rgb(209, 209, 209); padding: 8px;" data-wptb-css-td-auto-width="true">
                    <div class="wptb-text-container wptb-ph-element wptb-element-text-6" style="font-size: 12px; color: rgb(0, 0, 0);">
                        <div class="" style="position: relative;"><p style="text-align: left;">`+data[index]['judul']+`</p>
                        </div>
                    </div>
                </td>
                <td class="wptb-cell" data-y-index="1" data-x-index="1" style="border: 1px solid rgb(209, 209, 209); padding: 8px;" data-wptb-css-td-auto-width="true">
                    <div class="wptb-text-container wptb-ph-element wptb-element-text-7" style="font-size: 11px; color: rgb(0, 0, 0);">
                        <div class="" style="position: relative;"><p class="MsoNormal" style="margin-bottom: 18pt; text-align: left;">
                        `+data[index]['deskripsi']+`
                        </div>
                    </div>
                </td>
                <td class="wptb-cell" data-y-index="1" data-x-index="2" style="border: 1px solid rgb(209, 209, 209); padding: 8px; width: 68px;">
                    <div class="wptb-text-container wptb-ph-element wptb-element-text-8" style="color: rgb(0, 0, 0); font-size: 12px;">
                        <div class="" style="position: relative;"><p style="text-align: center;">`+data[index]['tanggal']+`</p>
                            <p></p>
                        </div></div>
                    </td>
                    <td class="wptb-cell" data-y-index="1" data-x-index="3" style="border: 1px solid rgb(209, 209, 209); padding: 8px;" data-wptb-css-td-auto-width="true">
                        <div class="wptb-text-container wptb-ph-element wptb-element-text-9" style="font-size: 12px; color: rgb(0, 0, 0);">
                            <div class="" style="position: relative;"><p style="text-align: center;">`+data[index]['jenis']+`</p>
                                <p></p>
                            </div>
                        </div></td>
                        <td class="wptb-cell" data-y-index="1" data-x-index="4" style="border: 1px solid rgb(209, 209, 209); padding: 8px; width: 84px;">
                            <div class="wptb-button-container wptb-ph-element wptb-element-button-1">
                                <div style="justify-content: center;" class="wptb-button-wrapper wptb-size-xl">
                                    <a class="btn btn-success btn-block btn-sm" style="" target="_blank" href="`+urel+`">
                                        <i class="ion-ios-download"></i> Download
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>`

            }
            $('#laporheader').append(elem);


        }
    })
}