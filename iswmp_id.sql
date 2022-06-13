-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 13, 2022 at 01:20 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iswmp_id`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_berita`
--

CREATE TABLE `data_berita` (
  `id` int(11) NOT NULL,
  `judul` text,
  `tag` varchar(16) DEFAULT NULL,
  `isi` longtext,
  `stat` int(2) DEFAULT NULL,
  `create_by` varchar(2) DEFAULT NULL,
  `update_by` varchar(2) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_berita`
--

INSERT INTO `data_berita` (`id`, `judul`, `tag`, `isi`, `stat`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(4, 'Rapat Koordinasi ISWMP', 'Berita', '<p style=\"margin-top:0in;margin-right:0in;margin-bottom:6.0pt;margin-left:21.0pt;\r\ntext-align:justify\"><span style=\"font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif;\r\ncolor:black\">Bertempat di Hotel Fairmont – Jakarta, Kamis 31 Maret 2022, mulai\r\npukul 08.00 WIB, Rapat Koordinasi yang diadakan secara hybrid bermaksud untuk\r\nmencapai perbaikan kinerja pemanfaatan&nbsp; Loan IBRD - untuk ISWMP dan\r\nbertujuan untuk merumuskan kesepakatan antar CPIU, sebagai penanggung jawab\r\nprogram ISWMP dalam hal adanya perubahan pemanfaatan dana Loan ISWMP , yang\r\nakan juga memfasilitasi kota/kabupaten di luar DAS Citarum dipimpin langsung\r\noleh Dirjen Cipta Karya Kementerian PUPR, Ir. Diana Kusumastuti, MT.&nbsp; dan dihadiri oleh </span><span style=\"font-size: 10pt; font-family: Helvetica, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">Asisten Deputi Pengelolaan Sampah dan Limbah - Kemenko\r\nMarvest, </span><span style=\"font-size:11.0pt;font-family:&quot;Calibri&quot;,sans-serif;\r\ncolor:black\">Direktur Sanitasi Ditjen Cipta Karya Kementerian PUPR, Ketua CPMU\r\nISWMP, Direktur Perumahan &amp; Permukiman Bappenas, Direktur </span><span style=\"font-size: 10pt; font-family: Helvetica, sans-serif; color: black; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;\">Penanganan Sampah – KLHK, Direktur Sinkronisasi Urusan\r\nPemerintah Daerah I – Kemendagri, Direktur Sinkronisasi Urusan Pemerintah\r\nDaerah II – Kemendagri dan jajarannya.<o:p></o:p></span></p>', 1, '1', '1', '2022-04-05 03:07:02', '2022-04-05 03:15:00'),
(5, 'Sosialisasi Persiapan Pelaksanaan Pekerjaan Pembangunan TPST Skala Kawasan Jayakerta Kab. Karawang', 'Berita', '<p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">Pada hari Kamis, 2\r\nSeptember 2021, telah dilaksanakan rapat sosialisasi pembangunan TPST RDF di\r\nKabupaten Karawang dan Kabupaten Purwakarta yang bertempat di Saung Desa Big\r\nFish Strike Bekasi. Kegiatan tersebut dihadiri oleh perwakilan dari BPPW Jabar,\r\nDPRD Kabupaten Karawang, Dinas LH Kabupaten Karawang, Camat, Polsek, Koramil\r\nJaya Mekar, Kepala Desa, Tokoh Masyarakat dan Pihak Kontraktor. Kegiatan ini\r\nbermaksud untuk mensosialisasikan rencana pelaksanaan pembangunan TPST agar\r\npada saat pelaksanaannya berjalan lancar dan mencapai target sesuai dengan\r\nkontrak yang telah ditetapkan sebelumnya.<o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">&nbsp;</span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">Acara diawali oleh\r\npenjelasan mengenai urgensi TPST yang dipaparkan oleh Sofyan Nuralamsyah dari\r\nNPMC ISWMP. Pada kesempatan ini, beliau menyatakan bahwa ketersediaan lahan\r\nyang kurang serta sarana pengangkutan dan pengolahan yang terbatas menunjukkan\r\nbahwa keberadaan TPST untuk mengelola sampah diperlukan. <o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">&nbsp;</span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">Dalam rangkaian\r\nacara ini, dilaksanakan pembahasan terkait organisasi kerja, tata cara\r\npengaturan pelaksanaan, jadwal pelaksanaan pekerjaan, jadwal pengadaan bahan,\r\nmobilisasi peralatan dan personil, penyusunan rencana pemeriksaan lapangan, dan\r\nsosialisasi terhadap masyarakat serta pemerintah daerah setempat. Dari kegiatan\r\nsosialisasi ini dapat disimpulkan bahwa masyarakat mendukung dan memberikan\r\nizin untuk pembangunan TPST RDF di Jayakerta Kab. Karawang dengan harapan\r\ninfrastruktur ini dapat berfungsi optimal sesuai dengan yang diharapkan. <o:p></o:p></span></p><p class=\"MsoNormal\"><span lang=\"EN\">&nbsp;</span><b style=\"font-size: 1rem;\">Bahan\r\ndiambil dari berita acara.</b></p><p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</p><p class=\"MsoNormal\"><b>Peserta:\r\nBerkenan hadir Balai Prov. Jabar, DPRD Kab. Kerawang, Dinas LH, Camat, Polsek,\r\nKoramil Jayamekar, Kepala Desa, Tokoh Masyarakat dan pihak Kontraktor<o:p></o:p></b></p>', 1, '1', '1', '2022-04-05 05:49:33', '2022-04-05 05:49:33'),
(6, 'Kunjungan Dirjen CK ke TPST Nagrak Kab Purwakarta', 'Berita', '<p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">Selasa, 7 September\r\n2021, Direktur Jenderal Cipta Karya Kementerian Pekerjaan Umum Perumahan Rakyat\r\n(PUPR), Diana Kusumastuti didampingi Bupati Purwakarta Anne Ratna Mustika\r\nmeninjau langsung proyek pembangunan Tempat Pengelolaan Sampah Terpadu (TPST)\r\nSkala Kawasan yang berada di Desa Nagrak Kecamatan Darangdan Kabupaten\r\nPurwakarta Jawa Barat. Kunjungan ini dalam rangka upaya penanganan sampah yang\r\nada di wilayah sekitar Sungai Citarum. “Di Sungai Citarum itu banyak sampahnya,\r\nuntuk itu kita coba mengurai sampah tersebut untuk dibawa ke TPA dan diolah\r\ndisini”, ulas Diana Kusumastuti. <o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">&nbsp;</span></p><p>\r\n\r\n\r\n\r\n</p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">Selain itu,\r\nkegiatan pembangunan infrastruktur pengolahan sampah di 8 Kota/Kabupaten DAS\r\nCitarum dalam program ISWM ini bertujuan untuk mencegah sampah masuk ke Sungai\r\nCitarum. Untuk di wilayah Jawa Barat direncanakan ada 77 titik lokasi yang akan\r\ndibangun TPST melalui pembiayaan dari Loan Bank Dunia. Hal ini sejalan dengan\r\nprogram ISWMP yang berlangsung untuk mendukung Program Citarum Harum di Jawa\r\nBarat. ISWMP merupakan bagian dari dukungan Kementerian PUPR untuk Citarum\r\nHarum dari sektor persampahan, disamping program APBN dan APBD Provinsi.\r\nProgram infrastruktur persampahan di DAS Citarum ini terdiri dari TPS 3R\r\nberbasis masyarakat (Kementerian PUPR), TPST ISWMP (Loan World Bank) dan TPS 3R\r\nPlus (Dinas Perkim dan DLH Provinsi Jawa Barat).</span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">“Konsep TPST ini\r\nsebenarnya bertujuan untuk mengedukasi masyarakat agar mengumpulkan sampah\r\nOrganik dan Anorganik seperti botol plastik, kardus, kertas dan juga plastik\r\nyang memiliki nilai Ekonomi bagi masyarakat sekitar TPST”, ucap Anne Ratna\r\nMustika. Pemanfaatan sampah secara berkelanjutan akan dapat didaur ulang\r\nmenjadi bahan bakar dan lainnya. TPST ini berperan sebagai unit pengolahan\r\nsampah sehingga akan mengurangi sampah yang dibuang di TPA dan meningkatkan\r\numur layan TPA eksisting di Kabupaten Purwakarta. Operasionalisasi TPST juga\r\ndiharapkan akan menambah lapangan pekerjaan bagi masyarakat sekitar. <o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify\"><span lang=\"EN\">&nbsp;</span><span style=\"font-family: Arial, sans-serif; font-size: 11pt;\">Tokoh pemuda sekaligus Ketua Karang Taruna Desa Nagrak\r\nNiko Heryanto mengatakan bahwa warga masyarakat Desa Nagrak sangat mendukung\r\nadanya pembangunan Tempat Pengelolaan Sampah Terpadu (TPST) di wilayahnya,\r\nMenurutnya dengan adanya TPST ini nantinya bisa memberikan dampak positif bagi\r\nmasyarakat sekitar terutama warga Desa Nagrak ini.</span></p>', 1, '1', '1', '2022-04-05 05:51:05', '2022-04-05 05:51:05'),
(7, 'Workshop Penanganan Kawasan DAS Citarum', 'Berita', '<p class=\"MsoNormal\" style=\"text-align:justify;line-height:150%\"><span lang=\"EN\" style=\"font-family:&quot;Calibri&quot;,sans-serif;mso-fareast-font-family:Calibri\">Pada\r\nhari Rabu hingga Kamis, 8-9 September 2021, Direktorat Sanitasi Kementerian\r\nPUPR mengadakan <i>Workshop</i> Penanganan\r\nKawasan DAS Citarum Tahun Anggaran 2021 secara <i>hybrid</i>, yaitu <i>offline</i>\r\ndiselenggarakan di Hotel Papandayan Kota Bandung dan secara online melalui\r\nplatform Zoom. <i>Workshop</i> dihadiri oleh\r\nOrganisasi Perangkat Daerah (OPD) Provinsi Jawa Barat yang terdiri dari&nbsp; Dinas Perumahan dan Kawasan Permukiman dan\r\nDinas Lingkungan Hidup Kabupaten/Kota, Perwakilan Pemerintah Kecamatan dan Desa\r\nKelurahan, serta Lembaga Swadaya Masyarakat (LSM) di sepanjang DAS Citarum yang\r\nakan terlayani oleh program sanitasi.<o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify;line-height:150%\"><a name=\"_dz31bnkx8owk\"></a><span lang=\"EN\" style=\"font-family:&quot;Calibri&quot;,sans-serif;\r\nmso-fareast-font-family:Calibri\">&nbsp;</span></p><p class=\"MsoNormal\" style=\"text-align:justify;line-height:150%\"><a name=\"_k27kanzcrfxv\"></a><span lang=\"EN\" style=\"font-family:&quot;Calibri&quot;,sans-serif;\r\nmso-fareast-font-family:Calibri\">Acara ini bertujuan untuk mempersiapkan\r\nprogram penanganan sanitasi di area DAS Citarum untuk Tahun Anggaran 2022 yang\r\nmeliputi program sanimas, TPS 3R, dan ISWMP. Acara diawali dengan sambutan dan\r\narahan sekaligus pembukaan dari Direktur Sanitasi, Ditjen Cipta Karya,\r\nKementerian PUPR. Setelah pembukaan agenda dilanjutkan dengan pemaparan materi\r\ndari Direktorat Sanitasi, perwakilan dari Kementerian Koordinator Bidang\r\nKemaritiman dan Investasi, Kepala Satuan Tugas Pengendalian dan Kerusakan\r\nDaerah Aliran Sungai (DAS) Citarum, perwakilan dari Kementerian Dalam Negeri,\r\ndan perwakilan dari Kementerian Lingkungan Hidup dan Kehutanan. <o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify;line-height:150%\"><a name=\"_piydxikaldqi\"></a><span lang=\"EN\" style=\"font-family:&quot;Calibri&quot;,sans-serif;\r\nmso-fareast-font-family:Calibri\">&nbsp;</span></p><p class=\"MsoNormal\" style=\"text-align:justify;line-height:150%\"><a name=\"_ivh4246rppb5\"></a><span lang=\"EN\" style=\"font-family:&quot;Calibri&quot;,sans-serif;\r\nmso-fareast-font-family:Calibri\">Selain pemaparan materi dari kementerian,\r\nacara diisi dengan pemaparan mengenai Konsep Pengelolaan Sampah Untuk Mendukung\r\nKegiatan Operasional TPST ISWMP yang dibawakan oleh YPBB. Acara kemudian\r\ndilanjutkan FGD antara NPMC ISWMP dengan para kepala desa dan stakeholder\r\nnon-pemerintah yang akan terlibat dalam program ISWMP. FGD ditujukan untuk\r\nmenggali potensi stakeholder engagement yang ada di wilayah DAS Citarum demi\r\nlancarnya keberlangsungan program ISWMP. <o:p></o:p></span></p><p class=\"MsoNormal\" style=\"text-align:justify;line-height:150%\"><a name=\"_9y27o36djpze\"></a><span style=\"font-family: Calibri, sans-serif; font-size: 1rem;\">Kegiatan FGD berlangsung selama 2 hari hingga\r\nacara berakhir diiringi antusiasme dari para partisipan. Dari FGD tersebut,\r\ndisimpulkan bahwa para stakeholder berharap agar program ISWMP dapat dikawal\r\ndengan baik secara teknis maupun sosial demi terdorongnya perubahan penanganan\r\ndi Kota dan Kabupaten di sekitar DAS Citarum. Diharapkan pula program ISWMP ini\r\ndapat menjadi program yang berkelanjutan dan dapat membawa perubahan di masyarakat\r\nsekitar DAS Citarum.</span></p>', 1, '1', '1', '2022-04-05 05:54:12', '2022-04-05 05:54:12'),
(8, 'Duduk Bersama Stakeholder Non-Pemerintah dalam Mendukung Program ISWM', 'Berita', '<p dir=\"ltr\" style=\"line-height:1.7999999999999998;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Bertepatan dengan Workshop Penanganan Kawasan DAS Citarum yang diselenggarakan oleh Direktorat Sanitasi Kementerian PUPR, dilaksanakan pula diskusi antara stakeholder non-pemerintah dari Kota Bandung, Kab. Purwakarta, Kab. Karawang, Kab. Bandung dengan NPMC ISWMP. Acara workshop dilakukan selama 2 hari, yaitu pada Rabu dan Kamis, 8-9 September 2021 dengan metode hybrid. Peserta offline menghadiri workshop secara langsung di Hotel Papandayan Kota Bandung sedangkan peserta online hadir melalui platform Zoom.&nbsp;</span></p><p><b style=\"font-weight:normal;\" id=\"docs-internal-guid-fbad8bb8-7fff-fa58-d7b6-e859d248c9d3\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.7999999999999998;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Dalam acara ini,&nbsp; Ria Ismaria selaku Team leader NPMC ISWMP sebagai moderator memperkenalkan ulang ISWMP kepada para peserta. Ria Ismaria berharap bahwa apa yang telah dibangun dari program ISWMP kelak ada dapat betul-betul bermakna dan berarti bagi penduduk. Karenanya, dilaksanakan diskusi ini dengan tujuan untuk menggali persepsi dan potensi dari para stakeholder non pemerintah demi terselenggarakannya ISWMP dengan baik. Pada kesempatan ini, Ria Ismaria juga didampingi oleh Farida Hayati, Tenaga Ahli Sosial dari ISWMP.</span></p><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.7999999999999998;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Stakeholder non pemerintah yang hadir dalam acara ini cukup banyak dan berhasil membuat suasana diskusi hidup. Bapak Juandi, salah satu peserta yang merupakan penggiat cikapundung bersih berkata, “Tanggapan saya terkait kegiatan persampahan, meskipun telah ada bank sampah, tetapi sampah tetap mengalir bersamaan dengan kotornya sungai cikapundung, yang nantinya juga akan bermuara di sungai Citarum.” Ia berharap, Sungai Cikapundung, sebagai salah satu anak Sungai Citarum dapat terjamah oleh program persampahan dari pemerintah. Ia juga menekankan pentingnya edukasi bagi warga, termasuk edukasi untuk melakukan reuse demi berkurangnya jumlah sampah disumber. Yadi, salah satu peserta lainnya yang mewakili Cianjur Permakultur juga turut memberikan pendapat, “Salah satu kesulitan yang dialami dalam penanganan persamapahan adalah sinergitas antara pemangku kepentingan dan masyarakat.”&nbsp;</span></p><p><br></p><p dir=\"ltr\" style=\"line-height:1.7999999999999998;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Acara dilanjutkan di hari kedua dengan melaksanakan diskusi dalam dua kelompok berbeda. Tiap-tiap kelompok melangsungkan diskusi mengenai hal-hal yang dapat menunjang berjalannya siklus proyek persampahanyang berkelanjutan. Sedangkan, kelompok kedua melangsungkan diskusi terkait pihak-pihak yang perlu dilibatkan dalam penanganan persampahan. Diskusi berlangsung selama 2 jam sebelum akhirnya di tutup oleh Ria Ismaria selaku Team Leader NPMC.</span></p>', 1, '1', '1', '2022-04-05 05:57:33', '2022-04-05 05:57:33'),
(9, 'Workshop Penyepakatan Baseline Data Monitoring dan Evaluasi Kinerja Pengelolaan Sampah Kota/Kabupaten di DAS Citarum', 'Berita', '<p dir=\"ltr\" style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Pada hari Kamis, 2 September 2021, ISWMP mengadakan Workshop Penyepakatan Baseline Data Monitoring dan Evaluasi Kerja Pengelolaan Sampah Kota\\Kabupaten DAS Citarum yang dilaksanakan secara online melalui platform zoom. Workshop dihadiri oleh DLHK Kota Bandung, DLH Kota Cimahi, DLH Kab. Garut , DLHK Kab. Sumedang, DLH Kab. Bandung, DLH KBB, DLH Provinsi Jawa Barat dan Disperkim Provinsi Jawa Barat.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0); font-family: Arial; font-size: 11pt; white-space: pre-wrap;\">Workshop ini bertujuan untuk memvalidasi kualitas data yang akan digunakan sebagai baseline data monitoring dan evaluasi kinerja pengelolaan sampah kabupaten/kota di DAS Citarum yang termasuk dalam program ISWMP. Baseline data sebagai indikator awal tingkat kinerja pengelolaan sampah kota/kabupaten akan digunakan untuk mengevaluasi kinerja pengelolaan sampah kota/kabupaten selama program ISWMP sampai Tahun 2025.&nbsp;</span><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0); font-family: Arial; font-size: 11pt; white-space: pre-wrap;\">Acara diawali oleh sambutan dari Anggia Satrini sebagai CPMU ISWMP dan Ria Ismaria sebagai tim leader NPMC ISWMP. Pada kesempatan ini, Tim dari NPMC juga memaparkan paparan mengenai rencana pengembangan monev dan pengembangan satu data pengelolaan sampah. Acara lalu dilanjutkan dengan konfirmasi dan verifikasi kualitas data persampahan dari para peserta workshop yang didampingi oleh fasilitator dari NPMC.</span></p><p dir=\"ltr\" style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Hasil dari workshop ini didapati bahwa masih banyak dinas yang belum familiar terkait sistem informasi dalam rangka Satu Data Persampahan yang telah ada. Selain itu, masih banyak pula data-data persampahan yang belum tervalidasi perlu dilengkapi oleh dinas-dinas terkait. Sebagai tindak lanjut, dinas terkait akan memberi </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">follow-up</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"> dari ketersediaan data-data yang masih kurang untuk penilaian kinerja pengelolaan sampah kabupaten/kota di DAS Citarum. Acara workshop ini kemudian ditutup oleh CPMU ISWMP.&nbsp;</span></p><p><span id=\"docs-internal-guid-a25d7058-7fff-ffc2-3865-f38533efd876\"></span><br></p>', 1, '1', '1', '2022-04-05 05:59:25', '2022-04-05 05:59:25'),
(10, 'Rapat Koordinasi Tindak Lanjut Implementasi Satu Data Bidang Persampahan', 'Berita', '<p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Selasa, 27 September 2021, NPMC ISWMP melaksanakan kegiatan Rapat Koordinasi Tindak Lanjut Implementasi Satu Data Bidang Persampahan yang dilakukan secara Daring dengan memanfaatkan </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">platform zoom meeting, </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">rapat koordinasi ini adalah tindak lanjut dari kegiatan </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">workshop </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Forum Komunikasi Satu Data Persampahan yang dilaksanakan pada Bulan Agustus 2021. Kehadiran program ISWMP (</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Improvement of Solid Waste Management to Support Regional Area and Metropolitan Cities</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">) menjadi suatu terobosan program yang hadir untuk membangun kapasitas pengelolaan sampah yang baik oleh pemerintah daerah. Kebutuhan peningkatan pengelolaan sampah dilakukan agar tidak terjadi lagi kebocoran sampah yang terbuang langsung ke lingkungan sehingga menyebabkan pencemaran. Dalam merumuskan konsep monitoring kegiatan ISWMP dan mendukung terbentuknya platform digital pengelolaan sampah nasional, maka perlu memperhatikan prinsip satu data yang telah diamanatkan dalam Peraturan Presiden Nomor 39 Tahun 2019 tentang Satu Data Indonesia.</span></p><p><b style=\"font-weight:normal;\" id=\"docs-internal-guid-20c19ab0-7fff-9eb3-862a-d993e1a77f8c\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Satu Data Indonesia harus dilakukan berdasarkan prinsip sebagai berikut (Pasal 3 Peraturan Presiden Nomor 39 Tahun 2019 tentang Satu Data Indonesia):</span></p><ol style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li dir=\"ltr\" style=\"list-style-type:upper-alpha;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Data yang dihasilkan oleh Produsen Data harus memenuhi Standar Data;</span></p></li><li dir=\"ltr\" style=\"list-style-type:upper-alpha;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Data yang dihasilkan oleh Produsen Data harus memiliki Metadata;</span></p></li><li dir=\"ltr\" style=\"list-style-type:upper-alpha;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Data yang dihasilkan oleh Produsen Data harus memenuhi kaidah Interoperabilitas Data; dan</span></p></li><li dir=\"ltr\" style=\"list-style-type:upper-alpha;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Data yang dihasilkan oleh Produsen Data harus menggunakan Kode Referensi dan/atau Data Induk.</span></p></li></ol><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Acara diawali dengan pembukaan Rapat Koordinasi yang disampaikan oleh Ir. Anggia Satrini, M.Eng, Kasubdit Wil. 2 selaku ketua CPMU ISWMP, dalam sambutannya beliau menyampaikan Rapat Koordinasi Tindak Lanjut Implementasi Satu Data Bidang Persampahan bertujuan untuk&nbsp; menyepakati rencana tindak lanjut implementasi satu data persampahan antar K/L dan menyampaikan usulan terkait implementasi satu data bidang persampahan yang paparannya akan disampaikan oleh tenaga ahli MIS ISWMP, diharapkan masing - masing perwakilan dari K/L dapat menanggapi usulan dan menyampaikan rencana tindak lanjut pemenuhan penyusunan satu data bidang persampahan.</span></p><p><br></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Selanjutnya tenaga ahli MIS NPMC ISWMP memaparkan hasil telaahan tentang Satu Data Persampahan Indonesia, dimana dalam pemaparannya menyampaikan beberapa poin diantaranya:&nbsp;</span></p><ol style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Tujuan rapat koordinasi satu bidang persampahan&nbsp;</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Kendala di tingkat kementerian&nbsp;</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Isu/Kendala di tingkat kabupaten/kota</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Langkah-langkah ISWMP dalam memfasilitasi terbentuknya SATU DATA bidang persampahan&nbsp;</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Analisis </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">field data</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"> bidang persampahan antara SI PSN, SI INSAN, dan NAWASIS</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Penjelasan </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">missing link</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"> pada jalur pemutakhiran data bidang persampahan</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Penjelasan integrasi data bidang persampahan di tingkat pengelola unit</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Konsep integrasi sistem informasi terkait data bidang persampahan</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Usulan peran pemutakhiran data bidang persampahan</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Pembagian tugas kementerian dalam integrasi data persampahan</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Konsep integrasi sistem informasi terkait data bidang persampahan (</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Milestone</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">).</span></p></li></ol><p><b style=\"font-weight:normal;\" id=\"docs-internal-guid-49bc57a1-7fff-de36-ceb7-44bf8e72b186\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Acara dilanjutkan dengan diskusi antar peserta rapat koordinasi yang diwakili dari beberapa Kementerian/Lembaga diantaranya terdapat perwakilan dari Tim NPMC ISWMP, PUPR, Dit. Perkim Bappenas, Bangda Kemendagri, dan KLHK. dalam pelaksanaan diskusi terdapat poin-poin catatan diantaranya:&nbsp;</span></p><ul style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li dir=\"ltr\" style=\"list-style-type:disc;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Pembagian peran pemutakhiran data bidang persampahan direncanakan sebagai berikut:</span></p></li><ul style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li dir=\"ltr\" style=\"list-style-type:circle;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Timbulan sampah, komposisi sampah, bank sampah, sarana pengangkutan, dan data operasional prasarana dimutakhirkan oleh SI PSN.</span></p></li><li dir=\"ltr\" style=\"list-style-type:circle;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Infrastruktur yang dibangun oleh PUPR (TPS3R, TPA, TPA Regional) dimutakhirkan oleh SI INSAN.&nbsp;</span></p></li><li dir=\"ltr\" style=\"list-style-type:circle;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"2\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Data instrumen SSK dan data IRS-EHRA terkait persampahan berasal dari Nawasis.</span></p></li></ul><li dir=\"ltr\" style=\"list-style-type:disc;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">SI PSN berperan sebagai pengatur lalu lintas data bidang persampahan akan mengembangkan data warehouse dengan fitur layanan pertukaran data (data katalog) untuk bisa dimanfaatkan oleh aplikasi di tingkat kementerian.</span></p></li><li dir=\"ltr\" style=\"list-style-type:disc;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Kode referensi wilayah menggunakan Permendagri 72/2019 dan data kependudukan menggunakan data Dukcapil. Digitalisasi data referensi wilayah dan data kependudukan perlu dilakukan dan dapat di akses lintas kementerian.</span></p></li><li dir=\"ltr\" style=\"list-style-type:disc;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Usulan terkait sistem informasi di tingkat pengelola fasilitas persampahan dengan fungsi operasional dan pemeliharaan, akan dibahas dan ditindaklanjuti di tahun anggaran 2022.</span></p></li></ul><p><b style=\"font-weight:normal;\"><br></b></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Rencana Tindak lanjut kegiatan Rapat Koordinasi Tindak Lanjut Implementasi Satu Data Bidang Persampahan adalah sebagai berikut :&nbsp;</span></p><ol style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Dalam waktu dekat akan dijadwalkan rapat pertemuan dengan pihak Kemendagri Direktorat PEIPD dan Bangda untuk membahas digitalisasi kode referensi wilayah untuk kebutuhan integrasi data pada masing-masing sistem informasi.</span></p></li><li dir=\"ltr\" style=\"list-style-type:decimal;font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Dalam waktu dekat akan dijadwalkan rapat khusus dengan KLHK untuk membahas tentang pengembangan lanjutan SIPSN dan untuk dapat memfasilitasi field data tambahan, fitur data </span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">warehouse</span><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">, dan layanan pertukaran data.</span></p></li></ol><p><br></p><p dir=\"ltr\" style=\"line-height:1.3800000000000001;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Acara dilanjutkan dengan sambutan dari Ria Ismaria selaku Tim Leader NMPC ISWMP, Ria Menyampaikan dalam pertemuan rapat koordinasi kali ini diharapkan dapat saling berkolaborasi dalam mencapai satu data bidang persampahan di Indonesia. Keluaran rapat koordinasi kali ini diharapkan konkrit dan berbuah rencana tindak lanjut, mengingat ISWMP diberi tugas untuk melakukan koordinasi serta mengembangkan monitoring dan evaluasi terkait perubahan sistem pengolahan sampah yang ada di kota/kabupaten khususnya DAS Citarum, sehingga diperlukan data dasar yang sinkron sehingga dapat berfungsi untuk mengukur kinerja dan dampak dari kegiatan ISWMP. Diharapkan para peserta rapat koordinasi dapat memberikan masukan terhadap hasil kajian yang sudah dilakukan oleh Tim NPMC ISWMP.</span></p>', 1, '1', '1', '2022-04-05 06:03:13', '2022-04-05 06:03:13');
INSERT INTO `data_berita` (`id`, `judul`, `tag`, `isi`, `stat`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(11, 'Pertemuan CPMU ISWMP dan Balai Prasarana Permukiman Wilayah Jawa Barat Kementerian PUPR dengan Bupati Kab. Purwakarta dalam rangka Persiapan Pembangunan TPST ISWMP', 'Berita', '<p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Senin 30 Agustus 2021,&nbsp; Wakil Ketua CPMU ISWMP, Terra Prima Sari melaksanakan diskusi bersama Bupati Kabupaten Purwakarta </span><span style=\"font-size:12pt;font-family:Arial;color:#202124;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Anne Ratna Mustika, di Kantor Bupati Purwakarta </span><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Jl. Ganda Negara No.11A </span><span style=\"font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Kab. Purwakarta</span><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"> dalam rangka persiapan pembangunan Tempat Pemrosesan Sampah Terpadu, Proyek ISWM. Acara tersebut bertujuan untuk melakukan rapat koordinasi kegiatan ISWMP dengan Bupati Purwakarta dan CPMU. Adapun peserta rapat ini adalah Direktorat Sanitasi, BPPW Jabar, Bupati Purwakarta, Tim dari Dinas LH Kabupaten Purwakarta, Sekda Kabupaten Purwakarta, dan tim NPMC ISWMP.</span></p><p><span style=\"color: rgb(34, 34, 34); font-family: Arial; font-size: 12pt; white-space: pre-wrap; text-align: justify;\">Rapat koordinasi dibuka oleh Bupati Kabupaten Purwakarta dengan menyampaikan dua poin inti diantaranya yaitu memberikan apresiasi kegiatan program ISWMP dalam mendukung peningkatan pengelolaan sampah di Kabupaten Purwakarta dan memberi arahan pada OPD terkait. Setelah dibuka oleh Bupati selanjutnya rapat dipimpin oleh Sekretaris Daerah Kabupaten Purwakarta untuk melanjutkan pembahasan dan menindaklanjuti poin yang disampaikan oleh Bupati. Sekda Kabupaten Purwakarta untuk mendorong kebutuhan percepatan pembangunan infrastruktur persampahan yang akan didukung oleh ISWMP ini.</span><br></p><p><span style=\"text-align: justify; background-color: transparent; font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0); font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Terra Prima Sari </span><span style=\"text-align: justify; font-size: 12pt; font-family: Arial; color: rgb(34, 34, 34); font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">selaku </span><span style=\"text-align: justify; background-color: transparent; font-size: 12pt; font-family: Arial; color: rgb(0, 0, 0); font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">Wakil Ketua CPMU ISWMP menjelaskan terkait </span><span style=\"text-align: justify; font-size: 12pt; font-family: Arial; color: rgb(34, 34, 34); font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;\">apa itu program ISWMP, tujuan dan sasaran, lokasi penerima manfaat, struktur pelaksana ISWMP, hingga jangka waktu pelaksanaan ISWMP. Selain itu memaparkan pula terkait kondisi pengelolaan sampah di Kabupaten Purwakarta. Setelah pemaparan, dilanjutkan diskusi terkait tahapan operasionalisasi TPST ISWMP di Kabupaten Purwakarta dan rencana tindak lanjut pendampingan operasionalisasi TPST.</span><br></p><p><br></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">BPPW Jabar yang diwakili oleh Kepala Balai Oscar RHS menyampaikan beberapa poin pembahasan diantaranya program DAS Citarum sesuai amanat presiden yang tertuang dalam perpres memuat aspek terkait persampahan. Rencananya aspek tersebut akan didukung melalui bantuan pembangunan infrastruktur yang mana berdasarkan usulan berjumlah 77 lokasi usulan dimana 4 lokasi terdapat di Kabupaten Purwakarta. Saat ini progres pembangunan TPST di Kabupaten Purwakarta yang sudah melalui tahap kontrak yaitu berlokasi di Nagrak dan Tegalsari. Program ini pun tidak terlepas dari support pemerintah daerah agar mampu berkolaborasi antar pemangku kepentingan sehingga dapat berhasil sesuai harapan.</span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"><br></span></p><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Beberapa poin kesimpulan yang perlu ditindak lanjuti dari kegiatan ini di antaranya:</span></p><ul style=\"margin-top:0;margin-bottom:0;padding-inline-start:48px;\"><li dir=\"ltr\" style=\"list-style-type:disc;font-size:12pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Penyiapan bentuk kelembagaan perlu disiapkan, termasuk pembiayaan kelembagaannya tersebut</span></p></li><li dir=\"ltr\" style=\"list-style-type:disc;font-size:12pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;margin-right: 18pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Retribusi yang perlu ditingkatkan namun demikian pemanfaatan hasil retribusi saat ini bukan hal yang utama dalam pembiayaan sampah. Agar berkelanjutan perlu opsi pembiayaan yang utama yang bersumber dari APBD dan sumber lainnya</span></p></li><li dir=\"ltr\" style=\"list-style-type:disc;font-size:12pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;margin-right: 18pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Sekda Kabupaten Purwakarta menugaskan Kepala Dinas LH perlu pembentukan UPTD</span></p></li><li dir=\"ltr\" style=\"list-style-type:disc;font-size:12pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;\" aria-level=\"1\"><p dir=\"ltr\" style=\"line-height:1.3800000000000001;margin-right: 18pt;text-align: justify;margin-top:0pt;margin-bottom:0pt;\" role=\"presentation\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Potensi pemanfaatan hasil RDF yang ada di Kabupaten Purwakarta perlu dijajaki dan didorong dan ISWMP akan memberikan materi pendampingan, mulai penyusunan anggaran dan penanganannya</span></p></li></ul><p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:12pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"><span id=\"docs-internal-guid-e3cd4f87-7fff-db74-a51a-13d45f8c3be8\"><br></span></span></p>', 1, '1', '1', '2022-04-05 06:06:30', '2022-04-05 06:06:30'),
(12, 'Kunjungan Kerja Menteri Koordinator Maritim dan Investasi Calon Lokasi TPST RDF ISWMP Cicabe Kota Bandung', 'Berita', '<p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Pada hari Selasa, 7 September 2021, Menteri Koordinator Kemaritiman dan Investasi Luhut Binsar Pandjaitan melakukan kunjungan kerja dalam rangka Program Citarum Harum di Kota Bandung. Kunjungan Menko Marves didampingi oleh Direktur Jenderal Cipta Karya, Diana Kusumastuti dan Direktur Sanitasi, Prasetyo ke lokasi eks TPA Cicabe yang akan dijadikan sebagai Tempat Pengolahan Sampah Terpadu (TPST) Cicabe – Kota Bandung. Saat ini di lokasi tersebut terdapat Pusat Daur Ulang dan Bank Sampah Induk milik Pemerintah Kota Bandung.&nbsp;</span></p><p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Diana Kusumastuti menegaskan bahwa Kementerian PUPR dibawah Direktorat Sanitasi sedang membangun 7 lokasi TPST Tahun 2021 di kawasan kota/kabupaten DAS Citarum, antara lain 1 lokasi di Kota Bandung, 1 lokasi di Kabupaten Bandung, 3 lokasi di Kabupaten Karawang dan 2 lokasi di Kabupaten Purwakarta. Semua infrastruktur yang terbangun di tahun 2021 sanggup melayani sampah sebanyak 468 ton/hari. Hal ini sejalan dengan program ISWMP yang berlangsung untuk mendukung Program Citarum Harum di Jawa Barat. ISWMP merupakan bagian dari dukungan Kementerian PUPR untuk Citarum Harum dari sektor persampahan, disamping program APBN dan APBD Provinsi. Program infrastruktur persampahan di DAS Citarum ini terdiri dari TPS 3R berbasis masyarakat (Kementerian PUPR), TPST ISWMP (Loan World Bank) dan TPS 3R Plus (Dinas Perkim dan DLH Provinsi Jawa Barat).&nbsp;</span></p><p><span id=\"docs-internal-guid-102b2df3-7fff-aee3-ea58-45824958dc30\"></span></p><p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Rencana pembangunan infrastruktur TPST dan TPA ISWMP dari tahun 2021-2025 yang tersebar di 8 kota/kabupaten di Jawa Barat ini berjumlah 77 unit. Gubernur Jawa Barat, Ridwan Kamil beserta Wakil Walikota Bandung, Bupati Bandung, Bupati Karawang, Bupati Purwakarta turut serta dalam kunjungan kerja ke lokasi TPST Cicabe ini turut menyambut baik rencana pembangunan infrastruktur pengolahan sampah yang akan mengurangi dan mencegah aliran sampah ke Sungai Citarum, yang merupakan salah satu sumber pencemar dominan di DAS Citarum.&nbsp;</span></p><p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Pembangunan TPST di Cicabe ini akan dibangun dengan konsep pengintegrasian sarana dan prasarana eksisting (Pusat Daur Ulang – Bank Sampah) dengan TPST RDF. Dengan kapasitas olahan sampah 20 ton/hari, TPST Cicabe ini akan menghasilkan RDF sebanyak 6 ton/hari. Produk olahan ini akan dimanfaatkan sebagai material bahan bakar di PLTU milik Indonesia Power. Setelah penjelasan panel-panel, undangan diarahkan menuju Pusat Daur Ulang (PDU) Cicabe. Para undangan melihat jenis-jenis sampah yang diolah serta proses kerja dari PDU.&nbsp;&nbsp;</span></p><p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Sementara itu, Ridwan Kamil Gubernur Jawa Barat memaparkan kondisi terkini sungai terpanjang di wilayah Provinsi Jabar itu. Menurutnya, berkat kerja sama semua pihak, sungai yang sempat mendapat julukan sungai terkotor di dunia itu kini memiliki wajah baru. Ridwan Kamil mengatakan, wajah baru Citarum yang jauh lebih baik saat ini tak lepas dari hadirnya Perpres Nomor 15 Tahun 2018 tentang Percepatan Pengendalian Pencemaran dan Kerusakan DAS Citarum yang dikemas melalui program Citarum Harum.</span></p><p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\"><span id=\"docs-internal-guid-fe59f0c0-7fff-2092-7e1b-8611e62e97ba\"></span></span></p><p dir=\"ltr\" style=\"line-height:1.295;text-align: justify;margin-top:0pt;margin-bottom:8pt;\"><span style=\"font-size:11pt;font-family:Calibri,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Setelah kunjungan kerja di lokasi TPST Cicabe ini, rombongan Menteri Koordinator Kemaritiman dan Investasi kemudian bertolak ke lokasi Jajaway Cidurian sampai dengan siang hari yang berakhir acara di Kantor Satgas Citarum Harum, Dago-Bandung. </span></p>', 1, '1', '1', '2022-04-05 06:07:51', '2022-04-05 06:07:51'),
(13, 'Sosialisasi Persiapan Pelaksanaan Pekerjaan Pembangunan TPST Skala Kawasan Jayakerta Kab. Karawang', 'Berita', '<p dir=\"ltr\" style=\"line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;\">Pada hari Kamis, 2 September 2021, telah dilaksanakan rapat sosialisasi pembangunan TPST RDF di Kabupaten Karawang dan Kabupaten Purwakarta yang bertempat di Saung Desa Big Fish Strike Bekasi. Kegiatan tersebut dihadiri oleh perwakilan dari BPPW Jabar, DPRD Kabupaten Karawang, Dinas LH Kabupaten Karawang, Camat, Polsek, Koramil Jaya Mekar, Kepala Desa, Tokoh Masyarakat dan Pihak Kontraktor. Kegiatan ini bermaksud untuk mensosialisasikan rencana pelaksanaan pembangunan TPST agar pada saat pelaksanaannya berjalan lancar dan mencapai target sesuai dengan kontrak yang telah ditetapkan sebelumnya.</span></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0); font-family: Arial; font-size: 11pt; white-space: pre-wrap; text-align: justify;\">Acara diawali oleh penjelasan mengenai urgensi TPST yang dipaparkan oleh Sofyan Nuralamsyah dari NPMC ISWMP. Pada kesempatan ini, beliau menyatakan bahwa ketersediaan lahan yang kurang serta sarana pengangkutan dan pengolahan yang terbatas menunjukkan bahwa keberadaan TPST untuk mengelola sampah diperlukan.&nbsp;</span><br></p><p><span style=\"background-color: transparent; color: rgb(0, 0, 0); font-family: Arial; font-size: 11pt; white-space: pre-wrap; text-align: justify;\">Dalam rangkaian acara ini, dilaksanakan pembahasan terkait organisasi kerja, tata cara pengaturan pelaksanaan, jadwal pelaksanaan pekerjaan, jadwal pengadaan bahan, mobilisasi peralatan dan personil, penyusunan rencana pemeriksaan lapangan, dan sosialisasi terhadap masyarakat serta pemerintah daerah setempat. Dari kegiatan sosialisasi ini dapat disimpulkan bahwa masyarakat mendukung dan memberikan izin untuk pembangunan TPST RDF di Jayakerta Kab. Karawang dengan harapan infrastruktur ini dapat berfungsi optimal sesuai dengan yang diharapkan.&nbsp;</span><br></p>', 1, '1', '1', '2022-04-05 06:12:59', '2022-04-05 06:12:59');

-- --------------------------------------------------------

--
-- Table structure for table `data_file`
--

CREATE TABLE `data_file` (
  `id` int(11) NOT NULL,
  `id_parent` int(64) DEFAULT NULL,
  `type` varchar(16) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(8) DEFAULT NULL,
  `extension` varchar(16) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_file`
--

INSERT INTO `data_file` (`id`, `id_parent`, `type`, `path`, `size`, `extension`, `filename`, `create_date`, `update_date`) VALUES
(2, 3, 'foto', './assets/upload/galeri/foto/2022/02/14', 68483, 'image/png', 'image-4.png', '2022-02-14 15:19:10', '2022-02-14 15:19:10'),
(5, 4, 'berita', './assets/upload/berita/2022/04/05', 290764, 'image/png', '05.png', '2022-04-05 03:07:02', '2022-04-05 03:07:02'),
(6, 5, 'berita', './assets/upload/berita/2022/04/05', 155387, 'image/jpeg', '2.jpg', '2022-04-05 05:49:33', '2022-04-05 05:49:33'),
(7, 6, 'berita', './assets/upload/berita/2022/04/05', 3146518, 'image/png', '3.png', '2022-04-05 05:51:06', '2022-04-05 05:51:06'),
(8, 7, 'berita', './assets/upload/berita/2022/04/05', 589396, 'image/jpeg', '4.jpg', '2022-04-05 05:54:12', '2022-04-05 05:54:12'),
(9, 8, 'berita', './assets/upload/berita/2022/04/05', 421644, 'image/png', '5.png', '2022-04-05 05:57:33', '2022-04-05 05:57:33'),
(10, 9, 'berita', './assets/upload/berita/2022/04/05', 245141, 'image/png', '6.png', '2022-04-05 05:59:25', '2022-04-05 05:59:25'),
(11, 10, 'berita', './assets/upload/berita/2022/04/05', 136904, 'image/png', '7.png', '2022-04-05 06:03:13', '2022-04-05 06:03:13'),
(12, 11, 'berita', './assets/upload/berita/2022/04/05', 491078, 'image/png', '8.png', '2022-04-05 06:06:30', '2022-04-05 06:06:30'),
(13, 12, 'berita', './assets/upload/berita/2022/04/05', 48882, 'image/jpeg', '9.jpg', '2022-04-05 06:07:51', '2022-04-05 06:07:51'),
(14, 13, 'berita', './assets/upload/berita/2022/04/05', 36099, 'image/jpeg', '10.jpg', '2022-04-05 06:12:59', '2022-04-05 06:12:59'),
(15, 4, 'foto', './assets/upload/galeri/foto/2022/04/07', 2006587, 'image/jpeg', 'IMG_5542_NEW_NEW.jpg', '2022-04-07 13:11:15', '2022-04-07 13:11:15');

-- --------------------------------------------------------

--
-- Table structure for table `data_foto`
--

CREATE TABLE `data_foto` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `stat` varchar(255) DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `keterangan` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_foto`
--

INSERT INTO `data_foto` (`id`, `judul`, `stat`, `create_by`, `update_by`, `create_date`, `update_date`, `keterangan`) VALUES
(4, 'ada', 'on', '1', '1', '2022-04-07 13:11:15', '2022-04-07 13:11:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `data_jadwal`
--

CREATE TABLE `data_jadwal` (
  `id` int(11) NOT NULL,
  `event` varchar(255) DEFAULT NULL,
  `tanggal` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_jadwal`
--

INSERT INTO `data_jadwal` (`id`, `event`, `tanggal`, `status`, `create_date`, `update_date`, `create_by`, `update_by`) VALUES
(12, 'Rapat Koordinasi Penguatan Kelembagaan Pemerintah Daerah dalam Mendukung Pengelolaan Persampahan di 8 Kabupaten/Kota ISWMP', '03/11/2022 09:00', '1', '2022-03-11 09:24:55', '2022-03-11 09:24:55', '1', '1'),
(14, 'FGD Bantuan Teknis Program Pemberdayaan Masyarakat ISWMP Kota Bandung', '03/16/2022 08:00', '1', '2022-03-14 03:50:04', '2022-03-14 03:50:04', '1', '1'),
(15, 'FGD Bantuan Teknis Program Pemberdayaan Masyarakat ISWMP Kab. Bandung', '03/17/2022 08:00', '1', '2022-03-14 03:50:19', '2022-03-14 03:50:19', '1', '1'),
(16, 'FGD PMO Jadebekpunjur', '03/17/2022 13:00', '1', '2022-03-14 03:50:51', '2022-03-14 03:50:51', '1', '1'),
(17, 'FGD PMO Jadebekpunjur', '03/17/2022 13:00', '1', '2022-03-14 03:51:09', '2022-03-14 03:51:09', '1', '1'),
(18, 'FGD Operasionalisasi TPST Purwakarta', '03/15/2022 09:00', '1', '2022-03-14 03:51:25', '2022-03-14 03:51:25', '1', '1'),
(19, 'FGD Operasionalisasi TPST Kab. Karawang', '03/18/2022 09:00', '1', '2022-03-14 03:51:46', '2022-03-14 03:51:46', '1', '1'),
(20, 'Workshop Pembangunan 3 TPST di Kota Denpasar (offline - Hotel Pullman Legian)', '03/16/2022 09:00', '1', '2022-03-14 03:53:10', '2022-03-14 03:53:10', '1', '1'),
(21, 'Kunjungan Lapangan ke lokasi Pembangunan 3 TPST Denpasar dan TPST Samtaku', '03/17/2022 09:00', '1', '2022-03-14 03:53:41', '2022-03-14 03:53:41', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `data_kak`
--

CREATE TABLE `data_kak` (
  `id` int(11) NOT NULL,
  `stat_kak` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_kak`
--

INSERT INTO `data_kak` (`id`, `stat_kak`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(1, '1', '1', '1', '2022-06-13 04:22:59', '2022-06-13 04:22:59');

-- --------------------------------------------------------

--
-- Table structure for table `data_kelengkapan`
--

CREATE TABLE `data_kelengkapan` (
  `id` int(11) NOT NULL,
  `minat` varchar(255) NOT NULL,
  `status_lahan` varchar(255) NOT NULL,
  `kesesuaian` varchar(255) NOT NULL,
  `kesiapan` varchar(255) NOT NULL,
  `kesiapan_anggaran` varchar(255) NOT NULL,
  `kesiapan_sosialisasi` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_kelengkapan`
--

INSERT INTO `data_kelengkapan` (`id`, `minat`, `status_lahan`, `kesesuaian`, `kesiapan`, `kesiapan_anggaran`, `kesiapan_sosialisasi`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(1, '2', '1', '2', '1', '2', '1', '1', '1', '2022-06-12 06:24:28', '2022-06-12 06:29:48');

-- --------------------------------------------------------

--
-- Table structure for table `data_laporan`
--

CREATE TABLE `data_laporan` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `tanggal` datetime DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `jenis` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_laporan`
--

INSERT INTO `data_laporan` (`id`, `judul`, `deskripsi`, `tanggal`, `create_by`, `create_date`, `update_by`, `update_date`, `jenis`, `url`) VALUES
(1, '231231', '<p>3123123w2e23<br></p>', '2022-04-07 00:00:00', '1', '2022-04-07 15:11:54', '1', '2022-04-07 15:11:54', 'tese', 'tese'),
(3, 'ret', '<p>adadadsad<br></p>', '1999-03-12 00:00:00', '1', '2022-04-07 17:01:38', '1', '2022-04-07 17:01:38', 'jenis', 'https://www.google.com');

-- --------------------------------------------------------

--
-- Table structure for table `data_nama_kegiatan`
--

CREATE TABLE `data_nama_kegiatan` (
  `id` int(11) NOT NULL,
  `tahun` varchar(255) NOT NULL,
  `paket` varchar(255) NOT NULL,
  `dana` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `skema` varchar(255) NOT NULL,
  `skema2` varchar(255) NOT NULL,
  `kontrak` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_nama_kegiatan`
--

INSERT INTO `data_nama_kegiatan` (`id`, `tahun`, `paket`, `dana`, `lokasi`, `skema`, `skema2`, `kontrak`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(1, '2019 - 2021', 'paket', '1', 'lokasi', '3', '...', '1', '1', '1', '2022-06-13 03:45:04', '2022-06-13 04:03:01');

-- --------------------------------------------------------

--
-- Table structure for table `data_pagu`
--

CREATE TABLE `data_pagu` (
  `id` int(11) NOT NULL,
  `stat_pagu` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_pagu`
--

INSERT INTO `data_pagu` (`id`, `stat_pagu`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(2, '2', '1', '1', '2022-06-13 04:30:14', '2022-06-13 04:30:14');

-- --------------------------------------------------------

--
-- Table structure for table `data_pendetailan`
--

CREATE TABLE `data_pendetailan` (
  `id` int(11) NOT NULL,
  `pengelola` varchar(255) NOT NULL,
  `akses` varchar(255) NOT NULL,
  `jalan` varchar(255) NOT NULL,
  `listrik` varchar(255) NOT NULL,
  `air` varchar(255) NOT NULL,
  `partisipasi` varchar(255) NOT NULL,
  `jarak` varchar(255) NOT NULL,
  `resistensi` varchar(255) NOT NULL,
  `bangunan_detail` varchar(255) NOT NULL,
  `banjir` varchar(255) NOT NULL,
  `ssk` varchar(255) NOT NULL,
  `ptmp` varchar(255) NOT NULL,
  `das` varchar(255) NOT NULL,
  `luas_lahan` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_pendetailan`
--

INSERT INTO `data_pendetailan` (`id`, `pengelola`, `akses`, `jalan`, `listrik`, `air`, `partisipasi`, `jarak`, `resistensi`, `bangunan_detail`, `banjir`, `ssk`, `ptmp`, `das`, `luas_lahan`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(2, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '1', '1', '2022-06-12 08:44:43', '2022-06-12 08:44:43');

-- --------------------------------------------------------

--
-- Table structure for table `data_pengaduan`
--

CREATE TABLE `data_pengaduan` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `instansi` varchar(255) DEFAULT NULL,
  `pengaduan` text,
  `create_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_pengaduan`
--

INSERT INTO `data_pengaduan` (`id`, `name`, `email`, `instansi`, `pengaduan`, `create_date`) VALUES
(1, 'cewfewfew', 'beno.sons@gmail.com', 'bandung', 'eqweqweqweqwe', '2022-05-31 14:03:57'),
(2, 'fwdfegrger', 'ge@gg.vom', 'e234234234', 'efwerwerwerwe', '2022-05-31 14:05:06');

-- --------------------------------------------------------

--
-- Table structure for table `data_penganggaran`
--

CREATE TABLE `data_penganggaran` (
  `id` int(11) NOT NULL,
  `stat_anggaran` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_penganggaran`
--

INSERT INTO `data_penganggaran` (`id`, `stat_anggaran`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(1, '1', '1', '1', '2022-06-13 04:15:40', '2022-06-13 04:15:40');

-- --------------------------------------------------------

--
-- Table structure for table `data_peta`
--

CREATE TABLE `data_peta` (
  `id` int(11) NOT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` text,
  `kabupaten` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `desa` varchar(255) DEFAULT NULL,
  `kapasitas` varchar(255) DEFAULT NULL,
  `luas` varchar(255) DEFAULT NULL,
  `fisik` varchar(255) DEFAULT NULL,
  `keuangan` varchar(255) DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `stat` int(11) DEFAULT NULL,
  `provinsi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_peta`
--

INSERT INTO `data_peta` (`id`, `latitude`, `longitude`, `nama`, `alamat`, `kabupaten`, `kecamatan`, `desa`, `kapasitas`, `luas`, `fisik`, `keuangan`, `create_by`, `create_date`, `update_by`, `update_date`, `stat`, `provinsi`) VALUES
(1, '111', '2', 'test', '<p>testing<br></p>', '1', 'kecamatan', 'bandung', '10', '100', '100', '100', '1', '2022-05-09 14:56:29', '1', '2022-05-09 15:48:10', NULL, 1),
(2, '123123', '312312', 'fdewrewr', '<p>werwer<br></p>', '1', 'rwerwe', 'rwerwer', 'rwerw', 'erwer', 'ewrwer', 'werwer', '1', '2022-05-16 13:35:50', '1', '2022-05-16 13:35:50', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `data_profil_tender`
--

CREATE TABLE `data_profil_tender` (
  `id` int(11) NOT NULL,
  `tahun_tender` varchar(255) NOT NULL,
  `paket_tender` varchar(255) NOT NULL,
  `dana_tender` varchar(255) NOT NULL,
  `klpd_tender` varchar(255) NOT NULL,
  `satuan_tender` varchar(255) NOT NULL,
  `pengadaan_tender` varchar(255) NOT NULL,
  `pengadaan_tender2` varchar(255) NOT NULL,
  `nilai_tender` varchar(255) NOT NULL,
  `lokasi_tender` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_profil_tender`
--

INSERT INTO `data_profil_tender` (`id`, `tahun_tender`, `paket_tender`, `dana_tender`, `klpd_tender`, `satuan_tender`, `pengadaan_tender`, `pengadaan_tender2`, `nilai_tender`, `lokasi_tender`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(2, '2021', 'qwewqe', '1', 'aasasd', 'qwasdasd', '2', '', '12321', 'dfdadasd', '1', '1', '2022-06-13 05:19:52', '2022-06-13 05:20:22');

-- --------------------------------------------------------

--
-- Table structure for table `data_profil_usulan`
--

CREATE TABLE `data_profil_usulan` (
  `id` int(11) NOT NULL,
  `tpst` varchar(255) DEFAULT NULL,
  `desa` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `uraian` text,
  `direktif` varchar(255) DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_profil_usulan`
--

INSERT INTO `data_profil_usulan` (`id`, `tpst`, `desa`, `kecamatan`, `kabupaten`, `uraian`, `direktif`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(2, 'e', 'r', 't', 'twqeqw', '123124', 'teqweqwe', '1', '1', '2022-06-10 14:04:08', '2022-06-10 14:32:06'),
(3, 'eqwe', 'qweqw', 'eqwe', 'eqwe', '<p>qwew<br></p>', 'eqweqweqw', '1', '1', '2022-06-10 14:32:27', '2022-06-10 14:32:27');

-- --------------------------------------------------------

--
-- Table structure for table `data_rencana_pembagian`
--

CREATE TABLE `data_rencana_pembagian` (
  `id` int(11) NOT NULL,
  `studi` varchar(255) DEFAULT NULL,
  `ded` varchar(255) DEFAULT NULL,
  `dok` varchar(255) DEFAULT NULL,
  `bangunan` varchar(255) DEFAULT NULL,
  `lahan` varchar(255) DEFAULT NULL,
  `mesin` varchar(255) DEFAULT NULL,
  `operator` varchar(255) DEFAULT NULL,
  `offtaker` varchar(255) DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_rencana_pembagian`
--

INSERT INTO `data_rencana_pembagian` (`id`, `studi`, `ded`, `dok`, `bangunan`, `lahan`, `mesin`, `operator`, `offtaker`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(4, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2022-06-10 15:37:22', '2022-06-10 15:37:22'),
(5, '1', '3', '2', '5', '2', '4', '4', '4', '1', '1', '2022-06-10 15:40:09', '2022-06-10 15:40:09');

-- --------------------------------------------------------

--
-- Table structure for table `data_rencana_teknis`
--

CREATE TABLE `data_rencana_teknis` (
  `id` int(5) NOT NULL,
  `ketersediaan` varchar(255) NOT NULL,
  `kapasitas` varchar(255) NOT NULL,
  `teknologi` varchar(255) NOT NULL,
  `keberadaan` varchar(255) NOT NULL,
  `jenis_offtaker` varchar(255) NOT NULL,
  `kerjasama` varchar(255) NOT NULL,
  `kesanggupan` varchar(255) NOT NULL,
  `create_by` int(5) NOT NULL,
  `update_by` int(5) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_rencana_teknis`
--

INSERT INTO `data_rencana_teknis` (`id`, `ketersediaan`, `kapasitas`, `teknologi`, `keberadaan`, `jenis_offtaker`, `kerjasama`, `kesanggupan`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(2, '1 H', '4', 'RDF', '4', 'PLTU', '3', '1', 1, 1, '2022-06-12 06:05:39', '2022-06-12 06:05:39');

-- --------------------------------------------------------

--
-- Table structure for table `data_seleksi`
--

CREATE TABLE `data_seleksi` (
  `id` int(11) NOT NULL,
  `stat_seleksi` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_seleksi`
--

INSERT INTO `data_seleksi` (`id`, `stat_seleksi`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(1, '1', '1', '1', '2022-06-13 04:35:17', '2022-06-13 04:35:17');

-- --------------------------------------------------------

--
-- Table structure for table `data_status_usulan`
--

CREATE TABLE `data_status_usulan` (
  `id` int(11) NOT NULL,
  `usulan` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `data_stat_pelaksanaan_barang_jasa`
--

CREATE TABLE `data_stat_pelaksanaan_barang_jasa` (
  `id` int(11) NOT NULL,
  `stat_pelaksanaan` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_stat_pelaksanaan_barang_jasa`
--

INSERT INTO `data_stat_pelaksanaan_barang_jasa` (`id`, `stat_pelaksanaan`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(3, '1', '1', '1', '2022-06-13 13:19:49', '2022-06-13 13:19:49');

-- --------------------------------------------------------

--
-- Table structure for table `data_video`
--

CREATE TABLE `data_video` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `create_by` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `stat` varchar(255) DEFAULT NULL,
  `keterangan` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `data_video`
--

INSERT INTO `data_video` (`id`, `judul`, `url`, `code`, `create_by`, `create_date`, `update_by`, `update_date`, `stat`, `keterangan`) VALUES
(4, 'PUPR GOES TO SCHOOL - 04 - Sekolah Kebanggaan ku', 'https://www.youtube.com/watch?v=8E6ivYoUTtQ', '8E6ivYoUTtQ', '1', '2022-02-14 14:58:14', '1', '2022-02-14 14:58:14', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `data_wb`
--

CREATE TABLE `data_wb` (
  `id` int(11) NOT NULL,
  `stat_wb` varchar(255) NOT NULL,
  `create_by` varchar(255) NOT NULL,
  `update_by` varchar(255) DEFAULT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_wb`
--

INSERT INTO `data_wb` (`id`, `stat_wb`, `create_by`, `update_by`, `create_date`, `update_date`) VALUES
(1, '1', '1', '1', '2022-06-13 04:49:01', '2022-06-13 04:49:01');

-- --------------------------------------------------------

--
-- Table structure for table `kabupaten_kota`
--

CREATE TABLE `kabupaten_kota` (
  `id` int(100) NOT NULL,
  `id_provinsi` int(100) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `kabupaten_kota`
--

INSERT INTO `kabupaten_kota` (`id`, `id_provinsi`, `nama`) VALUES
(3201, 32, 'Kabupaten Bogor'),
(3202, 32, 'Kabupaten Sukabumi'),
(3203, 32, 'Kabupaten Cianjur'),
(3204, 32, 'Kabupaten Bandung'),
(3205, 32, 'Kabupaten Garut'),
(3206, 32, 'Kabupaten Tasikmalaya'),
(3207, 32, 'Kabupaten Ciamis'),
(3208, 32, 'Kabupaten Kuningan'),
(3209, 32, 'Kabupaten Cirebon'),
(3210, 32, 'Kabupaten Majalengka'),
(3211, 32, 'Kabupaten Sumedang'),
(3212, 32, 'Kabupaten Indramayu'),
(3213, 32, 'Kabupaten Subang'),
(3214, 32, 'Kabupaten Purwakarta'),
(3215, 32, 'Kabupaten Karawang'),
(3216, 32, 'Kabupaten Bekasi'),
(3217, 32, 'Kabupaten Bandung Barat'),
(3218, 32, 'Kabupaten Pangandaran'),
(3271, 32, 'Kota Bogor'),
(3272, 32, 'Kota Sukabumi'),
(3273, 32, 'Kota Bandung'),
(3274, 32, 'Kota Cirebon'),
(3275, 32, 'Kota Bekasi'),
(3276, 32, 'Kota Depok'),
(3277, 32, 'Kota Cimahi'),
(3278, 32, 'Kota Tasikmalaya'),
(3279, 32, 'Kota Banjar');

-- --------------------------------------------------------

--
-- Table structure for table `kota`
--

CREATE TABLE `kota` (
  `id` int(11) NOT NULL,
  `name` varchar(24) DEFAULT NULL,
  `desc` varchar(24) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `kota`
--

INSERT INTO `kota` (`id`, `name`, `desc`) VALUES
(1, 'Kabupaten_Bandung', 'Kabupaten Bandung'),
(2, 'Kabupaten_Bandung_Barat', 'Kabupaten Bandung Barat'),
(3, 'Kabupaten_Bekasi', 'Kabupaten Bekasi'),
(4, 'Kabupaten_Bogor', 'Kabupaten Bogor'),
(5, 'Kabupaten_Ciamis', 'Kabupaten Ciamis'),
(6, 'Kabupaten_Cianjur', 'Kabupaten Cianjur'),
(7, 'Kabupaten_Cirebon', 'Kabupaten Cirebon'),
(8, 'Kabupaten_Garut', 'Kabupaten Garut'),
(9, 'Kabupaten_Indramayu', 'Kabupaten Indramayu'),
(10, 'Kabupaten_Karawang', 'Kabupaten Karawang'),
(11, 'Kabupaten_Kuningan', 'Kabupaten Kuningan'),
(12, 'Kabupaten_Majalengka', 'Kabupaten Majalengka'),
(13, 'Kabupaten_Pangandaran', 'Kabupaten Pangandaran'),
(14, 'Kabupaten_Purwakarta', 'Kabupaten Purwakarta'),
(15, 'Kabupaten_Subang', 'Kabupaten Subang'),
(16, 'Kabupaten_Sukabumi', 'Kabupaten Sukabumi'),
(17, 'Kabupaten_Sumedang', 'Kabupaten Sumedang'),
(18, 'Kabupaten_Tasikmalaya', 'Kabupaten Tasikmalaya'),
(19, 'Kota_Bandung', 'Kota Bandung'),
(20, 'Kota_Banjar', 'Kota Banjar'),
(21, 'Kota_Bekasi', 'Kota Bekasi'),
(22, 'Kota_Bogor', 'Kota Bogor'),
(23, 'Kota_Cimahi', 'Kota Cimahi'),
(24, 'Kota_Cirebon', 'Kota Cirebon'),
(25, 'Kota_Depok', 'Kota Depok'),
(26, 'Kota_Sukabumi', 'Kota Sukabumi'),
(27, 'Kota_Tasikmalaya', 'Kota Tasikmalaya');

-- --------------------------------------------------------

--
-- Table structure for table `lampiran`
--

CREATE TABLE `lampiran` (
  `id` int(11) NOT NULL,
  `id_aduan` int(64) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `size` varchar(64) DEFAULT NULL,
  `filename` varchar(64) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `lampiran`
--

INSERT INTO `lampiran` (`id`, `id_aduan`, `url`, `size`, `filename`, `create_date`, `update_date`) VALUES
(7, 22, 'assets/dokumen/lampiran/SIPP III.png', '0', 'SIPP III.png', '2020-10-11 05:19:52', '2020-10-11 05:19:52'),
(8, 22, 'assets/dokumen/lampiran/SIPP III.png', '0', 'SIPP III.png', '2020-10-11 05:19:52', '2020-10-11 05:19:52');

-- --------------------------------------------------------

--
-- Table structure for table `muser`
--

CREATE TABLE `muser` (
  `id` int(50) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` varchar(30) DEFAULT NULL,
  `role` int(16) DEFAULT NULL,
  `islogin` int(1) DEFAULT NULL,
  `status` int(5) DEFAULT NULL COMMENT '0 = nonactive, 1= active,',
  `name` varchar(24) DEFAULT NULL,
  `no_telp` varchar(16) DEFAULT NULL,
  `email` varchar(16) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `muser`
--

INSERT INTO `muser` (`id`, `username`, `password`, `created_by`, `updated_by`, `created_at`, `updated_at`, `role`, `islogin`, `status`, `name`, `no_telp`, `email`, `img`) VALUES
(1, 'admin', '827ccb0eea8a706c4c34a16891f84e7b', NULL, NULL, NULL, NULL, 10, 1, 1, 'admin', NULL, NULL, 'assets/dokumen/gambar/user/default.jpg.'),
(37, 'usertest', '827ccb0eea8a706c4c34a16891f84e7b', '', NULL, '2020-10-09 08:23:48', NULL, 30, 1, 1, 'usertest', NULL, NULL, 'assets/dokumen/gambar/user/default.jpg.'),
(18, 'sons', '827ccb0eea8a706c4c34a16891f84e7b', 'admin', 'admin', '2020-09-24 17:26:48', '2020-09-24 18:19:36', 10, 0, 1, NULL, NULL, NULL, 'assets/dokumen/gambar/user/default.jpg.'),
(33, '12345', 'd41d8cd98f00b204e9800998ecf8427e', '', NULL, '2020-10-09 07:18:42', NULL, 30, 0, 1, 'admin', NULL, NULL, 'assets/dokumen/gambar/user/default.jpg.');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id_role` int(16) NOT NULL,
  `role_name` varchar(32) DEFAULT NULL,
  `role_desc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id_role`, `role_name`, `role_desc`) VALUES
(10, 'admin', 'Superadmin'),
(20, 'Admin', 'Admin'),
(30, 'User', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_berita`
--
ALTER TABLE `data_berita`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_file`
--
ALTER TABLE `data_file`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_foto`
--
ALTER TABLE `data_foto`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_jadwal`
--
ALTER TABLE `data_jadwal`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_kak`
--
ALTER TABLE `data_kak`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_kelengkapan`
--
ALTER TABLE `data_kelengkapan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_laporan`
--
ALTER TABLE `data_laporan`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_nama_kegiatan`
--
ALTER TABLE `data_nama_kegiatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_pagu`
--
ALTER TABLE `data_pagu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_pendetailan`
--
ALTER TABLE `data_pendetailan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_pengaduan`
--
ALTER TABLE `data_pengaduan`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_penganggaran`
--
ALTER TABLE `data_penganggaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_peta`
--
ALTER TABLE `data_peta`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_profil_tender`
--
ALTER TABLE `data_profil_tender`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_profil_usulan`
--
ALTER TABLE `data_profil_usulan`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_rencana_pembagian`
--
ALTER TABLE `data_rencana_pembagian`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_rencana_teknis`
--
ALTER TABLE `data_rencana_teknis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_seleksi`
--
ALTER TABLE `data_seleksi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_status_usulan`
--
ALTER TABLE `data_status_usulan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_stat_pelaksanaan_barang_jasa`
--
ALTER TABLE `data_stat_pelaksanaan_barang_jasa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_video`
--
ALTER TABLE `data_video`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `data_wb`
--
ALTER TABLE `data_wb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kota`
--
ALTER TABLE `kota`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `lampiran`
--
ALTER TABLE `lampiran`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `muser`
--
ALTER TABLE `muser`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_berita`
--
ALTER TABLE `data_berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `data_file`
--
ALTER TABLE `data_file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `data_foto`
--
ALTER TABLE `data_foto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `data_jadwal`
--
ALTER TABLE `data_jadwal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `data_kak`
--
ALTER TABLE `data_kak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_kelengkapan`
--
ALTER TABLE `data_kelengkapan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `data_laporan`
--
ALTER TABLE `data_laporan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `data_nama_kegiatan`
--
ALTER TABLE `data_nama_kegiatan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `data_pagu`
--
ALTER TABLE `data_pagu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_pendetailan`
--
ALTER TABLE `data_pendetailan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_pengaduan`
--
ALTER TABLE `data_pengaduan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_penganggaran`
--
ALTER TABLE `data_penganggaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_peta`
--
ALTER TABLE `data_peta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_profil_tender`
--
ALTER TABLE `data_profil_tender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_profil_usulan`
--
ALTER TABLE `data_profil_usulan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `data_rencana_pembagian`
--
ALTER TABLE `data_rencana_pembagian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `data_rencana_teknis`
--
ALTER TABLE `data_rencana_teknis`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_seleksi`
--
ALTER TABLE `data_seleksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `data_status_usulan`
--
ALTER TABLE `data_status_usulan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `data_stat_pelaksanaan_barang_jasa`
--
ALTER TABLE `data_stat_pelaksanaan_barang_jasa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `data_video`
--
ALTER TABLE `data_video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `data_wb`
--
ALTER TABLE `data_wb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kota`
--
ALTER TABLE `kota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `lampiran`
--
ALTER TABLE `lampiran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `muser`
--
ALTER TABLE `muser`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
