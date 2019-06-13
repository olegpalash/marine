function accordeonClick(btn)
{
	if (btn.className == "accordeon-button")
	{
		btn.className = "accordeon-button-active";
		
		var next = btn.nextElementSibling;
		next.style.display = "block";
	}
	else
	{
		btn.className = "accordeon-button";
		
		var next = btn.nextElementSibling;
		next.style.display = "none";
	}
}

