export interface Options {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

  export const artisanOpenings: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrican', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];
  export const languages: readonly Options[] = [
    { value: 'en', label: 'English', color: '#00B8D9', isFixed: true },
    { value: 'fr', label: 'Français', color: '#5243AA', isFixed: true  },
    { value: 'ar', label: 'العربية', color: '#FF5630', isFixed: true },
  ];

  