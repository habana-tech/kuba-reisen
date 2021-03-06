<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200108110753 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE contact_planing_interest');
        $this->addSql('DROP TABLE destination_activity');
        $this->addSql('DROP TABLE page_block');
        $this->addSql('DROP TABLE post');
        $this->addSql('ALTER TABLE activity_story DROP FOREIGN KEY FK_F554328B3DA5256D');
        $this->addSql('DROP INDEX IDX_F554328B3DA5256D ON activity_story');
        $this->addSql('ALTER TABLE activity_story DROP image_id, DROP content');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE contact_planing_interest (contact_planing_id INT NOT NULL, interest_id INT NOT NULL, INDEX IDX_30BE196999ED1572 (contact_planing_id), INDEX IDX_30BE19695A95FF89 (interest_id), PRIMARY KEY(contact_planing_id, interest_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE destination_activity (destination_id INT NOT NULL, activity_id INT NOT NULL, INDEX IDX_F2C4C96B816C6140 (destination_id), INDEX IDX_F2C4C96B81C06096 (activity_id), PRIMARY KEY(destination_id, activity_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE page_block (id INT AUTO_INCREMENT NOT NULL, dynamic_page_id INT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_E59A68F4D23A8DFF (dynamic_page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE post (id INT AUTO_INCREMENT NOT NULL, modified_by_id INT DEFAULT NULL, dynamic_page_id INT DEFAULT NULL, translation_from_id INT DEFAULT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, slug VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, published TINYINT(1) NOT NULL, updated_at DATETIME DEFAULT NULL, alternative_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, image_size INT DEFAULT NULL, image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', INDEX IDX_5A8A6C8DD9C220F9 (translation_from_id), UNIQUE INDEX UNIQ_5A8A6C8DD23A8DFF (dynamic_page_id), INDEX IDX_5A8A6C8D99049ECE (modified_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE contact_planing_interest ADD CONSTRAINT FK_30BE19695A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contact_planing_interest ADD CONSTRAINT FK_30BE196999ED1572 FOREIGN KEY (contact_planing_id) REFERENCES contact_planing (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_activity ADD CONSTRAINT FK_F2C4C96B816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_activity ADD CONSTRAINT FK_F2C4C96B81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8D99049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8DD23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id)');
        $this->addSql('ALTER TABLE activity_story ADD image_id INT DEFAULT NULL, ADD content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE activity_story ADD CONSTRAINT FK_F554328B3DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('CREATE INDEX IDX_F554328B3DA5256D ON activity_story (image_id)');
    }
}
