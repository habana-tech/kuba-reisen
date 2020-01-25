<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200124221310 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE destination_image');
        $this->addSql('ALTER TABLE activity ADD itinerary_title VARCHAR(255) DEFAULT NULL, ADD itinerary_content LONGTEXT DEFAULT NULL, ADD included_section_title VARCHAR(255) DEFAULT NULL, ADD included_title VARCHAR(255) DEFAULT NULL, ADD included_content LONGTEXT DEFAULT NULL, ADD not_included_title VARCHAR(255) DEFAULT NULL, ADD not_included_content LONGTEXT DEFAULT NULL, ADD cost_and_dates_title VARCHAR(255) DEFAULT NULL, ADD cost_and_dates_content LONGTEXT DEFAULT NULL, DROP content_itinerary_content, DROP content_included_content, DROP content_not_included_content, DROP content_cost_and_dates_content');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE destination_image (destination_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_9440A5EC816C6140 (destination_id), INDEX IDX_9440A5EC3DA5256D (image_id), PRIMARY KEY(destination_id, image_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE activity ADD content_itinerary_content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD content_included_content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD content_not_included_content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD content_cost_and_dates_content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, DROP itinerary_title, DROP itinerary_content, DROP included_section_title, DROP included_title, DROP included_content, DROP not_included_title, DROP not_included_content, DROP cost_and_dates_title, DROP cost_and_dates_content');
    }
}
