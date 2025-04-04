import { MigrationInterface, QueryRunner } from "typeorm";

export class Check1743502245671 implements MigrationInterface {
    name = 'Check1743502245671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`school\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`school\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`language\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`language\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`password\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`email\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`language\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`language\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students_details\` DROP COLUMN \`school\``);
        await queryRunner.query(`ALTER TABLE \`students_details\` ADD \`school\` int NOT NULL`);
    }

}
