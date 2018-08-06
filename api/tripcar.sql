-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2018 at 03:27 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tripcar`
--

-- --------------------------------------------------------

--
-- Table structure for table `chair`
--

CREATE TABLE `chair` (
  `idChair` int(11) NOT NULL,
  `noChair` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idTripDriver` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUser` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registerDate` date NOT NULL,
  `price` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chair`
--

INSERT INTO `chair` (`idChair`, `noChair`, `idTripDriver`, `idUser`, `status`, `registerDate`, `price`) VALUES
(2, '30', '2', '5', '0', '0000-00-00', '200'),
(3, '30', '2', '5', '0', '0000-00-00', '200'),
(4, '30', '2', '5', '1', '0000-00-00', '200'),
(5, '30', '2', '5', '0', '0000-00-00', '200');

-- --------------------------------------------------------

--
-- Table structure for table `portal`
--

CREATE TABLE `portal` (
  `idPortal` int(11) NOT NULL,
  `typeRequest` int(11) NOT NULL,
  `status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUser` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idChair` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accountBank` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portal`
--

INSERT INTO `portal` (`idPortal`, `typeRequest`, `status`, `idUser`, `idChair`, `accountBank`, `code`) VALUES
(1, 1, 'ghế trông', '01', '01', 'le hong phong', '123456789'),
(2, 2, '0', '2', '3', 'phong', '012345678'),
(3, 2, '0', '2', '3', 'phong', '012345678'),
(4, 2, '1', '3', '5', 'phong1', '012345678');

-- --------------------------------------------------------

--
-- Table structure for table `provine`
--

CREATE TABLE `provine` (
  `idPro` int(11) NOT NULL,
  `name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provine`
--

INSERT INTO `provine` (`idPro`, `name`, `summary`) VALUES
(1, 'le hong phong', 'abc');

-- --------------------------------------------------------

--
-- Table structure for table `tripdriver`
--

CREATE TABLE `tripdriver` (
  `idTripDriver` int(11) NOT NULL,
  `idUser` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dest` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numChair` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idMid` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tripdriver`
--

INSERT INTO `tripdriver` (`idTripDriver`, `idUser`, `status`, `source`, `dest`, `price`, `numChair`, `idMid`, `startDate`, `endDate`) VALUES
(1, '1', '1', '1', '4', '300', '16', '2,3', '2018-06-24', '2018-06-10'),
(2, '2', '0', '4', '2', '250', '6', '3', '2018-06-24', '2018-06-10'),
(3, '1', '1', '1', '4', '300', '16', '2,3', '2018-06-24', '2018-06-10'),
(4, '1', '1', '1', '4', '300', '1', '2,3', '2018-06-24', '2018-06-10'),
(5, '1', '1', '1', '4', '300', '2', '2,3', '2018-06-24', '2018-06-10'),
(6, '1', '1', '1', '4', '300', '16', '2,3', '2018-06-24', '2018-06-10'),
(7, '1', '1', '1', '4', '300', '3', '2,3', '2018-06-24', '2018-06-10'),
(8, '1', '1', '1', '4', '300', '16', '2,3', '2018-06-24', '2018-06-10'),
(10, '1', '1', '1', '4', '300', '4', '2,3', '2018-06-24', '2018-06-10'),
(11, '1', '1', '1', '4', '300', '16', '2,3', '2018-06-24', '2018-06-10'),
(12, '1', '1', '1', '4', '300', '5', '2,3', '2018-06-24', '2018-06-10'),
(13, '2', '0', '4', '2', '250', '10', '3', '2018-06-24', '2018-06-10');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `username` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmnd` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`idUser`, `username`, `password`, `name`, `phone`, `email`, `cmnd`, `address`, `image`, `role`) VALUES
(1, 'admin', 'admin', 'le hong phong 1', '01235554', 'phongvippro1953@gmail.com', '12334545', 'da nang', 'hinh 2', '0'),
(7, 'phong', '2', 'LÃª Há»“ng PhÆ°Æ¡ng121', '01235554', 'phongvippro1953@gmail.com', '12334545', 'da nang', 'hinh 2', '2'),
(9, 'admin', '12345', 'le hong phong', '01235554', 'phongvippro1953@gmail.com', '12334545', 'da nang', 'hinh 2', '2'),
(12, 'phong1', 'aphong', 'phong1', '1628811678', 'phong@gmail.com', '', '', '', '1'),
(13, 'hien', 'hien123', 'hien', '123456', 'hien@gmail.com', '', '', '', '1'),
(14, 'phuong1', 'phuong1', 'phuong1', '12345', 'phuong@gmail.com', '', '', '', '1'),
(15, 'phong123', '12345678', 'phong123', '01628811678', 'phongvippro1995@gmail.com', '123456789', 'Ä‘Ã  náºµng', '', '2'),
(16, 'pho', '', 'pho', '', '', '', '', '', '1'),
(17, 'phong1234', '1234567', 'phong1234', '12345678', 'phong@gmail.com', '', '', '', '1'),
(19, 'phuong', '123', 'Pink Ways', '1679558185', 'phuong@gmail.com', '', '', '', '1'),
(20, 'phonglh5', 'phuonganh', 'phonglh5', '123', 'phuong@gmail', '', '', '', '1'),
(21, 'phuong12', 'anhyeuem', 'phuong12', '123', 'phuong@gmail', '', '', '', '1'),
(22, 'phuong2', 'anhyeuem', 'phuong2', '123', 'phuong@gm', '', '', '', '1'),
(23, 'phuong3', 'anhyeuem', 'phuong', '123', 'ds@gmail', '123', 'phuong', '', '2'),
(24, 'phuong', '123', 'Pink Ways', '1679558185', 'phuong@gmail.com', '', '', '', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chair`
--
ALTER TABLE `chair`
  ADD PRIMARY KEY (`idChair`);

--
-- Indexes for table `portal`
--
ALTER TABLE `portal`
  ADD PRIMARY KEY (`idPortal`);

--
-- Indexes for table `provine`
--
ALTER TABLE `provine`
  ADD PRIMARY KEY (`idPro`);

--
-- Indexes for table `tripdriver`
--
ALTER TABLE `tripdriver`
  ADD PRIMARY KEY (`idTripDriver`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chair`
--
ALTER TABLE `chair`
  MODIFY `idChair` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `portal`
--
ALTER TABLE `portal`
  MODIFY `idPortal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `provine`
--
ALTER TABLE `provine`
  MODIFY `idPro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tripdriver`
--
ALTER TABLE `tripdriver`
  MODIFY `idTripDriver` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
