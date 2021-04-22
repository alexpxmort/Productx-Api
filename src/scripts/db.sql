###SCRIPT PARA CRIAR DATABASE E TABELA DE PRODUTOS

CREATE DATABASE produto_x;
use produto_x;

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `descricao` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
   `quantidade` int(11) COLLATE utf8_unicode_ci NOT NULL,
    `preco` decimal(10,2) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
