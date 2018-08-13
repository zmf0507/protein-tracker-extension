$(document).ready(function(){

    chrome.storage.sync.get('goal' , function(item) {
        
        $('#goal').text(parseInt(item.goal));

    });

    $('#save').click(function() {
        var goal =  $('#goal').val();
        if(goal) {
            chrome.storage.sync.set({'goal': goal}, function() {
                close();
            })
        }

    });

    $('#reset').click(function() {
        chrome.storage.sync.set({'total': 0}, function() {
            var opt = {
             'type' : "basic",
             'title' : 'total reset',
            'message' : 'the total has been reset',
            'iconUrl' :'icon.png'   
            }

            chrome.notifications.create('reset'+Math.random(), opt, function() {});
        });

        
    });
});