export interface ISelectElementProps {
  width?: string | number;
}
export interface ISelectProps extends ISelectElementProps {
  options: ISelectOption[];
  onSelect: (selectedKey: string) => void;
  onOptionAdded: (value: string) => void;
}
export interface ISelectOption {
  key: string;
  value: string;
}
