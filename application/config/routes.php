<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'frontend';
$route['404_override'] = 'views';
$route['translate_uri_dashes'] = FALSE;

$route['^(login)(/:any)?$'] = "views/$0";
$route['^(dashboard)(/:any)?$'] = "views/$0";
$route['^(foto)(/:any)?$'] = "views/$0";
$route['^(video)(/:any)?$'] = "views/$0";
$route['^(berita)(/:any)?$'] = "views/$0";
// FE
$route['^(about)(/:any)?$'] = "views/$0";
$route['^(tujuan)(/:any)?$'] = "views/$0";
$route['^(indikator)(/:any)?$'] = "views/$0";
$route['^(implementasi)(/:any)?$'] = "views/$0";
$route['^(strategi)(/:any)?$'] = "views/$0";
$route['^(keluaran)(/:any)?$'] = "views/$0";
$route['^(owp)(/:any)?$'] = "views/$0";
$route['^(news)(/:any)?$'] = "views/$0";
$route['^(photos)(/:any)?$'] = "views/$0";
$route['^(videos)(/:any)?$'] = "views/$0";
$route['^(viewnews)(/:any)?$'] = "views/$0";
$route['^(jadwal)(/:any)?$'] = "views/$0";
$route['^(keuangan)(/:any)?$'] = "views/$0";
$route['^(progres)(/:any)?$'] = "views/$0";
$route['^(report)(/:any)?$'] = "views/$0";
$route['^(laporan)(/:any)?$'] = "views/$0";
$route['^(peta)(/:any)?$'] = "views/$0";
$route['^(pengaduan)(/:any)?$'] = "views/$0";
$route['^(embedlaporan)(/:any)?$'] = "views/$0";
$route['^(monitoring)(/:any)?$'] = "views/$0";
$route['^(latar)(/:any)?$'] = "views/$0";
$route['^(struktur)(/:any)?$'] = "views/$0";
// infrastruktur
$route['^(kriteria)(/:any)?$'] = "views/$0";
$route['^(persiapan)(/:any)?$'] = "views/$0";
$route['^(pelaksanaan)(/:any)?$'] = "views/$0";
$route['^(operasi)(/:any)?$'] = "views/$0";
$route['^(evaluasi)(/:any)?$'] = "views/$0";
$route['^(pedoman)(/:any)?$'] = "views/$0";

$route['404'] = "views/page404";

$route['users'] = 'views/listusers';
$route['^(logout)(/:any)?$'] = "auth/$0";
$route['^(register)(/:any)?$'] = "auth/$0";

$route['getdata'] = 'jsondata/getdata';
$route['getglobal'] = 'jsondata/getglobal';
$route['getglobalwhere'] = 'jsondata/getglobalwhere';
$route['getglobalwhereby'] = 'jsondata/getglobalwhereby';
$route['getpetawhere'] = 'jsondata/getpetawhere';
$route['getcriteria'] = 'jsondata/getcriteria';
$route['savedataberita'] = 'jsondata/savedataberita';
$route['updateberita'] = 'jsondata/updateberita';
$route['updatelaporan'] = 'jsondata/updatelaporan';
$route['updatedataberita'] = 'jsondata/updatedataberita';
$route['updatedatajadwal'] = 'jsondata/updatedatajadwal';
$route['updatePeta'] = 'jsondata/updatePeta';
$route['savedatafoto'] = 'jsondata/savedatafoto';
$route['savevideo'] = 'jsondata/savevideo';
$route['savedatajadwal'] = 'jsondata/savedatajadwal';
$route['saveLaporan'] = 'jsondata/saveLaporan';
$route['savePeta'] = 'jsondata/savePeta';
$route['savePengaduan'] = 'jsondata/savePengaduan';
$route['deletejadwal'] = 'jsondata/deletejadwal';
$route['deletefoto'] = 'jsondata/deletefoto';
$route['deletevideo'] = 'jsondata/deletevideo';
$route['updatejadwalstat'] = 'jsondata/updatejadwalstat';
$route['updateCriteria'] = 'jsondata/updateCriteria';
$route['deleteberita'] = 'jsondata/deleteberita';
$route['deletelaporan'] = 'jsondata/deletelaporan';
$route['deletepeta'] = 'jsondata/deletepeta';
$route['deletecriteria'] = 'jsondata/deletecriteria';
$route['saveCriteria'] = 'jsondata/saveCriteria';
$route['^(deleteuser)(/:any)?$'] = 'sys/$0';

$route['^(saveUser)(/:any)?$'] = 'sys/$0';
$route['^(updateUser)(/:any)?$'] = 'sys/$0';
$route['^(deleteuser)(/:any)?$'] = 'sys/$0';
