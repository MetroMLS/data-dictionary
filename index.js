
/**
 * Schemas
 */

var property = require('./schemas/property');
var office = require('./schemas/office');
var member = require('./schemas/member');
var media = require('./schemas/media');
var openhouse = require('./schemas/openhouse');

/**
 * Expose Schemas
 */

module.exports = {
  // reso-defined
  property: property,
  office:   office,
  member:   member,
  media:    media,
  openhouse:openhouse,
  // export aliases
  listing:  property,
  agent:    member
}
