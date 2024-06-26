 // Animation
 const text = "Enter the Vault...";
 let index = 0;
 const speed = 100; 
 const endDelay = 3000; 

 function typeWriter() {
     if (index < text.length) {
         document.getElementById("typewriter").innerHTML += text.charAt(index);
         index++;
         setTimeout(typeWriter, speed);
     } else {
         setTimeout(() => {
             document.getElementById("typewriter").innerHTML = "";
             index = 0; 
             typeWriter(); 
         }, endDelay);
     }
 }

 typeWriter(); 

 // Download button
 document.getElementById('downloadButton').addEventListener('click', function() {
 var a = document.createElement('a');
 a.href = 'https://github.com/maccram/Healthside/blob/7635cfba7ef96f4814d16b6d78587db1d55d6af4/Healthline-Vault.zip'; 
 a.download = 'Healthline-Vault.zip';
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
});
