export interface ISelectProps {
  options: ISelectOption[];
  onSelect: (selectedKey: string) => void;
  onOptionAdded: (value: string) => void;
}
export interface ISelectOption {
  key: string;
  value: string;
}
