var slides;
var current;

function initCarousel()
{
	var elems = document.getElementsByClassName("carousel-content");
	slides = Array.from(elems);
	
	current = 0;
	slides[current].style.display = "block";
}

function prevSlide()
{
	var i = (current > 0) ? (current - 1) : (slides.length - 1);
	
	slides[current].style.display = "none";
	slides[i].style.display = "block";
	current = i;
}

function nextSlide()
{
	var i = (current + 1) % slides.length;
	
	slides[current].style.display = "none";
	slides[i].style.display = "block";
	current = i;
}
