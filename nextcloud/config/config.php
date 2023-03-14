<?php
$CONFIG = array (
  'htaccess.RewriteBase' => '/',
  'memcache.local' => '\\OC\\Memcache\\APCu',
  'apps_paths' => 
  array (
    0 => 
    array (
      'path' => '/var/www/html/apps',
      'url' => '/apps',
      'writable' => false,
    ),
    1 => 
    array (
      'path' => '/var/www/html/custom_apps',
      'url' => '/custom_apps',
      'writable' => true,
    ),
  ),
  'passwordsalt' => 'u2kofjJ70yH0yeXoAmBoR00E1yOJlE',
  'secret' => 'acnx1hMdzvay+UamBa9Apd1bWON0QmFcQr6ywY2nD2KaoG0M',
  'trusted_domains' => 
  array (
    0 => 'localhost',
    1 => '172.21.0.1',
    2 => '172.21.0.20',
    3 => 'data.ipc-project.bsc.es',
  ),
  'datadirectory' => '/var/www/html/data',
  'dbtype' => 'mysql',
  'version' => '19.0.0.12',
  'overwrite.cli.url' => 'http://localhost',
  'dbname' => 'nextcloud',
  'dbhost' => 'mariadb',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'mysql.utf8mb4' => true,
  'dbuser' => 'nextcloud',
  'dbpassword' => 'admin',
  'installed' => true,
  'instanceid' => 'oc73rxk2lji0',
);
