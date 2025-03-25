export const getMessage = (parentElem: HTMLElement): HTMLHeadingElement | null => {
  return parentElem.querySelector('p');
};
