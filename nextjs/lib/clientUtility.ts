"use client";

function scrollToId(id: string) {
  const targetElement: HTMLElement | null = document.querySelector(id);

  let targetScrollPosition = targetElement.getBoundingClientRect().top;
  if (targetScrollPosition < 110 && targetScrollPosition > 0) {
    return;
  }
  window.scrollTo({
    top: targetScrollPosition + window.scrollY - 100,
    behavior: "smooth",
  });
}

export function handleNavLinkClick(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  scrollToId(targetId);
}

export function createMoveToIdFunction(id: string) {
  return function () {
    scrollToId(id);
  };
}
