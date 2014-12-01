
/**
 * SavedSearch
 */

module.exports = {
  SearchKey: {type:String, maxLength:255},
  SearchName: {type:String, maxLength:255},
  SearchDescription: {type:String, maxLength:4000},
  SearchType: {type:String, maxLength:50}, /* enum */
  OriginatingSystemKey: {type:String, maxLength:255},
  OriginatingSystemName: {type:String, maxLength:255},
  SearchQuery: {type:String, maxLength:8000},
  SearchQueryType: {type:String, maxLength:50}, /* enum */
  OriginalEntryTimestamp: {type:Date, maxLength:24},
  ModificationTimestamp: {type:Date, maxLength:24},
  ResourceName: {type:String, maxLength:50}, /* enum */
  ClassName: {type:String, maxLength:50}, /* enum */
  MemberKey: {type:String, maxLength:255},
  OriginatingSystemMemberKey: {type:String, maxLength:255},
  OriginatingSystemMemberName: {type:String, maxLength:255},
  MemberMlsId: {type:String, maxLength:25}
}
