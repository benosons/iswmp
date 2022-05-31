<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Jsondata extends CI_Controller {

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
		$this->load->model('Model_data');
		$this->load->model('Model_sys');
		$this->logs = $this->session->all_userdata();
		$this->logged = $this->session->userdata('userLogged');
		$this->kategori = $this->session->userdata('kategori');
		$this->role = $this->session->userdata('role');
		$this->username = $this->session->userdata('username');
		$this->kotaKab = $this->session->userdata('kotaKab');
		$this->name = $this->session->userdata('name');
		$this->foto = $this->session->userdata('foto');
		$this->id 	= $this->session->userdata('id');
		$this->notelp 	= $this->session->userdata('notelp');
		$this->email 	= $this->session->userdata('email');
		$this->content = array(
			"base_url" => base_url(),
			"logs" => $this->session->all_userdata(),
			"username" => $this->username,
			"role" => $this->role,
			"name" => $this->name,
			"foto" => $this->foto,
			"kategori" => $this->kategori,
			"notelp" => $this->notelp,
			"email" => $this->email,
			"id" => $this->id
		);
		$this->output->set_header('Last-Modified: ' . gmdate("D, d M Y H:i:s") . ' GMT');
		$this->output->set_header('Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0');
		$this->output->set_header('Pragma: no-cache');
		$this->output->set_header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");

	}


	public function savepengajuan()
	{
		$params = (object)$this->input->post();
		// // remove the part that we don't need from the provided image and decode it
		// $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $params->img));

		// $filepath = "assets/dokumen/gambar/user/".$params->username.".png"; // or image.jpg
		// chmod($filepath,0777);
		// file_put_contents($filepath,$data);
		// $params->foto = $filepath;

		$params->create_by	 = $this->session->userdata('id');
		$params->update_by	 = $this->session->userdata('id');
		$params->create_date = date("Y-m-d H:i:s");
		$params->update_date = date("Y-m-d H:i:s");
		$params->status 	 = 1;
		$data = $params;


		$result = $this->Model_data->savepengajuan($data);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function getdata()
	{
		try
		{
				
				$post = (object)$this->input->post();
				$param =  $post->param;
				
				$result = $this->Model_sys->getdatausers($param);
				foreach ($result as $key => $value) {
					if(!file_exists(base_url().$value->img)){
						$result[$key]->img = base_url().'assets/img/users/default.jpg';
					}
					
				}
					if($result){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 		 => $result
						];
					}else{
						$response = [
						    'status'   => 'gagal',
						    'code'     => '0',
						    'data'     => 'tidak ada data',
						];
					}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function getglobal()
	{
		try
		{
				
				$post = (object)$this->input->post();
				$param =  $post->param;
				$type =  $post->type;
				
				$result = $this->Model_data->getdata($param);
				foreach ($result as $key => $value) {
					$files = $this->Model_data->getfile($value->id, $type);
					if(!empty($files)){
						$result[$key]->files = $files;
					}

					if(isset($value->create_by)){
						$user = $this->Model_data->getwhere("*", "muser", "id = '$value->create_by'");
						$result[$key]->username = $user[0]->name;
					}

					// if(!file_exists(base_url().$value->img)){
					// 	$result[$key]->img = base_url().'assets/img/users/default.jpg';
					// }
					
				}
					if($result){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 		 => $result
						];
					}else{
						$response = [
						    'status'   => 'gagal',
						    'code'     => '0',
						    'data'     => 'tidak ada data',
						];
					}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function getglobalwhere()
	{
		try
		{
				
				$post = (object)$this->input->post();
				$param =  $post->param;
				$type =  $post->type;
				$id =  $post->id;
				
				$result = $this->Model_data->getwhere("*", $param, "id = '$id'");
				foreach ($result as $key => $value) {
					$files = $this->Model_data->getfile($value->id, $type);
					if(!empty($files)){
						$result[$key]->files = $files;
					}

					if(isset($value->create_by)){
						$user = $this->Model_data->getwhere("*", "muser", "id = '$value->create_by'");
						$result[$key]->username = $user[0]->name;
					}

					// if(!file_exists(base_url().$value->img)){
					// 	$result[$key]->img = base_url().'assets/img/users/default.jpg';
					// }
					
				}
					if($result){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 		 => $result
						];
					}else{
						$response = [
						    'status'   => 'gagal',
						    'code'     => '0',
						    'data'     => 'tidak ada data',
						];
					}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function getglobalwhereby()
	{
		try
		{
				
				$post = (object)$this->input->post();
				$param =  $post->param;
				$type =  $post->type;
				$id =  $post->id;
				if($this->role == '10'){
					$result = $this->Model_data->getdata($param);
				}else{
					$result = $this->Model_data->getwhere("*", $param, "create_by = '".$this->session->userdata('id')."'");
				}
				foreach ($result as $key => $value) {
					$files = $this->Model_data->getfile($value->id, $type);
					if(!empty($files)){
						$result[$key]->files = $files;
					}

					if(isset($value->create_by)){
						$user = $this->Model_data->getwhere("*", "muser", "id = '$value->create_by'");
						$result[$key]->username = $user[0]->name;
					}

					// if(!file_exists(base_url().$value->img)){
					// 	$result[$key]->img = base_url().'assets/img/users/default.jpg';
					// }
					
				}
					if($result){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 		 => $result
						];
					}else{
						$response = [
						    'status'   => 'gagal',
						    'code'     => '0',
						    'data'     => 'tidak ada data',
						];
					}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function getpetawhere()
	{
		try
		{
				
				$post = (object)$this->input->post();
				$param =  $post->param;
				$type =  $post->type;
				$id =  $post->id;
				$provinsi =  $post->provinsi;

				$result = $this->Model_data->getwhere("*", $param, "kabupaten = '$id' and provinsi = '$provinsi'");
				
					if($result){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 		 => $result
						];
					}else{
						$response = [
						    'status'   => 'gagal',
						    'code'     => '0',
						    'data'     => 'tidak ada data',
						];
					}

				header('Content-Type: application/json');
				echo json_encode($response);
				exit;
			}
		catch (Exception $e)
		{
			die($e->getMessage());
		}
	}

	public function updateUser()
	{
		$params = (object)$this->input->post();
		// remove the part that we don't need from the provided image and decode it
		if($params->img){
			$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $params->img));
			$filepath = "assets/dokumen/gambar/user/".$params->username.".png"; // or image.jpg
			chmod($filepath,0777);
			file_put_contents($filepath,$data);
			$params->foto = $filepath;
		}

		$data = $this->Model_sys->update($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function deleteUser()
	{

		$params = (object)$this->input->post();
		$this->Model_sys->delete($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function hitungAll(){

		$update = $this->Model_sys->hitungAll();
		header('Content-Type: application/json');
		echo json_encode($update);
	}

	public function listdatabanner()
	{
		if ($this->logged && $this->role == '10')
		{
			$params = $columns = $totalRecords = $data = array();
			$params = $_REQUEST;
			$postData = $this->input->post('param');

			$query = $this->Model_sys->listbanner($postData);

			$x = 0;
			$i=0;
			foreach ($query as $proses) {
				$x++;
				$row = array();
				$row['id'] = (!empty($proses->id) ? $proses->id : "NULL");
				$row['judul'] = (!empty($proses->judul) ? $proses->judul : "NULL");
				$row['deskripsi'] = (!empty($proses->deskripsi) ? $proses->deskripsi : "NULL");
				$row['foto'] = (!empty($proses->foto) ? $proses->foto : "assets/dokumen/gambar/user/default.jpg");
				$row['status'] = (!empty($proses->status) ? $proses->status : "NULL");
				$row['created_by'] = (!empty($proses->created_by) ? $proses->created_by : "NULL");
				$row['created_date'] = (!empty($proses->created_date) ? $proses->created_date : "NULL");
				$row['updated_date'] = (!empty($proses->updated_date) ? $proses->updated_date : "NULL");

				$data[] = $row;
			}
			header('Content-Type: application/json');
			echo json_encode($data);
		}else{
			redirect("dashboard");
		}

	}

	public function listdatabanneruser()
	{

			$params = $columns = $totalRecords = $data = array();
			$params = $_REQUEST;
			$postData = $this->input->post('param');

			$query = $this->Model_sys->listbanner(1);

			$x = 0;
			$i=0;
			foreach ($query as $proses) {
				$x++;
				$row = array();
				$row['id'] = (!empty($proses->id) ? $proses->id : "NULL");
				$row['judul'] = (!empty($proses->judul) ? $proses->judul : "NULL");
				$row['deskripsi'] = (!empty($proses->deskripsi) ? $proses->deskripsi : "NULL");
				$row['foto'] = (!empty($proses->foto) ? $proses->foto : "assets/dokumen/gambar/user/default.jpg");
				$row['status'] = (!empty($proses->status) ? $proses->status : "NULL");
				$row['created_by'] = (!empty($proses->created_by) ? $proses->created_by : "NULL");
				$row['created_date'] = (!empty($proses->created_date) ? $proses->created_date : "NULL");
				$row['updated_date'] = (!empty($proses->updated_date) ? $proses->updated_date : "NULL");

				$data[] = $row;
			}
			header('Content-Type: application/json');
			echo json_encode($data);

	}

	public function loadsetting()
	{

			$params = $columns = $totalRecords = $data = array();
			$params = $_REQUEST;
			$postData = $this->input->post('param');

			$query = $this->Model_sys->loadsetting(1);

			$x = 0;
			$i=0;
			foreach ($query as $proses) {
				$x++;
				$row = array();

				$row['id'] = (!empty($proses->id) ? $proses->id : "NULL");
				$row['logo'] = (!empty($proses->logo) ? $proses->logo : "assets/dokumen/gambar/user/default.jpg");
				$row['nama'] = (!empty($proses->nama) ? $proses->nama : "NULL");
				$row['deskripsi'] = (!empty($proses->deskripsi) ? $proses->deskripsi : "NULL");
				$row['alamat'] = (!empty($proses->alamat) ? $proses->alamat : "NULL");
				$row['email'] = (!empty($proses->email) ? $proses->email : "NULL");
				$row['notlp'] = (!empty($proses->notlp) ? $proses->notlp : "NULL");
				$row['instagram'] = (!empty($proses->instagram) ? $proses->instagram : "NULL");
				$row['twitter'] = (!empty($proses->twitter) ? $proses->twitter : "NULL");
				$row['facebook'] = (!empty($proses->facebook) ? $proses->facebook : "NULL");
				$row['copyright'] = (!empty($proses->copyright) ? $proses->copyright : "NULL");

				$data[] = $row;
			}
			header('Content-Type: application/json');
			echo json_encode($data);

	}

	public function simpansetting()
	{

		$params = (object)$this->input->post();
		// remove the part that we don't need from the provided image and decode it
		// if($params->img){
		// 	$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $params->img));
		// 	$filepath = "assets/dokumen/gambar/user/".$params->username.".png"; // or image.jpg
		// 	chmod($filepath,0777);
		// 	file_put_contents($filepath,$data);
		// 	$params->foto = $filepath;
		// }

		$data = $this->Model_sys->updatesetting($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function savebanner()
	{
		$params = (object)$this->input->post();
		// remove the part that we don't need from the provided image and decode it
		$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $params->img));

		$filepath = "assets/dokumen/gambar/banner/".str_replace(" ","_",$params->judul).".jpg"; // or image.jpg
		chmod($filepath,0777);
		file_put_contents($filepath,$data);
		$params->foto = $filepath;

		$data = $this->Model_sys->savebanner($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function updatebanner()
	{
		$params = (object)$this->input->post();
		// remove the part that we don't need from the provided image and decode it
		if($params->img){
			$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $params->img));
			$filepath = "assets/dokumen/gambar/banner/".$params->username.".jpg"; // or image.jpg
			chmod($filepath,0777);
			file_put_contents($filepath,$data);
			$params->foto = $filepath;
		}

		$data = $this->Model_sys->updatebanner($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function deletebanner()
	{

		$params = (object)$this->input->post();
		$path = $params->path;

		$files = glob($path.'*'); // get all file names
		foreach($files as $file){ // iterate files
		  if(is_file($file))
		    unlink($file); // delete file
		    //echo $file.'file deleted';
		}
		
		$this->Model_sys->deletebanner($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function updateprofile()
	{

		$params = (object)$this->input->post();
		$check = $this->db->get_where("muser", array("username" => $params->username,"password" => md5($params->validasi)));
		if($check->num_rows() > 0){
			if($params->img){
				$data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $params->img));
				$filepath = "assets/dokumen/gambar/user/".$params->username.".png"; // or image.jpg
				chmod($filepath,0777);
				file_put_contents($filepath,$data);
				$params->foto = $filepath;
			}

			$data = $this->Model_sys->updateprofile($params);
			header('Content-Type: application/json');
			echo json_encode(array("status" => TRUE));
		}else{
			header('Content-Type: application/json');
			echo json_encode(array("status" => FALSE));
		}

	}

	public function savedataberita(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;

			$params->create_by	 = $this->session->userdata('id');
			$params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			$params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_berita', $params);
			
			if($id){
				if(!empty($_FILES)){
					$files = $_FILES['files'];
					$count = count($_FILES['files']['name']);
					$public		= FCPATH.'public';
					$tipe		= './assets/upload/berita';
					$date 		= date('Y/m/d');
				
					for ($i=0; $i < $count; $i++) { 

						$name = $files['name'][$i];
						$file = $files['tmp_name'][$i];
						$type = $files['type'][$i];
						$size = $files['size'][$i];
						$size = $files['size'][$i];
						$caption = $params->caption[$i];

						$path = $tipe.'/'.$date;
						if (!is_dir($path)) {
							mkdir($path, 0777, TRUE);
						}
						move_uploaded_file($file, $path.'/'.$name);

						$data_file = [
								'id_parent' => $id,
								'type' => 'berita',
								'path' => $path,
								'size' => $size,
								'extension' => $type,
								'filename' => $name,
								'create_date' => date("Y-m-d H:i:s"),
								'update_date' => date("Y-m-d H:i:s")
							];
							$this->Model_data->createdata('data_file', $data_file);
						}
				}
			}

			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}

	public function savedatajadwal(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;

			$params->create_by	 = $this->session->userdata('id');
			$params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			$params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_jadwal', $params);

			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}

	public function updateberita()
	{

		$params = (object)$this->input->post();
		$params->update_by	 = $this->session->userdata('id');
		$params->update_date = date("Y-m-d H:i:s");
		$data = $this->Model_data->updateberita($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function updatejadwalstat()
	{

		$params = (object)$this->input->post();
		$params->update_by	 = $this->session->userdata('id');
		$params->update_date = date("Y-m-d H:i:s");
		$data = $this->Model_data->updatejadwalstat($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function updatedataberita()
	{

		$params = (object)$this->input->post();
		$params->update_by	 = $this->session->userdata('id');
		$params->update_date = date("Y-m-d H:i:s");
		$data = $this->Model_data->updatedataberita($params);

		if(!empty($_FILES)){
			$files = $_FILES['files'];
			$count = count($_FILES['files']['name']);
			$public		= FCPATH.'public';
			$tipe		= './assets/upload/berita';
			$date 		= date('Y/m/d');
		
			for ($i=0; $i < $count; $i++) { 

				$name = $files['name'][$i];
				$file = $files['tmp_name'][$i];
				$type = $files['type'][$i];
				$size = $files['size'][$i];
				
				$path = $tipe.'/'.$date;
				if (!is_dir($path)) {
					mkdir($path, 0777, TRUE);
				}

				
				move_uploaded_file($file, $path.'/'.$name);

				$data_file = [
						'id' => $params->idfile,
						'type' => 'berita',
						'path' => $path,
						'size' => $size,
						'extension' => $type,
						'filename' => $name,
						'create_date' => date("Y-m-d H:i:s"),
						'update_date' => date("Y-m-d H:i:s")
					];
					$this->Model_data->updatefile($data_file);
				}
		}

		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function savevideo(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;

			$params->create_by	 = $this->session->userdata('id');
			$params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			$params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_video', $params);
			
			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}

	public function saveLaporan(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;

			$params->create_by	 = $this->session->userdata('id');
			$params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			$params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_laporan', $params);
			
			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}

	public function savePeta(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;

			$params->create_by	 = $this->session->userdata('id');
			$params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			$params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_peta', $params);
			
			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}

	public function savePengaduan(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;
			// print_r($params);die;
			// $params->create_by	 = $this->session->userdata('id');
			// $params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			// $params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_pengaduan', $params);
			
			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}

	public function savedatafoto(){
		try
		{

			$params = (object)$this->input->post();
			$id = $params->id;

			$params->create_by	 = $this->session->userdata('id');
			$params->update_by	 = $this->session->userdata('id');
			$params->create_date = date("Y-m-d H:i:s");
			$params->update_date = date("Y-m-d H:i:s");
			
			$id = $this->Model_data->createdata('data_foto', $params);
			
			if($id){
				if(!empty($_FILES)){
					$files = $_FILES['files'];
					$count = count($_FILES['files']['name']);
					$public		= FCPATH.'public';
					$tipe		= './assets/upload/galeri/foto';
					$date 		= date('Y/m/d');
				
					for ($i=0; $i < $count; $i++) { 

						$name = $files['name'][$i];
						$file = $files['tmp_name'][$i];
						$type = $files['type'][$i];
						$size = $files['size'][$i];
						$size = $files['size'][$i];

						$path = $tipe.'/'.$date;
						if (!is_dir($path)) {
							mkdir($path, 0777, TRUE);
						}
						move_uploaded_file($file, $path.'/'.$name);

						$data_file = [
								'id_parent' => $id,
								'type' => 'foto',
								'path' => $path,
								'size' => $size,
								'extension' => $type,
								'filename' => $name,
								'create_date' => date("Y-m-d H:i:s"),
								'update_date' => date("Y-m-d H:i:s")
							];
							$this->Model_data->createdata('data_file', $data_file);
						}
				}
			}

			$response = [
				'status'   => 'sukses',
				'code'     => '0',
				'data' 	   => 'terkirim'
		];
		header('Content-Type: application/json');
		echo json_encode($response);
		exit;

		}
		catch (\Exception $e)
		{
			die($e->getMessage());
		}
		

	}
	
	public function updatedatajadwal()
	{

		$params = (object)$this->input->post();
		$params->update_by	 = $this->session->userdata('id');
		$params->update_date = date("Y-m-d H:i:s");
		$data = $this->Model_data->updatedatajadwal($params);

		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function updatePeta()
	{

		$params = (object)$this->input->post();
		$params->update_by	 = $this->session->userdata('id');
		$params->update_date = date("Y-m-d H:i:s");
		$data = $this->Model_data->updatePeta($params);

		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));

	}

	public function deletejadwal()
	{

		$params = (object)$this->input->post();
		
		$this->Model_data->deletejadwal($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function deletefoto()
	{

		$params = (object)$this->input->post();
		
		$this->Model_data->deletefoto($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function deletelaporan()
	{

		$params = (object)$this->input->post();
		
		$this->Model_data->deletelaporan($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function deletepeta()
	{

		$params = (object)$this->input->post();
		
		$this->Model_data->deletepeta($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function deleteberita()
	{

		$params = (object)$this->input->post();
		
		$this->Model_data->deleteberita($params);
		$this->Model_data->deletefile($params);
		unlink($params->path);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

	public function deletevideo()
	{

		$params = (object)$this->input->post();
		
		$this->Model_data->deletevideo($params);
		header('Content-Type: application/json');
		echo json_encode(array("status" => TRUE));
	}

}
