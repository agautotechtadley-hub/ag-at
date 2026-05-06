
function sendBooking(serviceName,isTyres){
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const reg=document.getElementById("reg").value.trim();
  const message=document.getElementById("message").value.trim();
  if(!name||!phone||!reg){alert("Please complete your name, phone number and vehicle registration.");return;}
  let text="BOOKING REQUEST\n"+"Service: "+serviceName+"\n"+"Name: "+name+"\n"+"Phone: "+phone+"\n"+"Reg: "+reg+"\n";
  if(isTyres){
    const tyreQuantity=document.getElementById("tyreQuantity").value;
    const tyreSize=document.getElementById("tyreSize").value.trim();
    const tyreType=document.getElementById("tyreType").value;
    const tyreRange=document.getElementById("tyreRange").value;
    if(!tyreQuantity||!tyreSize||!tyreType||!tyreRange){alert("Please complete all tyre details.");return;}
    text+="Number of tyres: "+tyreQuantity+"\n"+"Tyre size: "+tyreSize+"\n"+"Tyre type: "+tyreType+"\n"+"Tyre range: "+tyreRange+"\n";
  }
  text+="Message: "+message;
  window.open("https://wa.me/447920778706?text="+encodeURIComponent(text),"_blank");
}
document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll("section").forEach(function(section){
    const text=(section.innerText||"").toLowerCase();
    if(text.includes("more services at ag auto tech tadley") || text.includes("other services") || text.includes("all services available")){
      section.remove();
    }
  });
});
