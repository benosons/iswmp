console.log('You are running jQuery version: ' + $.fn.jquery);
$(function () {    
    loaddata();
    $('#kota').change(function (e) {
        let kotanya = this.value
        let tpstnya = '<option>Pilih Nama TPST *</option>'
        
        if(kotanya == 'Kabupaten Bandung'){
            tpstnya += `<option kota="Kabupaten Bandung " value="Cicukang Oxbow" >Cicukang Oxbow</option>
                        <option kota="Kabupaten Bandung " value="Citaliktik" >Citaliktik</option>
                        <option kota="Kabupaten Bandung " value="Ex TPA Babakan" >Ex TPA Babakan</option>
                        <option kota="Kabupaten Bandung " value="Jelekong" >Jelekong</option>
                        <option kota="Kabupaten Bandung " value="RPH Baleendah" >RPH Baleendah</option>
                        <option kota="Kabupaten Bandung " value="UPT BLK Disnaker" >UPT BLK Disnaker</option>
                        <option kota="Kabupaten Bandung " value="Wargamekar" >Wargamekar</option>`
        }
        
        if(kotanya == 'Kabupaten Bandung Barat'){
            tpstnya += `<option kota="Kabupaten Bandung Barat" value="Batujajar Timur" >Batujajar Timur</option>
                        <option kota="Kabupaten Bandung Barat" value="Cilame" >Cilame</option>
                        <option kota="Kabupaten Bandung Barat" value="Desa Suntenjaya" >Desa Suntenjaya</option>
                        <option kota="Kabupaten Bandung Barat" value="EX TPA Pasir Buluh" >EX TPA Pasir Buluh</option>
                        <option kota="Kabupaten Bandung Barat" value="Komplek Pemda" >Komplek Pemda</option>
                        <option kota="Kabupaten Bandung Barat" value="Komplek Perumahan Kota Baru Parahyangan" >Komplek Perumahan Kota Baru Parahyangan</option>`
        }

        if(kotanya == 'Kabupaten Bekasi'){
            tpstnya += `<option kota="Kabupaten Bekasi" value="Bantarjaya" >Bantarjaya</option>
                        <option kota="Kabupaten Bekasi" value="Kertamukti" >Kertamukti</option>
                        <option kota="Kabupaten Bekasi" value="Lenggahjaya" >Lenggahjaya</option>
                        <option kota="Kabupaten Bekasi" value="Sindangjaya" >Sindangjaya</option>
                        <option kota="Kabupaten Bekasi" value="Kedungwaringin" >Kedungwaringin</option>`
        }

        if(kotanya == 'Kabupaten Cianjur'){
            tpstnya += `<option kota="Kabupaten Cianjur" value="Bojong" >Bojong</option>
            <option kota="Kabupaten Cianjur" value="Mekarsari" >Mekarsari</option>
            <option kota="Kabupaten Cianjur" value="Bojongpicung" >Bojongpicung</option>
            <option kota="Kabupaten Cianjur" value="Pasirembung" >Pasirembung</option>`
        }

        if(kotanya == 'Kabupaten Karawang'){
            tpstnya += `<option kota="Kabupaten Karawang" value="Cirejag" >Cirejag</option>
            <option kota="Kabupaten Karawang" value="Jayakerta" >Jayakerta</option>
            <option kota="Kabupaten Karawang" value="Leuwisisir" >Leuwisisir</option>
            <option kota="Kabupaten Karawang" value="Mekarjati" >Mekarjati</option>`
        }

        if(kotanya == 'Kabupaten Purwakarta'){
            tpstnya += `<option kota="Kabupaten Purwakarta" value="Cikolotok" >Cikolotok</option>
            <option kota="Kabupaten Purwakarta" value="Nagrak" >Nagrak</option>
            <option kota="Kabupaten Purwakarta" value="Neglasari" >Neglasari</option>
            <option kota="Kabupaten Purwakarta" value="Sukatani" >Sukatani</option>
            <option kota="Kabupaten Purwakarta" value="Tehalsari" >Tehalsari</option>`
        }

        if(kotanya == 'Kota Bandung'){
            tpstnya += `<option kota="Kota Bandung" value="EX-TPA Cicabe" >EX-TPA Cicabe</option>
            <option kota="Kota Bandung" value="Nyengseret" >Nyengseret</option>
            <option kota="Kota Bandung" value="Tegalega" >Tegalega</option>`
        }

        if(kotanya == 'Kota Cimahi'){
            tpstnya += `<option kota="Kota Cimahi" value="Kolonel Masturi" >Kolonel Masturi</option>
            <option kota="Kota Cimahi" value="Lebak Saat Cipageran" >Lebak Saat Cipageran</option>`
        }

        if(kotanya == 'Kota Denpasar'){
            tpstnya += `<option kota="Kota Denpasar" value="Kesiman Kertalangu" >Kesiman Kertalangu</option>
            <option kota="Kota Denpasar" value="Padang Sambian" >Padang Sambian</option>
            <option kota="Kota Denpasar" value="Tahura" >Tahura</option>`
        }

        $('#tpst').html(tpstnya)
        $('select').niceSelect('update');
    })

    createCaptcha()

    $('#cpatchaTextBox').on('keyup', function (e) {
        if(e.target.value.length == 6){
            validateCaptcha(e.target.value)
        }
    })
    
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

var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  if (document.getElementById("cpatchaTextBox").value == code) {
    alert("Valid Captcha")
    $('#submit').prop('disabled', false)
    $('#submit').removeClass('btn-disabled')
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha();
    $('#submit').prop('disabled', true)
    $('#submit').addClass('btn-disabled')
  }
}
