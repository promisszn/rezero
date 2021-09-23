function billingFunction(){

    // Variables for elements gotten

    let shippingName = document.getElementById("shippingName");
    let shippingZip = document.getElementById("shippingZip");
    let billingName = document.getElementById("billingName");
    let billingZip = document.getElementById("billingZip");

    // Variable for checkbox

    let same = document.getElementById("same");

    // Checks if Checkbox is checked
    
    if(same.checked){
        billingName.setAttribute("value", shippingName.value);
        billingZip.setAttribute("value", shippingZip.value);
    }else{
        billingName.removeAttribute("value");
        billingZip.removeAttribute("value");
    }

}