function userDetailsCT(){
 var tenureYear=document.getElementById('tenure').value;
 var amount=document.getElementById('amount').value;
 clevertap.event.push("User Details Filled",{
    "Tenure Year": tenureYear,
    "Amount": amount
 })
}