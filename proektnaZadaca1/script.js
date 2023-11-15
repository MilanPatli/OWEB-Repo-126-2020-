//ALL
document.getElementById("button1").addEventListener("click", function () {
    window.location.href = "newPage.html";
});

document.getElementById("button2").addEventListener("click", function () {
    window.location.href = "homePage.html";
});

document.getElementById("button3").addEventListener("click", function () {
    window.location.href = "reviewsPage.html";
 });
 
//NEW   
var flag = 1;
var array = []; 
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
        copy.style.width = "100px";
        copy.id = img.src;
        element.appendChild(copy);
        flag=0;
    }
  }

//HOME
let slideIndex = 0;
showSlides();
  
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
  }

//REVIEWS        
function uploadPhotos() {
    const input = document.getElementById('photoInput');
    const gallery = document.getElementById('gallery');

    for (const file of input.files) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.classList.add('photo');

        const container = document.createElement('div');
        container.appendChild(img);

        const reviewInput = document.createElement('textarea');
        reviewInput.id = "autoresizing"
        reviewInput.placeholder = 'Leave a review';
        container.appendChild(reviewInput);
//
        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        container.appendChild(timestamp);

        reviewInput.addEventListener('input', function () {
            timestamp.textContent = getTimeStamp();
        });
        //
        gallery.appendChild(container);
      };
      reader.readAsDataURL(file);
    }
  }

  function getTimeStamp() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}
  
  function submitReview(event) {
    const review = event.target.previousElementSibling.value;

    const reviewElement = document.createElement('p');
    reviewElement.textContent = review;


    const reviewDiv = document.createElement('div');
    reviewDiv.appendChild(reviewElement);

    event.target.parentNode.appendChild(reviewDiv);
}


  textarea = document.querySelector("#autoresizing");
  textarea.addEventListener('input', autoResize, false);
  
  function autoResize() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
  }