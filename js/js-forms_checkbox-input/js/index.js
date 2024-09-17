console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    return; // Beende hier, um das `alert()` nicht auszuführen
  }
  hideTosError();
  // --^-- write your code here --^--
  tosCheckbox.addEventListener("change", () => {
    if (tosCheckbox.checked) {
      hideTosError(); // Verstecke Fehlermeldung, wenn die Checkbox markiert ist
    } else {
      showTosError(); // Zeige Fehlermeldung, wenn die Checkbox nicht markiert ist
    }
  });
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
