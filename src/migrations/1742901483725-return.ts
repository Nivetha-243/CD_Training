import { MigrationInterface, QueryRunner } from "typeorm";

export class Return1742901483725 implements MigrationInterface {
    name = 'Return1742901483725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`checking\` ADD \`roles\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`checking\` DROP COLUMN \`roles\``);
    }

}
