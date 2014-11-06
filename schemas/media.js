
/**
 * Media schema
 */

module.exports = {
  MediaKey: {type:String, maxLength:255, core:true},
  ResourceRecordKey: {type:String, maxLength:255, core:true},
  ResourceRecordID: {type:String, maxLength:255, core:true},
  OriginatingSystemMediaKey: {type:String, maxLength:255, core:true},
  OriginatingSystemName: {type:String, maxLength:255},
  MediaObjectID: {type:String, maxLength:255, core:true},
  ChangedByMemberID: {type:String, maxLength:255, core:true},
  ChangedByMemberKey: {type:String, maxLength:255, core:true},
  MediaCategory: {type:String, maxLength:50},
  MimeType: {type:String, maxLength:50},
  ShortDescription: {type:String, maxLength:255},
  LongDescription: {type:String, maxLength:255},
  ModificationTimestamp: {type:Date, core:true},
  MediaModificationTimestamp: {type:Date},
  MediaURL: {type:String, maxLength:8000, core:true},
  MediaHTML: {type:String, maxLength:8000},
  Order: {type:Number, core:true},
  Group: {type:String, maxLength:50},
  ImageWidth: {type:Number},
  ImageHeight: {type:Number},
  ImageSizeDescription: {type:String, maxLength:50},
  ResourceName: {type:String, maxLength:50, core:true},
  ClassName: {type:String, maxLength:50},
  Permission: {type:String, maxLength:255},
  MediaStatus: {type:String, maxLength:50}
};
