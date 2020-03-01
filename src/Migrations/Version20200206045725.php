<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200206045725 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE client_opinion (id INT AUTO_INCREMENT NOT NULL, destination_id INT DEFAULT NULL, activity_id INT DEFAULT NULL, client_name VARCHAR(255) DEFAULT NULL, opinion LONGTEXT NOT NULL, pin_on_home TINYINT(1) DEFAULT NULL, active TINYINT(1) DEFAULT NULL, UNIQUE INDEX UNIQ_F93FF45A816C6140 (destination_id), UNIQUE INDEX UNIQ_F93FF45A81C06096 (activity_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entity_fragments (entity_id INT NOT NULL, fragment_id INT NOT NULL, INDEX IDX_C407796181257D5D (entity_id), UNIQUE INDEX UNIQ_C4077961596BD57E (fragment_id), PRIMARY KEY(entity_id, fragment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE client_opinion ADD CONSTRAINT FK_F93FF45A816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id)');
        $this->addSql('ALTER TABLE client_opinion ADD CONSTRAINT FK_F93FF45A81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE entity_fragments ADD CONSTRAINT FK_C407796181257D5D FOREIGN KEY (entity_id) REFERENCES region (id)');
        $this->addSql('ALTER TABLE entity_fragments ADD CONSTRAINT FK_C4077961596BD57E FOREIGN KEY (fragment_id) REFERENCES description_fragment (id)');
        $this->addSql('DROP TABLE interest_filter_tag');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE interest_filter_tag (interest_id INT NOT NULL, filter_tag_id INT NOT NULL, INDEX IDX_AFC2FA075A95FF89 (interest_id), INDEX IDX_AFC2FA0797F93D6F (filter_tag_id), PRIMARY KEY(interest_id, filter_tag_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE interest_filter_tag ADD CONSTRAINT FK_AFC2FA075A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE interest_filter_tag ADD CONSTRAINT FK_AFC2FA0797F93D6F FOREIGN KEY (filter_tag_id) REFERENCES filter_tag (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE client_opinion');
        $this->addSql('DROP TABLE entity_fragments');
    }
}
