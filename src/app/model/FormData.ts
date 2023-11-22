
export interface FormData {
     fields: {
          description: string; type: string; placeholder: any;
          label: string; hidelabel?: boolean;
          rows?: number; disabled: boolean; hidden: boolean, defaultValue: any,
          options?: any[], selectedValue: any, key: any, value: any,
     }[];
     columnsPerRow: number;

}
