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
}