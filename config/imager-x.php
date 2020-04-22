<?php

return [
  'transformer' => 'craft', // craft, imgix
  'imgixApiKey' => 'Q7VY4nQza8czl3xpYVFSYfXPQb6QoSVW',
  'imgixConfig' => [
    'default' => [
      'domains' => ['xxxxxxxxxx.imgix.net'],
      'useHttps' => true,
      'signKey' => 'xxxxxxxxxx',
      'sourceIsWebProxy' => false,
      'addPath' => [
        'general' => 'assets/general',
      ],
      'shardStrategy' => 'cycle',
      'getExternalImageDimensions' => true,
      'defaultParams' => ['auto' => 'compress,format', 'q' => 80],
    ]
  ]
];
