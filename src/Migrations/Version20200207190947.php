<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200207190947 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE activity_activityfragments (activity_id INT NOT NULL, fragment_id INT NOT NULL, INDEX IDX_9FEB7AB681C06096 (activity_id), UNIQUE INDEX UNIQ_9FEB7AB6596BD57E (fragment_id), PRIMARY KEY(activity_id, fragment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE activity_description_fragment (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, metadata JSON DEFAULT NULL, INDEX IDX_3BA248703DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client_opinion (id INT AUTO_INCREMENT NOT NULL, destination_id INT DEFAULT NULL, activity_id INT DEFAULT NULL, client_name VARCHAR(255) DEFAULT NULL, opinion LONGTEXT NOT NULL, pin_on_home TINYINT(1) DEFAULT NULL, active TINYINT(1) DEFAULT NULL, UNIQUE INDEX UNIQ_F93FF45A816C6140 (destination_id), UNIQUE INDEX UNIQ_F93FF45A81C06096 (activity_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE activity_activityfragments ADD CONSTRAINT FK_9FEB7AB681C06096 FOREIGN KEY (activity_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE activity_activityfragments ADD CONSTRAINT FK_9FEB7AB6596BD57E FOREIGN KEY (fragment_id) REFERENCES activity_description_fragment (id)');
        $this->addSql('ALTER TABLE activity_description_fragment ADD CONSTRAINT FK_3BA248703DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE client_opinion ADD CONSTRAINT FK_F93FF45A816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE client_opinion ADD CONSTRAINT FK_F93FF45A81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE SET NULL');
        $this->addSql('DROP TABLE activity_fragments');
        $this->addSql('DROP TABLE banner');
        $this->addSql('DROP TABLE destination_image');
        $this->addSql('DROP TABLE filter_tag_interest');
        $this->addSql('DROP TABLE interest_filter_tag');
        $this->addSql('DROP TABLE top_destination');
        $this->addSql('DROP TABLE uploaded_image');
        $this->addSql('ALTER TABLE filter_tag ADD icon_name VARCHAR(180) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE activity_activityfragments DROP FOREIGN KEY FK_9FEB7AB6596BD57E');
        $this->addSql('CREATE TABLE activity_fragments (activity_id INT NOT NULL, fragment_id INT NOT NULL, UNIQUE INDEX UNIQ_5561EBFA596BD57E (fragment_id), INDEX IDX_5561EBFA81C06096 (activity_id), PRIMARY KEY(activity_id, fragment_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE banner (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, link VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, link_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, active TINYINT(1) DEFAULT NULL, INDEX IDX_6F9DB8E73DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE destination_image (destination_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_9440A5EC816C6140 (destination_id), INDEX IDX_9440A5EC3DA5256D (image_id), PRIMARY KEY(destination_id, image_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE filter_tag_interest (filter_tag_id INT NOT NULL, interest_id INT NOT NULL, INDEX IDX_ABA2812B97F93D6F (filter_tag_id), INDEX IDX_ABA2812B5A95FF89 (interest_id), PRIMARY KEY(filter_tag_id, interest_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE interest_filter_tag (interest_id INT NOT NULL, filter_tag_id INT NOT NULL, INDEX IDX_AFC2FA075A95FF89 (interest_id), INDEX IDX_AFC2FA0797F93D6F (filter_tag_id), PRIMARY KEY(interest_id, filter_tag_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE top_destination (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, link VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, link_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, active TINYINT(1) DEFAULT NULL, INDEX IDX_20E0B1483DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE uploaded_image (id INT AUTO_INCREMENT NOT NULL, dynamic_page_id INT DEFAULT NULL, image_id INT DEFAULT NULL, INDEX IDX_CD68ABB33DA5256D (image_id), INDEX IDX_CD68ABB3D23A8DFF (dynamic_page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE activity_fragments ADD CONSTRAINT FK_5561EBFA596BD57E FOREIGN KEY (fragment_id) REFERENCES description_fragment (id)');
        $this->addSql('ALTER TABLE activity_fragments ADD CONSTRAINT FK_5561EBFA81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE banner ADD CONSTRAINT FK_6F9DB8E73DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE filter_tag_interest ADD CONSTRAINT FK_ABA2812B5A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE filter_tag_interest ADD CONSTRAINT FK_ABA2812B97F93D6F FOREIGN KEY (filter_tag_id) REFERENCES filter_tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE interest_filter_tag ADD CONSTRAINT FK_AFC2FA075A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE interest_filter_tag ADD CONSTRAINT FK_AFC2FA0797F93D6F FOREIGN KEY (filter_tag_id) REFERENCES filter_tag (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE top_destination ADD CONSTRAINT FK_20E0B1483DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('ALTER TABLE uploaded_image ADD CONSTRAINT FK_CD68ABB33DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE uploaded_image ADD CONSTRAINT FK_CD68ABB3D23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id)');
        $this->addSql('DROP TABLE activity_activityfragments');
        $this->addSql('DROP TABLE activity_description_fragment');
        $this->addSql('DROP TABLE client_opinion');
        $this->addSql('ALTER TABLE filter_tag DROP icon_name');
    }
}
