<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190511214246 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX IDX_30BE19695A95FF89');
        $this->addSql('DROP INDEX IDX_30BE196999ED1572');
        $this->addSql('CREATE TEMPORARY TABLE __temp__contact_planing_interest AS SELECT contact_planing_id, interest_id FROM contact_planing_interest');
        $this->addSql('DROP TABLE contact_planing_interest');
        $this->addSql('CREATE TABLE contact_planing_interest (contact_planing_id INTEGER NOT NULL, interest_id INTEGER NOT NULL, PRIMARY KEY(contact_planing_id, interest_id), CONSTRAINT FK_30BE196999ED1572 FOREIGN KEY (contact_planing_id) REFERENCES contact_planing (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_30BE19695A95FF89 FOREIGN KEY (interest_id) REFERENCES interest (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO contact_planing_interest (contact_planing_id, interest_id) SELECT contact_planing_id, interest_id FROM __temp__contact_planing_interest');
        $this->addSql('DROP TABLE __temp__contact_planing_interest');
        $this->addSql('CREATE INDEX IDX_30BE19695A95FF89 ON contact_planing_interest (interest_id)');
        $this->addSql('CREATE INDEX IDX_30BE196999ED1572 ON contact_planing_interest (contact_planing_id)');
        $this->addSql('DROP INDEX IDX_5A8A6C8D99049ECE');
        $this->addSql('DROP INDEX IDX_5A8A6C8DD9C220F9');
        $this->addSql('CREATE TEMPORARY TABLE __temp__post AS SELECT id, translation_from_id, modified_by_id, title, slug, content, published, updated_at, language, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text FROM post');
        $this->addSql('DROP TABLE post');
        $this->addSql('CREATE TABLE post (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, translation_from_id INTEGER DEFAULT NULL, modified_by_id INTEGER DEFAULT NULL, title VARCHAR(255) NOT NULL COLLATE BINARY, slug VARCHAR(255) NOT NULL COLLATE BINARY, content CLOB DEFAULT NULL COLLATE BINARY, published BOOLEAN NOT NULL, updated_at DATETIME NOT NULL, language VARCHAR(255) NOT NULL COLLATE BINARY, image_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_original_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_mime_type VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_size INTEGER DEFAULT NULL, alternative_text VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_dimensions CLOB DEFAULT NULL --(DC2Type:simple_array)
        , CONSTRAINT FK_5A8A6C8DD9C220F9 FOREIGN KEY (translation_from_id) REFERENCES post (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_5A8A6C8D99049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO post (id, translation_from_id, modified_by_id, title, slug, content, published, updated_at, language, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text) SELECT id, translation_from_id, modified_by_id, title, slug, content, published, updated_at, language, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text FROM __temp__post');
        $this->addSql('DROP TABLE __temp__post');
        $this->addSql('CREATE INDEX IDX_5A8A6C8D99049ECE ON post (modified_by_id)');
        $this->addSql('CREATE INDEX IDX_5A8A6C8DD9C220F9 ON post (translation_from_id)');
        $this->addSql('DROP INDEX IDX_E59A68F499049ECE');
        $this->addSql('DROP INDEX IDX_E59A68F4D23A8DFF');
        $this->addSql('CREATE TEMPORARY TABLE __temp__page_block AS SELECT id, dynamic_page_id, modified_by_id, name, content FROM page_block');
        $this->addSql('DROP TABLE page_block');
        $this->addSql('CREATE TABLE page_block (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, dynamic_page_id INTEGER NOT NULL, modified_by_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL COLLATE BINARY, content CLOB DEFAULT NULL COLLATE BINARY, CONSTRAINT FK_E59A68F4D23A8DFF FOREIGN KEY (dynamic_page_id) REFERENCES dynamic_page (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_E59A68F499049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO page_block (id, dynamic_page_id, modified_by_id, name, content) SELECT id, dynamic_page_id, modified_by_id, name, content FROM __temp__page_block');
        $this->addSql('DROP TABLE __temp__page_block');
        $this->addSql('CREATE INDEX IDX_E59A68F499049ECE ON page_block (modified_by_id)');
        $this->addSql('CREATE INDEX IDX_E59A68F4D23A8DFF ON page_block (dynamic_page_id)');
        $this->addSql('DROP INDEX IDX_6C3E1A6799049ECE');
        $this->addSql('DROP INDEX IDX_6C3E1A67D9C220F9');
        $this->addSql('CREATE TEMPORARY TABLE __temp__interest AS SELECT id, translation_from_id, modified_by_id, title, description, language, updated_at, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text FROM interest');
        $this->addSql('DROP TABLE interest');
        $this->addSql('CREATE TABLE interest (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, translation_from_id INTEGER DEFAULT NULL, modified_by_id INTEGER DEFAULT NULL, title VARCHAR(255) NOT NULL COLLATE BINARY, description VARCHAR(255) DEFAULT NULL COLLATE BINARY, language VARCHAR(255) NOT NULL COLLATE BINARY, updated_at DATETIME NOT NULL, image_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_original_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_mime_type VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_size INTEGER DEFAULT NULL, alternative_text VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_dimensions CLOB DEFAULT NULL --(DC2Type:simple_array)
        , CONSTRAINT FK_6C3E1A67D9C220F9 FOREIGN KEY (translation_from_id) REFERENCES interest (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_6C3E1A6799049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO interest (id, translation_from_id, modified_by_id, title, description, language, updated_at, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text) SELECT id, translation_from_id, modified_by_id, title, description, language, updated_at, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text FROM __temp__interest');
        $this->addSql('DROP TABLE __temp__interest');
        $this->addSql('CREATE INDEX IDX_6C3E1A6799049ECE ON interest (modified_by_id)');
        $this->addSql('CREATE INDEX IDX_6C3E1A67D9C220F9 ON interest (translation_from_id)');
        $this->addSql('DROP INDEX UNIQ_957A6479C05FB297');
        $this->addSql('DROP INDEX UNIQ_957A6479A0D96FBF');
        $this->addSql('DROP INDEX UNIQ_957A647992FC23A8');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user AS SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, bio, telephone, enterprise, updated_at, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text FROM fos_user');
        $this->addSql('DROP TABLE fos_user');
        $this->addSql('CREATE TABLE fos_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL COLLATE BINARY, username_canonical VARCHAR(180) NOT NULL COLLATE BINARY, email VARCHAR(180) NOT NULL COLLATE BINARY, email_canonical VARCHAR(180) NOT NULL COLLATE BINARY, enabled BOOLEAN NOT NULL, salt VARCHAR(255) DEFAULT NULL COLLATE BINARY, password VARCHAR(255) NOT NULL COLLATE BINARY, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL COLLATE BINARY, password_requested_at DATETIME DEFAULT NULL, roles CLOB NOT NULL COLLATE BINARY --(DC2Type:array)
        , bio VARCHAR(300) DEFAULT NULL COLLATE BINARY, telephone VARCHAR(255) DEFAULT NULL COLLATE BINARY, enterprise VARCHAR(255) DEFAULT NULL COLLATE BINARY, updated_at DATETIME NOT NULL, image_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_original_name VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_mime_type VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_size INTEGER DEFAULT NULL, alternative_text VARCHAR(255) DEFAULT NULL COLLATE BINARY, image_dimensions CLOB DEFAULT NULL --(DC2Type:simple_array)
        )');
        $this->addSql('INSERT INTO fos_user (id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, bio, telephone, enterprise, updated_at, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text) SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, bio, telephone, enterprise, updated_at, image_name, image_original_name, image_mime_type, image_size, image_dimensions, alternative_text FROM __temp__fos_user');
        $this->addSql('DROP TABLE __temp__fos_user');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479C05FB297 ON fos_user (confirmation_token)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479A0D96FBF ON fos_user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A647992FC23A8 ON fos_user (username_canonical)');
        $this->addSql('DROP INDEX IDX_575ACC499049ECE');
        $this->addSql('CREATE TEMPORARY TABLE __temp__dynamic_page AS SELECT id, modified_by_id, page_name, page_title, language, page_content FROM dynamic_page');
        $this->addSql('DROP TABLE dynamic_page');
        $this->addSql('CREATE TABLE dynamic_page (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, modified_by_id INTEGER DEFAULT NULL, page_name VARCHAR(255) NOT NULL COLLATE BINARY, page_title VARCHAR(255) DEFAULT NULL COLLATE BINARY, language VARCHAR(255) NOT NULL COLLATE BINARY, page_content CLOB DEFAULT NULL --(DC2Type:array)
        , CONSTRAINT FK_575ACC499049ECE FOREIGN KEY (modified_by_id) REFERENCES fos_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO dynamic_page (id, modified_by_id, page_name, page_title, language, page_content) SELECT id, modified_by_id, page_name, page_title, language, page_content FROM __temp__dynamic_page');
        $this->addSql('DROP TABLE __temp__dynamic_page');
        $this->addSql('CREATE INDEX IDX_575ACC499049ECE ON dynamic_page (modified_by_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX IDX_30BE196999ED1572');
        $this->addSql('DROP INDEX IDX_30BE19695A95FF89');
        $this->addSql('CREATE TEMPORARY TABLE __temp__contact_planing_interest AS SELECT contact_planing_id, interest_id FROM contact_planing_interest');
        $this->addSql('DROP TABLE contact_planing_interest');
        $this->addSql('CREATE TABLE contact_planing_interest (contact_planing_id INTEGER NOT NULL, interest_id INTEGER NOT NULL, PRIMARY KEY(contact_planing_id, interest_id))');
        $this->addSql('INSERT INTO contact_planing_interest (contact_planing_id, interest_id) SELECT contact_planing_id, interest_id FROM __temp__contact_planing_interest');
        $this->addSql('DROP TABLE __temp__contact_planing_interest');
        $this->addSql('CREATE INDEX IDX_30BE196999ED1572 ON contact_planing_interest (contact_planing_id)');
        $this->addSql('CREATE INDEX IDX_30BE19695A95FF89 ON contact_planing_interest (interest_id)');
        $this->addSql('DROP INDEX IDX_575ACC499049ECE');
        $this->addSql('CREATE TEMPORARY TABLE __temp__dynamic_page AS SELECT id, modified_by_id, page_name, page_title, page_content, language FROM dynamic_page');
        $this->addSql('DROP TABLE dynamic_page');
        $this->addSql('CREATE TABLE dynamic_page (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, modified_by_id INTEGER DEFAULT NULL, page_name VARCHAR(255) NOT NULL, page_title VARCHAR(255) DEFAULT NULL, language VARCHAR(255) NOT NULL, page_content CLOB DEFAULT \'NULL --(DC2Type:simple_array)\' COLLATE BINARY --(DC2Type:simple_array)
        )');
        $this->addSql('INSERT INTO dynamic_page (id, modified_by_id, page_name, page_title, page_content, language) SELECT id, modified_by_id, page_name, page_title, page_content, language FROM __temp__dynamic_page');
        $this->addSql('DROP TABLE __temp__dynamic_page');
        $this->addSql('CREATE INDEX IDX_575ACC499049ECE ON dynamic_page (modified_by_id)');
        $this->addSql('DROP INDEX UNIQ_957A647992FC23A8');
        $this->addSql('DROP INDEX UNIQ_957A6479A0D96FBF');
        $this->addSql('DROP INDEX UNIQ_957A6479C05FB297');
        $this->addSql('CREATE TEMPORARY TABLE __temp__fos_user AS SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, bio, telephone, enterprise, updated_at, alternative_text, image_name, image_original_name, image_mime_type, image_size, image_dimensions FROM fos_user');
        $this->addSql('DROP TABLE fos_user');
        $this->addSql('CREATE TABLE fos_user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, enabled BOOLEAN NOT NULL, salt VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles CLOB NOT NULL --(DC2Type:array)
        , bio VARCHAR(300) DEFAULT NULL, telephone VARCHAR(255) DEFAULT NULL, enterprise VARCHAR(255) DEFAULT NULL, updated_at DATETIME NOT NULL, alternative_text VARCHAR(255) DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_original_name VARCHAR(255) DEFAULT NULL, image_mime_type VARCHAR(255) DEFAULT NULL, image_size INTEGER DEFAULT NULL, image_dimensions CLOB DEFAULT \'NULL --(DC2Type:simple_array)\' COLLATE BINARY --(DC2Type:simple_array)
        )');
        $this->addSql('INSERT INTO fos_user (id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, bio, telephone, enterprise, updated_at, alternative_text, image_name, image_original_name, image_mime_type, image_size, image_dimensions) SELECT id, username, username_canonical, email, email_canonical, enabled, salt, password, last_login, confirmation_token, password_requested_at, roles, bio, telephone, enterprise, updated_at, alternative_text, image_name, image_original_name, image_mime_type, image_size, image_dimensions FROM __temp__fos_user');
        $this->addSql('DROP TABLE __temp__fos_user');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A647992FC23A8 ON fos_user (username_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479A0D96FBF ON fos_user (email_canonical)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_957A6479C05FB297 ON fos_user (confirmation_token)');
        $this->addSql('DROP INDEX IDX_6C3E1A67D9C220F9');
        $this->addSql('DROP INDEX IDX_6C3E1A6799049ECE');
        $this->addSql('CREATE TEMPORARY TABLE __temp__interest AS SELECT id, translation_from_id, modified_by_id, title, description, language, updated_at, alternative_text, image_name, image_original_name, image_mime_type, image_size, image_dimensions FROM interest');
        $this->addSql('DROP TABLE interest');
        $this->addSql('CREATE TABLE interest (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, translation_from_id INTEGER DEFAULT NULL, modified_by_id INTEGER DEFAULT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, language VARCHAR(255) NOT NULL, updated_at DATETIME NOT NULL, alternative_text VARCHAR(255) DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, image_original_name VARCHAR(255) DEFAULT NULL, image_mime_type VARCHAR(255) DEFAULT NULL, image_size INTEGER DEFAULT NULL, image_dimensions CLOB DEFAULT \'NULL --(DC2Type:simple_array)\' COLLATE BINARY --(DC2Type:simple_array)
        )');
        $this->addSql('INSERT INTO interest (id, translation_from_id, modified_by_id, title, description, language, updated_at, alternative_text, image_name, image_original_name, image_mime_type, image_size, image_dimensions) SELECT id, translation_from_id, modified_by_id, title, description, language, updated_at, alternative_text, image_name, image_original_name, image_mime_type, image_size, image_dimensions FROM __temp__interest');
        $this->addSql('DROP TABLE __temp__interest');
        $this->addSql('CREATE INDEX IDX_6C3E1A67D9C220F9 ON interest (translation_from_id)');
        $this->addSql('CREATE INDEX IDX_6C3E1A6799049ECE ON interest (modified_by_id)');
        $this->addSql('DROP INDEX IDX_E59A68F4D23A8DFF');
        $this->addSql('DROP INDEX IDX_E59A68F499049ECE');
        $this->addSql('CREATE TEMPORARY TABLE __temp__page_block AS SELECT id, dynamic_page_id, modified_by_id, name, content FROM page_block');
        $this->addSql('DROP TABLE page_block');
        $this->addSql('CREATE TABLE page_block (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, dynamic_page_id INTEGER NOT NULL, modified_by_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, content CLOB DEFAULT NULL)');
        $this->addSql('INSERT INTO page_block (id, dynamic_page_id, modified_by_id, name, content) SELECT id, dynamic_page_id, modified_by_id, name, content FROM __temp__page_block');
        $this->addSql('DROP TABLE __temp__page_block');
        $this->addSql('CREATE INDEX IDX_E59A68F4D23A8DFF ON page_block (dynamic_page_id)');
        $this->addSql('CREATE INDEX IDX_E59A68F499049ECE ON page_block (modified_by_id)');
        $this->addSql('DROP INDEX IDX_5A8A6C8DD9C220F9');
        $this->addSql('DROP INDEX IDX_5A8A6C8D99049ECE');
        $this->addSql('CREATE TEMPORARY TABLE __temp__post AS SELECT id, translation_from_id, modified_by_id, title, slug, content, published, updated_at, alternative_text, language, image_name, image_original_name, image_mime_type, image_size, image_dimensions FROM post');
        $this->addSql('DROP TABLE post');
        $this->addSql('CREATE TABLE post (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, translation_from_id INTEGER DEFAULT NULL, modified_by_id INTEGER DEFAULT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, content CLOB DEFAULT NULL, published BOOLEAN NOT NULL, updated_at DATETIME NOT NULL, alternative_text VARCHAR(255) DEFAULT NULL, language VARCHAR(255) NOT NULL, image_name VARCHAR(255) DEFAULT NULL, image_original_name VARCHAR(255) DEFAULT NULL, image_mime_type VARCHAR(255) DEFAULT NULL, image_size INTEGER DEFAULT NULL, image_dimensions CLOB DEFAULT \'NULL --(DC2Type:simple_array)\' COLLATE BINARY --(DC2Type:simple_array)
        )');
        $this->addSql('INSERT INTO post (id, translation_from_id, modified_by_id, title, slug, content, published, updated_at, alternative_text, language, image_name, image_original_name, image_mime_type, image_size, image_dimensions) SELECT id, translation_from_id, modified_by_id, title, slug, content, published, updated_at, alternative_text, language, image_name, image_original_name, image_mime_type, image_size, image_dimensions FROM __temp__post');
        $this->addSql('DROP TABLE __temp__post');
        $this->addSql('CREATE INDEX IDX_5A8A6C8DD9C220F9 ON post (translation_from_id)');
        $this->addSql('CREATE INDEX IDX_5A8A6C8D99049ECE ON post (modified_by_id)');
    }
}
