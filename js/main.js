const title = "Planeten";
const subTitle = "Alles over planeten";
const planets = ["Mercurius", "Venus", "Aarde", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];
const routes = ["Home", "Universum", "Planeten"];
const articles = [
    {
      title: "The Origin of the Universe",
      content: "The universe began about 13.8 billion years ago with the Big Bang, a massive explosion that created space, time, matter, and energy. Since then, the universe has been continuously expanding. Scientists use telescopes and other instruments to study the cosmic microwave background radiation, which helps us understand more about the early stages of the universe."
    },
    {
      title: "Black Holes",
      content: "Black holes are fascinating objects in the universe with gravity so strong that even light cannot escape. They form when very massive stars collapse at the end of their life cycle. Studying black holes helps scientists understand the laws of physics under extreme conditions."
    },
    {
      title: "Dark Matter and Dark Energy",
      content: "About 85% of the mass of the universe consists of dark matter, a mysterious substance that is not directly observable. Additionally, there is dark energy, which is responsible for the accelerated expansion of the universe. Together, they form one of the greatest mysteries in modern cosmology."
    },
    {
      title: "Exoplanets and Life Beyond Earth",
      content: "Exoplanets are planets that orbit stars other than our sun. Since the discovery of the first exoplanet in 1992, scientists have identified thousands of these worlds. The search for exoplanets in the habitable zone, where liquid water can exist, is a key part of the research into extraterrestrial life."
    }
  ];




// Opdracht 1:
// schrijf hier je code


// Opdracht 1:
// schrijf hier je code


// Opdracht 2:
// schrijf hier je code


// Opdracht 3:
// schrijf hier je code


// Opdracht 4:
// schrijf hier je code


// Opdracht 5:
// schrijf hier je code






function addPlanet(){
    const planet = prompt("Welke planeet wil je toevoegen?");
    planets.push(planet);
    const planetsView = document.querySelector(".plannitz");
    planetsView.innerHTML += "<li>" + planet + "</li>";
}