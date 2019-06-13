function onFocus(elem)
{
	if (elem.name == "name")
	{
		if (elem.value == "Name*") 
		{
			elem.value = "";
		}
	}
	else if (elem.name == "email")
	{
		if (elem.value == "E-mail*") 
		{
			elem.value = "";
		}
	}
}

function onBlur(elem)
{
	if (elem.name == "name")
	{
		if (elem.value == "") 
		{
			elem.value = "Name*";
		}
	}
	else if (elem.name == "email")
	{
		if (elem.value == "") 
		{
			elem.value = "E-mail*";
		}
	}
}

