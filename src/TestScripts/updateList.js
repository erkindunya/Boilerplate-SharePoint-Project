var siteUrl = 'https://26-uat.kier.group';

function updateList(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('ErrorLogging');

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
        '<View><Query><Where><Geq><FieldRef Name=\'ID\'/>' +
        '<Value Type=\'Number\'>1</Value></Geq></Where></Query>' +
        '<RowLimit>10</RowLimit></View>'
    );
    console.log(camlQuery);
    this.collListItem = oList.getItems(camlQuery);

    clientContext.load(collListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded),
        Function.createDelegate(this, this.onQueryFailed)
    );
}







// var siteUrl = 'https://26-uat.kier.group';

// function updateList() {

//     var clientContext = new SP.ClientContext(siteUrl);
//     var oList = clientContext.get_web().get_lists().getByTitle('ErrorLogging');
//     this.oListItem = oList.getItemById(1);
//     console.log("hello");
//     console.log(siteUrl);
//     console.log(oList);
//     console.log(oListItem);
//     console.log(oListItem.get_item('Id'));
// };
// https:docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/hh185011(v%3doffice.14)

// var siteUrl = 'https://26-uat.kier.group';

// (function() {

// var clientContext = new SP.ClientContext(siteUrl);
// var oList = clientContext.get_web().get_lists().getByTitle('Regional Project Datasheet');

// this.oListItem = oList.getItemById(3);

// oListItem.set_item('Title', 'My Updated Title');

//oListItem.update();

//clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));

// console.log(oList);
// console.log(oListItem);
// })();

// function onQuerySucceeded() {

//     alert('Item updated!');
// }

// function onQueryFailed(sender, args) {

//     alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
// }