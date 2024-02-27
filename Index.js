var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "TEST-449-RRZ-7W7Z" });
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data'
clevertap.dismissSpamControl=true;//Spam control 
(function () {
        var wzrk = document.createElement('script');
        wzrk.type = 'text/javascript';
        wzrk.async = true;
        wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wzrk, s);
 })();


//Web Pop-Ups

function box(){
    clevertap.event.push("Box Web Pop-up");
}
function banner(){
    clevertap.event.push("Banner Web Pop-up");

}
function interstitial(){
    clevertap.event.push("Interstitial Web Pop-up");

}
function image(){
    clevertap.event.push("Image Web Pop-up");

}


