/* =========================================================
   Conectapro — landing page
   AJUSTE AQUI seus contatos (1 lugar só):
========================================================= */
const PHONE = "5511990078668";              // ex.: 5511990078668 (DDI 55 + DDD + número, só dígitos)
const EMAIL = "mauricio@conectapro.io";
const WA_TEXT = "Olá! Vim pelo site do Conectapro.io e gostaria de saber mais sobre o monitoramento de temperatura para a RDC 978.";
/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Links de WhatsApp
  const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(WA_TEXT)}`;
  document.querySelectorAll("[data-wa]").forEach(a => { a.href = waHref; a.target = "_blank"; a.rel = "noopener"; });
  // Links de e-mail
  document.querySelectorAll("[data-email]").forEach(a => {
    a.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Conectapro — quero saber mais")}`;
  });

  // Menu mobile
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  // Ano no rodapé
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Scroll reveal
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(el => io.observe(el));
  }
});
