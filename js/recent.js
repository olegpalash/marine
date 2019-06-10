function selectProject(project)
{
	if (project.className == "project")
	{
		var selected = document.getElementsByClassName("project-selected");
		
		for (var i = 0; i < selected.length; i++)
		{
			selected[i].className = "project";
		}		
		
		project.className = "project-selected";
	}
	else
	{
		project.className = "project";
	}	
}

