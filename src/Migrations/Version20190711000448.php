<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190711000448 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE destination_activity');
        $this->addSql('DROP TABLE destination_filter_tag');
        $this->addSql('DROP TABLE page_block');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE destination_activity (destination_id INT NOT NULL, activity_id INT NOT NULL, INDEX IDX_F2C4C96B81C06096 (activity_id), INDEX IDX_F2C4C96B816C6140 (destination_id), PRIMARY KEY(destination_id, activity_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE destination_filter_tag (destination_id INT NOT NULL, filter_tag_id INT NOT NULL, INDEX IDX_B964ADE3816C6140 (destination_id), INDEX IDX_B964ADE397F93D6F (filter_tag_id), PRIMARY KEY(destination_id, filter_tag_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE page_block (id INT AUTO_INCREMENT NOT NULL, dynamic_page_id INT NOT NULL, name VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, content LONGTEXT DEFAULT NULL COLLATE utf8mb4_unicode_ci, INDEX IDX_E59A68F4D23A8DFF (dynamic_page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE destination_activity ADD CONSTRAINT FK_F2C4C96B816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_activity ADD CONSTRAINT FK_F2C4C96B81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_filter_tag ADD CONSTRAINT FK_B964ADE3816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_filter_tag ADD CONSTRAINT FK_B964ADE397F93D6F FOREIGN KEY (filter_tag_id) REFERENCES filter_tag (id) ON DELETE CASCADE');
    }
}
