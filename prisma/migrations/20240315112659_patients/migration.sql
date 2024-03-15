-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "gender" CHAR(1) NOT NULL,
    "phone_number" VARCHAR(15) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "blood_type" CHAR(2) NOT NULL,
    "birth_date" DATE NOT NULL,
    "address" VARCHAR(255) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
