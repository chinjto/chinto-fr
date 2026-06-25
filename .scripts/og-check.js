#!/usr/bin/env node

const ogs = require('open-graph-scraper');

const url = process.argv[2];

if (!url) {
  console.error('Usage: node .scripts/og-check.js <url>');
  process.exit(1);
}

ogs({
  url,
  timeout: 10000,
  urlValidatorSettings: {
    protocols: ['http', 'https'],
    require_tld: false,
    require_protocol: true,
    allow_underscores: true,
  },
})
  .then(({ result }) => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
