var express = require('express');
const path = require('path');
var url = require('url');
const config = require('../config/config');

var router = express.Router();

const folderName = 'projects/promo_2024';

/* All the routes goes here */

router.get('/promotion-apply-credit-card-HSBC/en', function(req, res, next) {
  const url_parts = url.parse(req.url, true);
  const search = url_parts.search || "";

  // if (typeof req.cookies.landingPage === 'undefined') {
  let fullUrl = req.get('host') + req.url;
  res.cookie('landingPage', fullUrl, { maxAge: 1000 * 60 * 5, domain: config.rocket.domain });
  // }

  res.render(`${folderName}/index_en.pug`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'english',
    campaign: 'promotion',
    rocket: config.rocket,
    // search: search.replace('?', ''),
  });
});

router.get('/uu-dai-mo-the-tin-dung-HSBC/vn', function(req, res, next) {
  const url_parts = url.parse(req.url, true);
  const search = url_parts.search || "";

  // if (typeof req.cookies.landingPage === 'undefined') {
  let fullUrl = req.get('host') + req.url;
  res.cookie('landingPage', fullUrl, { maxAge: 1000 * 60 * 5, domain: config.rocket.domain });
  // }

  res.render(`${folderName}/index_vi.pug`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'vietnamese',
    campaign: 'promotion',
    rocket: config.rocket,
    // search: search.replace('?', ''),
  });
});

router.get('/uu-dai-mo-the-tin-dung-HSBC-dac-biet/vn', function(req, res, next) {
  const url_parts = url.parse(req.url, true);
  const search = url_parts.search || "";

  // if (typeof req.cookies.landingPage === 'undefined') {
  let fullUrl = req.get('host') + req.url;
  res.cookie('landingPage', fullUrl, { maxAge: 1000 * 60 * 5, domain: config.rocket.domain });
  // }

  res.render(`${folderName}/index_vi.pug`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'vietnamese',
    campaign: 'promotion',
    rocket: config.rocket,
    search: search.replace('?', ''),
    campaignId: "SSR-digital-AH",
  });
});

router.get('/special-promotion-apply-credit-card-HSBC/en', function(req, res, next) {
  const url_parts = url.parse(req.url, true);
  const search = url_parts.search || "";

  // if (typeof req.cookies.landingPage === 'undefined') {
  let fullUrl = req.get('host') + req.url;
  res.cookie('landingPage', fullUrl, { maxAge: 1000 * 60 * 5, domain: config.rocket.domain });
  // }

  res.render(`${folderName}/index_en.pug`, {
    folderName,
    csrfToken: req.csrfToken(),
    language: 'english',
    campaign: 'promotion',
    rocket: config.rocket,
    search: search.replace('?', ''),
    campaignId: "SSR-digital-AH",
  });
});

module.exports = router;
