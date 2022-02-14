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
$route['404_override'] = '';
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
$route['^(Videos)(/:any)?$'] = "views/$0";
$route['^(viewnews)(/:any)?$'] = "views/$0";
$route['404'] = "views/page404";

$route['users'] = 'views/listusers';
$route['^(logout)(/:any)?$'] = "auth/$0";
$route['^(register)(/:any)?$'] = "auth/$0";

$route['getdata'] = 'jsondata/getdata';
$route['getglobal'] = 'jsondata/getglobal';
$route['getglobalwhere'] = 'jsondata/getglobalwhere';
$route['savedataberita'] = 'jsondata/savedataberita';
$route['updateberita'] = 'jsondata/updateberita';
$route['updatedataberita'] = 'jsondata/updatedataberita';
$route['savedatafoto'] = 'jsondata/savedatafoto';
$route['savevideo'] = 'jsondata/savevideo';
$route['^(deleteuser)(/:any)?$'] = 'sys/$0';
