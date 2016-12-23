## NodeJS Sequelize MySQL

### Run

```
Create database...

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sername` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;
```

1. `npm install`

2. `node server`

#### Refactory by SLAM24
[Original post](http://www.pabloanaya.com/blog/building-api-node-js-express-4-mysql/)