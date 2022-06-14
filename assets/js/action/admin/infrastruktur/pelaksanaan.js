$(function () {
	console.log("You are running jQuery version: " + $.fn.jquery);
	$(".summernote").summernote({
		height: 200, //set editable area's height
		codemirror: {
			// codemirror options
			theme: "monokai",
		},
		toolbar: {},
		disableResizeEditor: true,
		focus: true,
	});

	$(".note-editable").attr("name", "profile-input");

	$(".select2").select2();
	$(".select2bs4").select2({
		theme: "bootstrap4",
	});

	$(".datatable").DataTable();

	//Date picker
	$("#reservationdate").datetimepicker({
		format: "L",
	});

	window.img = "";
	$("input[data-bootstrap-switch]").each(function () {
		// $(this).bootstrapSwitch('state', $(this).prop('checked'));
		$(this).bootstrapSwitch({
			onSwitchChange: function (e, state) {
				st = state;
			},
		});
	});

	$("#modal-default").on("show.bs.modal", function () {});

	$("#pelaksana > a").attr("class", "nav-link active");
	$("#pelaksana").attr("class", "nav-item menu-is-opening menu-open");
	$("#pelaksanaan > a").attr("class", "nav-link active");
	$("#pelaksanaan > a > i").addClass("text-info");

	$("#add-data-1").on("click", function () {
		$("#modal-1").modal({
			show: true,
		});
		$('[name="profile-input"]').val("");
		$("#dana_profil").val(0).trigger("change");
		$("#klpd_profil").val(0).trigger("change");
		$("#kontrak_profil").val(0).trigger("change");
		$("#id_1").val("");
	});

	$("#add-data-2").on("click", function () {
		$("#modal-2").modal({
			show: true,
		});
		$('[name="fisik-input"]').val("");
		$("#id_2").val("");
	});

	$("#add-data-3").on("click", function () {
		$("#modal-3").modal({
			show: true,
		});
		$('[name="keuangan-input"]').val("");
		$("#id_3").val("");
	});

	$("#add-data-4").on("click", function () {
		$("#modal-4").modal({
			show: true,
		});
		$('[name="teknis-input"]').val(0).trigger("change");
		$("#id_4").val("");
	});

	$("#add-data-5").on("click", function () {
		$("#modal-5").modal({
			show: true,
		});
		$('[name="manajemen-input"]').val(0).trigger("change");
		$("#id_5").val("");
	});

	$("#add-data-6").on("click", function () {
		$("#modal-6").modal({
			show: true,
		});
		$('[name="kondisi-input"]').val(0).trigger("change");
		$("#id_6").val("");
	});

	$("#add-data-7").on("click", function () {
		$("#modal-7").modal({
			show: true,
		});
		$('[name="uji-input"]').val(0).trigger("change");
		$("#id_7").val("");
	});

	$("#add-data-8").on("click", function () {
		$("#modal-8").modal({
			show: true,
		});
		$('[name="statuspelaksanaan-input"]').val(0).trigger("change");
		$("#id_8").val("");
	});

	$("#save-data-1").on("click", function () {
		savedata("data_profil_kegiatan");
	});

	$("#save-data-2").on("click", function () {
		savedata("data_progres_fisk");
	});

	$("#save-data-3").on("click", function () {
		savedata("data_progres_keuangan");
	});

	$("#save-data-4").on("click", function () {
		savedata("data_pelaksanaan_kontrak");
	});

	$("#save-data-5").on("click", function () {
		savedata("data_sistem_manajemen");
	});

	$("#save-data-6").on("click", function () {
		savedata("data_kondisi_khusus");
	});

	$("#save-data-7").on("click", function () {
		savedata("data_uji_coba");
	});

	$("#save-data-8").on("click", function () {
		savedata("data_status_kegiatan");
	});

	loaddata("data_profil_kegiatan");
	$("#custom-2").on("click", function () {
		loaddata("data_progres_fisik");
	});
	$("#custom-3").on("click", function () {
		loaddata("data_progres_keuangan");
	});
	$("#custom-4").on("click", function () {
		loaddata("data_pelaksanaan_kontrak");
	});
	$("#custom-5").on("click", function () {
		loaddata("data_sistem_manajemen");
	});
	$("#custom-6").on("click", function () {
		loaddata("data_kondisi_khusus");
	});
	$("#custom-7").on("click", function () {
		loaddata("data_uji_coba");
	});
	$("#custom-8").on("click", function () {
		loaddata("data_status_kegiatan");
	});
});

