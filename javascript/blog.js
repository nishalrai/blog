

function first(){
	var menu = document.getElementById("blogMenu"); 
	var blog=document.getElementById("blog");
	var blog1=document.getElementById("blog1");
	var blog2=document.getElementById("blog2");
	var blog3=document.getElementById("blog3");
	blog.style.display="block";  //displays the content of this id when the function is executed
	menu.style.display="none";   //disappears the blog menu content when the function is executed
	blog2.style.display="none";
	blog3.style.display="none"; 
	blog1.style.display="none";
}

function blogMenu(){
	// blogMenu is assigned to the variable var menu in this function
	var menu = document.getElementById("blogMenu");
	var blog=document.getElementById("blog");
	var blog1=document.getElementById("blog1");
	var blog2=document.getElementById("blog2");
	var blog3=document.getElementById("blog3");

	menu.style.display="block"; //displays the content of this id when the function is executed
	blog.style.display="none";
	blog1.style.display="none";
	blog2.style.display="none";
	blog3.style.display="none"; 
	
}

function second(){
	var menu = document.getElementById("blogMenu");
	var blog=document.getElementById("blog");
	var blog1=document.getElementById("blog1");
	var blog2=document.getElementById("blog2");
	var blog3=document.getElementById("blog3");

	blog1.style.display="block"; //displays the content of this id when the function is executed
	menu.style.display="none";
	blog2.style.display="none";
	blog3.style.display="none";
	blog.style.display="none";
}

function third(){
	var menu = document.getElementById("blogMenu");
	var blog=document.getElementById("blog");
	var blog1=document.getElementById("blog1");
	var blog2=document.getElementById("blog2");
	var blog3=document.getElementById("blog3");

	blog2.style.display="block";  //displays the content of this id when the function is executed
    menu.style.display="none";
	blog1.style.display="none";
	blog3.style.display="none";
	blog.style.display="none";
}
function fourth(){
	var menu = document.getElementById("blogMenu");
	var blog=document.getElementById("blog");
	var blog1=document.getElementById("blog1");
	var blog2=document.getElementById("blog2");
	var blog3=document.getElementById("blog3");

	blog3.style.display="block";  //displays the content of this id when the function is executed
    menu.style.display="none"; 
	blog1.style.display="none";
	blog2.style.display="none";
	blog.style.display="none";
}



