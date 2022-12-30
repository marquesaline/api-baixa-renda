CREATE TABLE `IncomeLimit` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `income_limit` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `IncomeLimit`
-- fonte dos limites: https://ingracio.adv.br/auxilio-reclusao/

INSERT INTO `IncomeLimit` (`id`, `year`, `income_limit`) VALUES
(5, 2022, '1655.98'),
(6, 2021, '1503.25'),
(9, 2020, '1425.56'),
(10, 2019, '1364.43'),
(11, 2018, '1319.18'),
(12, 2017, '1292.43'),
(13, 2016, '1212.64'),
(14, 2015, '1089.72'),
(15, 2014, '1025.81'),
(16, 2013, '971.78'),
(17, 2012, '915.05');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `IncomeLimit`
--
ALTER TABLE `IncomeLimit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `year` (`year`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `IncomeLimit`
--
ALTER TABLE `IncomeLimit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;