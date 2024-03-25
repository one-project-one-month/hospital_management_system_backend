/*
  Warnings:

  - You are about to drop the column `Position` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `DoctorId` on the `DoctorSpecialList` table. All the data in the column will be lost.
  - Added the required column `SpecialistId` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DoctorSpecialList_DoctorId_key";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "Position",
ADD COLUMN     "SpecialistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DoctorSpecialList" DROP COLUMN "DoctorId";

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_SpecialistId_fkey" FOREIGN KEY ("SpecialistId") REFERENCES "DoctorSpecialList"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
