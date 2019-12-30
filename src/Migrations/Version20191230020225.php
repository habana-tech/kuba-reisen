<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191230020225 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE activity ADD content_itinerary_title VARCHAR(255) DEFAULT NULL, ADD content_itinerary_content LONGTEXT DEFAULT NULL, ADD content_included_title VARCHAR(255) DEFAULT NULL, ADD content_included_content LONGTEXT DEFAULT NULL, ADD content_not_included_title VARCHAR(255) DEFAULT NULL, ADD content_not_included_content LONGTEXT DEFAULT NULL, ADD content_cost_and_dates_title VARCHAR(255) DEFAULT NULL, ADD content_cost_and_dates_content LONGTEXT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE activity DROP content_itinerary_title, DROP content_itinerary_content, DROP content_included_title, DROP content_included_content, DROP content_not_included_title, DROP content_not_included_content, DROP content_cost_and_dates_title, DROP content_cost_and_dates_content');
    }
}
