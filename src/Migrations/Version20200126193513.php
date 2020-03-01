<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200126193513 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE interest_filter_tag (interest_id INT NOT NULL, filter_tag_id INT NOT NULL, INDEX IDX_AFC2FA075A95FF89 (interest_id), INDEX IDX_AFC2FA0797F93D6F (filter_tag_id), PRIMARY KEY(interest_id, filter_tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE region (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, link VARCHAR(255) DEFAULT NULL, link_text VARCHAR(255) DEFAULT NULL, type SMALLINT NOT NULL, template VARCHAR(255) DEFAULT NULL, active TINYINT(1) DEFAULT NULL, machine_name VARCHAR(255) NOT NULL, INDEX IDX_F62F1763DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE region_image (region_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_7D59074798260155 (region_id), INDEX IDX_7D5907473DA5256D (image_id), PRIMARY KEY(region_id, image_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE interest_filter_tag ADD CONSTRAINT FK_AFC2FA075A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE interest_filter_tag ADD CONSTRAINT FK_AFC2FA0797F93D6F FOREIGN KEY (filter_tag_id) REFERENCES filter_tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE region ADD CONSTRAINT FK_F62F1763DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('ALTER TABLE region_image ADD CONSTRAINT FK_7D59074798260155 FOREIGN KEY (region_id) REFERENCES region (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE region_image ADD CONSTRAINT FK_7D5907473DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE destination_image');
        $this->addSql('DROP TABLE filter_tag_interest');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE region_image DROP FOREIGN KEY FK_7D59074798260155');
        $this->addSql('CREATE TABLE destination_image (destination_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_9440A5EC816C6140 (destination_id), INDEX IDX_9440A5EC3DA5256D (image_id), PRIMARY KEY(destination_id, image_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE filter_tag_interest (filter_tag_id INT NOT NULL, interest_id INT NOT NULL, INDEX IDX_ABA2812B97F93D6F (filter_tag_id), INDEX IDX_ABA2812B5A95FF89 (interest_id), PRIMARY KEY(filter_tag_id, interest_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE filter_tag_interest ADD CONSTRAINT FK_ABA2812B5A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE filter_tag_interest ADD CONSTRAINT FK_ABA2812B97F93D6F FOREIGN KEY (filter_tag_id) REFERENCES filter_tag (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE interest_filter_tag');
        $this->addSql('DROP TABLE region');
        $this->addSql('DROP TABLE region_image');
    }
}
