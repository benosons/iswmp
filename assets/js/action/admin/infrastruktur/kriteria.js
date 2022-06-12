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

	$("#save-data-1").attr("disabled", true);
	$("#modal-default").on("show.bs.modal", function () {});

	$("#rencana > a").attr("class", "nav-link active");
	$("#rencana").attr("class", "nav-item menu-is-opening menu-open");
	$("#kriteria > a").attr("class", "nav-link active");
	$("#kriteria > a > i").addClass("text-info");

	$("#add-data-1").on("click", function () {
		$("#modal-1").modal({
			show: true,
		});
		$('[name="profile-input"]').val("");
		$(".summernote").summernote("reset");
		$("#id_1").val("");
	});

	$("#add-data-2").on("click", function () {
		$("#modal-2").modal({
			show: true,
		});
		$('[name="rencana-input"]').val("");
		$(".summernote").summernote("reset");
		$("#id_2").val("");
	});

	$("#add-data-3").on("click", function () {
		$("#modal-3").modal({
			show: true,
		});
		$("#kapasitas").val(0).trigger("change");
		$("#keberadaan").val(0).trigger("change");
		$("#kerjasama").val(0).trigger("change");
		$("#kesanggupan").val(0).trigger("change");
		$('[name="teknis-input"]').val("");
		$(".summernote").summernote("reset");
		$("#id_3").val("");
	});

	$("#add-data-4").on("click", function () {
		$("#modal-4").modal({
			show: true,
		});
		$("#minat").val(0).trigger("change");
		$("#status_lahan").val(0).trigger("change");
		$("#kesesuaian").val(0).trigger("change");
		$("#kesiapan").val(0).trigger("change");
		$("#kesiapan_anggaran").val(0).trigger("change");
		$("#kesiapan_sosialisasi").val(0).trigger("change");
		$('[name="teknis-input"]').val("");
		$(".summernote").summernote("reset");
		$("#id_4").val("");
	});

	$("#add-data-5").on("click", function () {
		$("#modal-5").modal({
			show: true,
		});
		$("#usulan").val(0).trigger("change");
		$('[name="teknis-input"]').val("");
		$(".summernote").summernote("reset");
		$("#id_5").val("");
	});

	$("#save-data-1").on("click", function () {
		savedata("data_profil_usulan");
	});

	$("#save-data-2").on("click", function () {
		savedata("data_rencana_pembagian");
	});

	$("#save-data-3").on("click", function () {
		savedata("data_rencana_teknis");
	});

	$("#save-data-4").on("click", function () {
		savedata("data_kelengkapan");
	});

	$("#save-data-5").on("click", function () {
		savedata("data_status_usulan");
	});

	$('[name="profile-input"]').on("summernote.change", function (e) {
		var profile = $('[name="profile-input"]');
		var disab = [];
		for (let i = 0; i < profile.length; i++) {
			var elem = profile[i];
			if (elem.value) {
				disab.push(elem.id);
			}
		}

		if (disab.length == "6") {
			$("#save-data-1").prop("disabled", false);
		} else {
			$("#save-data-1").prop("disabled", true);
		}
	});

	$('[name="profile-input"]').keyup(function (e) {
		var profile = $('[name="profile-input"]');
		var disab = [];
		for (let i = 0; i < profile.length; i++) {
			var elem = profile[i];
			if (elem.value) {
				disab.push(elem.id);
			}
		}

		if (disab.length == "6") {
			$("#save-data-1").prop("disabled", false);
		} else {
			$("#save-data-1").prop("disabled", true);
		}
	});

	loaddata("data_profil_usulan");
	$("#custom-2").on("click", function () {
		loaddata("data_rencana_pembagian");
	});
	$("#custom-3").on("click", function () {
		loaddata("data_rencana_teknis");
	});
	$("#custom-4").on("click", function () {
		loaddata("data_kelengkapan");
	});
	$("#custom-5").on("click", function () {
		loaddata("data_status_usulan");
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
