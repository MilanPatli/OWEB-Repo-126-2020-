var flag = 1;
var array = [];

document.getElementById("button1").addEventListener("click", function () {
    window.location.href = "newPage.html"; // Navigate to the new HTML file
});

document.getElementById("button2").addEventListener("click", function () {
    window.location.href = "homePage.html"; // Navigate to the new HTML file
});

document.getElementById("button3").addEventListener("click", function () {
    window.location.href = "reviewsPage.html"; // Navigate to the new HTML file
 });
 
    
 function toggleSelection(img) {
    img.classList.toggle("selected");
    var element = document.getElementById('order');
  
    array.forEach(e => {
      if(e == img){
        element.removeChild(document.getElementById(img.src));
      }
      else {
        flag=1;
      }
    });
  
    if(flag==1){
        array.push(img);
        var copy = document.createElement('img');
        copy.src = img.src;
        copy.style.width = "20px";  //zgolemi
        copy.id = img.src;
        element.appendChild(copy);
        flag=0;
    }
  }

