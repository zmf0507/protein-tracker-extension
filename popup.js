$(document).ready(function(){

    chrome.storage.sync.get(['total', 'goal'] , function(item) {
        
        $('#total').text(parseInt(item.total));
        $('#goal').text(parseInt(item.goal));

    });
$('#add-amount').click(function(){
chrome.storage.sync.get(['total', 'goal'], function(item) {
    var newtotal = 0;
    if(item.total) {
        newtotal += parseInt(item.total);
        console.log(newtotal);
    }

    var amount = $('#amount').val();
    newtotal += parseInt(amount);
    console.log(newtotal);

    chrome.storage.sync.set({'total' : newtotal} );
    $('#total').text(newtotal);
    $('#amount').val('');

    if(newtotal > item.goal) {
        var opt = {
            'type' : "basic",
            'title' : 'goal accomplished',
           'message' : 'You have achieved the set goal',
           'iconUrl' :'icon.png'   
           }

           chrome.notifications.create('goal-met'+Math.random(), opt, function() {});
    }
})
});
});