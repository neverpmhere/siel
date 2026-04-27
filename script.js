const form = document.getElementById("commandForm");
const input = document.getElementById("commandInput");
const error = document.getElementById("error");

const contentBox = document.getElementById("contentBox");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

const emailAddress = "your@email.com";

const pages = {
  lebenslauf: `
  <h2>[ LEBENSLAUF ]</h2>

  <h3>Identity</h3>
  <p><b>Name:</b> Sviatoslav</p>
  <p><b>Location:</b> Mannheim, Germany</p>
  <p><b>Languages:</b> Ukrainian (native), Russian (C2), English (B2), German (A1–A2)</p>

  <h3>Profile</h3>
  <p>
    Entry-level developer focused on web interfaces, logic systems and automation.
  </p>

  <h3>Skills</h3>
  <ul>
    <li>HTML / CSS / JavaScript (basic level)</li>
    <li>React + Vite (minimal experience)</li>
    <li>Team-based web development (task separation, component logic)</li>
    <li>Automation and Telegram bot concepts</li>
    <li>Logical systems (game logic adaptation to GoldSrc)</li>
  </ul>

  <h3>Qualification</h3>
  <p>
    College diploma in gastronomy. Qualified specialist in the field.
  </p>

  <h3>Direction</h3>
  <p>
    Transitioning into IT. Looking for Praktikum or entry-level position.
  </p>

  <p><b>System:</b> Space</p>
`
};

const popups = {
  email: `
    <h2>[ EMAIL ]</h2>
    <p><a href="mailto:${emailAddress}">${emailAddress}</a></p>
  `,

  contact: `
    <h2>[ CONTACT ]</h2>
    <p>Email: <a href="mailto:${emailAddress}">${emailAddress}</a></p>
    <p>GitHub: <a href="#">github.com/yourname</a></p>
    <p>Portfolio: <a href="#">your-site.com</a></p>
  `
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const command = input.value.trim().toLowerCase();

  error.textContent = "";
  contentBox.classList.add("hidden");
  popup.classList.add("hidden");

  if (pages[command]) {
    contentBox.innerHTML = pages[command];
    contentBox.classList.remove("hidden");
    input.value = "";
    return;
  }

  if (popups[command]) {
    popupContent.innerHTML = popups[command];
    popup.classList.remove("hidden");
    input.value = "";
    return;
  }

  error.textContent = "ERROR: PARAMETER NOT FOUND";
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});