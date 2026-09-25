(() => {
  const doorSystem = document.querySelector("[data-door-system]");
  const status = document.querySelector(".door-status");

  if (!doorSystem || !status) {
    return;
  }

  const root = document.documentElement;
  const doorways = [...doorSystem.querySelectorAll("[data-doorway]")].map((doorway) => ({
    doorway,
    button: doorway.querySelector(".door-tab"),
    reveal: doorway.querySelector(".door-reveal"),
    actionText: doorway.querySelector(".door-tab__action-text"),
    name: doorway.dataset.doorway,
  }));

  const labels = {
    arbeit: "Arbeit / Bauen",
    lernen: "Lernen / Schreiben",
    leben: "Leben / Begegnung",
  };

  let activeDoor = null;

  const setDoorState = (doorway, isOpen) => {
    doorway.doorway.classList.toggle("is-open", isOpen);
    doorway.button.setAttribute("aria-expanded", String(isOpen));
    doorway.reveal.setAttribute("aria-hidden", String(!isOpen));
    doorway.actionText.textContent = isOpen ? "Tür schließen" : "Tür öffnen";

    if (isOpen) {
      doorway.reveal.removeAttribute("inert");
    } else {
      doorway.reveal.setAttribute("inert", "");
    }
  };

  const openDoor = (name) => {
    activeDoor = name;

    doorways.forEach((doorway) => {
      setDoorState(doorway, doorway.name === activeDoor);
    });

    if (activeDoor) {
      status.textContent = `${labels[activeDoor]} ist geöffnet. Der passende Kontaktweg wartet.`;
    } else {
      status.textContent = "Wähle eine Tür. Ohne JavaScript sind alle drei Wege offen.";
    }
  };

  doorways.forEach((doorway, index) => {
    doorway.button.addEventListener("click", () => {
      openDoor(activeDoor === doorway.name ? null : doorway.name);
    });

    doorway.button.addEventListener("keydown", (event) => {
      const isDesktop = window.matchMedia("(min-width: 52.0625rem)").matches;
      const previousKey = isDesktop ? "ArrowLeft" : "ArrowUp";
      const nextKey = isDesktop ? "ArrowRight" : "ArrowDown";
      let nextIndex = null;

      if (event.key === previousKey) {
        nextIndex = (index - 1 + doorways.length) % doorways.length;
      } else if (event.key === nextKey) {
        nextIndex = (index + 1) % doorways.length;
      }

      if (nextIndex !== null) {
        event.preventDefault();
        doorways[nextIndex].button.focus();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !activeDoor) {
      return;
    }

    const currentDoor = doorways.find((doorway) => doorway.name === activeDoor);
    openDoor(null);
    currentDoor.button.focus();
  });

  openDoor(null);
  root.classList.add("enhanced");
})();
