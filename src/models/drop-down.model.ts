export interface DropDownModel {
  name: string;
  iconName?: string;
  functionAction?: <T>(args?: T) => unknown;
  isDisable?: boolean;
}
