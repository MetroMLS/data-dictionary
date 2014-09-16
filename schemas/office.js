
/**
 * Office Schema
 */

var Phone = String
var Url = String

module.exports = {
  OfficeKey: {type:String, primary:true},
  OriginatingSystemOfficeKey: {type:String},
  OriginatingSystemName: {type:String},
  OfficeMlsId: {type:String},
  OfficeName: {type:String},
  OfficePhone: {type:String},
  OfficePhoneExt: {type:Number},
  OfficeFax: {type:String},
  OfficeEmail: {type:String},
  OfficeType: {type:String},
  OfficeBranchType: {type:String},
  SocialMediaType: {type:String},
  SocialMediaUrlOrId: {type:String},
  OfficeAOR: {type:String},
  OfficeAORMlsId: {type:String},
  OfficeAORkey: {type:String},
  OfficeNrdsId: {type:String},
  OfficeCorporateLicense: {type:String},
  OfficeBrokerMlsId: {type:String},
  OfficeBrokerKey: {type:String},
  OfficeManagerMlsId: {type:String},
  OfficeManagerKey: {type:String},
  OfficeAddress1: {type:String},
  OfficeAddress2: {type:String},
  OfficeCity: {type:String},
  OfficeStateOrProvince: {type:String},
  OfficePostalCode: {type:String},
  OfficePostalCodePlus4: {type:String},
  OfficeCountyOrParish: {type:String},
  OfficeStatus: {type:String},
  OfficeAssociationComments: {type:String},
  TimestampEntered: {type:Date},
  TimestampLastLoggedIn: {type:Date},
  TimestampModified: {type:Date},
  MainOfficeKey: {type:String},
  MainOfficeMlsId: {type:String},
  FranchiseAffiliation: {type:String},
  IDXOfficeParticipationYN: {type:Boolean}
};
