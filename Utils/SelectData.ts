export interface Options {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

  export const ArtisanOpenings: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];


  export const ArtisanOpeningsFR: readonly Options[] = [
    { value: 'plumber', label: 'Plombier', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Électricien', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Menuisier', color: '#FF5630', isFixed: true },
  ];


  export const ArtisanOpeningsAR: readonly Options[] = [
    { value: 'plumber', label: 'بلومبي', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'كهربائي', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'نجار', color: '#FF5630', isFixed: true },
  ];

  export const jobType: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];
  export const languages: readonly Options[] = [
    { value: 'en', label: 'English', color: '#00B8D9', isFixed: true },
    { value: 'fr', label: 'Français', color: '#5243AA', isFixed: true  },
    { value: 'ar', label: 'العربية', color: '#FF5630', isFixed: true },
  ];

  