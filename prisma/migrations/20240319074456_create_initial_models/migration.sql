-- CreateTable
CREATE TABLE "Patient" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(50) NOT NULL,
    "Gender" CHAR(1) NOT NULL,
    "PhoneNumber" VARCHAR(15) NOT NULL,
    "Email" VARCHAR(50) NOT NULL,
    "BloodType" CHAR(2) NOT NULL,
    "BirthDate" DATE,
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

-- CreateTable
CREATE TABLE "Doctor" (
    "Id" INTEGER NOT NULL,
    "DoctorName" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "MobileNumber" VARCHAR(255) NOT NULL,
    "Position" VARCHAR(255) NOT NULL,
    "StartDuty" VARCHAR(25) NOT NULL,
    "EndDuty" VARCHAR(25) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "Id" INTEGER NOT NULL,
    "PatientId" INTEGER NOT NULL,
    "DoctorId" INTEGER NOT NULL,
    "AppointmentDate" DATE NOT NULL,
    "RoomId" INTEGER NOT NULL,
    "TokenId" UUID NOT NULL,
    "Status" VARCHAR(255) NOT NULL,
    "IsCancel" BOOLEAN NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_PatientId_fkey" FOREIGN KEY ("PatientId") REFERENCES "Patient"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES "Doctor"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Room"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
