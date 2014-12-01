
/**
 * HistoryTransactional
 */

module.exports = {
  HistoryRecordKey: {type:String, primary:true, maxLength:255},
  OriginatingSystemHistoryKey: {type:String, maxLength:255},
  OriginatingSystemName: {type:String, maxLength:255},
  ChangedByMemberID: {type:String, maxLength:25},
  ChangedByMemberKey: {type:String, maxLength:255},
  ChangeType: {type:String, maxLength:255}, /* enum! */
  ChangeTimestamp: {type:Date, maxLength:24},
  FieldKey: {type:String, maxLength:255},
  FieldName: {type:String, maxLength:255},
  PreviousValue: {type:String, maxLength:8000},
  NewValue: {type:String, maxLength:8000},
  ClassName: {type:String, maxLength:255},
  ResourceName: {type:String, maxLength:255},
  ResourceRecordKey: {type:String, maxLength:255},
  ResourceRecordID: {type:String, maxLength:255}
}
