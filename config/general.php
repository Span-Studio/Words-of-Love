<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use ConfigHelper;

return [
    // Global settings
    '*' => [
        // I prefer URLS that end with a slash
        'addTrailingSlashesToUrls' => true,

        // Updates should only be preformed on the local machine
        'allowUpdates' => false,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // Whether users should automatically be logged in after activating their account or resetting their password.
        'autoLoginAfterAccountActivation' => true,

        // The default length of time Craft will store data, RSS feed, and template caches.
        'cacheDuration' => craft\helpers\ConfigHelper::durationInSeconds('P1W'),

        // The default amount of time tokens can be used before expiring.
        'defaultTokenDuration' => craft\helpers\ConfigHelper::durationInSeconds('P1M'),

        // The amount of time Craft will remember a username and pre-populate it on the CP login page.
        'rememberedUserSessionDuration' => craft\helpers\ConfigHelper::durationInSeconds('P1M'),

        // The amount of time a user verification code can be used before expiring.
        'verificationCodeDuration' => craft\helpers\ConfigHelper::durationInSeconds('P1M'),

        // The amount of time before a user will get logged out due to inactivity.
        // Set to 0 if you want users to stay logged in as long as their browser is open rather than a predetermined amount of time.
        'userSessionDuration' => 0,

        // This should prevent some submissions from being sent as blank to formbucket
        'requireUserAgentAndIpForSession' => false,

        // Whether images transforms should be generated before page load.
        'generateTransformsBeforePageLoad' => true,

        // Whether uploaded filenames with non-ASCII characters should be converted to ASCII (i.e. ñ → n).
        'convertFilenamesToAscii' => true,

        // Whether non-ASCII characters in auto-generated slugs should be converted to ASCII (i.e. ñ → n).
        // This only affects the JavaScript auto-generated slugs. Non-ASCII characters can still be used in slugs if entered manually.
        'limitAutoSlugsToAscii' => true,

        // The number of invalid login attempts Craft will allow within the specified duration before the account gets locked.
        'maxInvalidLogins' => 10,

        // The maximum number of revisions that should be stored for each element.
        // Set to 0 if you want to store an unlimited number of revisions.
        'maxRevisions' => 0,

        'maxUploadFileSize' => craft\helpers\ConfigHelper::sizeInBytes('10M'),

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
    ],

    // Dev environment settings
    'dev' => [
        'allowUpdates' => true,
    ],

    // Staging environment settings
    'staging' => [],

    // Production environment settings
    'production' => [
        // If set to 0, data and RSS feed caches will be stored indefinitely;
        // template caches will be stored for one year.
        'cacheDuration' => 0,
        'devMode' => false,
    ],
];
