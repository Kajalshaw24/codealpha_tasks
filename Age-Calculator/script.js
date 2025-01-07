const btnE1 = document.getElementById("btn");
const birthE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");
const themeSelectors = document.querySelectorAll(".theme-selector");

// Function to calculate and display age
function calculateAge() {
  const birthdayValue = birthE1.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`;
  }
}

// Helper function to calculate age
function getAge(birthdayValue) {
  const birthdayDate = new Date(birthdayValue);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  }
  return age;
}

// Function to change themes
function changeTheme(theme) {
  document.body.className = ''; // Remove all theme classes
  document.body.classList.add(theme); // Add the selected theme
  localStorage.setItem("savedTheme", theme); // Save the theme in localStorage
}

// Load saved theme or default to "standard"
const savedTheme = localStorage.getItem("savedTheme");
changeTheme(savedTheme || "standard");

// Add event listeners for theme buttons
themeSelectors.forEach(selector => {
  selector.addEventListener("click", () => {
    const theme = selector.classList[0].split("-")[0]; // Extract theme name
    changeTheme(theme);
  });
});

// Add event listener for Calculate Age button
btnE1.addEventListener("click", calculateAge);
