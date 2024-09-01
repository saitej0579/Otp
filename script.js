//objects for modifying and accesing genertor section


// Objects for modifying and accessing tabs
const generatorTab = document.querySelector("[data-generatorTab]");
const validatorTab = document.querySelector("[data-validatorTab]");
const generatorSection = document.querySelector("[data-generatorSection]");
const validatorSection = document.querySelector("[data-validatorSection]");

// Function to switch tabs
function switchTab(newTab) {
  // Remove active class from current tab
  document.querySelector(".activeTab").classList.remove("activeTab");
  // Add active class to new tab
  newTab.classList.add("activeTab");
  // Hide current section
  document.querySelector(".activeSection").classList.remove("activeSection");
  // Show new section
  if (newTab === generatorTab) {
    generatorSection.classList.add("activeSection");
    validatorSection.classList.remove("activeSection");
  } else {
    validatorSection.classList.add("activeSection");
    generatorSection.classList.remove("activeSection");
  }
}



// Add event listeners to tabs
generatorTab.addEventListener("click", () => {
  switchTab(generatorTab);
});

validatorTab.addEventListener("click", () => {
  switchTab(validatorTab);
});




const outPutOtp = document.querySelector("[data-outOtp]");
const generteButton = document.querySelector("[data-generateButton]")
const copyButton = document.querySelector("[data-copyOtp]")

let num= ['1','2','3','4','5','6','7','8','9'];
let otp = "";

//code for switch the tab


// adding eventlistener for generate buttton
generteButton.addEventListener('click',()=>{
    //logic for generating the otp
    otp="";
    for(let i = 0; i < 4; i ++){
        index = Math.floor(Math.random() * 9 );
        otp += num[index]; 
    }
    
    outPutOtp.value = otp;
});

//function for copying the otp
function copycontent(){ 
    navigator.clipboard.writeText(otp); //until the password displayes this line would not be completes and the copies messege not shows 
}
//added eventlistener for copy button
copyButton.addEventListener("click",()=>{
    if(otp != ""){
        copycontent();
    }
})

//objects for modifying and accesing validate section

const validateButton = document.querySelector("[data-validateButton]");
const check = document.querySelector("[data-fetchOtp]");
const validateAns = document.querySelector("[data-validate]");

//adding eventlistener for validating the otp blick clicking validate button
validateButton.addEventListener("click",()=>{
  if(check.value==""){
    return;
  }
  else{
    if(check.value == otp){
      validateAns.innerHTML = "VALID OTP";
  }
  else{
      validateAns.innerHTML = "INVALID OTP";
  }
  }
});

