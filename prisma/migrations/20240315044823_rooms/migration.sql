/*
  Warnings:

  - You are about to drop the column `title` on the `Room` table. All the data in the column will be lost.
  - Added the required column `name` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(255) NOT NULL;
