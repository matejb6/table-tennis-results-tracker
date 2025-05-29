export const getLabel = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('span.label');
};

export const getValue = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('span.value');
};
