-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2023 at 05:53 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `imageurl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `type`, `imageurl`) VALUES
(1, 'Domino\'s Pizza (โดมิโน่ส์ พิซซ่า) - บางลำภู', 'พิซซ่า, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-C23KWBMXVA61C2/hero/8ef258d70c7e4e8eb4b140ce133b0093_1688317398064378299.webp'),
(2, 'The Pizza Company (เดอะพิซซ่า คอมปะนี) - ถนนราชบพิธ', 'Coupon, พิซซ่า, ไก่ทอด, ฟาสต์ฟู้ด', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-CYVZR7JCBFLWCE/hero/eee81ba608844c1fa8012863b7593847_1688317426443457105.webp'),
(3, 'พิซซ่าอาหม่วย - จรัญสนิทวงศ์', 'Coupon, พิซซ่า', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/AWhuy-goZXYdMpch2TWa/hero/upload-photo-Hero_Photo_ed839a5643af4e92af717e3666d0de05_1551086712649810183.webp'),
(4, 'Pizza Hut (พิซซ่าฮัท) - ถนนบำรุงเมือง (Bamrung Mueang Rd.)', 'Coupon, พิซซ่า', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-CYTDJJE1VY2BEJ/hero/f34f912997224681a424bddf254ec3fa_1687332447384801618.webp'),
(5, 'Casa Picasso Pizzeria (คาซ่า ปิกัสโซ พิซซ่ายักษ์) - ถนนพระอาทิตย์', 'Coupon, พิซซ่า', 'https://d1sag4ddilekf6.cloudfront.net/compressed_webp/merchants/3-CZEGNN5YNXW2AX/hero/906c66ca4b8e454c9e7579cf33f95ede_1592289967860278304.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
