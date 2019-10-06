/* eslint-disable import/no-extraneous-dependencies */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

require('cypress-axe');
const {
  addMatchImageSnapshotCommand,
} = require('cypress-image-snapshot/command');

addMatchImageSnapshotCommand({
  failureThreshold: 0, // threshold for entire image (0.03)
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0 }, // threshold for each pixel (0.1)
  capture: 'viewport', // capture viewport in screenshot
});
