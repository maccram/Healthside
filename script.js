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
 a.href = ''; 
 a.download = '';
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
});