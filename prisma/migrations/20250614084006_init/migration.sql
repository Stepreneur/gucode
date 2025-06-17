/*
  Warnings:

  - Added the required column `From` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lead` ADD COLUMN `From` VARCHAR(191) NOT NULL;
