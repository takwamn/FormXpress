
export interface FormField {
  description:string;
  type: string;
  placeholder: any;
  label: string;
  hidelabel?: boolean; 
  rows?: number; 
  disabled?: boolean;
  hidden?: boolean;
  validators?: any[];
  defaultValue: any;
  options?: any[];
  selectedValue: any;
  key: any;
  value: any;
}
