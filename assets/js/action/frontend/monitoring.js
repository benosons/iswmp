console.log('You are running jQuery version: ' + $.fn.jquery);
$(function () {    
    $('#tab-wrapper li:first').addClass('active');
    $('#tab-body > div').hide();
    $('#tab-body > div:first').show();
    $('#tab-wrapper a').click(function() {
        $('#tab-wrapper li').removeClass('active');
        $(this).parent().addClass('active');
        var activeTab = $(this).attr('href');
        $('#tab-body > div:visible').hide();
        $(activeTab).show();
        return false;
    });

    $('#rc').DataTable({
        aoColumnDefs:[
            {
                mRender: function (data, type, row){
                    var $rowData = '';
                      $rowData += `
                          <button id="" class="btn btn-primary" src="" alt="">Form RC</button>
                        `;
                    
                    return $rowData;
                },
                aTargets: [3]
            },
        ],
    });
})