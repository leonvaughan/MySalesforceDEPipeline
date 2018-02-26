({
	packItem: function(component, event, helper) {
        //var btnClicked = event.getSource().get("v.label");
        //component.set("v.packedButton.disabled", true);
        //var a = component.get("v.item");
        //a.Packed__c = true;
        //component.set("v.item",a);
        component.set("v.item.Packed__c", true);

        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
        
        //component.set("v.item.Packed__c", true);
        

    }
})