function loaddata(param) {
	$.ajax({
		type: "post",
		dataType: "json",
		url: "getcriteria",
		data: {
			param: param,
		},
		success: function (result) {
			if (result.code == 1) {
				if (param == "data_profil_usulan") {
					var dt = $("#list_1").DataTable({
						destroy: true,
						paging: true,
						lengthChange: false,
						searching: true,
						ordering: true,
						info: true,
						autoWidth: false,
						responsive: false,
						pageLength: 10,
						aaData: result.data,
						aoColumns: [
							{ mDataProp: "id", width: "5%" },
							{ mDataProp: "tpst" },
							{ mDataProp: "desa" },
							{ mDataProp: "kecamatan" },
							{ mDataProp: "kabupaten" },
							{ mDataProp: "uraian" },
							{ mDataProp: "direktif" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editprofile(${row.id},'${row.tpst}', '${row.desa}', '${row.kecamatan}', '${row.kabupaten}', '${row.uraian}', '${row.direktif}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_profil_usulan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [7],
							},
						],

						fnRowCallback: function (
							nRow,
							aData,
							iDisplayIndex,
							iDisplayIndexFull
						) {
							var index = iDisplayIndexFull + 1;
							$("td:eq(0)", nRow).html(" " + index);
							return;
						},

						fnInitComplete: function () {
							var that = this;
							var td;
							var tr;

							this.$("td").click(function () {
								td = this;
							});
							this.$("tr").click(function () {
								tr = this;
							});

							$("#listproj_filter input").bind("keyup", function (e) {
								return this.value;
							});
						},
					});
				}

				if (param == "data_rencana_pembagian") {
					var dt = $("#list_2").DataTable({
						destroy: true,
						paging: true,
						lengthChange: false,
						searching: true,
						ordering: true,
						info: true,
						autoWidth: false,
						responsive: false,
						pageLength: 10,
						aaData: result.data,
						aoColumns: [
							{ mDataProp: "id", width: "5%" },
							{ mDataProp: "studi" },
							{ mDataProp: "ded" },
							{ mDataProp: "dok" },
							{ mDataProp: "bangunan" },
							{ mDataProp: "lahan" },
							{ mDataProp: "mesin" },
							{ mDataProp: "operator" },
							{ mDataProp: "offtaker" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Pemerintah Pusat (APBN)",
										"Pemerintah Provinsi (APBD Provinsi)",
										"Pemerintah Kabupaten",
										"Kota (APBD Kab/Kota)",
										"Badan Usaha",
									];

									return $rowData[data];
								},
								aTargets: [1, 2, 3, 4, 5, 6, 7, 8],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editrencana('${row.id}', '${row.studi}', '${row.ded}', '${row.dok}', '${row.bangunan}', '${row.lahan}', '${row.mesin}', '${row.operator}', '${row.offtaker}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_rencana_pembagian')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [9],
							},
						],

						fnRowCallback: function (
							nRow,
							aData,
							iDisplayIndex,
							iDisplayIndexFull
						) {
							var index = iDisplayIndexFull + 1;
							$("td:eq(0)", nRow).html(" " + index);
							return;
						},

						fnInitComplete: function () {
							var that = this;
							var td;
							var tr;

							this.$("td").click(function () {
								td = this;
							});
							this.$("tr").click(function () {
								tr = this;
							});

							$("#listproj_filter input").bind("keyup", function (e) {
								return this.value;
							});
						},
					});
				}

				if (param == "data_rencana_teknis") {
					var dt = $("#list_3").DataTable({
						destroy: true,
						paging: true,
						lengthChange: false,
						searching: true,
						ordering: true,
						info: true,
						autoWidth: false,
						responsive: false,
						pageLength: 10,
						aaData: result.data,
						aoColumns: [
							{ mDataProp: "id", width: "5%" },
							{ mDataProp: "ketersediaan" },
							{ mDataProp: "kapasitas" },
							{ mDataProp: "teknologi" },
							{ mDataProp: "keberadaan" },
							{ mDataProp: "jenis_offtaker" },
							{ mDataProp: "kerjasama" },
							{ mDataProp: "kesanggupan" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"1-5 ton per hari",
										"6-20 ton per hari",
										"21-50 ton per hari",
										"51-100 ton per hari",
										">100 ton per hari",
									];

									return $rowData[row.kapasitas];
								},
								aTargets: [2],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Ada offtaker di lingkup desa atau kelurahan yang sama",
										"Ada offtaker di lingkup kecamatan yang sama",
										"Ada offtaker di lingkup kabupaten yang sama",
										"Ada offtaker di lingkup provinsi yang sama tetapi berbeda kota atau kabupaten",
										"Tidak ada offtaker",
									];

									return $rowData[row.keberadaan];
								},
								aTargets: [4],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Ada MoU antara Pemda dengan offtaker produk olah sampah",
										"Sedang dalam proses MoU atau pendekatan dengan offtaker produk olah sampah",
										"Ada kesempatan Pemda untuk bekerjasama dengan offtaker produk olah sampah",
										"Belum ada MoU atau pendekatan dengan offtaker produk olah sampah",
									];

									return $rowData[row.kerjasama];
								},
								aTargets: [6],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Ada kesanggupan TKDN yang dipersyaratkan pemerintah",
										"Tidak ada kesanggupan TKDN yang dipersyaratkan pemerintah",
									];

									return $rowData[row.kesanggupan];
								},
								aTargets: [7],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editteknis('${row.id}', '${row.ketersediaan}', '${row.kapasitas}', '${row.teknologi}', '${row.keberadaan}', '${row.jenis_offtaker}', '${row.kerjasama}', '${row.kesanggupan}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_rencana_teknis')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [8],
							},
						],

						fnRowCallback: function (
							nRow,
							aData,
							iDisplayIndex,
							iDisplayIndexFull
						) {
							var index = iDisplayIndexFull + 1;
							$("td:eq(0)", nRow).html(" " + index);
							return;
						},

						fnInitComplete: function () {
							var that = this;
							var td;
							var tr;

							this.$("td").click(function () {
								td = this;
							});
							this.$("tr").click(function () {
								tr = this;
							});

							$("#listproj_filter input").bind("keyup", function (e) {
								return this.value;
							});
						},
					});
				}

				if (param == "data_kelengkapan") {
					var dt = $("#list_4").DataTable({
						destroy: true,
						paging: true,
						lengthChange: false,
						searching: true,
						ordering: true,
						info: true,
						autoWidth: false,
						responsive: false,
						pageLength: 10,
						aaData: result.data,
						aoColumns: [
							{ mDataProp: "id", width: "5%" },
							{ mDataProp: "minat" },
							{ mDataProp: "status_lahan" },
							{ mDataProp: "kesesuaian" },
							{ mDataProp: "kesiapan" },
							{ mDataProp: "kesiapan_anggaran" },
							{ mDataProp: "kesiapan_sosialisasi" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Ada", "Tidak Ada"];

									return $rowData[data];
								},
								aTargets: [1, 2, 3, 4, 5, 6],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editkelengkapan('${row.id}', '${row.minat}', '${row.status_lahan}', '${row.kesesuaian}', '${row.kesiapan}', '${row.kesiapan_anggaran}', '${row.kesiapan_sosialisasi}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_kelengkapan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [7],
							},
						],

						fnRowCallback: function (
							nRow,
							aData,
							iDisplayIndex,
							iDisplayIndexFull
						) {
							var index = iDisplayIndexFull + 1;
							$("td:eq(0)", nRow).html(" " + index);
							return;
						},

						fnInitComplete: function () {
							var that = this;
							var td;
							var tr;

							this.$("td").click(function () {
								td = this;
							});
							this.$("tr").click(function () {
								tr = this;
							});

							$("#listproj_filter input").bind("keyup", function (e) {
								return this.value;
							});
						},
					});
				}

				if (param == "data_status_usulan") {
					var dt = $("#list_5").DataTable({
						destroy: true,
						paging: true,
						lengthChange: false,
						searching: true,
						ordering: true,
						info: true,
						autoWidth: false,
						responsive: false,
						pageLength: 10,
						aaData: result.data,
						aoColumns: [
							{ mDataProp: "id", width: "5%" },
							{ mDataProp: "usulan" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Siap dilaksanakan konstruksi",
										"Bisa dilaksanakan namun perlu melengkapi RC",
										"Belum bisa dilaksanakan konstruksi",
									];

									return $rowData[data];
								},
								aTargets: [1],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editusulan('${row.id}', '${row.usulan}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_status_usulan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [2],
							},
						],

						fnRowCallback: function (
							nRow,
							aData,
							iDisplayIndex,
							iDisplayIndexFull
						) {
							var index = iDisplayIndexFull + 1;
							$("td:eq(0)", nRow).html(" " + index);
							return;
						},

						fnInitComplete: function () {
							var that = this;
							var td;
							var tr;

							this.$("td").click(function () {
								td = this;
							});
							this.$("tr").click(function () {
								tr = this;
							});

							$("#listproj_filter input").bind("keyup", function (e) {
								return this.value;
							});
						},
					});
				}

				if (param == "data_pendetailan") {
					var dt = $("#list_6").DataTable({
						destroy: true,
						paging: true,
						lengthChange: false,
						searching: true,
						ordering: true,
						info: true,
						autoWidth: false,
						responsive: false,
						pageLength: 10,
						aaData: result.data,
						aoColumns: [
							{ mDataProp: "id", width: "5%" },
							{ mDataProp: "pengelola" },
							{ mDataProp: "akses" },
							{ mDataProp: "jalan" },
							{ mDataProp: "listrik" },
							{ mDataProp: "air" },
							{ mDataProp: "partisipasi" },
							{ mDataProp: "jarak" },
							{ mDataProp: "resistensi" },
							{ mDataProp: "bangunan_detail" },
							{ mDataProp: "banjir" },
							{ mDataProp: "ssk" },
							{ mDataProp: "ptmp" },
							{ mDataProp: "das" },
							{ mDataProp: "luas_lahan" },
							// { mDataProp: "topografi" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"UPTD PPK BLUD",
										"UPTD",
										"Proses Pembentukan UPTD",
										"Surat Kesanggupan Pembentukan Institusi Pengelola",
										"Belum ada Institusi Khusus",
									];

									return $rowData[row.pengelola];
								},
								aTargets: [1],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Kualitas Layak, Aspal atau Beton, Mudah Dijangkau",
										"Kualitas Kurang, Aspal atau Beton, Mudah Dijangkau",
										"Kualitas Kurang, Aspal atau Beton, Sulit Dijangkau",
										"Ada Rencana Pengembangan Jalan",
										"Belum ada Rencana Pengembangan Jalan",
									];

									return $rowData[row.akses];
								},
								aTargets: [2],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										">5 m",
										"4 - 5 m",
										"3 - 4 m",
										"2-3 m",
										"< 2 m",
									];

									return $rowData[row.jalan];
								},
								aTargets: [3],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Ada Akses Listrik & Instalasi",
										"Hanya Ada Akses Listrik",
										"Belum ada akses jaringan listrik tetapi sanggup menyediakan jaringan listrik pada saat konstruksi dimulai",
										"Belum ada akses jaringan listrik tetapi ada rencana pengembangan jaringan dan instalasi listriknya",
										"Belum ada akses jaringan listrik ",
									];

									return $rowData[row.listrik];
								},
								aTargets: [4],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Memiliki akses langsung dengan badan air penerima",
										"Badan air penerima terhalangi lahan bukan milik TPST tetapi masih ada akses untuk outlet ke badan air penerima",
										"Badan air penerima terhalangi lahan bukan milik TPST dan tidak ada akses untuk outlet ke badan air penerima",
									];

									return $rowData[row.air];
								},
								aTargets: [5],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Dukungan langsung dengan inisiatif dari masyarakat dan atau sudah ada infrastruktur sampah eksisting",
										"Menerima berdasarkan hasil sosialisasi dan edukasi",
										"Sudah dilakukan sosialisasi dan masyarakat menerima dengan syarat",
										"Sudah dilakukan sosialisasi namun masyarakat menolak",
										"Belum dilakukan sosialisasi (ada potensi penerimaan maupun penolakkan)",
									];

									return $rowData[row.partisipasi];
								},
								aTargets: [6],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"> 200 m",
										"150 - 200 m",
										"100 - 150 m",
										"50 - 100 m",
										"Berbatasan langsung dengan aktivitas masyarakat",
									];

									return $rowData[row.jarak];
								},
								aTargets: [7],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Lahan kosong",
										"Lahan digarap pemda (ada aktivitas eksisting)",
										"Lahan produktif, ada penggarap mengizinkan",
										"Lahan produktif, ada penggarap mengizinkan dengan syarat penggantian",
										"Ada penggarap dan penggarap tidak mengizinkan",
									];

									return $rowData[row.resistensi];
								},
								aTargets: [8],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Tidak ada Bangunan di atas Lahan",
										"Terdapat Bangunan Pemerintah dan dapat di lakukan penghapusan aset",
										"Terdapat Bangunan Tanpa Izin",
										"Terdapat Bangunan Tanpa Izin dengan Syarat Penggantian",
										"Terdapat Bangunan yang Tidak dapat dibongkar",
									];

									return $rowData[row.bangunan_detail];
								},
								aTargets: [9],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Tidak termasuk Kawasan Banjir",
										"Kawasan Banjir 50 Tahunan",
										"Kawasan Banjir 10 Tahunan",
										"Kawasan Banjir 5 Tahunan",
										"Kawasan Banjir 2 Tahunan",
									];

									return $rowData[row.banjir];
								},
								aTargets: [10],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Kegiatan sudah tercantum dalam SSK terupdate 5 tahun terakhir",
										"Kegiatan sudah tercantum dalam SSK tapi belum dimutahirkan dalam 5 tahun terakhir",
										"Kegiatan tidak tercantum dalam SSK",
									];

									return $rowData[row.ssk];
								},
								aTargets: [11],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Lokasi kegiatan sudah tercantum dalam Masterplan atau PTMP persampahan terupdate 5 tahun terakhir",
										"Lokasi kegiatan sudah tercantum dalam Masterplan atau PTMP persampahan tapi belum direview dalam 5 tahun terakhir",
										"Belum ada",
									];

									return $rowData[row.ptmp];
								},
								aTargets: [12],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Lokasi infrastruktur dan seluruh wilayah pelayanannya berada di dalam batas administrasi DAS Citarum",
										"Lokasi infrastruktur di dalam batas administrasi DAS Citarum dan sebagian wilayah pelayanannya berada di luar batas administrasi DAS Citarum",
										"Lokasi infrastruktur berada di luar batas administrasi DAS Citarum tetapi sebagian wilayah pelayanannya berada di dalam batas administrasi DAS Citarum",
										"Lokasi infrastruktur berada di dalam batas administrasi DAS Citarum dan wilayah pelayanannya berada di luar batas administrasi DAS Citarum",
										"Lokasi infrastruktur dan wilayah pelayanannya berada di luar batas administrasi DAS Citarum",
									];

									return $rowData[row.das];
								},
								aTargets: [13],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"> 5000 m2",
										"3000 - 5000 m2",
										"1500 - 3000 m2",
										"1000 - 1500 m2",
										"< 1000 m2",
									];

									return $rowData[row.luas_lahan];
								},
								aTargets: [14],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editpendetailan('${row.id}', '${row.pengelola}', '${row.akses}', '${row.jalan}', '${row.listrik}', '${row.air}', '${row.partisipasi}', '${row.jarak}', '${row.resistensi}', '${row.bangunan_detail}', '${row.banjir}', '${row.ssk}', '${row.ptmp}', '${row.das}', '${row.luas_lahan}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_pendetailan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [15],
							},
						],

						fnRowCallback: function (
							nRow,
							aData,
							iDisplayIndex,
							iDisplayIndexFull
						) {
							var index = iDisplayIndexFull + 1;
							$("td:eq(0)", nRow).html(" " + index);
							return;
						},

						fnInitComplete: function () {
							var that = this;
							var td;
							var tr;

							this.$("td").click(function () {
								td = this;
							});
							this.$("tr").click(function () {
								tr = this;
							});

							$("#listproj_filter input").bind("keyup", function (e) {
								return this.value;
							});
						},
					});
				}
			} else {
				var table = $("#list_1").DataTable();
				table.clear().draw();
			}
		},
	});
}

