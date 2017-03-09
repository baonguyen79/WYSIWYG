//******************************************
// create Famous persons
//******************************************
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
	  title: "Mahatma Gandhi",
	  name: "Mohandas Karamchand Gandhi",
	  bio: "Born and raised in a Hindu merchant caste family in coastal Gujarat, western India, and trained in law at the Inner Temple, London, Gandhi first employed nonviolent civil disobedience as an expatriate lawyer in South Africa, in the resident Indian community's struggle for civil rights. After his return to India in 1915,",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/800px-Portrait_Gandhi.jpg",
	  lifespan: {
	    birth: 1869,
	    death: 1948}
	  },

	  {
	  title: "Albert Einstein",
	  name: "Albert Einstein",
	  bio: "German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).[1][5]:274 Einstein's work is also known for its influence on the philosophy of science.[6][7] Einstein is best known in popular culture for his mass–energy equivalence formula E = mc2 (which has been dubbed the world most famous equation.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
	  lifespan: {
	    birth: 1879,
	    death: 1955}
	  }

];

var holdActiveId;
var outputEl = document.getElementById("outputEl");
var personDiv = "";
var personHeader = "";
var personSection = "";
var personImg = "";
var personFooter = "";

// Create person DOM elements
for (var i = 0; i<FamousPersons.length; i++) {

  personDiv = document.createElement("div");
  personDiv.className = "person_container";
  personDiv.id = `"person-${i}"`;

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

//******************************************
// Event Handler function when person element click
//******************************************
function personEvent(e){
 
    e.currentTarget.classList.add("dashed");
    this.childNodes[2].id = "select";
    var textBox = document.getElementById("inputText");
    console.log("this" , this.childNodes[2].textContent);
    textBox.value = this.childNodes[2].textContent;
    textBox.focus();
    textBox.addEventListener("keyup", textBoxEvent);

} 

//******************************************
// Event Handler function when text area 
//******************************************
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
