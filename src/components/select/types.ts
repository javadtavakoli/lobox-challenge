export interface ISelectElementProps {
  width?: string | number;
}
export interface ISelectProps extends ISelectElementProps {
  options: ISelectOption[];
  onSelect: (selectedKey: string) => void;
  onOptionAdded: (value: string) => ISelectOption | undefined;
}
export interface ISelectOption {
  key: string;
  value: string;
}