function savedata(param) {
	var formData = new FormData();
	if (param == "data_profil_usulan") {
		var profile = $('[name="profile-input"]');
		for (let i = 0; i < profile.length; i++) {
			var elem = profile[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_1").val()) {
			formData.append("id", $("#id_1").val());
		}
		if ($("#id_1").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Profile Usulan Lokasi";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Profile Usulan Lokasi";
		}
	}

	if (param == "data_rencana_pembagian") {
		var rencana = $('[name="rencana-input"]');
		for (let i = 0; i < rencana.length; i++) {
			var elem = rencana[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_2").val()) {
			formData.append("id", $("#id_2").val());
		}
		if ($("#id_2").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Rencana Pembagian Dukungan Kegiatan";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Rencana Pembagian Dukungan Kegiatan";
		}
	}

	if (param == "data_rencana_teknis") {
		var teknis = $('[name="teknis-input"]');
		for (let i = 0; i < teknis.length; i++) {
			var elem = teknis[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_3").val()) {
			formData.append("id", $("#id_3").val());
		}
		if ($("#id_3").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Rencana Teknis Operasionalisasi Infrastruktur";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Rencana Teknis Operasionalisasi Infrastruktur";
		}
	}

	if (param == "data_kelengkapan") {
		var kelengkapan = $('[name="kelengkapan-input"]');
		for (let i = 0; i < kelengkapan.length; i++) {
			var elem = kelengkapan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_4").val()) {
			formData.append("id", $("#id_4").val());
		}
		if ($("#id_4").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Kelengkapan Readiness Criteria (Kunci)";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Kelengkapan Readiness Criteria (Kunci)";
		}
	}

	if (param == "data_status_usulan") {
		var usulan = $('[name="usulan-input"]');
		for (let i = 0; i < usulan.length; i++) {
			var elem = usulan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_5").val()) {
			formData.append("id", $("#id_5").val());
		}
		if ($("#id_5").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Status Usulan ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Status Usulan ";
		}
	}

	if (param == "data_pendetailan") {
		var pendetailan = $('[name="pendetailan-input"]');
		for (let i = 0; i < pendetailan.length; i++) {
			var elem = pendetailan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_6").val()) {
			formData.append("id", $("#id_6").val());
		}
		if ($("#id_6").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Pendetailan Readiness Criteria  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Pendetailan Readiness Criteria  ";
		}
	}

	$.ajax({
		type: "post",
		url: baseurl,
		dataType: "json",
		cache: false,
		contentType: false,
		processData: false,
		data: formData,
		async: false,
		success: function (result) {
			Swal.fire({
				title: "Sukses!",
				text: msg,
				icon: "success",
				showConfirmButton: false,
				timer: 1500,
			});

			$(".modal").modal("hide");
			loaddata(param);
		},
	});
}

function editprofile(id, tpst, desa, kecamatan, kabupaten, uraian, direktif) {
	$("#add-data-1").trigger("click");
	$("#id_1").val(id);
	$("#tpst").val(tpst);
	$("#desa").val(desa);
	$("#kecamatan").val(kecamatan);
	$("#kabupaten").val(kabupaten);
	$("#uraian").summernote("code", uraian);
	$("#direktif").val(direktif);
}

function editrencana(
	id,
	studi,
	ded,
	dok,
	bangunan,
	lahan,
	mesin,
	operator,
	offtaker
) {
	$("#add-data-2").trigger("click");
	$("#id_2").val(id);
	$("#studi").val(studi);
	$("#ded").val(ded);
	$("#dok").val(dok);
	$("#bangunan").val(bangunan);
	$("#lahan").val(lahan);
	$("#mesin").val(mesin);
	$("#operator").val(operator);
	$("#offtaker").val(offtaker);
}

function editteknis(
	id,
	ketersediaan,
	kapasitas,
	teknologi,
	keberadaan,
	jenis_offtaker,
	kerjasama,
	kesanggupan
) {
	$("#add-data-3").trigger("click");
	$("#id_3").val(id);
	$("#ketersediaan").val(ketersediaan);
	$("#kapasitas").val(kapasitas).trigger("change");
	$("#teknologi").val(teknologi);
	$("#keberadaan").val(keberadaan).trigger("change");
	$("#jenis_offtaker").val(jenis_offtaker);
	$("#kerjasama").val(kerjasama).trigger("change");
	$("#kesanggupan").val(kesanggupan).trigger("change");
}

function editkelengkapan(
	id,
	minat,
	status_lahan,
	kesesuaian,
	kesiapan,
	kesiapan_anggaran,
	kesiapan_sosialisasi
) {
	$("#add-data-4").trigger("click");
	$("#id_4").val(id);
	$("#minat").val(minat).trigger("change");
	$("#status_lahan").val(status_lahan).trigger("change");
	$("#kesesuaian").val(kesesuaian).trigger("change");
	$("#kesiapan").val(kesiapan).trigger("change");
	$("#kesiapan_anggaran").val(kesiapan_anggaran).trigger("change");
	$("#kesiapan_sosialisasi").val(kesiapan_sosialisasi).trigger("change");
}

function editusulan(id, usulan) {
	$("#add-data-5").trigger("click");
	$("#id_5").val(id);
	$("#usulan").val(usulan).trigger("change");
}

function editpendetailan(
	id,
	pengelola,
	akses,
	jalan,
	listrik,
	air,
	partisipasi,
	jarak,
	resistensi,
	bangunan,
	banjir,
	ssk,
	ptmp,
	das,
	luas_lahan
) {
	$("#add-data-6").trigger("click");
	$("#id_6").val(id);
	$("#pengelola").val(pengelola).trigger("change");
	$("#akses").val(akses).trigger("change");
	$("#jalan").val(jalan).trigger("change");
	$("#listrik").val(listrik).trigger("change");
	$("#air").val(air).trigger("change");
	$("#partisipasi").val(partisipasi).trigger("change");
	$("#jarak").val(jarak).trigger("change");
	$("#resistensi").val(resistensi).trigger("change");
	$("#bangunan_detail").val(bangunan).trigger("change");
	$("#banjir").val(banjir).trigger("change");
	$("#ssk").val(ssk).trigger("change");
	$("#ptmp").val(ptmp).trigger("change");
	$("#das").val(das).trigger("change");
	$("#luas_lahan").val(luas_lahan).trigger("change");
}

function deleteData(id, table) {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: "btn btn-success btn-sm swal2-styled-custom",
			cancelButton: "btn btn-danger btn-sm swal2-styled-custom",
		},
		buttonsStyling: false,
	});

	swalWithBootstrapButtons
		.fire({
			title: "Anda Yakin, hapus data ini?",
			text: "",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: '<i class="fas fa-check"></i> Ya',
			cancelButtonText: '<i class="fas fa-times"></i> Tidak',
			reverseButtons: true,
		})
		.then((result) => {
			if (result.isConfirmed) {
				$.ajax({
					type: "post",
					dataType: "json",
					url: "deletecriteria",
					data: {
						id: id,
						table: table,
					},
					success: function (data) {
						Swal.fire({
							title: "Sukses!",
							text: "Hapus Data",
							icon: "success",
							showConfirmButton: false,
							timer: 1500,
						});
						loaddata(table);
					},
				});
			}
		});
}

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var blah = input.id.replace("image", "blah");
		reader.onload = function (e) {
			$("#" + blah).attr("src", e.target.result);
			window.img = e.target.result;
		};
		reader.readAsDataURL(input.files[0]); // convert to base64 string
	}
}

function modaldetail(id, username, role, status, name, foto) {
	$("#modal-detail").modal({
		show: true,
	});

	$(".modal-title").html("Detail");

	var stt = "";
	if (status == 1) {
		stt += `<span class="badge badge-primary right">Aktif</span>`;
	} else {
		stt += `<span class="badge badge-warning right">Non Aktif</span>`;
	}

	$("#detail-foto").attr("src", foto);
	$("#detail-name").text(name);
	$("#detail-username").html("username: <i>" + username + "</i>");
	$("#detail-status").html(stt);
	$("#detail-role").text(role);
}
