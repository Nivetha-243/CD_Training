import { MigrationInterface, QueryRunner } from "typeorm";

export class Infoo1743501819129 implements MigrationInterface {
    name = 'Infoo1743501819129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`students_details\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`school\` int NOT NULL, \`language\` int NOT NULL, \`email\` int NOT NULL, \`password\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`students_details\``);
    }

}
