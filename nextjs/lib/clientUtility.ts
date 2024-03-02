"use client";

export function handleNavLinkClick(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement: HTMLElement | null = document.querySelector(targetId);

  let targetScrollPosition = targetElement.getBoundingClientRect().top;
  if (targetScrollPosition < 110 && targetScrollPosition > 0) {
    return;
  }
  window.scrollTo({
    top: targetScrollPosition + window.scrollY - 100,
    behavior: "smooth",
  });
}
