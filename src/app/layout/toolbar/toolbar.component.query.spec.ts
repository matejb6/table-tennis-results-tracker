export class ToolbarComponentQuery {
  public static getToolbar(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('mat-toolbar');
  }

  public static getToolbarIcon(parentElem: HTMLElement): HTMLElement | null | undefined {
    return ToolbarComponentQuery.getToolbar(parentElem)?.querySelector('mat-icon.mat-icon');
  }

  public static getToolbarTitle(parentElem: HTMLElement): HTMLElement | null | undefined {
    return parentElem.querySelector('span');
  }
}
