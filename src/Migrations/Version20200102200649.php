<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200102200649 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE post DROP FOREIGN KEY FK_5A8A6C8DD9C220F9');
        $this->addSql('CREATE TABLE activity_fragments (activity_id INT NOT NULL, fragment_id INT NOT NULL, INDEX IDX_5561EBFA81C06096 (activity_id), UNIQUE INDEX UNIQ_5561EBFA596BD57E (fragment_id), PRIMARY KEY(activity_id, fragment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE activity_image (activity_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_DB3F32EC81C06096 (activity_id), INDEX IDX_DB3F32EC3DA5256D (image_id), PRIMARY KEY(activity_id, image_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE activity_story_fragments (activity_story_id INT NOT NULL, fragment_id INT NOT NULL, INDEX IDX_6ED9FB0A57F038 (activity_story_id), UNIQUE INDEX UNIQ_6ED9FB0596BD57E (fragment_id), PRIMARY KEY(activity_story_id, fragment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE description_fragment (id INT AUTO_INCREMENT NOT NULL, image_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, INDEX IDX_7E9EF7C83DA5256D (image_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE destination_fragments (destination_id INT NOT NULL, fragment_id INT NOT NULL, INDEX IDX_E3F97CB7816C6140 (destination_id), UNIQUE INDEX UNIQ_E3F97CB7596BD57E (fragment_id), PRIMARY KEY(destination_id, fragment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE destination_image (destination_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_9440A5EC816C6140 (destination_id), INDEX IDX_9440A5EC3DA5256D (image_id), PRIMARY KEY(destination_id, image_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE page_fragments (page_id INT NOT NULL, fragment_id INT NOT NULL, INDEX IDX_89977382C4663E4 (page_id), UNIQUE INDEX UNIQ_89977382596BD57E (fragment_id), PRIMARY KEY(page_id, fragment_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE dynamic_page_image (dynamic_page_id INT NOT NULL, image_id INT NOT NULL, INDEX IDX_2A8154B3D23A8DFF (dynamic_page_id), INDEX IDX_2A8154B33DA5256D (image_id), PRIMARY KEY(dynamic_page_id, image_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, image_name VARCHAR(180) DEFAULT NULL, image_size INT DEFAULT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE activity_fragments ADD CONSTRAINT FK_5561EBFA81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE activity_fragments ADD CONSTRAINT FK_5561EBFA596BD57E FOREIGN KEY (fragment_id) REFERENCES description_fragment (id)');
        $this->addSql('ALTER TABLE activity_image ADD CONSTRAINT FK_DB3F32EC81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE activity_image ADD CONSTRAINT FK_DB3F32EC3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE activity_story_fragments ADD CONSTRAINT FK_6ED9FB0A57F038 FOREIGN KEY (activity_story_id) REFERENCES activity_story (id)');
        $this->addSql('ALTER TABLE activity_story_fragments ADD CONSTRAINT FK_6ED9FB0596BD57E FOREIGN KEY (fragment_id) REFERENCES description_fragment (id)');
        $this->addSql('ALTER TABLE description_fragment ADD CONSTRAINT FK_7E9EF7C83DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('ALTER TABLE destination_fragments ADD CONSTRAINT FK_E3F97CB7816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id)');
        $this->addSql('ALTER TABLE destination_fragments ADD CONSTRAINT FK_E3F97CB7596BD57E FOREIGN KEY (fragment_id) REFERENCES description_fragment (id)');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_image ADD CONSTRAINT FK_9440A5EC3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE page_fragments ADD CONSTRAINT FK_89977382C4663E4 FOREIGN KEY (page_id) REFERENCES dynamic_page (id)');
        $this->addSql('ALTER TABLE page_fragments ADD CONSTRAINT FK_89977382596BD57E FOREIGN KEY (fragment_id) REFERENCES description_fragment (id)');
        $this->addSql('ALTER TABLE dynamic_page_image ADD CONSTRAINT FK_2A8154B3D23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE dynamic_page_image ADD CONSTRAINT FK_2A8154B33DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE contact_planing_interest');
        $this->addSql('DROP TABLE destination_activity');
        $this->addSql('DROP TABLE page_block');
        $this->addSql('DROP TABLE post');
        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095A99049ECE');
        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095AD23A8DFF');
        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095AD9C220F9');
        $this->addSql('DROP INDEX IDX_AC74095AD9C220F9 ON activity');
        $this->addSql('DROP INDEX UNIQ_AC74095AD23A8DFF ON activity');
        $this->addSql('DROP INDEX IDX_AC74095A99049ECE ON activity');
        $this->addSql('ALTER TABLE activity ADD content_itinerary_title VARCHAR(255) DEFAULT NULL, ADD content_itinerary_content LONGTEXT DEFAULT NULL, ADD content_included_title VARCHAR(255) DEFAULT NULL, ADD content_included_content LONGTEXT DEFAULT NULL, ADD content_not_included_title VARCHAR(255) DEFAULT NULL, ADD content_not_included_content LONGTEXT DEFAULT NULL, ADD content_cost_and_dates_title VARCHAR(255) DEFAULT NULL, ADD content_cost_and_dates_content LONGTEXT DEFAULT NULL, ADD active TINYINT(1) DEFAULT NULL, ADD machine_name VARCHAR(255) NOT NULL, ADD page_content_page_template VARCHAR(255) DEFAULT NULL, ADD page_content_page_content LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', DROP translation_from_id, DROP modified_by_id, DROP dynamic_page_id, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_size, DROP image_dimensions, CHANGE language image VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE activity_story DROP FOREIGN KEY FK_F554328B99049ECE');
        $this->addSql('ALTER TABLE activity_story DROP FOREIGN KEY FK_F554328BD9C220F9');
        $this->addSql('DROP INDEX IDX_F554328B99049ECE ON activity_story');
        $this->addSql('DROP INDEX IDX_F554328BD9C220F9 ON activity_story');
        $this->addSql('ALTER TABLE activity_story ADD image_id INT DEFAULT NULL, ADD active TINYINT(1) DEFAULT NULL, DROP translation_from_id, DROP modified_by_id, DROP published, DROP updated_at, DROP alternative_text, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_size, DROP image_dimensions, CHANGE metadata metadata JSON DEFAULT NULL, CHANGE language machine_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE activity_story ADD CONSTRAINT FK_F554328B3DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('CREATE INDEX IDX_F554328B3DA5256D ON activity_story (image_id)');
        $this->addSql('ALTER TABLE destination DROP FOREIGN KEY FK_3EC63EAA99049ECE');
        $this->addSql('DROP INDEX IDX_3EC63EAA99049ECE ON destination');
        $this->addSql('ALTER TABLE destination ADD machine_name VARCHAR(255) NOT NULL, ADD active TINYINT(1) DEFAULT NULL, DROP modified_by_id, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_size, DROP image_dimensions, CHANGE language image VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE dynamic_page DROP FOREIGN KEY FK_575ACC499049ECE');
        $this->addSql('DROP INDEX IDX_575ACC499049ECE ON dynamic_page');
        $this->addSql('ALTER TABLE dynamic_page DROP modified_by_id, CHANGE language machine_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE filter_tag DROP FOREIGN KEY FK_E45D365199049ECE');
        $this->addSql('ALTER TABLE filter_tag DROP FOREIGN KEY FK_E45D3651D9C220F9');
        $this->addSql('DROP INDEX IDX_E45D365199049ECE ON filter_tag');
        $this->addSql('DROP INDEX IDX_E45D3651D9C220F9 ON filter_tag');
        $this->addSql('ALTER TABLE filter_tag ADD active TINYINT(1) DEFAULT NULL, ADD priority INT DEFAULT NULL, DROP translation_from_id, DROP modified_by_id, CHANGE language machine_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE interest DROP FOREIGN KEY FK_6C3E1A6799049ECE');
        $this->addSql('ALTER TABLE interest DROP FOREIGN KEY FK_6C3E1A67D9C220F9');
        $this->addSql('DROP INDEX IDX_6C3E1A6799049ECE ON interest');
        $this->addSql('DROP INDEX IDX_6C3E1A67D9C220F9 ON interest');
        $this->addSql('ALTER TABLE interest ADD image_id INT NOT NULL, ADD active TINYINT(1) DEFAULT NULL, ADD priority INT DEFAULT NULL, DROP translation_from_id, DROP modified_by_id, DROP updated_at, DROP alternative_text, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_size, DROP image_dimensions, CHANGE language machine_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE interest ADD CONSTRAINT FK_6C3E1A673DA5256D FOREIGN KEY (image_id) REFERENCES image (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6C3E1A673DA5256D ON interest (image_id)');
        $this->addSql('ALTER TABLE uploaded_image ADD image VARCHAR(255) NOT NULL, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_size, DROP image_dimensions');
        $this->addSql('ALTER TABLE fos_user DROP bio, DROP updated_at, DROP alternative_text, DROP image_name, DROP image_original_name, DROP image_mime_type, DROP image_size, DROP image_dimensions');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE activity_fragments DROP FOREIGN KEY FK_5561EBFA596BD57E');
        $this->addSql('ALTER TABLE activity_story_fragments DROP FOREIGN KEY FK_6ED9FB0596BD57E');
        $this->addSql('ALTER TABLE destination_fragments DROP FOREIGN KEY FK_E3F97CB7596BD57E');
        $this->addSql('ALTER TABLE page_fragments DROP FOREIGN KEY FK_89977382596BD57E');
        $this->addSql('ALTER TABLE activity_image DROP FOREIGN KEY FK_DB3F32EC3DA5256D');
        $this->addSql('ALTER TABLE activity_story DROP FOREIGN KEY FK_F554328B3DA5256D');
        $this->addSql('ALTER TABLE description_fragment DROP FOREIGN KEY FK_7E9EF7C83DA5256D');
        $this->addSql('ALTER TABLE destination_image DROP FOREIGN KEY FK_9440A5EC3DA5256D');
        $this->addSql('ALTER TABLE dynamic_page_image DROP FOREIGN KEY FK_2A8154B33DA5256D');
        $this->addSql('ALTER TABLE interest DROP FOREIGN KEY FK_6C3E1A673DA5256D');
        $this->addSql('CREATE TABLE contact_planing_interest (contact_planing_id INT NOT NULL, interest_id INT NOT NULL, INDEX IDX_30BE196999ED1572 (contact_planing_id), INDEX IDX_30BE19695A95FF89 (interest_id), PRIMARY KEY(contact_planing_id, interest_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE destination_activity (destination_id INT NOT NULL, activity_id INT NOT NULL, INDEX IDX_F2C4C96B816C6140 (destination_id), INDEX IDX_F2C4C96B81C06096 (activity_id), PRIMARY KEY(destination_id, activity_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE page_block (id INT AUTO_INCREMENT NOT NULL, dynamic_page_id INT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_E59A68F4D23A8DFF (dynamic_page_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE post (id INT AUTO_INCREMENT NOT NULL, translation_from_id INT DEFAULT NULL, modified_by_id INT DEFAULT NULL, dynamic_page_id INT DEFAULT NULL, title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, slug VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, published TINYINT(1) NOT NULL, updated_at DATETIME DEFAULT NULL, alternative_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, image_size INT DEFAULT NULL, image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', INDEX IDX_5A8A6C8DD9C220F9 (translation_from_id), UNIQUE INDEX UNIQ_5A8A6C8DD23A8DFF (dynamic_page_id), INDEX IDX_5A8A6C8D99049ECE (modified_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE contact_planing_interest ADD CONSTRAINT FK_30BE19695A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contact_planing_interest ADD CONSTRAINT FK_30BE196999ED1572 FOREIGN KEY (contact_planing_id) REFERENCES contact_planing (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_activity ADD CONSTRAINT FK_F2C4C96B816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE destination_activity ADD CONSTRAINT FK_F2C4C96B81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8D99049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8DD23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id)');
        $this->addSql('ALTER TABLE post ADD CONSTRAINT FK_5A8A6C8DD9C220F9 FOREIGN KEY (translation_from_id) REFERENCES post (id)');
        $this->addSql('DROP TABLE activity_fragments');
        $this->addSql('DROP TABLE activity_image');
        $this->addSql('DROP TABLE activity_story_fragments');
        $this->addSql('DROP TABLE description_fragment');
        $this->addSql('DROP TABLE destination_fragments');
        $this->addSql('DROP TABLE destination_image');
        $this->addSql('DROP TABLE page_fragments');
        $this->addSql('DROP TABLE dynamic_page_image');
        $this->addSql('DROP TABLE image');
        $this->addSql('ALTER TABLE activity ADD translation_from_id INT DEFAULT NULL, ADD modified_by_id INT DEFAULT NULL, ADD dynamic_page_id INT DEFAULT NULL, ADD language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_size INT DEFAULT NULL, ADD image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', DROP content_itinerary_title, DROP content_itinerary_content, DROP content_included_title, DROP content_included_content, DROP content_not_included_title, DROP content_not_included_content, DROP content_cost_and_dates_title, DROP content_cost_and_dates_content, DROP image, DROP active, DROP machine_name, DROP page_content_page_template, DROP page_content_page_content');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095A99049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095AD23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id)');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095AD9C220F9 FOREIGN KEY (translation_from_id) REFERENCES activity (id)');
        $this->addSql('CREATE INDEX IDX_AC74095AD9C220F9 ON activity (translation_from_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AC74095AD23A8DFF ON activity (dynamic_page_id)');
        $this->addSql('CREATE INDEX IDX_AC74095A99049ECE ON activity (modified_by_id)');
        $this->addSql('DROP INDEX IDX_F554328B3DA5256D ON activity_story');
        $this->addSql('ALTER TABLE activity_story ADD modified_by_id INT DEFAULT NULL, ADD published TINYINT(1) NOT NULL, ADD updated_at DATETIME DEFAULT NULL, ADD alternative_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_size INT DEFAULT NULL, ADD image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', DROP active, CHANGE metadata metadata LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`, CHANGE image_id translation_from_id INT DEFAULT NULL, CHANGE machine_name language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE activity_story ADD CONSTRAINT FK_F554328B99049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE activity_story ADD CONSTRAINT FK_F554328BD9C220F9 FOREIGN KEY (translation_from_id) REFERENCES activity_story (id)');
        $this->addSql('CREATE INDEX IDX_F554328B99049ECE ON activity_story (modified_by_id)');
        $this->addSql('CREATE INDEX IDX_F554328BD9C220F9 ON activity_story (translation_from_id)');
        $this->addSql('ALTER TABLE destination ADD modified_by_id INT DEFAULT NULL, ADD language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_size INT DEFAULT NULL, ADD image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', DROP image, DROP machine_name, DROP active');
        $this->addSql('ALTER TABLE destination ADD CONSTRAINT FK_3EC63EAA99049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('CREATE INDEX IDX_3EC63EAA99049ECE ON destination (modified_by_id)');
        $this->addSql('ALTER TABLE dynamic_page ADD modified_by_id INT DEFAULT NULL, CHANGE machine_name language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE dynamic_page ADD CONSTRAINT FK_575ACC499049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('CREATE INDEX IDX_575ACC499049ECE ON dynamic_page (modified_by_id)');
        $this->addSql('ALTER TABLE filter_tag ADD modified_by_id INT DEFAULT NULL, DROP active, CHANGE priority translation_from_id INT DEFAULT NULL, CHANGE machine_name language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE filter_tag ADD CONSTRAINT FK_E45D365199049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE filter_tag ADD CONSTRAINT FK_E45D3651D9C220F9 FOREIGN KEY (translation_from_id) REFERENCES filter_tag (id)');
        $this->addSql('CREATE INDEX IDX_E45D365199049ECE ON filter_tag (modified_by_id)');
        $this->addSql('CREATE INDEX IDX_E45D3651D9C220F9 ON filter_tag (translation_from_id)');
        $this->addSql('ALTER TABLE fos_user ADD bio VARCHAR(300) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD updated_at DATETIME DEFAULT NULL, ADD alternative_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_size INT DEFAULT NULL, ADD image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\'');
        $this->addSql('DROP INDEX UNIQ_6C3E1A673DA5256D ON interest');
        $this->addSql('ALTER TABLE interest ADD modified_by_id INT DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, ADD alternative_text VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_size INT DEFAULT NULL, ADD image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', DROP image_id, DROP active, CHANGE priority translation_from_id INT DEFAULT NULL, CHANGE machine_name language VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE interest ADD CONSTRAINT FK_6C3E1A6799049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id)');
        $this->addSql('ALTER TABLE interest ADD CONSTRAINT FK_6C3E1A67D9C220F9 FOREIGN KEY (translation_from_id) REFERENCES interest (id)');
        $this->addSql('CREATE INDEX IDX_6C3E1A6799049ECE ON interest (modified_by_id)');
        $this->addSql('CREATE INDEX IDX_6C3E1A67D9C220F9 ON interest (translation_from_id)');
        $this->addSql('ALTER TABLE uploaded_image ADD image_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_original_name VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_mime_type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, ADD image_size INT DEFAULT NULL, ADD image_dimensions LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:simple_array)\', DROP image');
    }
}
