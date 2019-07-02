function listItems() {

    var lists = web.get_lists();
    clientContext.load(lists, 'Include(Title, Id)');
    var list = lists.getByTitle('Approver Mapping');
    var query = new SP.CamlQuery();
    query.set_ViewXml("<View><Query>query expression</Query></View>");
    var listItems = list.getItems(query);
    clientContext.load(listItems);
    clientContext.executeQueryAsync(onSuccess, onError);

    function onSuccess() {
        var enumerator = listItems.getEnumerator();
        while (enumerator.moveNext()) {
            alert(enumerator.get_current().get_item("Title"));
        }
    }
}