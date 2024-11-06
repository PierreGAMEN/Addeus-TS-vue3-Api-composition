export const setElementVisibilityStatus = (
  selector: string,
  obj: {
    [x: string]: { value: boolean };
  },
  dataProp: string,
  offset = 150
) => {
  const element = document.querySelector(selector);
  if (element) {
    const position = element.getBoundingClientRect();
    const viewport = window.innerHeight;

    if (
      !obj[dataProp]?.value && // Utilisation de .value pour les refs
      position.top + offset < viewport &&
      position.bottom > 0
    ) {
      // Si l'élément est visible, mettre à jour la propriété `value` de l'objet `obj`
      if (obj[dataProp]) {
        obj[dataProp].value = true;
      }

      // Gérer d'autres propriétés réactives optionnelles
      if (obj.isVisible) {
        obj.isVisible.value = true;
      }
      if (obj.p1) {
        obj.p1.value = true; // Mise à jour de p1
      }
      if (obj.p2) {
        obj.p2.value = true;
      }
      if (obj.p3) {
        obj.p3.value = true;
      }
      if (obj.itemsAreVisible) {
        obj.itemsAreVisible.value = true;
      }
    }
  } else {
    console.warn(`Element with selector "${selector}" not found.`);
  }
};
