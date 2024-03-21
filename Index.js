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