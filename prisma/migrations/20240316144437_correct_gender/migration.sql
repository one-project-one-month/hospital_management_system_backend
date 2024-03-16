/*
  Warnings:

  - You are about to drop the column `gander` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `gender` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "gander",
ADD COLUMN     "gender" CHAR(1) NOT NULL;
