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

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "Id" SERIAL NOT NULL,
    "PatientID" INTEGER NOT NULL,
    "StartDate" DATE NOT NULL,
    "EndDate" DATE NOT NULL,
    "Diagnosis" TEXT NOT NULL,
    "Note" TEXT NOT NULL,
    "Treatment" TEXT NOT NULL,

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "Id" SERIAL NOT NULL,
    "DoctorName" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL,
    "MobileNumber" VARCHAR(255) NOT NULL,
    "Position" VARCHAR(255) NOT NULL,
    "StartDuty" VARCHAR(25) NOT NULL,
    "EndDuty" VARCHAR(25) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "DoctorSpecialList" (
    "Id" SERIAL NOT NULL,
    "Name" VARCHAR(225) NOT NULL,
    "DoctorId" INTEGER NOT NULL,

    CONSTRAINT "DoctorSpecialList_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "Id" SERIAL NOT NULL,
    "PatientId" INTEGER NOT NULL,
    "DoctorId" INTEGER NOT NULL,
    "AppointmentDate" DATE NOT NULL,
    "RoomId" INTEGER NOT NULL,
    "TokenId" UUID NOT NULL,
    "Status" VARCHAR(255) NOT NULL,
    "IsCancel" BOOLEAN NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "_DiseaseToMedicalRecord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalRecord_PatientID_key" ON "MedicalRecord"("PatientID");

-- CreateIndex
CREATE UNIQUE INDEX "DoctorSpecialList_DoctorId_key" ON "DoctorSpecialList"("DoctorId");

-- CreateIndex
CREATE UNIQUE INDEX "_DiseaseToMedicalRecord_AB_unique" ON "_DiseaseToMedicalRecord"("A", "B");

-- CreateIndex
CREATE INDEX "_DiseaseToMedicalRecord_B_index" ON "_DiseaseToMedicalRecord"("B");

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_PatientID_fkey" FOREIGN KEY ("PatientID") REFERENCES "Patient"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_PatientId_fkey" FOREIGN KEY ("PatientId") REFERENCES "Patient"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES "Doctor"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Room"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToMedicalRecord" ADD CONSTRAINT "_DiseaseToMedicalRecord_A_fkey" FOREIGN KEY ("A") REFERENCES "Disease"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToMedicalRecord" ADD CONSTRAINT "_DiseaseToMedicalRecord_B_fkey" FOREIGN KEY ("B") REFERENCES "MedicalRecord"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
