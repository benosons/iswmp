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
		$this->twig->display('frontend/photos.html', $this->content);
	}


	public function videos()
	{
		$this->twig->display('frontend/videos.html', $this->content);
	}

	public function jadwal()
	{
		$this->content['script'] = $this->data['base_url'].'assets/js/action/frontend/jadwal.js';
		$this->twig->display('frontend/jadwal.html', $this->content);
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
