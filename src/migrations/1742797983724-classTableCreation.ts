import { MigrationInterface, QueryRunner } from "typeorm";

export class ClassTableCreation1742797983724 implements MigrationInterface {
    name = 'ClassTableCreation1742797983724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`classification\` (\`id\` int NOT NULL AUTO_INCREMENT, \`under\` int NOT NULL, \`normal\` int NOT NULL, \`over\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`classification\``);
    }

}
