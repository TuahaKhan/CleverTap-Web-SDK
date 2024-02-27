var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "TEST-449-RRZ-7W7Z" });
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data'
clevertap.dismissSpamControl=true;//Spam control 
// importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');// remove CleverTap server worker from your root folder
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


function Push(){
    clevertap.notifications.push({
        // "apnsWebPushId": "<apple web push id>",
        // "apnsWebPushServiceUrl": "<safari package service url>", 
           "titleText": "Would you like to receive Push Notifications?",
           "bodyText": "We promise to only send you relevant content and give you updates on your transactions",
           "okButtonText": "Sign me up!",
           "rejectButtonText": "No thanks",
           "okButtonColor":"#F28046",
           "askAgainTimeInSeconds":5,
        //   "serviceWorkerPath": "/foo/my_sw.js" // path to your custom service worker file
      });
    clevertap.event.push("Web Push");

}



// function tokenPermission() {
//     // Check if the function has already been executed
//     if (!localStorage.getItem('tokenPermissionExecuted')) {
//         // Execute the function only if it hasn't been executed before
//         clevertap.notifications.push({
//             // "apnsWebPushId":"<apple web push id>", //only for safari browser
//             // "apnsWebPushServiceUrl":"<safari package service url>",//only for safari browser
//             "titleText": 'Would you like to receive Push Notifications?',
//             "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
//             "okButtonText": 'Sign me up!',
//             "rejectButtonText": 'No thanks',
//             "okButtonColor": '#f28046'
//         });

//         // Mark that the function has been executed
//         localStorage.setItem('tokenPermissionExecuted', true);
//     }
// }

console.log("Native Display Vesion Live");
