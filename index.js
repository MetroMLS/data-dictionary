
/**
 * Schemas
 */

var property = require('./schemas/property');
var office = require('./schemas/office');
var member = require('./schemas/member');

/**
 * Expose Schemas
 */

module.exports = {
  // reso-defined
  property: property,
  office:   office,
  member:   member,
  // export aliases
  listing:  property,
  agent:    member
}
