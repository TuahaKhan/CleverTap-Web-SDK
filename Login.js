var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({ "id": "TEST-449-RRZ-7W7Z" });
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
clevertap.dismissSpamControl=true;

(function () {
        var wzrk = document.createElement('script');
        wzrk.type = 'text/javascript';
        wzrk.async = true;
        wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wzrk, s);
 })();
function OnUserLogin(){
var name= document.getElementById('name').value;
var identity = document.getElementById('identity').value;
 var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var gender = document.getElementById('gender').value;
var dob = document.getElementById('dob').value;
var image=document.getElementById('image').value;

clevertap.onUserLogin.push({
    "Site": {
      "Name": name,            // String
      "Identity": identity,              // String or number
      "Email": email,         // Email address of the user
      "Phone": phone,           // Phone (with the country code)
      "Gender": gender,                     // Can be either M or F
      "DOB": new Date(dob),  
      "Photo":image,
      // Date of Birth. Date object
   // optional fields. controls whether the user will be sent email, push etc.
      "MSG-email": false,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   })
}


function PushProfile(){

   var image=document.getElementById('image').value;
    var name= document.getElementById('name').value;
    var identity = document.getElementById('identity').value;
     var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    clevertap.profile.push({
        "Site": {
          "Name": name,            // String
          "Identity": identity,              // String or number
          "Email": email,         // Email address of the user
          "Phone": phone,           // Phone (with the country code)
          "Gender": gender,                     // Can be either M or F
          "DOB": new Date(dob),
          "Photo":image,
                           // Date of Birth. Date object
       // optional fields. controls whether the user will be sent email, push etc.
          "MSG-email": false,                // Disable email notifications
          "MSG-push": true,                  // Enable push notifications
          "MSG-sms": true,                   // Enable sms notifications
          "MSG-whatsapp": true,              // Enable WhatsApp notifications
        }
       })
    }
    

// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional

