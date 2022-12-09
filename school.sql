-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 09 déc. 2022 à 19:28
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `school`
--

-- --------------------------------------------------------

--
-- Structure de la table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `mno` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `update_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `students`
--

INSERT INTO `students` (`id`, `name`, `mno`, `email`, `created_at`, `update_at`) VALUES
(1, 'Mohamed Salem Lekbar', '', 'mhs.lekbar@gmail.com', '2022-12-06', '2022-12-08'),
(3, 'Mohamed Lemine Lekbar', '', 'mine.lekbar@gmail.com', '2022-12-06', '2022-12-08'),
(4, 'sniper', '3434', 'sniper@gmail.com', '2022-12-07', '2022-12-07'),
(5, 'ade', '4894', 'sniper@gmail.com', '2022-12-07', '2022-12-07'),
(6, 'Mohamed Salem Lekbar', '32010171', 'mhs.lekbar@gmail.com', '2022-12-07', '2022-12-07'),
(7, 'Mohamed Salem Lekbar', '32010171', 'mhs.lekbar@gmail.com', '2022-12-07', '2022-12-07'),
(9, 'mfklmlkndsl', '348389', 'sniper@gmail.com', '2022-12-07', '2022-12-07'),
(10, 'onizuka', '23443', 'on@gmail.com', '2022-12-07', '2022-12-07'),
(11, 'dsnkjfdnkj', '93049', 'mnfjk@d.cc', '2022-12-07', '2022-12-07'),
(12, 'dsnkjfdnkj', '93049', 'mnfjk@d.cc', '2022-12-07', '2022-12-07'),
(13, 'mbfgkjfgnkj', '4958498', 'ademo@gmail.com', '2022-12-07', '2022-12-07'),
(14, 'mgkfnjknfk', '940598459', 'gs.sniper32@gmail.com', '2022-12-07', '2022-12-07'),
(15, 'Mohamed Salem Mohamed Lemine', '32010171', 'mhs.lekbar@gmail.com', '2022-12-07', '2022-12-07'),
(16, 'fdknkj', '343', 'sniper@gmail.com', '2022-12-07', '2022-12-07'),
(17, 'ndjnkj', '433', 'a3dsk@ll.com', '2022-12-07', '2022-12-07'),
(22, 'bene', '3489438', 'ben@sn.com', '2022-12-07', '2022-12-07'),
(23, 'machc', '483475', 'macha@cn.com', '2022-12-07', '2022-12-07'),
(25, 'machc', '483475', 'macha@cn.com', '2022-12-07', '2022-12-07'),
(26, 'Manaaa', '34838983', 'fnkjn@fmdkj.coo', '2022-12-07', '2022-12-07'),
(31, 'mgkjngjkn', '49059945', 'ndskj@kkd.co', '2022-12-08', '2022-12-08'),
(34, 'onizuka', '32010171', 'mhs.lekbar@gmail.com', '2022-12-08', '2022-12-08'),
(35, 'pnl', '45445', 'pnl@mm.com', '2022-12-08', '2022-12-08'),
(47, 'Lekbar Mohamed Salem', '32010171', 'mhs.lekbar@gmail.com', '2022-12-09', '2022-12-09');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
