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
    clevertap.event.push("Web Push");

}

/**
 * Second-Visit Web Push Soft Pop-Up
 *
 * Use case: Show the push permission soft pop-up only from the second page visit onwards.
 * The CleverTap soft pop-up (box prompt) never fires automatically — it only appears when
 * clevertap.notifications.push() is called explicitly. This gives us full control over timing.
 *
 * How it works:
 *  1. On every page load we read + increment a visit counter stored in localStorage.
 *     localStorage persists across sessions and tabs on the same browser origin, making it
 *     the right choice for a "nth visit" gate (sessionStorage resets on every new tab/window).
 *  2. We only call clevertap.notifications.push() when visitCount >= 2.
 *  3. If the user has already granted or denied Notification.permission, the CleverTap SDK
 *     silently skips the prompt — so there is no risk of double-prompting.
 *  4. askAgainTimeInSeconds (7 days) prevents re-prompting users who dismissed without choosing.
 *     CleverTap also maintains its own internal frequency guard (webpush_last_notif_time),
 *     so the prompt won't appear more often than once every popupFrequency days regardless.
 */

// Step 1: Read and increment the visit counter.
let visitCount = parseInt(localStorage.getItem('ct_page_visits') || '0', 10);
visitCount++;
localStorage.setItem('ct_page_visits', visitCount);

// Step 2: Show the soft pop-up only from the second visit onwards.
if (visitCount >= 2) {
    clevertap.notifications.push({
        titleText: 'Would you like to receive notifications?',
        bodyText: 'We promise to only send you relevant content.',
        okButtonText: 'Subscribe',
        rejectButtonText: 'No thanks',
        okButtonColor: '#f28046',
        // If the user dismisses without choosing, wait 7 days before asking again.
        askAgainTimeInSeconds: 604800
    });
}
function renderCartDropOffPersonalisationCampaign(data) {
  const imageUrl=data.kv.img;
  console.log(img)


  var img = document.createElement('img');

  img.src = imageUrl;

  var imageContainer = document.getElementById('image-container');
  imageContainer.appendChild(img);

  

}

document.addEventListener("CT_web_native_display", function(event) {
    const data = event.detail;
    console.log(data);
      const topic = data.kv.topic;
      console.log("Printing Topic")
      console.log(topic)
      switch (topic) {
          case "nativeDisplay": {
            console.log("Inside switch case")
            console.log(data)
              renderCartDropOffPersonalisationCampaign(data)
              break;
         }
    }
  });


  //Axis Bank Solution
  //Axis Bank Solution
function planSelectedCT(planNumber){


  switch(planNumber){
      case 1:
          console.log("Plan 1 selected");
          clevertap.event.push("Plan Selected",{
              "Plan 1":"Regular Fixed Deposits"}
          )
          break;
          
      case 2:
          console.log("Plan 2 selected");
          clevertap.event.push("Plan Selected",{
          "Plan 2":"Tax-Saver Fixed Deposits"}
      )
          break;
          
      case 3:
          console.log("Plan 3 selected");
          clevertap.event.push("Plan Selected",{
          "Plan 3":"Fixed Deposits Plus"}
      )
          break;
          
  }
  console.log(planNumber)
  console.log("dwdwd")
  // clevertap.event.push()
}

console.log("Axis Bank Solution Live")