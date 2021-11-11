CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(25) NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"token" TEXT NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "items" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" TEXT,
	"price" integer NOT NULL,
	"img" TEXT NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "carts" (
	"id" serial NOT NULL UNIQUE,
	"user_id" integer NOT NULL,
	"open_date" TIMESTAMP NOT NULL DEFAULT 'now()',
	"close_date" TIMESTAMP,
	"payment_method" varchar(25),
	"balance" integer,
	CONSTRAINT "carts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "orders" (
	"id" serial NOT NULL,
	"cart_id" integer NOT NULL,
	"item_id" integer NOT NULL,
	"item_qty" integer NOT NULL,
	"item_price" integer NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");


ALTER TABLE "carts" ADD CONSTRAINT "carts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("cart_id") REFERENCES "carts"("id");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("item_id") REFERENCES "items"("id");