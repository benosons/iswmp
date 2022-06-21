<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Views extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_auth');
		$this->load->model('Model_sys');
		$this->logs = $this->session->all_userdata();
		$this->logged = $this->session->userdata('userLogged');
		$this->kategori = $this->session->userdata('kategori');
		$this->username = $this->session->userdata('username');
		$this->name = $this->session->userdata('name');
		$this->role = $this->session->userdata('role');
		$this->foto = $this->session->userdata('foto');
		$this->id = $this->session->userdata('id');
		$this->content = array(
			"base_url" => base_url(),
			"logs" => $this->session->all_userdata(),
			"id" => $this->id,
			"username" => $this->username,
			"role" => $this->role,
			"name" => $this->name,
			"foto" => $this->foto
		);

		$this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
		$this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
		$this->output->set_header('Pragma: no-cache');
		$this->output->set_header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
		
		$ip    = $this->input->ip_address(); // Mendapatkan IP user
		$date  = date("Y-m-d"); // Mendapatkan tanggal sekarang
		$waktu = time(); //
		$timeinsert = date("Y-m-d H:i:s");
		$year = date("Y");
		$month = date("m");
		
		if(!$this->logged){
			// Cek berdasarkan IP, apakah user sudah pernah mengakses hari ini
			$s = $this->Model_sys->selectVisitor($ip, $date);
			// $s = $this->db->query("SELECT * FROM visitor WHERE ip='".$ip."' AND date='".$date."'")->num_rows();
			$ss = isset($s)?($s):0;
			
			// Kalau belum ada, simpan data user tersebut ke database
			if($ss == 0){
				$data = $this->Model_sys->insertVisitor($ip, $date, '1', $waktu, $timeinsert);
				return false;
				// $this->db->query("INSERT INTO visitor(ip, date, hits, online, time) VALUES('".$ip."','".$date."','1','".$waktu."','".$timeinsert."')");
			}
			
			// Jika sudah ada, update
			else{
				$data = $this->Model_sys->updateVisitor($waktu, $ip, $date);
				return false;
				// $this->db->query("UPDATE visitor SET hits=hits+1, online='".$waktu."' WHERE ip='".$ip."' AND date='".$date."'");
			}		
		}

		$pengunjunghariini  = $this->db->query("SELECT * FROM visitor WHERE date='".$date."' GROUP BY ip")->num_rows(); // Hitung jumlah pengunjung
		$pengunjungbulanini  = $this->db->query("SELECT * FROM visitor WHERE MONTH(date)='".$month."'")->num_rows(); // Hitung jumlah pengunjung
		$pengunjungtahunini  = $this->db->query("SELECT * FROM visitor WHERE YEAR(date)='".$year."'")->num_rows(); // Hitung jumlah pengunjung
 
		$dbpengunjung = $this->db->query("SELECT COUNT(hits) as hits FROM visitor")->row(); 
		
		$totalpengunjung = isset($dbpengunjung->hits)?($dbpengunjung->hits):0; // hitung total pengunjung
		
		$bataswaktu = time() - 300;
		
		$pengunjungonline  = $this->db->query("SELECT * FROM visitor WHERE online > '".$bataswaktu."'")->num_rows(); // hitung pengunjung online

		$this->pengunjunghariini 	= $pengunjunghariini;
		$this->pengunjungbulanini 	= $pengunjungbulanini;
		$this->pengunjungtahunini 	= $pengunjungtahunini;
		$this->totalpengunjung 		= $totalpengunjung;
		$this->pengunjungonline 	= $pengunjungonline;
		$this->pengunjungonline 	= $pengunjungonline;

	}

	public function index()
	{
		if ($this->logged)
		{
			redirect("dashboard");
		}else{
			$this->twig->display('frontend/error/404.html', $this->content);
		}
	}


	public function login()
	{

		if ($this->logged)
		{

			if($this->role == '10' || $this->role == '20'){
				redirect("dashboard");
			}else{
				redirect("/");
			}
		}else{
			$this->twig->display("admin/login/index-login.html", $this->content);
		}

	}

	public function dashboard()
	{
		if ( $this->logged)
		{
			if( $this->role == '10' || $this->role == '20' || $this->role == '30'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/index.js';
				$this->content['pengunjunghariini'] = $this->pengunjunghariini;
				$this->content['pengunjungbulanini'] = $this->pengunjungbulanini;
				$this->content['pengunjungtahunini'] = $this->pengunjungtahunini;
				$this->content['totalpengunjung'] = $this->totalpengunjung;
				$this->content['pengunjungonline'] = $this->pengunjungonline;
				$this->twig->display('admin/index.html', $this->content);
			}else{
				redirect("/");
			}
		}else{
			redirect("logout");
		}
	}
	
	public function listusers()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/users/listuser.js';
				$this->twig->display('admin/users/listuser.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}

	public function foto()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/galeri/foto.js';
				$this->twig->display('admin/galeri/foto.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}

	public function laporan()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/laporan/laporan.js';
				$this->twig->display('admin/laporan/laporan.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}

	public function kriteria()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/infrastruktur/kriteria.js';
				$this->twig->display('admin/infrastruktur/kriteria.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}
	public function persiapan()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/infrastruktur/persiapan.js';
				$this->twig->display('admin/infrastruktur/persiapan.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}
	public function pelaksanaan()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/infrastruktur/pelaksanaan.js';
				$this->twig->display('admin/infrastruktur/pelaksanaan.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}
	public function operasi()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/infrastruktur/operasi.js';
				$this->twig->display('admin/infrastruktur/operasi.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}
	public function evaluasi()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/infrastruktur/evaluasi.js';
				$this->twig->display('admin/infrastruktur/evaluasi.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}

	public function peta()
	{
		
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/peta/peta.js';
				$this->twig->display('admin/peta/peta.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			if($this->input->get('param')){
				
				$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/peta.js';
				$this->content['param'] = strtoupper($this->input->get('param'));
				$this->twig->display('frontend/peta.html', $this->content);
			}else{
				redirect("logout");
			}
		}
	}

	public function berita()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/berita/berita.js';
				$this->twig->display('admin/berita/berita.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}
	
	public function tujuan()
	{
		$this->twig->display('frontend/tujuan.html', $this->content);
	}

	public function latar()
	{
		$this->twig->display('frontend/latar.html', $this->content);
	}

	public function struktur()
	{
		$this->twig->display('frontend/struktur.html', $this->content);
	}

	public function indikator()
	{
		$this->twig->display('frontend/indikator.html', $this->content);
	}

	public function implementasi()
	{
		$this->twig->display('frontend/implementasi.html', $this->content);
	}

	public function strategi()
	{
		$this->twig->display('frontend/strategi.html', $this->content);
	}

	public function keluaran()
	{
		$this->twig->display('frontend/keluaran.html', $this->content);
	}

	public function owp()
	{
		$this->twig->display('frontend/owp.html', $this->content);
	}

	public function news()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/berita.js';
		$this->twig->display('frontend/news.html', $this->content);
	}

	public function viewnews()
	{
		
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/berita.js';
		$this->content['id'] = $this->input->get('id');
		$this->twig->display('frontend/viewnews.html', $this->content);
	}

	public function about()
	{
		$this->twig->display('frontend/about.html', $this->content);
	}

	public function photos()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/photos.js';
		$this->twig->display('frontend/photos.html', $this->content);
	}


	public function pengaduan()
	{
		if ($this->logged) {
			$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/pengaduan.js';
			$this->twig->display('admin/pengaduan.html', $this->content);
		}else{
			$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/pengaduan.js';
			$this->twig->display('frontend/pengaduan.html', $this->content);
		}
	}

	public function embedlaporan()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/embedlaporan.js';
		$this->twig->display('frontend/embedlaporan.html', $this->content);
	}

	public function videos()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/videos.js';
		$this->twig->display('frontend/videos.html', $this->content);
	}

	public function jadwal()
	{

		if($this->role){
			if ($this->logged) {
				if($this->role == '10'){
					$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/jadwal.js';
					$this->twig->display('admin/jadwal.html', $this->content);
				}else{
					redirect("dashboard");
				}
			}else{
				redirect("logout");
			}
		}else{
			$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/jadwal.js';
			$this->twig->display('frontend/jadwal.html', $this->content);
		}
	}

	public function keuangan()
	{
		if($this->input->get('param') == 'bulanan'){
			$this->twig->display('frontend/bulanan.html', $this->content);
		}else if($this->input->get('param') == 'triwulan'){
			$this->twig->display('frontend/triwulan.html', $this->content);
		}
	}

	public function monitoring()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/monitoring.js';
		if($this->input->get('param') == 'bali'){
			$this->content['param'] = 'BALI';
		}else if($this->input->get('param') == 'citarum'){
			$this->content['param'] = 'CITARUM';
		}else if($this->input->get('param') == 'rc'){
			$this->content['param'] = 'RC';
		}
		$this->twig->display('frontend/monitoring.html', $this->content);
	}

	public function progres()
	{
		if($this->input->get('param') == '2021'){
			$this->twig->display('frontend/progres_2021.html', $this->content);
		}else if($this->input->get('param') == '2022'){
			$this->twig->display('frontend/progres_2022.html', $this->content);
		}
	}

	public function report()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/laporan.js';
		$this->twig->display('frontend/report.html', $this->content);
	}

	public function pedoman()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/pedoman.js';
		$this->twig->display('frontend/pedoman.html', $this->content);
	}

	public function page404()
	{
		$this->twig->display('frontend/error/404.html', $this->content);
	}

	public function video()
	{
		if ($this->logged) {
			if($this->role == '10'){
				$this->content['script'] = $this->data['base_url'].'assets/js/action/admin/galeri/video.js';
				$this->twig->display('admin/galeri/video.html', $this->content);
			}else{
				redirect("dashboard");
			}
		}else{
			redirect("logout");
		}
	}

}
