export const getToolbar = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('mat-toolbar');
};

export const getToolbarIcon = (parentElem: HTMLElement): HTMLElement | null | undefined => {
  return getToolbar(parentElem)?.querySelector('mat-icon.mat-icon');
};

export const getToolbarTitle = (parentElem: HTMLElement): HTMLElement | null | undefined => {
  return parentElem.querySelector('span');
};
