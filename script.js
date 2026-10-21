// CONFIGURACIÓN: sustituye este valor por el email real de RSP antes de publicar.
const CONTACT_EMAIL = "CAMBIAR-POR-EMAIL-REAL@example.com";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menuButton.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
    menuButton.textContent = "☰";
  }));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contactForm");
const status = document.querySelector("#formStatus");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!CONTACT_EMAIL || CONTACT_EMAIL.includes("CAMBIAR-POR-EMAIL-REAL") || CONTACT_EMAIL.endsWith("@example.com")) {
      status.textContent = "La web aún necesita el email real de contacto. Edita CONTACT_EMAIL en script.js antes de publicar.";
      status.style.color = "#8a4b28";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent("Consulta desde la web de RSP Pladur — " + data.get("service"));
    const body = encodeURIComponent(
      "Nombre: " + data.get("name") + "\n" +
      "Contacto: " + data.get("email") + "\n" +
      "Servicio: " + data.get("service") + "\n\n" +
      "Detalles del proyecto:\n" + (data.get("message") || "Sin detalles adicionales")
    );
    status.textContent = "Se va a abrir tu aplicación de correo. Revisa y envía el mensaje para completar la consulta.";
    status.style.color = "#3d654b";
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });
}