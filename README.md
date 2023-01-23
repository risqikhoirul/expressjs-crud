# expressjs

# Web portofolio CRUD exppress.js no admin login.

## Create Database Mysql

`CREATE DATABASE name;`
<br>
[CREATE](http://localhost/phpmyadmin/url.php?url=https://dev.mysql.com/doc/refman/8.0/en/create-table.html) [TABLE](http://localhost/phpmyadmin/url.php?url=https://dev.mysql.com/doc/refman/8.0/en/create-table.html) `name`.`portofolio` (`no` INT(11) [NOT](http://localhost/phpmyadmin/url.php?url=https://dev.mysql.com/doc/refman/8.0/en/logical-operators.html%23operator_not) NULL AUTO_INCREMENT , `nama` VARCHAR(250) [NOT](http://localhost/phpmyadmin/url.php?url=https://dev.mysql.com/doc/refman/8.0/en/logical-operators.html%23operator_not) NULL , `link` VARCHAR(250) [NOT](http://localhost/phpmyadmin/url.php?url=https://dev.mysql.com/doc/refman/8.0/en/logical-operators.html%23operator_not) NULL , PRIMARY KEY (`no`)) ENGINE = InnoDB;

## how to run servers?
```
git clone https://github.com/risqikhoirul/expressjs-crud.git
cd expressjs-crud
```
install node_modules dependencies
```
npm install
```
you can run server on localhost with this command.
run?
```
npm start
```
