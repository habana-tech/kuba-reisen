<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200110025908 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE destination_image');
        $this->addSql('DROP TABLE dynamic_page_revision');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE destination_image (destination_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_9440A5EC816C6140 (destination_id), INDEX IDX_9440A5EC3DA5256D (image_id), PRIMARY KEY(destination_id, image_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE dynamic_page_revision (id INT AUTO_INCREMENT NOT NULL, dynamic_page_id INT DEFAULT NULL, modified_by_id INT DEFAULT NULL, page_content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', modification_date DATETIME NOT NULL, INDEX IDX_B5F79E1499049ECE (modified_by_id), INDEX IDX_B5F79E14D23A8DFF (dynamic_page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE dynamic_page_revision ADD CONSTRAINT FK_B5F79E1499049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE dynamic_page_revision ADD CONSTRAINT FK_B5F79E14D23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id)');
    }
}
