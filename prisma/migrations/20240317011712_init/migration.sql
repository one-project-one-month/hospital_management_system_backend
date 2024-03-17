-- CreateTable
CREATE TABLE "Patient" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(50) NOT NULL,
    "Gender" CHAR(1) NOT NULL,
    "PhoneNumber" VARCHAR(15) NOT NULL,
    "Email" VARCHAR(50) NOT NULL,
    "BloodType" CHAR(2) NOT NULL,
    "BirthDate" DATE NOT NULL,
    "Address" VARCHAR(255) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Room" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("Id")
);
