CREATE TABLE `Indexes` (
  `id` int(11) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `yearmonth` int(11) DEFAULT NULL,
  `contributionSalariesCorrection` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `Indexes`
--

INSERT INTO `Indexes` (`id`, `year`, `month`, `yearmonth`, `contributionSalariesCorrection`, `createdAt`, `updatedAt`) VALUES
(1, 2022, 7, 202207, '0.9940', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(2, 2022, 6, 202206, '1.0062', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(3, 2022, 5, 202205, '1.0045', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(4, 2022, 4, 202204, '1.0104', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(5, 2022, 3, 202203, '1.0171', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(6, 2022, 2, 202202, '1.01', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(7, 2022, 1, 202201, '1.0067', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(8, 2021, 12, 202112, '1.0073', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(9, 2021, 11, 202111, '1.0084', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(10, 2021, 10, 202110, '1.0116', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(11, 2021, 9, 202109, '1.012', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(12, 2021, 8, 202108, '1.0088', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(13, 2021, 7, 202107, '1.0102', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(14, 2021, 6, 202106, '1.006', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(15, 2021, 5, 202105, '1.0096', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(16, 2021, 4, 202104, '1.0038', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(17, 2021, 3, 202103, '1.0086', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(18, 2021, 2, 202102, '1.0082', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(19, 2021, 1, 202101, '1.0027', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(20, 2020, 12, 202012, '1.0146', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(21, 2020, 11, 202011, '1.0095', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(22, 2020, 10, 202010, '1.0089', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(23, 2020, 9, 202009, '1.0087', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(24, 2020, 8, 202008, '1.0036', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(25, 2020, 7, 202007, '1.0044', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(26, 2020, 6, 202006, '1.003', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(27, 2020, 5, 202005, '0.9975', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(28, 2020, 4, 202004, '0.9977', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(29, 2020, 3, 202003, '1.0018', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(30, 2020, 2, 202002, '1.0017', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(31, 2020, 1, 202001, '1.0019', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(32, 2019, 12, 201912, '1.0122', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(33, 2019, 11, 201911, '1.0054', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(34, 2019, 10, 201910, '1.0004', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(35, 2019, 9, 201909, '0.9995', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(36, 2019, 8, 201908, '1.0012', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(37, 2019, 7, 201907, '1.001', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(38, 2019, 6, 201906, '1.0001', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(39, 2019, 5, 201905, '1.0015', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(40, 2019, 4, 201904, '1.006', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(41, 2019, 3, 201903, '1.0077', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(42, 2019, 2, 201902, '1.0054', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(43, 2019, 1, 201901, '1.0036', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(44, 2018, 12, 201812, '1.0014', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(45, 2018, 11, 201811, '0.9975', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(46, 2018, 10, 201810, '1.004', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(47, 2018, 9, 201809, '1.003', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(48, 2018, 8, 201808, '1.0', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(49, 2018, 7, 201807, '1.0025', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(50, 2018, 6, 201806, '1.0143', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(51, 2018, 5, 201805, '1.0043', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(52, 2018, 4, 201804, '1.0021', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(53, 2018, 3, 201803, '1.0007', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(54, 2018, 2, 201802, '1.0018', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(55, 2018, 1, 201801, '1.0023', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(56, 2017, 12, 201712, '1.0026', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(57, 2017, 11, 201711, '1.0018', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(58, 2017, 10, 201710, '1.0037', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(59, 2017, 9, 201709, '0.9998', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(60, 2017, 8, 201708, '0.9997', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(61, 2017, 7, 201707, '1.0017', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(62, 2017, 6, 201706, '0.997', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(63, 2017, 5, 201705, '1.0036', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(64, 2017, 4, 201704, '1.0008', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(65, 2017, 3, 201703, '1.0032', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(66, 2017, 2, 201702, '1.0024', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(67, 2017, 1, 201701, '1.0042', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(68, 2016, 12, 201612, '1.0014', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(69, 2016, 11, 201611, '1.0007', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(70, 2016, 10, 201610, '1.0017', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(71, 2016, 9, 201609, '1.0008', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(72, 2016, 8, 201608, '1.0031', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(73, 2016, 7, 201607, '1.0064', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(74, 2016, 6, 201606, '1.0047', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(75, 2016, 5, 201605, '1.0098', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(76, 2016, 4, 201604, '1.0064', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(77, 2016, 3, 201603, '1.0044', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(78, 2016, 2, 201602, '1.0095', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(79, 2016, 1, 201601, '1.0151', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(80, 2015, 12, 201512, '1.009', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(81, 2015, 11, 201511, '1.0111', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(82, 2015, 10, 201510, '1.0077', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(83, 2015, 9, 201509, '1.0051', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(84, 2015, 8, 201508, '1.0025', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(85, 2015, 7, 201507, '1.0058', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(86, 2015, 6, 201506, '1.0077', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(87, 2015, 5, 201505, '1.0099', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(88, 2015, 4, 201504, '1.0071', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(89, 2015, 3, 201503, '1.0151', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(90, 2015, 2, 201502, '1.0116', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(91, 2015, 1, 201501, '1.0148', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(92, 2014, 12, 201412, '1.0062', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(93, 2014, 11, 201411, '1.0053', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(94, 2014, 10, 201410, '1.0038', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(95, 2014, 9, 201409, '1.0049', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(96, 2014, 8, 201408, '1.0018', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(97, 2014, 7, 201407, '1.0013', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(98, 2014, 6, 201406, '1.0026', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(99, 2014, 5, 201405, '1.006', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(100, 2014, 4, 201404, '1.0078', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(101, 2014, 3, 201403, '1.0082', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(102, 2014, 2, 201402, '1.0064', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(103, 2014, 1, 201401, '1.0063', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(104, 2013, 12, 201312, '1.0072', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(105, 2013, 11, 201311, '1.0054', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(106, 2013, 10, 201310, '1.0061', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(107, 2013, 9, 201309, '1.0027', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(108, 2013, 8, 201308, '1.0016', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(109, 2013, 7, 201307, '0.9987', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(110, 2013, 6, 201306, '1.0028', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(111, 2013, 5, 201305, '1.0035', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(112, 2013, 4, 201304, '1.0059', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(113, 2013, 3, 201303, '1.006', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(114, 2013, 2, 201302, '1.0052', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(115, 2013, 1, 201301, '1.0092', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(116, 2012, 12, 201212, '1.0074', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(117, 2012, 11, 201211, '1.0054', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(118, 2012, 10, 201210, '1.0071', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(119, 2012, 9, 201209, '1.0063', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(120, 2012, 8, 201208, '1.0045', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(121, 2012, 7, 201207, '1.0043', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(122, 2012, 6, 201206, '1.0026', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(123, 2012, 5, 201205, '1.0055', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(124, 2012, 4, 201204, '1.0064', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(125, 2012, 3, 201203, '1.0018', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(126, 2012, 2, 201202, '1.0039', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(127, 2012, 1, 201201, '1.0051', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(128, 2011, 12, 201112, '1.0051', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(129, 2011, 11, 201111, '1.0057', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(130, 2011, 10, 201110, '1.0032', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(131, 2011, 9, 201109, '1.0045', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(132, 2011, 8, 201108, '1.0042', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(133, 2011, 7, 201107, '1.0', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(134, 2011, 6, 201106, '1.0022', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(135, 2011, 5, 201105, '1.0057', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(136, 2011, 4, 201104, '1.0072', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(137, 2011, 3, 201103, '1.0066', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(138, 2011, 2, 201102, '1.0054', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(139, 2011, 1, 201101, '1.0094', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(140, 2010, 12, 201012, '1.006', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(141, 2010, 11, 201011, '1.0103', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(142, 2010, 10, 201010, '1.0092', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(143, 2010, 9, 201009, '1.0054', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(144, 2010, 8, 201008, '0.9993', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(145, 2010, 7, 201007, '0.9993', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(146, 2010, 6, 201006, '0.9989', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(147, 2010, 5, 201005, '1.0043', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(148, 2010, 4, 201004, '1.0073', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(149, 2010, 3, 201003, '1.0071', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(150, 2010, 2, 201002, '1.007', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(151, 2010, 1, 201001, '1.0088', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(152, 2009, 12, 200912, '1.0024', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(153, 2009, 11, 200911, '1.0037', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(154, 2009, 10, 200910, '1.0024', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(155, 2009, 9, 200909, '1.0016', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(156, 2009, 8, 200908, '1.0008', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(157, 2009, 7, 200907, '1.0023', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(158, 2009, 6, 200906, '1.0042', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(159, 2009, 5, 200905, '1.006', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(160, 2009, 4, 200904, '1.0055', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(161, 2009, 3, 200903, '1.002', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(162, 2009, 2, 200902, '1.0031', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(163, 2009, 1, 200901, '1.0064', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(164, 2008, 12, 200812, '1.0029', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(165, 2008, 11, 200811, '1.0038', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(166, 2008, 10, 200810, '1.005', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(167, 2008, 9, 200809, '1.0015', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(168, 2008, 8, 200808, '1.0021', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(169, 2008, 7, 200807, '1.0058', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(170, 2008, 6, 200806, '1.0091', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(171, 2008, 5, 200805, '1.0096', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(172, 2008, 4, 200804, '1.0064', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(173, 2008, 3, 200803, '1.0051', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(174, 2008, 2, 200802, '1.0048', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(175, 2008, 1, 200801, '1.0069', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(176, 2007, 12, 200712, '1.0097', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(177, 2007, 11, 200711, '1.0043', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(178, 2007, 10, 200710, '1.003', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(179, 2007, 9, 200709, '1.0025', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(180, 2007, 8, 200708, '1.0059', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(181, 2007, 7, 200707, '1.0032', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(182, 2007, 6, 200706, '1.0031', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(183, 2007, 5, 200705, '1.0026', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(184, 2007, 4, 200704, '1.0026', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(185, 2007, 3, 200703, '1.0044', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(186, 2007, 2, 200702, '1.0042', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(187, 2007, 1, 200701, '1.0049', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(188, 2006, 12, 200612, '1.0062', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(189, 2006, 11, 200611, '1.0042', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(190, 2006, 10, 200610, '1.0043', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(191, 2006, 9, 200609, '1.0016', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(192, 2006, 8, 200608, '0.9998', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(193, 2006, 7, 200607, '1.0011', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(194, 2006, 6, 200606, '0.9993', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(195, 2006, 5, 200605, '1.0013', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(196, 2006, 4, 200604, '1.0012', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(197, 2006, 3, 200603, '1.0027', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(198, 2006, 2, 200602, '1.0023', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(199, 2006, 1, 200601, '1.0038', '2022-10-24 23:11:26', '2022-10-24 23:11:26'),
(200, 2022, 8, 202208, '0.9969', '2022-12-21 12:23:05', '2022-12-21 12:23:05'),
(201, 2022, 9, 202209, '0.9968', '2022-12-21 12:23:05', '2022-12-21 12:23:05'),
(202, 2022, 10, 202210, '1.0047', '2022-12-21 12:24:57', '2022-12-21 12:24:57'),
(203, 2022, 11, 202211, '1.0038', '2022-12-21 12:25:22', '2022-12-21 12:25:22');