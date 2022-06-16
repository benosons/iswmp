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
		savedata("data_progres_fisik");
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
				if (param == "data_profil_kegiatan") {
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
							{ mDataProp: "tahun_profil" },
							{ mDataProp: "paket_profil" },
							{ mDataProp: "dana_profil" },
							{ mDataProp: "klpd_profil" },
							{ mDataProp: "satuan_profil" },
							{ mDataProp: "nilai_profil" },
							{ mDataProp: "lokasi_profil" },
							{ mDataProp: "koordinat_profil" },
							{ mDataProp: "kontrak_profil" },
							{ mDataProp: "tanggal_profil" },
							{ mDataProp: "addendum1_profil" },
							{ mDataProp: "addendum2_profil" },
							{ mDataProp: "addendum3_profil" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "APBN MURNI", "APBN LOAN"];

									return $rowData[data];
								},
								aTargets: [3],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Lumpsum", "Harga Satuan", "Gabungan"];

									return $rowData[data];
								},
								aTargets: [9],
							},
							{
								mRender: function (data, type, row) {
									var dat = row.addendum1.split(",");
									var $rowData = "";
									$rowData +=
										`<div class="card">
                                  <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                     <p class="text-primary text-sm">
                                        Nilai Kontrak : 
                                      </p>
                                      <p class="d-flex flex-column">
                                        <span class="text-muted"> ` +
										dat[0] +
										`</span>
                                      </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                     <p class="text-primary text-sm">
                                        Waktu Pelaksanaan :
                                      </p>
                                      <p class="d-flex flex-column ">
                                        <span class="text-muted">` +
										dat[1] +
										`</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>`;
									return $rowData;
								},
								aTargets: [11],
							},
							{
								mRender: function (data, type, row) {
									var dat = row.addendum2.split(",");
									var $rowData = "";
									$rowData +=
										`<div class="card">
                                  <div class="card-body">
                                    <div class="d-flex justify-content-between">
                            <p class="text-primary text-sm">
                                        Nilai Kontrak : 
                                      </p>
                                      <p class="d-flex flex-column">
                                        <span class="text-muted"> ` +
										dat[0] +
										`</span>
                                      </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                     <p class="text-primary text-sm">
                                        Waktu Pelaksanaan :
                                      </p>
                                      <p class="d-flex flex-column ">
                                        <span class="text-muted">` +
										dat[1] +
										`</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>`;
									return $rowData;
								},
								aTargets: [12],
							},
							{
								mRender: function (data, type, row) {
									var dat = row.addendum3.split(",");
									var $rowData = "";
									$rowData +=
										`<div class="card">
                                  <div class="card-body">
                                    <div class="d-flex justify-content-between">
                            <p class="text-primary text-sm">
                                        Nilai Kontrak : 
                                      </p>
                                      <p class="d-flex flex-column">
                                        <span class="text-muted"> ` +
										dat[0] +
										`</span>
                                      </p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                     <p class="text-primary text-sm">
                                        Waktu Pelaksanaan :
                                      </p>
                                      <p class="d-flex flex-column ">
                                        <span class="text-muted">` +
										dat[1] +
										`</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>`;
									return $rowData;
								},
								aTargets: [13],
							},
							{
								mRender: function (data, type, row) {
									var addendum1 = row.addendum1.split(",");
									var addendum2 = row.addendum2.split(",");
									var addendum3 = row.addendum3.split(",");
									var $rowData = "";
									$rowData += `
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-info">Action</button>
                                    <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
                                      <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                      <a class="dropdown-item" href="#" onclick="editprofile(${row.id},'${row.tahun_profil}', '${row.paket_profil}', '${row.dana_profil}', '${row.klpd_profil}', '${row.satuan_profil}', '${row.nilai_profil}', '${row.lokasi_profil}', '${row.koordinat_profil}', '${row.kontrak_profil}', '${row.tanggal_profil}', '${addendum1[0]}', '${addendum1[1]}', '${addendum2[0]}', '${addendum2[1]}', '${addendum3[0]}', '${addendum3[1]}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_profil_kegiatan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [14],
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

				if (param == "data_progres_fisik") {
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
							{ mDataProp: "bulan_fisik" },
							{ mDataProp: "minggu_fisik" },
							{ mDataProp: "progres_fisik" },
							{ mDataProp: "akumulasi_fisik" },
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
                                      <a class="dropdown-item" href="#" onclick="editfisik('${row.id}', '${row.bulan_fisik}', '${row.minggu_fisik}', '${row.progres_fisik}', '${row.akumulasi_fisik}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_progres_fisik')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [5],
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

				if (param == "data_progres_keuangan") {
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
							{ mDataProp: "bulan_keuangan" },
							{ mDataProp: "minggu_keuangan" },
							{ mDataProp: "progres_keuangan" },
							{ mDataProp: "akumulasi_keuangan" },
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
                                      <a class="dropdown-item" href="#" onclick="editkeuangan('${row.id}', '${row.bulan_keuangan}', '${row.minggu_keuangan}', '${row.progres_keuangan}', '${row.akumulasi_keuangan}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_progres_keuangan')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [5],
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

				if (param == "data_pelaksanaan_kontrak") {
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
							{ mDataProp: "penyerahan" },
							{ mDataProp: "pcm" },
							{ mDataProp: "mobilisasi" },
							{ mDataProp: "mutual" },
							{ mDataProp: "izin" },
							{ mDataProp: "ketersediaan" },
							{ mDataProp: "drawing" },
							{ mDataProp: "realisasi_fisik" },
							{ mDataProp: "realisasi_keuangan" },
							{ mDataProp: "mesin_alat" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Dilakukan penyerahan lokasi setelah penandatanganan kontrak dan sebelum SPMK",
										"Dilakukan penyerahan lokasi sebelum penandatanganan kontrak atau setelah SPMK",
										"Tidak dilakukan penyerahan lokasi kerja",
									];

									return $rowData[data];
								},
								aTargets: [1],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Melakukan rapat persiapan pelaksanaan kontrak  maksimal 7 hari setelah SPMK dan sebelum dimulainya pelaksanaan pekerjaan",
										"Melakukan rapat persiapan pelaksanaan kontrak lebih dari 7 hari setelah SPMK",
										"Tidak melakukan rapat persiapan pelaksanaan kontrak",
									];

									return $rowData[data];
								},
								aTargets: [2],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Penyedia Jasa melakukan mobilisasi sumber daya (material, alat, tenaga kerja) sebelum 14 hari kalender sejak diterbitkan SPMK",
										"Penyedia Jasa melakukan mobilisasi sumber daya (material, alat, tenaga kerja) dalam kurun waktu 14-30 hari kalender sejak diterbitkan SPMK",
										"Penyedia Jasa melakukan mobilisasi sumber daya (material, alat, tenaga kerja) lebih dari 30 hari kalender sejak diterbitkan SPMK",
									];

									return $rowData[data];
								},
								aTargets: [3],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Melakukan pemeriksaan bersama (Mutual Check) dan dihadiri oleh pengendali pekerjaan atau direksi teknis",
										"Melakukan pemeriksaan bersama (Mutual Check) tetapi tidak dihadiri oleh pengendali pekerjaan atau direksi teknis",
										"Tidak melakukan pemeriksaan bersama (Mutual Check)",
									];

									return $rowData[data];
								},
								aTargets: [4],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Terdapat permohonan izin memulai pekerjaan (Request of Work) dan sudah ada surat persetujuan memulai pekerjaan (Approval of Work)",
										"Terdapat permohonan izin memulai pekerjaan (Request of Work) tetapi belum ada surat persetujuan memulai pekerjaan (Approval of Work)",
										"Tidak ada permohonan izin memulai pekerjaan (Request of Work)",
									];

									return $rowData[data];
								},
								aTargets: [5],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Terdapat laporan pelaksanaan pekerjaan yang disusun dan disampaikan tepat waktu (harian, mingguan, bulanan)",
										"Terdapat laporan pelaksanaan pekerjaan tetapi disusun dan disampaikan tidak tepat waktu (harian atau mingguan atau bulanan)",
										"Tidak ada laporan pelaksanaan pekerjaan",
									];

									return $rowData[data];
								},
								aTargets: [6],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Terdapat shop drawing dan asbuild drawing  dan sudah ditandatangani PPK dan Penyedia Jasa",
										"Terdapat shop drawing dan asbuild drawing tetapi belum ditandatangani PPK dan/atau Penyedia Jasa",
										"Tidak terdapat shop drawing dan asbuild drawing",
									];

									return $rowData[data];
								},
								aTargets: [7],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Sesuai atau lebih cepat dengan rencana fisik",
										"Terdapat keterlambatan progres fisik s.d 10% terhadap rencana fisik",
										"Terdapat keterlambatan progres fisik diatas 10% terhadap rencana fisik",
									];

									return $rowData[data];
								},
								aTargets: [8],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Realisasi progres keuangan sesuai atau deviasi positif terhadap rencana keuangan",
										"Realisasi progres keuangan deviasi minus 10-20% terhadap rencana keuangan",
										"Realisasi progres keuangan deviasi minus > 20 % terhadap rencana keuangan",
									];

									return $rowData[data];
								},
								aTargets: [9],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Terdapat Berita Acara Perubahan Mesin dan Alat yang digunakan berkaitan dengan Perubahan Kontrak",
										"Tidak ada berita acara perubahan mesin dan alat yang digunakan berkaitan dengan perubahan kontrak",
									];

									return $rowData[data];
								},
								aTargets: [10],
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
                                      <a class="dropdown-item" href="#" onclick="editkontrak('${row.id}', '${row.penyerahan}', '${row.pcm}', '${row.mobilisasi}', '${row.mutual}', '${row.izin}', '${row.ketersediaan}', '${row.drawing}', '${row.realisasi_fisik}', '${row.realisasi_keuangan}', '${row.mesin_alat}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_pelaksanaan_kontrak')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [11],
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

				if (param == "data_sistem_manajemen") {
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
							{ mDataProp: "penyelenggaraan" },
							{ mDataProp: "rencana" },
							{ mDataProp: "k3" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Telah melakukan semua kegiatan Sistem Manajemen Keselamatan Konstruksi",
										"Hanya melakukan sebagian kegiatan Sistem Manajemen Keselamatan Konstruksi",
										"Tidak melakukan kegiatan Sistem Manajemen Keselamatan Konstruksi",
									];

									return $rowData[data];
								},
								aTargets: [1],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Melakukan inspeksi rutin (harian,mingguan,bulanan)",
										"Melakukan inspeksi tetapi tidak rutin (bersifat insidental saja)",
										"Tidak melakukan inspeksi",
									];

									return $rowData[data];
								},
								aTargets: [2],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Terdapat laporan bulanan pelaksanaan K3",
										"Terdapat laporan pelaksanan K3 tetapi tidak rutin",
										"Tidak ada laporan pelaksaaan K3",
									];

									return $rowData[data];
								},
								aTargets: [3],
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
                                      <a class="dropdown-item" href="#" onclick="editmanajemen('${row.id}', '${row.penyelenggaraan}', '${row.rencana}', '${row.k3}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_sistem_manajemen')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [4],
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

				if (param == "data_kondisi_khusus") {
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
							{ mDataProp: "sosialisasi" },
							{ mDataProp: "tindaklanjut" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Sudah dilakukan sosialisasi kepada masyarakat di sekitar lokasi kegiatan",
										"Belum dilakukan sosialisasi kepada masyarakat di sekitar lokasi kegiatan",
									];

									return $rowData[data];
								},
								aTargets: [1],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Tidak ada keterlambatan waktu pelaksanaan pekerjaan",
										"Terdapat keterlambatan pekerjaan tetapi sudah dilakukan penanganan keterlambatan sesuai peraturan atau dokumen kontrak",
										"Terdapat keterlambatan pekerjaan tetapi tidak dilakukan penanganan keterlambatan sesuai peraturan atau dokumen kontrak",
									];

									return $rowData[data];
								},
								aTargets: [2],
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
                                      <a class="dropdown-item" href="#" onclick="editkondisi('${row.id}', '${row.sosialisasi}', '${row.tindaklanjut}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_kondisi_khusus')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [3],
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

				if (param == "data_uji_coba") {
					var dt = $("#list_7").DataTable({
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
							{ mDataProp: "pengujian" },
							{ mDataProp: "sop" },
							{ mDataProp: "kualitas" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Dilakukan pengujian akhir pekerjaan dan hasil pemeriksaaan telah sesuai dengan ketentuan yang tercantum dalam kontrak",
										"Dilakukan pengujian akhir pekerjaan tetapi masih terdapat cacat mutu dan/atau cacat fungsi yang belum diperbaiki",
										"Tidak dilakukan pengujian akhir pekerjaan",
									];

									return $rowData[data];
								},
								aTargets: [1],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Dokumen SOP (Standart Operational Procedure) sudah ada dan telah diperbaharui berdasarkan sistem yang ada dari infrastruktur terbangun",
										"Dokumen SOP (Standart Operational Procedure) sudah ada tetapi belum diperbaharui berdasarkan sistem yang ada dari infrastruktur terbangun",
										"Belum ada SOP (Standart Operational Procedure) atau SOP sedang disusun dari infrastruktur terbangun",
									];

									return $rowData[data];
								},
								aTargets: [2],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Baik", "Sedang", "Buruk"];

									return $rowData[data];
								},
								aTargets: [3],
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
                                      <a class="dropdown-item" href="#" onclick="edituji('${row.id}', '${row.pengujian}', '${row.sop}', '${row.kualitas}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_uji_coba')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [4],
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

				if (param == "data_status_kegiatan") {
					var dt = $("#list_8").DataTable({
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
							{ mDataProp: "status_pelaksanaan" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Pelaksanaan kegiatan berjalan baik",
										"Pelaksanaan kegiatan berjalan baik, tetapi perlu perhatian",
										"Pelaksanaan kegiatan tidak berjalan baik dan perlu perhatian khusus",
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
                                      <a class="dropdown-item" href="#" onclick="editstatus('${row.id}', '${row.status_pelaksanaan}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_status_kegiatan')"><i class="far fa-trash-alt"></i> Hapus</a>
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
			} else {
				var table = $("#list_1").DataTable();
				table.clear().draw();
			}
		},
	});
}

function savedata(param) {
	var formData = new FormData();
	if (param == "data_profil_kegiatan") {
		var profile = $('[name="profil-input"]');
		for (let i = 0; i < profile.length; i++) {
			var elem = profile[i];
			formData.append(elem.id, elem.value);
		}
		var addendum1 = $("input[name^=addendum1-input]")
			.map(function (idx, elem) {
				return $(elem).val();
			})
			.get()
			.join(",");
		formData.append("addendum1", addendum1);

		var addendum2 = $("input[name^=addendum2-input]")
			.map(function (idx, elem) {
				return $(elem).val();
			})
			.get()
			.join(",");
		formData.append("addendum2", addendum2);

		var addendum3 = $("input[name^=addendum3-input]")
			.map(function (idx, elem) {
				return $(elem).val();
			})
			.get()
			.join(",");
		formData.append("addendum3", addendum3);

		formData.append("table", param);
		if ($("#id_1").val()) {
			formData.append("id", $("#id_1").val());
		}
		if ($("#id_1").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Profile Pelaksanaan Kegiatan";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Profile Pelaksanaan Kegiatan";
		}
	}

	if (param == "data_progres_fisik") {
		var fisik = $('[name="fisik-input"]');
		for (let i = 0; i < fisik.length; i++) {
			var elem = fisik[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_2").val()) {
			formData.append("id", $("#id_2").val());
		}
		if ($("#id_2").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Progres Fisik ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Progres Fisik ";
		}
	}

	if (param == "data_progres_keuangan") {
		var keuangan = $('[name="keuangan-input"]');
		for (let i = 0; i < keuangan.length; i++) {
			var elem = keuangan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_3").val()) {
			formData.append("id", $("#id_3").val());
		}
		if ($("#id_3").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Progres Keuangan";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Progres Keuangan";
		}
	}

	if (param == "data_pelaksanaan_kontrak") {
		var pelaksanaan = $('[name="pelaksanaan-input"]');
		for (let i = 0; i < pelaksanaan.length; i++) {
			var elem = pelaksanaan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_4").val()) {
			formData.append("id", $("#id_4").val());
		}
		if ($("#id_4").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Pelaksanaan Kontrak";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Pelaksanaan Kontrak";
		}
	}

	if (param == "data_sistem_manajemen") {
		var manajemen = $('[name="manajemen-input"]');
		for (let i = 0; i < manajemen.length; i++) {
			var elem = manajemen[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_5").val()) {
			formData.append("id", $("#id_5").val());
		}
		if ($("#id_5").val()) {
			var baseurl = "updateCriteria";
			var msg =
				"Update Data Pelaksanaan Sistem Manajemen Keselamatan Konstruksi ";
		} else {
			var baseurl = "saveCriteria";
			var msg =
				"Tambah Data Pelaksanaan Sistem Manajemen Keselamatan Konstruksi ";
		}
	}

	if (param == "data_kondisi_khusus") {
		var kondisi = $('[name="kondisi-input"]');
		for (let i = 0; i < kondisi.length; i++) {
			var elem = kondisi[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_6").val()) {
			formData.append("id", $("#id_6").val());
		}
		if ($("#id_6").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Kondisi Khusus  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Kondisi Khusus  ";
		}
	}

	if (param == "data_uji_coba") {
		var uji = $('[name="uji-input"]');
		for (let i = 0; i < uji.length; i++) {
			var elem = uji[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_7").val()) {
			formData.append("id", $("#id_7").val());
		}
		if ($("#id_7").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Uji Coba  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Uji Coba ";
		}
	}

	if (param == "data_status_kegiatan") {
		var statuspelaksanaan = $('[name="statuspelaksanaan-input"]');
		for (let i = 0; i < statuspelaksanaan.length; i++) {
			var elem = statuspelaksanaan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_8").val()) {
			formData.append("id", $("#id_8").val());
		}
		if ($("#id_8").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Status Pelaksanaan Kegiatan  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Status Pelaksanaan Kegiatan ";
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

function editprofile(
	id,
	tahun,
	paket,
	dana,
	klpd,
	satuan,
	nilai,
	lokasi,
	koordinat,
	kontrak,
	tanggal,
	ad11,
	ad12,
	ad21,
	ad22,
	ad31,
	ad32
) {
	$("#add-data-1").trigger("click");
	$("#id_1").val(id);
	$("#tahun_profil").val(tahun);
	$("#paket_profil").val(paket);
	$("#dana_profil").val(dana).trigger("change");
	$("#klpd_profil").val(klpd);
	$("#satuan_profil").val(satuan);
	$("#nilai_profil").val(nilai);
	$("#lokasi_profil").val(lokasi);
	$("#koordinat_profil").val(koordinat);
	$("#kontrak_profil").val(kontrak).trigger("change");
	$("#tanggal_profil").val(tanggal);
	$("#addendum1_profil1").val(ad11);
	$("#addendum1_profil2").val(ad12);
	$("#addendum2_profil1").val(ad21);
	$("#addendum2_profil2").val(ad22);
	$("#addendum3_profil1").val(ad31);
	$("#addendum3_profil2").val(ad32);
}

function editfisik(id, bulan, minggu, progres, akumulasi) {
	$("#add-data-2").trigger("click");
	$("#id_2").val(id);
	$("#bulan_fisik").val(bulan);
	$("#minggu_fisik").val(minggu);
	$("#progres_fisik").val(progres);
	$("#akumulasi_fisik").val(akumulasi);
}

function editkeuangan(id, bulan, minggu, progres, akumulasi) {
	$("#add-data-3").trigger("click");
	$("#id_3").val(id);
	$("#bulan_keuangan").val(bulan);
	$("#minggu_keuangan").val(minggu);
	$("#progres_keuangan").val(progres);
	$("#akumulasi_keuangan").val(akumulasi);
}
function editkontrak(
	id,
	penyerahan,
	pcm,
	mobilisasi,
	mutual,
	izin,
	ketersediaan,
	drawing,
	realisasi_fisik,
	realisasi_keuangan,
	mesin_alat
) {
	$("#add-data-4").trigger("click");
	$("#id_4").val(id);
	$("#penyerahan").val(penyerahan).trigger("change");
	$("#pcm").val(pcm).trigger("change");
	$("#mobilisasi").val(mobilisasi).trigger("change");
	$("#mutual").val(mutual).trigger("change");
	$("#izin").val(izin).trigger("change");
	$("#ketersediaan").val(ketersediaan).trigger("change");
	$("#drawing").val(drawing).trigger("change");
	$("#realisasi_fisik").val(realisasi_fisik).trigger("change");
	$("#realisasi_keuangan").val(realisasi_keuangan).trigger("change");
	$("#mesin_alat").val(mesin_alat).trigger("change");
}

function editmanajemen(id, penyelenggaraan, rencana, k3) {
	$("#add-data-5").trigger("click");
	$("#id_5").val(id);
	$("#penyelenggaraan").val(penyelenggaraan).trigger("change");
	$("#rencana").val(rencana).trigger("change");
	$("#k3").val(k3).trigger("change");
}

function editkondisi(id, sosialisasi, tindaklanjut) {
	$("#add-data-6").trigger("click");
	$("#id_6").val(id);
	$("#sosialisasi").val(sosialisasi).trigger("change");
	$("#tindaklanjut").val(tindaklanjut).trigger("change");
}

function edituji(id, pengujian, sop, kualitas) {
	$("#add-data-7").trigger("click");
	$("#id_7").val(id);
	$("#pengujian").val(pengujian).trigger("change");
	$("#sop").val(sop).trigger("change");
	$("#kualitas").val(kualitas).trigger("change");
}

function editstatus(id, status) {
	$("#add-data-8").trigger("click");
	$("#id_8").val(id);
	$("#status_pelaksanaan").val(status).trigger("change");
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
