public class CampingItemController {
    @AuraEnabled
    public static List<Camping_Item__c> getCampingItems() {
        List<Camping_Item__c> campingItems =
            [SELECT Id, Name, Packed__c, Price__c, Quantity__c FROM Camping_Item__c ORDER BY Name];
            
        //Add isAccessible() check
        return campingItems;
    }

}