<?php
class Model_data extends CI_Model {

    var $table = 'muser';
    var $column = array('username','kategori','kotaKab'); //set column field database for datatable searchable just firstname , lastname , address are searchable
    var $column_search = array('username','kategori','kotaKab');
    var $order = array('id' => 'desc'); // default order

    function __construct(){
        parent::__construct();
    }

    public function getdata($param)
    {
        $query = $this->db->query("select * from $param order by id asc")->result();
        return $query;
    }

    public function getfile($id, $type)
    {
        $query = $this->db->query("select * from data_file where id_parent = '$id' and type = '$type' order by id asc")->result();
        return $query;
    }

    public function createdata($table, $params = NULL)
    {
        $this->db->insert($table, $params);
        $insert_id = $this->db->insert_id();
        return $insert_id;
    }

    public function getwhere($field, $from, $where)
    {
        $query = $this->db->query("select $field from $from where $where order by id asc")->result();
        return $query;
    }

    public function updateberita($params = NULL)
    {
        $valid = true;
       
        $this->db->set('stat', $params->stat);
        $this->db->set('update_by', $params->update_by);
        $this->db->set('update_date', $params->update_date);
        $this->db->where('id', $params->id);
        $this->db->update('data_berita');
        
        return $valid;

    }

    public function updatejadwalstat($params = NULL)
    {
        $valid = true;
       
        $this->db->set('status', $params->stat);
        $this->db->set('update_by', $params->update_by);
        $this->db->set('update_date', $params->update_date);
        $this->db->where('id', $params->id);
        $this->db->update('data_jadwal');
        
        return $valid;

    }

    public function updatedataberita($params = NULL)
    {
        $valid = true;
       
        $this->db->set('judul', $params->judul);
        $this->db->set('tag', $params->tag);
        $this->db->set('isi', $params->isi);
        $this->db->set('stat', $params->stat);
        $this->db->set('update_by', $params->update_by);
        $this->db->set('update_date', $params->update_date);
        $this->db->where('id', $params->id);
        $this->db->update('data_berita');
        
        return $valid;

    }

    public function updatedatajadwal($params = NULL)
    {
        $valid = true;
       
        $this->db->set('event', $params->event);
        $this->db->set('tanggal', $params->tanggal);
        $this->db->set('status', $params->status);
        $this->db->set('update_by', $params->update_by);
        $this->db->set('update_date', $params->update_date);
        $this->db->where('id', $params->id);
        $this->db->update('data_jadwal');
        
        return $valid;

    }
    
    public function updatePeta($params = NULL)
    {
        $valid = true;
       
        $this->db->set('latitude', $params->latitude);
        $this->db->set('longitude', $params->longitude);
        $this->db->set('nama', $params->nama);
        $this->db->set('alamat', $params->alamat);
        $this->db->set('kabupaten', $params->kabupaten);
        $this->db->set('kecamatan', $params->kecamatan);
        $this->db->set('desa', $params->desa);
        $this->db->set('kapasitas', $params->kapasitas);
        $this->db->set('luas', $params->luas);
        $this->db->set('fisik', $params->fisik);
        $this->db->set('keuangan', $params->keuangan);

        $this->db->set('update_by', $params->update_by);
        $this->db->set('update_date', $params->update_date);
        $this->db->where('id', $params->id);
        $this->db->update('data_peta');
        
        return $valid;

    }

    public function updatefile($params = NULL)
    {
        $valid = true;
        
        $this->db->set('type', $params['type']);
        $this->db->set('path', $params['path']);
        $this->db->set('size', $params['size']);
        $this->db->set('extension', $params['extension']);
        $this->db->set('filename', $params['filename']);
        $this->db->set('update_date', $params['update_date']);
        $this->db->where('id', $params['id']);
        $this->db->update('data_file');
        
        
        return $valid;

    }

    public function deletejadwal($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id);
        $this->db->delete('data_jadwal');
    }

    public function deletefoto($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id);
        $this->db->delete('data_foto');
    }

    public function deletevideo($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id);
        $this->db->delete('data_video');
    }

    public function deletelaporan($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id);
        $this->db->delete('data_laporan');
    }

    public function deletepeta($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id);
        $this->db->delete('data_peta');
    }

    public function deleteberita($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id);
        $this->db->delete('data_berita');
    }

    public function deletefile($id)
    {
        // $idx = $this->db->escape_str($id);
        $this->db->where('id', $id->id_file);
        $this->db->delete('data_file');
    }
    

}
