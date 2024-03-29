drop table if exists product_info;
CREATE TABLE product_info(
	product_id SERIAL NOT NULL PRIMARY KEY,
	barcode VARCHAR(255),
	name_prod VARCHAR(255),
	description VARCHAR(255),
	prod_size VARCHAR(255),
	price float
);

drop table if exists prod_inventory;
CREATE TABLE prod_inventory(
	prod_inv_id SERIAL NOT NULL PRIMARY KEY,
	product_id BIGINT REFERENCES product_info(product_id),
	qty_add bigint,
	date_add DATE
);

drop table if exists user_info;
create type roles as ENUM('CASHIER','ADMIN','CUSTOMER');
CREATE TABLE user_info(
	user_id SERIAL NOT NULL PRIMARY KEY,
	full_name VARCHAR(255),
	username VARCHAR(255),
	user_password VARCHAR(255),
	user_role roles,
	user_points BIGINT
);

drop table if exists transaction_info;
CREATE TABLE transaction_info(
	transaction_id SERIAL NOT NULL PRIMARY KEY,
	transaction_code VARCHAR(255),
	transaction_status varchar(255),
	date_trans DATE,
	amt_total float,
	amt_paid float,
	payment_type VARCHAR(255),
	cashier_id BIGINT REFERENCES user_info(user_id),
	customer_id BIGINT REFERENCES user_info(user_id)
);

drop table if exists transaction_line;
CREATE TABLE transaction_line(
	trans_line_id SERIAL NOT NULL PRIMARY KEY,
	transaction_id BIGINT REFERENCES transaction_info(transaction_id),
	product_id BIGINT REFERENCES product_info(product_id),
	qty_prod BIGINT,
	amt_total_lines float
)