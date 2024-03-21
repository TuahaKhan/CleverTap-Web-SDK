function OnUserLogin(){
var name= document.getElementById('name').value;
var identity = document.getElementById('identity').value;
 var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var gender = document.getElementById('gender').value;
var dob = document.getElementById('dob').value;
var image=document.getElementById('image').value;
console.log(name)

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
   console.log("Onuser")
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

