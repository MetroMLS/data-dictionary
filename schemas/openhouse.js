
/**
 * Open House schema
 */

module.exports = {
  OpenHouseKey: {type:String, maxLength:255, core:true},
  OpenHouseId: {type:String, maxLength:255, core:true},
  OriginatingSystemKey: {type:String, maxLength:255, core:true},
  OriginatingSystemName: {type:String, maxLength:255},
  ListingKey: {type:String, maxLength:255, core:true},
  ListingId: {type:String, maxLength:255, core:true},
  ModificationTimestamp: {type:Date, core:true},
  OriginalEntryTimestamp: {type:Date},
  OpenHouseDate: {type:Date},
  OpenHouseStartTime: {type:Date, core:true},
  OpenHouseEndTime: {type:Date, core:true},
  ShowingAgentMlsID: {type:String, maxLength:25, core:true},
  ShowingAgentKey: {type:String, maxLength:255, core:true},
  ShowingAgentFirstName: {type:String, maxLength:50, core:true},
  ShowingAgentLastName: {type:String, maxLength:50, core:true},
  OpenHouseType: {type:String, maxLength:50, core:true},
  AppointmentRequiredYN: {type:Boolean},
  Refreshments: {type:String, maxLength:255},
  Attended: {type:String, maxLength:25},
  OpenHouseRemarks: {type:String, maxLength:500, core:true},
  Status: {type:String, maxLength:1, core:true},
};
