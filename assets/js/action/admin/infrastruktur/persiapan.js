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

	// $("#save-data-1").attr("disabled", true);
	$("#modal-default").on("show.bs.modal", function () {});

	$("#pelaksana > a").attr("class", "nav-link active");
	$("#pelaksana").attr("class", "nav-item menu-is-opening menu-open");
	$("#persiapan > a").attr("class", "nav-link active");
	$("#persiapan > a > i").addClass("text-info");

	$("#skema").change(function () {
		if ($("#skema").val() == 3) {
			$("#div-skema").show();
		} else {
			$("#div-skema").hide();
			$("#skem2").val("");
		}
	});

	$("#pengadaan_tender").change(function () {
		if ($("#pengadaan_tender").val() == 3) {
			$("#div-pengadaan").show();
		} else {
			$("#div-pengadaan").hide();
			$("#pengadaan_tender2").val("");
		}
	});

	$("#add-data-1").on("click", function () {
		$("#modal-1").modal({
			show: true,
		});

		$("#div-skema").hide();
		$('[name="kegiatan-input"]').val("");
		$("#dana").val(0).trigger("change");
		$("#skema").val(0).trigger("change");
		$("#kontrak").val(0).trigger("change");
		$(".summernote").summernote("reset");
		$("#id_1").val("");
	});

	$("#add-data-2").on("click", function () {
		$("#modal-2").modal({
			show: true,
		});

		$("#stat_anggaran").val(0).trigger("change");
		$("#id_2").val("");
	});

	$("#add-data-3").on("click", function () {
		$("#modal-3").modal({
			show: true,
		});

		$("#stat_kak").val(0).trigger("change");
		$("#id_3").val("");
	});

	$("#add-data-4").on("click", function () {
		$("#modal-4").modal({
			show: true,
		});

		$("#stat_pagu").val(0).trigger("change");
		$("#id_4").val("");
	});

	$("#add-data-5").on("click", function () {
		$("#modal-5").modal({
			show: true,
		});

		$("#stat_seleksi").val(0).trigger("change");
		$("#id_5").val("");
	});

	$("#add-data-6").on("click", function () {
		$("#modal-6").modal({
			show: true,
		});

		$("#stat_wb").val(0).trigger("change");
		$("#id_6").val("");
	});

	$("#add-data-7").on("click", function () {
		$("#modal-7").modal({
			show: true,
		});

		$("#div-pengadaan").hide();
		$('[name="tender-input"]').val("");
		$("#dana_tender").val(0).trigger("change");
		$("#pengadaan_tender").val(0).trigger("change");
		$("#id_7").val("");
	});

	$("#add-data-8").on("click", function () {
		$("#modal-8").modal({
			show: true,
		});

		// $("#stat_wb").val(0).trigger("change");
		$("#id_8").val("");
	});

	$("#add-data-9").on("click", function () {
		$("#modal-9").modal({
			show: true,
		});

		$("#stat_pelaksanaan").val(0).trigger("change");
		$("#id_9").val("");
	});

	$("#save-data-1").on("click", function () {
		savedata("data_nama_kegiatan");
	});

	$("#save-data-2").on("click", function () {
		savedata("data_penganggaran");
	});

	$("#save-data-3").on("click", function () {
		savedata("data_kak");
	});

	$("#save-data-4").on("click", function () {
		savedata("data_pagu");
	});

	$("#save-data-5").on("click", function () {
		savedata("data_seleksi");
	});

	$("#save-data-6").on("click", function () {
		savedata("data_wb");
	});

	$("#save-data-7").on("click", function () {
		savedata("data_profil_tender");
	});

	$("#save-data-8").on("click", function () {
		savedata("data_proses_barang_jasa");
	});

	$("#save-data-9").on("click", function () {
		savedata("data_stat_pelaksanaan_barang_jasa");
	});

	loaddata("data_nama_kegiatan");

	$("#custom-2").on("click", function () {
		loaddata("data_penganggaran");
	});

	$("#custom-3").on("click", function () {
		loaddata("data_kak");
	});

	$("#custom-4").on("click", function () {
		loaddata("data_pagu");
	});

	$("#custom-5").on("click", function () {
		loaddata("data_seleksi");
	});

	$("#custom-6").on("click", function () {
		loaddata("data_wb");
	});

	$("#custom-7").on("click", function () {
		loaddata("data_profil_tender");
	});

	$("#custom-8").on("click", function () {
		loaddata("data_proses_barang_jasa");
	});

	$("#custom-9").on("click", function () {
		loaddata("data_stat_pelaksanaan_barang_jasa");
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
				if (param == "data_nama_kegiatan") {
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
							{ mDataProp: "tahun" },
							{ mDataProp: "paket" },
							{ mDataProp: "dana" },
							{ mDataProp: "lokasi" },
							{ mDataProp: "skema" },
							{ mDataProp: "skema2" },
							{ mDataProp: "kontrak" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "APBN MURNI", "APBN LOAN"];

									return $rowData[row.dana];
								},
								aTargets: [3],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Full Loan",
										"Ada kerjasama dengan badan usaha",
										"Lainnya",
									];

									return $rowData[row.skema];
								},
								aTargets: [5],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									if (row.skema2 == "") {
										$rowData = "-";
									} else {
										$rowData = row.skema2;
									}

									return $rowData;
								},
								aTargets: [6],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Kontrak payung",
										"Perjanjian Kerja Sama",
									];

									return $rowData[row.kontrak];
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
                                      <a class="dropdown-item" href="#" onclick="editkegiatan(${row.id},'${row.tahun}', '${row.paket}', '${row.dana}', '${row.lokasi}', '${row.skema}','${row.skema2}', '${row.kontrak}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_nama_kegiatan')"><i class="far fa-trash-alt"></i> Hapus</a>
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

				if (param == "data_penganggaran") {
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
							{ mDataProp: "stat_anggaran" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Sudah", "Belum"];

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
                                      <a class="dropdown-item" href="#" onclick="editanggaran('${row.id}', '${row.stat_anggaran}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_penganggaran')"><i class="far fa-trash-alt"></i> Hapus</a>
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

				if (param == "data_kak") {
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
							{ mDataProp: "stat_kak" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Sudah", "Belum"];

									return $rowData[row.stat_kak];
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
                                      <a class="dropdown-item" href="#" onclick="editkak('${row.id}', '${row.stat_kak}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_kak')"><i class="far fa-trash-alt"></i> Hapus</a>
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

				if (param == "data_pagu") {
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
							{ mDataProp: "stat_pagu" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Sudah", "Belum"];

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
                                      <a class="dropdown-item" href="#" onclick="editpagu('${row.id}', '${row.stat_pagu}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_pagu')"><i class="far fa-trash-alt"></i> Hapus</a>
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

				if (param == "data_seleksi") {
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
							{ mDataProp: "stat_seleksi" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "sudah", "Belum"];

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
                                      <a class="dropdown-item" href="#" onclick="editseleksi('${row.id}', '${row.stat_seleksi}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_seleksi')"><i class="far fa-trash-alt"></i> Hapus</a>
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

				if (param == "data_wb") {
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
							{ mDataProp: "stat_wb" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "Sudah", "Belum"];

									return $rowData[row.stat_wb];
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
                                      <a class="dropdown-item" href="#" onclick="editwb('${row.id}', '${row.stat_wb}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_wb')"><i class="far fa-trash-alt"></i> Hapus</a>
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

				if (param == "data_profil_tender") {
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
							{ mDataProp: "tahun_tender" },
							{ mDataProp: "paket_tender" },
							{ mDataProp: "dana_tender" },
							{ mDataProp: "klpd_tender" },
							{ mDataProp: "satuan_tender" },
							{ mDataProp: "pengadaan_tender" },
							{ mDataProp: "pengadaan_tender2" },
							{ mDataProp: "nilai_tender" },
							{ mDataProp: "lokasi_tender" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = ["-", "APBN MURNI", "APBN LOAN"];

									return $rowData[row.dana_tender];
								},
								aTargets: [3],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Pekerjaan Konstruksi",
										"Jasa Konsultansi Badan Usaha",
										"lainnya",
									];

									return $rowData[row.pengadaan_tender];
								},
								aTargets: [6],
							},
							{
								mRender: function (data, type, row) {
									var $rowData = "";
									if (row.pengadaan_tender2 == "") {
										$rowData = "-";
									} else {
										$rowData = row.pengadaan_tender2;
									}

									return $rowData;
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
                                      <a class="dropdown-item" href="#" onclick="edittender('${row.id}', '${row.tahun_tender}', '${row.paket_tender}', '${row.dana_tender}', '${row.klpd_tender}', '${row.satuan_tender}', '${row.pengadaan_tender}','${row.pengadaan_tender2}', '${row.nilai_tender}', '${row.lokasi_tender}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_profil_tender')"><i class="far fa-trash-alt"></i> Hapus</a>
                                    </div>
                                  </div>`;

									return $rowData;
								},
								aTargets: [10],
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

				// if (param == "data_proses_barang_jasa") {
				// 	var dt = $("#list_8").DataTable({
				// 		destroy: true,
				// 		paging: true,
				// 		lengthChange: false,
				// 		searching: true,
				// 		ordering: true,
				// 		info: true,
				// 		autoWidth: false,
				// 		responsive: false,
				// 		pageLength: 10,
				// 		aaData: result.data,
				// 		aoColumns: [
				// 			{ mDataProp: "id", width: "5%" },
				// 			{ mDataProp: "tahun_tender" },
				// 			{ mDataProp: "paket_tender" },
				// 			{ mDataProp: "dana_tender" },
				// 			{ mDataProp: "klpd_tender" },
				// 			{ mDataProp: "satuan_tender" },
				// 			{ mDataProp: "pengadaan_tender" },
				// 			{ mDataProp: "pengadaan_tender2" },
				// 			{ mDataProp: "nilai_tender" },
				// 			{ mDataProp: "lokasi_tender" },
				// 			{ mDataProp: "id" },
				// 		],
				// 		order: [[0, "ASC"]],
				// 		aoColumnDefs: [
				// 			{
				// 				mRender: function (data, type, row) {
				// 					var $rowData = ["-", "APBN MURNI", "APBN LOAN"];

				// 					return $rowData[row.dana_tender];
				// 				},
				// 				aTargets: [3],
				// 			},
				// 			{
				// 				mRender: function (data, type, row) {
				// 					var $rowData = [
				// 						"-",
				// 						"Pekerjaan Konstruksi",
				// 						"Jasa Konsultansi Badan Usaha",
				// 						"lainnya",
				// 					];

				// 					return $rowData[row.pengadaan_tender];
				// 				},
				// 				aTargets: [6],
				// 			},
				// 			{
				// 				mRender: function (data, type, row) {
				// 					var $rowData = "";
				// 					if (row.pengadaan_tender2 == "") {
				// 						$rowData = "-";
				// 					} else {
				// 						$rowData = row.pengadaan_tender2;
				// 					}

				// 					return $rowData;
				// 				},
				// 				aTargets: [7],
				// 			},
				// 			{
				// 				mRender: function (data, type, row) {
				// 					var $rowData = "";
				// 					$rowData += `
				//                             <div class="btn-group">
				//                             <button type="button" class="btn btn-info">Action</button>
				//                             <button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
				//                               <span class="sr-only">Toggle Dropdown</span>
				//                             </button>
				//                             <div class="dropdown-menu" role="menu">
				//                               <a class="dropdown-item" href="#" onclick="edittender('${row.id}', '${row.tahun_tender}', '${row.paket_tender}', '${row.dana_tender}', '${row.klpd_tender}', '${row.satuan_tender}', '${row.pengadaan_tender}','${row.pengadaan_tender2}', '${row.nilai_tender}', '${row.lokasi_tender}')"><i class="far fa-edit"></i> Edit</a>
				//                               <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_profil_tender')"><i class="far fa-trash-alt"></i> Hapus</a>
				//                             </div>
				//                           </div>`;

				// 					return $rowData;
				// 				},
				// 				aTargets: [10],
				// 			},
				// 		],

				// 		fnRowCallback: function (
				// 			nRow,
				// 			aData,
				// 			iDisplayIndex,
				// 			iDisplayIndexFull
				// 		) {
				// 			var index = iDisplayIndexFull + 1;
				// 			$("td:eq(0)", nRow).html(" " + index);
				// 			return;
				// 		},

				// 		fnInitComplete: function () {
				// 			var that = this;
				// 			var td;
				// 			var tr;

				// 			this.$("td").click(function () {
				// 				td = this;
				// 			});
				// 			this.$("tr").click(function () {
				// 				tr = this;
				// 			});

				// 			$("#listproj_filter input").bind("keyup", function (e) {
				// 				return this.value;
				// 			});
				// 		},
				// 	});
				// }

				if (param == "data_stat_pelaksanaan_barang_jasa") {
					var dt = $("#list_9").DataTable({
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
							{ mDataProp: "stat_pelaksanaan" },
							{ mDataProp: "id" },
						],
						order: [[0, "ASC"]],
						aoColumnDefs: [
							{
								mRender: function (data, type, row) {
									var $rowData = [
										"-",
										"Masih dalam jadwal",
										"perlu percepatan pelaksanaan",
										"perlu perhatian khusus",
									];

									return $rowData[row.stat_pelaksanaan];
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
                                      <a class="dropdown-item" href="#" onclick="editstatpelaksanaan('${row.id}', '${row.stat_pelaksanaan}')"><i class="far fa-edit"></i> Edit</a>
                                      <a class="dropdown-item" href="#" onclick="deleteData(${row.id}, 'data_stat_pelaksanaan_barang_jasa')"><i class="far fa-trash-alt"></i> Hapus</a>
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
	if (param == "data_nama_kegiatan") {
		var kegiatan = $('[name="kegiatan-input"]');
		for (let i = 0; i < kegiatan.length; i++) {
			var elem = kegiatan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_1").val()) {
			formData.append("id", $("#id_1").val());
		}
		if ($("#id_1").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Nama Kegiatan";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Nama Kegiatan";
		}
	}

	if (param == "data_penganggaran") {
		var anggaran = $('[name="anggaran-input"]');
		for (let i = 0; i < anggaran.length; i++) {
			var elem = anggaran[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_2").val()) {
			formData.append("id", $("#id_2").val());
		}
		if ($("#id_2").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Penganggaran (DIPA)";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Penganggaran (DIPA)";
		}
	}

	if (param == "data_kak") {
		var kak = $('[name="kak-input"]');
		for (let i = 0; i < kak.length; i++) {
			var elem = kak[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_3").val()) {
			formData.append("id", $("#id_3").val());
		}
		if ($("#id_3").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Pembuatan KAK";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Pembuatan KAK";
		}
	}

	if (param == "data_pagu") {
		var pagu = $('[name="pagu-input"]');
		for (let i = 0; i < pagu.length; i++) {
			var elem = pagu[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_4").val()) {
			formData.append("id", $("#id_4").val());
		}
		if ($("#id_4").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Pembuatan Pagu Anggaran/RAB/HPS";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Pembuatan Pagu Anggaran/RAB/HPS";
		}
	}

	if (param == "data_seleksi") {
		var seleksi = $('[name="seleksi-input"]');
		for (let i = 0; i < seleksi.length; i++) {
			var elem = seleksi[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_5").val()) {
			formData.append("id", $("#id_5").val());
		}
		if ($("#id_5").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Dokumen Seleksi Konsultan ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Dokumen Seleksi Konsultan ";
		}
	}

	if (param == "data_wb") {
		var wb = $('[name="wb-input"]');
		for (let i = 0; i < wb.length; i++) {
			var elem = wb[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_6").val()) {
			formData.append("id", $("#id_6").val());
		}
		if ($("#id_6").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data NoL WB  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data NoL WB  ";
		}
	}

	if (param == "data_profil_tender") {
		var tender = $('[name="tender-input"]');
		for (let i = 0; i < tender.length; i++) {
			var elem = tender[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_7").val()) {
			formData.append("id", $("#id_7").val());
		}
		if ($("#id_7").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Profil Tender  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Profil Tender  ";
		}
	}

	// if (param == "data_proses_barang_jasa") {
	// 	var tender = $('[name="tender-input"]');
	// 	for (let i = 0; i < tender.length; i++) {
	// 		var elem = tender[i];
	// 		formData.append(elem.id, elem.value);
	// 	}
	// 	formData.append("table", param);
	// 	if ($("#id_7").val()) {
	// 		formData.append("id", $("#id_7").val());
	// 	}
	// 	if ($("#id_7").val()) {
	// 		var baseurl = "updateCriteria";
	// 		var msg = "Update Data Profil Tender  ";
	// 	} else {
	// 		var baseurl = "saveCriteria";
	// 		var msg = "Tambah Data Profil Tender  ";
	// 	}
	// }

	if (param == "data_stat_pelaksanaan_barang_jasa") {
		var stat_pelaksanaan = $('[name="stat-pelaksanaan-input"]');
		for (let i = 0; i < stat_pelaksanaan.length; i++) {
			var elem = stat_pelaksanaan[i];
			formData.append(elem.id, elem.value);
		}
		formData.append("table", param);
		if ($("#id_9").val()) {
			formData.append("id", $("#id_9").val());
		}
		if ($("#id_9").val()) {
			var baseurl = "updateCriteria";
			var msg = "Update Data Status Pelaksanaan Pengadaan Barang/Jasa  ";
		} else {
			var baseurl = "saveCriteria";
			var msg = "Tambah Data Status Pelaksanaan Pengadaan Barang/Jasa  ";
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

function editkegiatan(id, tahun, paket, dana, lokasi, skema, skema2, kontrak) {
	$("#add-data-1").trigger("click");
	$("#id_1").val(id);
	$("#tahun").val(tahun);
	$("#paket").val(paket);
	$("#dana").val(dana).trigger("change");
	$("#lokasi").val(lokasi);
	if (skema == "3") {
		$("#skema").val(3).trigger("change");
		$("#skema2").val(skema2);
	} else {
		$("#skema").val(skema).trigger("change");
	}
	$("#kontrak").val(kontrak).trigger("change");
}

function editanggaran(id, stat_anggaran) {
	$("#add-data-2").trigger("click");
	$("#id_2").val(id);
	$("#stat_anggaran").val(stat_anggaran).trigger("change");
}

function editkak(id, stat_kak) {
	$("#add-data-3").trigger("click");
	$("#id_3").val(id);
	$("#stat_kak").val(stat_kak).trigger("change");
}

function editpagu(id, stat_pagu) {
	$("#add-data-4").trigger("click");
	$("#id_4").val(id);
	$("#stat_pagu").val(stat_pagu).trigger("change");
}

function editseleksi(id, stat_seleksi) {
	$("#add-data-5").trigger("click");
	$("#id_5").val(id);
	$("#stat_seleksi").val(stat_seleksi).trigger("change");
}

function editwb(id, stat_wb) {
	$("#add-data-6").trigger("click");
	$("#id_6").val(id);
	$("#stat_wb").val(stat_wb).trigger("change");
}

function edittender(
	id,
	tahunt,
	pakett,
	danat,
	klpd,
	satuan,
	pengadaan,
	pengadaan2,
	nilai,
	lokasi
) {
	$("#add-data-7").trigger("click");
	$("#id_7").val(id);
	$("#tahun_tender").val(tahunt);
	$("#paket_tender").val(pakett);
	$("#dana_tender").val(danat).trigger("change");
	$("#klpd_tender").val(klpd);
	$("#satuan_tender").val(satuan);
	if (pengadaan == "3") {
		$("#pengadaan_tender").val(3).trigger("change");
		$("#pengadaan_tender2").val(pengadaan2);
	} else {
		$("#pengadaan_tender").val(pengadaan).trigger("change");
	}
	$("#nilai_tender").val(nilai);
	$("#lokasi_tender").val(lokasi);
}

// function editproses(
// 	id,
// 	tahunt,
// 	pakett,
// 	danat,
// 	klpd,
// 	satuan,
// 	pengadaan,
// 	pengadaan2,
// 	nilai,
// 	lokasi
// ) {
// 	$("#add-data-7").trigger("click");
// 	$("#id_7").val(id);
// 	$("#tahun_tender").val(tahunt);
// 	$("#paket_tender").val(pakett);
// 	$("#dana_tender").val(danat).trigger("change");
// 	$("#klpd_tender").val(klpd);
// 	$("#satuan_tender").val(satuan);
// 	if (pengadaan == "3") {
// 		$("#pengadaan_tender").val(3).trigger("change");
// 		$("#pengadaan_tender2").val(pengadaan2);
// 	} else {
// 		$("#pengadaan_tender").val(pengadaan).trigger("change");
// 	}
// 	$("#nilai_tender").val(nilai);
// 	$("#lokasi_tender").val(lokasi);
// }

function editstatpelaksanaan(id, stat_pelaksanaan) {
	$("#add-data-9").trigger("click");
	$("#id_9").val(id);
	$("#stat_pelaksanaan").val(stat_pelaksanaan).trigger("change");
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
