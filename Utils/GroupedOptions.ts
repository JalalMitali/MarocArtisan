export interface Options {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

  export interface GroupedOption {
    readonly label: string;
    readonly options: readonly Options[] | readonly Options[];
  }

  export const GroupedOptions1EN: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const GroupedOptions2EN: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const GroupedOptions3EN: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const groupedOptionsEN: readonly GroupedOption[] = [
    {
      label: 'Colours',
      options: GroupedOptions1EN,
    },
    {
      label: 'Flavours',
      options: GroupedOptions2EN,
    },
    {
      label: 'More',
      options: GroupedOptions3EN,
    },
  ];

  export const GroupedOptions1FR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const GroupedOptions2FR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const GroupedOptions3FR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const groupedOptionsFR: readonly GroupedOption[] = [
    {
      label: 'Colours',
      options: GroupedOptions1FR,
    },
    {
      label: 'Flavours',
      options: GroupedOptions2FR,
    },
    {
      label: 'More',
      options: GroupedOptions3FR,
    },
  ];



  export const GroupedOptions1AR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const GroupedOptions2AR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const GroupedOptions3AR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];

  export const groupedOptionsAR: readonly GroupedOption[] = [
    {
      label: 'Colours',
      options: GroupedOptions1AR,
    },
    {
      label: 'Flavours',
      options: GroupedOptions2AR,
    },
    {
      label: 'More',
      options: GroupedOptions3FR,
    },
  ];