const arr = [
  "apple",
  "Acorn Squash",
  "Adzuki Bean",
  "African Eggplant",
  "African Horned Cucumber",
  "Agati",
  "Alfalfa Sprout",
  "All Blue Potato",
  "Amaranth Leaf",
  "orange",
  "Beetroot",
  "Banana Squash",
  "Bai Yor Leaf",
  "Bamboo Shoots",
  "Beans",
  "Beans, green",
  "Beansprouts",
  "Beets",
  "Bell Peppers",
  "Carrot",
  "Turnip",
  "Radish",
  "White radish",
  "Celeriac",
  "Rutabaga/Swede",
  "Sugar beet",
  "Parsnip",
  "Horseradish",
  "Cucumber",
  "Daikon",
  "Dandelion Green",
  "Dasheen",
  "Datil Pepper",
  "Daylily",
  "Delaware Sweet Corn",
  "Delicacy White Kohlrabi",
  "Delicata",
  "Pumpkin",
  "Tomato",
  "Peppers",
  "Eggplant",
  "Fava Beans",
  "Fennel",
  "Fenugreek",
  "Fiddlehead Ferns",
  "Fingerlime",
  "Flat Beans",
  "French Beans",
  "French Sorrel",
  "String beans",
  "Green peas",
  "Corn",
  "Lady's finger",
  "Beans",
  "Chickpeas",
  "Onion",
  "Garlic",
  "Leek",
  "Fennel",
  "Spring onions",
  "Asparagus",
  "Lemon grass",
  "Celery",
  "Kohlrabi",
  "Celtuce",
  "Rhubarb",
  "Swiss chard",
  "Cardoon",
];

const input = document.querySelector("#search");
const suggestions = document.querySelector("#suggestions");

function debounce(fn, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

function getSuggestions() {
  suggestions.innerHTML = "";
  if (input.value == "") {
    return;
  }
  arr.forEach((word) => {
    if (word.toLowerCase().startsWith(input.value.toLowerCase())) {
      const suggestion = document.createElement("span");
      suggestion.style.display = "block";
      suggestion.textContent = word;
      suggestions.append(suggestion);
    }
  });
}

const debouncedFn = debounce(getSuggestions, 250);

input.addEventListener("input", debouncedFn);
