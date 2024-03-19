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
CREATE TABLE "_DiseaseToMedicalRecord" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalRecord_PatientID_key" ON "MedicalRecord"("PatientID");

-- CreateIndex
CREATE UNIQUE INDEX "_DiseaseToMedicalRecord_AB_unique" ON "_DiseaseToMedicalRecord"("A", "B");

-- CreateIndex
CREATE INDEX "_DiseaseToMedicalRecord_B_index" ON "_DiseaseToMedicalRecord"("B");

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_PatientID_fkey" FOREIGN KEY ("PatientID") REFERENCES "Patient"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToMedicalRecord" ADD CONSTRAINT "_DiseaseToMedicalRecord_A_fkey" FOREIGN KEY ("A") REFERENCES "Disease"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiseaseToMedicalRecord" ADD CONSTRAINT "_DiseaseToMedicalRecord_B_fkey" FOREIGN KEY ("B") REFERENCES "MedicalRecord"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
