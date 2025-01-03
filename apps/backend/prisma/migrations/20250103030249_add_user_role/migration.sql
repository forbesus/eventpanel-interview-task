/*
  Warnings:

  - You are about to drop the column `role` on the `userdata` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `UserData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userdata` DROP COLUMN `role`,
    ADD COLUMN `roleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `UserRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserData` ADD CONSTRAINT `UserData_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `UserRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO UserRole (name) VALUES ('client');
INSERT INTO UserRole (name) VALUES ('user');
INSERT INTO UserRole (name) VALUES ('admin');