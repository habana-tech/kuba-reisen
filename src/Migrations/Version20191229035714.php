<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191229035714 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095AD9C220F9');
        $this->addSql('DROP INDEX IDX_AC74095AD9C220F9 ON activity');
        $this->addSql('ALTER TABLE activity ADD updated_at DATETIME DEFAULT NULL, ADD alternative_text VARCHAR(255) DEFAULT NULL, ADD image_name VARCHAR(255) DEFAULT NULL, ADD image_original_name VARCHAR(255) DEFAULT NULL, ADD image_mime_type VARCHAR(255) DEFAULT NULL, ADD image_dimensions LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:simple_array)\', CHANGE translation_from_id image_size INT DEFAULT NULL');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095A44488A52 FOREIGN KEY (feature_image_id) REFERENCES image (id)');
        $this->addSql('CREATE INDEX IDX_AC74095A44488A52 ON activity (feature_image_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095A44488A52');
        $this->addSql('DROP INDEX IDX_AC74095A44488A52 ON activity');
        $this->addSql('ALTER TABLE activity DROP updated_at, DROP alternative_text, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_dimensions, CHANGE image_size translation_from_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095AD9C220F9 FOREIGN KEY (translation_from_id) REFERENCES activity (id)');
        $this->addSql('CREATE INDEX IDX_AC74095AD9C220F9 ON activity (translation_from_id)');
    }
}
