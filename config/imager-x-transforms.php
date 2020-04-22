<?php
use spacecatninja\imagerx\services\ImagerService;

return [
  'default' => [
    'transforms' => [
      ['width' => 3000],
      ['width' => 500],
    ],
    'defaults' => [
      'position' => static function ($image) {
        return $image->getFocalPoint();
      },
      'format' => static function ($image) {
        if(ImagerService::hasSupportForWebP()){
          return 'webp';
        } else {
          return 'jpeg';
        }
      },
      'jpegQuality' => 80
    ],
    'configOverrides' => [
      'fillTransforms' => true,
      'fillInterval' => 250,
    ],
  ],
];
