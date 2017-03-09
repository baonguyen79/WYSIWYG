var FamousPersons = [

	{
	  title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797}
	  },
	  {
	  title: "Samurai2",
	  name: "Tomoe Gozen2",
	  bio: " 2 Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	}

];

var holdActiveId;
var outputEl = document.getElementById("outputEl");
var personDiv = "";
var personHeader = "";
var personSection = "";
var personImg = "";
var personFooter = "";

for (var i = 0; i<FamousPersons.length; i++) {
  // Give each person element a unique identifier

  personDiv = document.createElement("div");
  personDiv.className = "person_container";
  personDiv.id = `"person-${i}"`;
  // personDiv.innerHTML = `class="person__container" id="person--${i}"`;
  personHeader = document.createElement("header");
  personHeader.innerHTML = `${FamousPersons[i].name} , ${FamousPersons[i].title}`;

  personImg = document.createElement("IMG");
  personImg.setAttribute("src", `${FamousPersons[i].image}`);

  personSection = document.createElement('section');
  personSection.innerHTML = `${FamousPersons[i].bio}`;


  personFooter = document.createElement('footer');
  personFooter.innerHTML = `${FamousPersons[i].lifespan.birth} - ${FamousPersons[i].lifespan.death}`;

  personDiv.appendChild(personHeader);
  personDiv.appendChild(personImg);  
  personDiv.appendChild(personSection);
  personDiv.appendChild(personFooter);
  outputEl.appendChild(personDiv);
}


// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", personEvent);
    
  };


function personEvent(e){
// Logic to execute when the element is clicked
 
    e.currentTarget.classList.add("dashed");
    this.childNodes[2].id = "select";
    var textBox = document.getElementById("inputText");
    console.log("this" , this.childNodes[2].textContent);
    textBox.value = this.childNodes[2].textContent;
    textBox.focus();
    textBox.addEventListener("keyup", textBoxEvent);

} 

function textBoxEvent (e){
	e.preventDefault();
	var select = document.getElementById("select");

	if (e.keyCode === 13){
		this.value = "";
		this.blur();
		this.removeEventListener("keyup", textBoxEvent);
		var a = document.getElementById("select");
		a.parentNode.classList.toggle("dashed");
		a.id = "";
		}
	else {
			select.innerText = this.value;
	}
}
