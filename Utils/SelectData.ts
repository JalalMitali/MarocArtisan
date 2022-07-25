export interface Options {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  // fix failure
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

  export const CitySelect: readonly Options[] = [
    { value: 'casablanca', label: 'Casablanca', color: '#5243AA', isFixed: true  },
    {value: 'fez', label: 'Fez', color: '#00B8D9', isFixed: true },
    { value: 'tanger', label: 'Tanger', color: '#FF5630', isFixed: true },
    { value: 'marrakech', label: 'Marrakech', color: '#00B8D9', isFixed: true },
    { value: 'sale', label: 'Sale', color: '#5243AA', isFixed: true  },
    { value: 'meknes', label: 'Meknes', color: '#FF5630', isFixed: true },
    { value: 'rabat', label: 'Rabat', color: '#00B8D9', isFixed: true },
    { value: 'ouejda', label: 'Ouejda', color: '#5243AA', isFixed: true  },
    { value: 'kenitra', label: 'Kenitra', color: '#FF5630', isFixed: true },
    { value: 'tetouan', label: 'Tetouan', color: '#00B8D9', isFixed: true },
    { value: 'temara', label: 'Temara', color: '#5243AA', isFixed: true  },
    { value: 'safi', label: 'Safi', color: '#FF5630', isFixed: true },
    { value: 'mohammedia', label: 'Mohammedia', color: '#00B8D9', isFixed: true },
    { value: 'khouribga', label: 'Khouribga', color: '#5243AA', isFixed: true  },
    { value: 'eljadida', label: 'El Jadida', color: '#FF5630', isFixed: true },
  ];


  export const CitySelectFR: readonly Options[] = [
    { value: 'casablanca', label: 'Casablanca', color: '#5243AA', isFixed: true  },
    {value: 'fez', label: 'Fès', color: '#00B8D9', isFixed: true },
    { value: 'tanger', label: 'Tangier', color: '#FF5630', isFixed: true },
    { value: 'marrakech', label: 'Marrakech', color: '#00B8D9', isFixed: true },
    { value: 'sale', label: 'Salé', color: '#5243AA', isFixed: true  },
    { value: 'meknes', label: 'Meknès', color: '#FF5630', isFixed: true },
    { value: 'rabat', label: 'Rabat', color: '#00B8D9', isFixed: true },
    { value: 'ouejda', label: 'Ouejda', color: '#5243AA', isFixed: true  },
    { value: 'kenitra', label: 'Kénitra', color: '#FF5630', isFixed: true },
    { value: 'tetouan', label: 'Tétouan', color: '#00B8D9', isFixed: true },
    { value: 'temara', label: 'Témara', color: '#5243AA', isFixed: true  },
    { value: 'safi', label: 'Safi', color: '#FF5630', isFixed: true },
    { value: 'mohammedia', label: 'Mohammedia', color: '#00B8D9', isFixed: true },
    { value: 'khouribga', label: 'Khouribga', color: '#5243AA', isFixed: true  },
    { value: 'eljadida', label: 'El Jadida', color: '#FF5630', isFixed: true },
  ];


  export const CitySelectAR: readonly Options[] = [
    { value: 'casablanca', label: 'الدار البيضاء', color: '#5243AA', isFixed: true  },
    {value: 'fez', label: 'فاس', color: '#00B8D9', isFixed: true },
    { value: 'tanger', label: 'طنجة', color: '#FF5630', isFixed: true },
    { value: 'marrakech', label: 'مراكش', color: '#00B8D9', isFixed: true },
    { value: 'sale', label: 'سلا', color: '#5243AA', isFixed: true  },
    { value: 'meknes', label: 'مكناس', color: '#FF5630', isFixed: true },
    { value: 'rabat', label: 'الرباط', color: '#00B8D9', isFixed: true },
    { value: 'ouejda', label: 'وجدة', color: '#5243AA', isFixed: true  },
    { value: 'kenitra', label: 'القنيطرة', color: '#FF5630', isFixed: true },
    { value: 'tetouan', label: 'تطوان', color: '#00B8D9', isFixed: true },
    { value: 'temara', label: 'تمارة', color: '#5243AA', isFixed: true  },
    { value: 'safi', label: 'آسفي', color: '#FF5630', isFixed: true },
    { value: 'mohammedia', label: 'المحمدية', color: '#00B8D9', isFixed: true },
    { value: 'khouribga', label: 'خريبكة', color: '#5243AA', isFixed: true  },
    { value: 'eljadida', label: 'الجديدة', color: '#FF5630', isFixed: true },
  ];

  export const CasablancaDistrictSelectEN: readonly Options[] = [
    { value: 'aindiab', label: 'Ain Diab', color: '#00B8D9', isFixed: true },
    { value: 'ainsebaa', label: 'Ain Sebaa', color: '#5243AA', isFixed: true  },
    { value: 'anfa', label: 'Anfa', color: '#FF5630', isFixed: true },
    { value: 'boulvedere', label: 'Belvedere', color: '#00B8D9', isFixed: true },
    { value: 'bourgogne', label: 'Bourgogne', color: '#5243AA', isFixed: true  },
    { value: 'bousbir', label: 'Bousbir', color: '#FF5630', isFixed: true },
    { value: 'derbghallef', label: 'Derb Ghallef', color: '#00B8D9', isFixed: true },
    { value: 'derbsultan', label: 'Derb Sultan', color: '#5243AA', isFixed: true  },
    { value: 'hayelhanaa', label: 'Hay El Hanaa', color: '#FF5630', isFixed: true },
    { value: 'hayelhassani', label: 'Hay El Hassani', color: '#00B8D9', isFixed: true },
    { value: 'haysalama', label: 'Hay Salama', color: '#5243AA', isFixed: true  },
    { value: 'hubous', label: 'Hubous', color: '#FF5630', isFixed: true },
    { value: 'inara', label: 'Inara', color: '#00B8D9', isFixed: true },
    { value: 'lamkansa', label: 'Lamkansa', color: '#5243AA', isFixed: true  },
    { value: 'maarif', label: 'Maarif', color: '#FF5630', isFixed: true },
    { value: 'oasis', label: 'Oasis', color: '#00B8D9', isFixed: true },
    { value: 'oulfa', label: 'Oulfa', color: '#5243AA', isFixed: true  },
    { value: 'racine', label: 'Racine', color: '#FF5630', isFixed: true },
    { value: 'rochesnoires', label: 'Roches Noires', color: '#00B8D9', isFixed: true },
    { value: 'salmya2', label: 'Salmia 2', color: '#5243AA', isFixed: true  },
    { value: 'sbata', label: 'Sbata', color: '#FF5630', isFixed: true },
    { value: 'sidimaarouf', label: 'Sidi Maarouf', color: '#00B8D9', isFixed: true },
  ];
  export const CasablancaDistrictSelectFR: readonly Options[] = [
    { value: 'aindiab', label: 'Ain Diab', color: '#00B8D9', isFixed: true },
    { value: 'ainsebaa', label: 'Aïn Sebaâ', color: '#5243AA', isFixed: true  },
    { value: 'anfa', label: 'Anfa', color: '#FF5630', isFixed: true },
    { value: 'boulvedere', label: 'Belvedere', color: '#00B8D9', isFixed: true },
    { value: 'bourgogne', label: 'Bourgogne', color: '#5243AA', isFixed: true  },
    { value: 'bousbir', label: 'Bousbir', color: '#FF5630', isFixed: true },
    { value: 'derbghallef', label: 'Derb Ghallef', color: '#00B8D9', isFixed: true },
    { value: 'derbsultan', label: 'Derb Sultan', color: '#5243AA', isFixed: true  },
    { value: 'hayelhanaa', label: 'Hay El Hanaa', color: '#FF5630', isFixed: true },
    { value: 'hayelhassani', label: 'Hay El Hassani', color: '#00B8D9', isFixed: true },
    { value: 'haysalama', label: 'Hay Salama', color: '#5243AA', isFixed: true  },
    { value: 'hubous', label: 'Hubous', color: '#FF5630', isFixed: true },
    { value: 'inara', label: 'Inara', color: '#00B8D9', isFixed: true },
    { value: 'lamkansa', label: 'Lamkansa', color: '#5243AA', isFixed: true  },
    { value: 'maarif', label: 'Maârif', color: '#FF5630', isFixed: true },
    { value: 'oasis', label: 'Oasis', color: '#00B8D9', isFixed: true },
    { value: 'oulfa', label: 'Oulfa', color: '#5243AA', isFixed: true  },
    { value: 'racine', label: 'Racine', color: '#FF5630', isFixed: true },
    { value: 'rochesnoires', label: 'Roches Noires', color: '#00B8D9', isFixed: true },
    { value: 'salmya2', label: 'Salmia 2', color: '#5243AA', isFixed: true  },
    { value: 'sbata', label: 'Sbata', color: '#FF5630', isFixed: true },
    { value: 'sidimaarouf', label: 'Sidi Maârouf', color: '#00B8D9', isFixed: true },
  ];
  export const CasablancaDistrictSelectAR: readonly Options[] = [
    { value: 'aindiab', label: 'عين دياب', color: '#00B8D9', isFixed: true },
    { value: 'ainsebaa', label: 'عين السبع', color: '#5243AA', isFixed: true  },
    { value: 'anfa', label: 'أنفا', color: '#FF5630', isFixed: true },
    { value: 'boulvedere', label: 'بلفيدير', color: '#00B8D9', isFixed: true },
    { value: 'bourgogne', label: 'بورجون', color: '#5243AA', isFixed: true  },
    { value: 'bousbir', label: 'بوسبير', color: '#FF5630', isFixed: true },
    { value: 'derbghallef', label: 'درب غالف', color: '#00B8D9', isFixed: true },
    { value: 'derbsultan', label: 'درب سلطان', color: '#5243AA', isFixed: true  },
    { value: 'hayelhanaa', label: 'حي الهناء', color: '#FF5630', isFixed: true },
    { value: 'hayelhassani', label: 'حي الحسني', color: '#00B8D9', isFixed: true },
    { value: 'haysalama', label: 'حي سلامة', color: '#5243AA', isFixed: true  },
    { value: 'hubous', label: 'الحبوس', color: '#FF5630', isFixed: true },
    { value: 'inara', label: 'إنارا', color: '#00B8D9', isFixed: true },
    { value: 'lamkansa', label: 'لامكانسا', color: '#5243AA', isFixed: true  },
    { value: 'maarif', label: 'معاريف', color: '#FF5630', isFixed: true },
    { value: 'oasis', label: 'وازي', color: '#00B8D9', isFixed: true },
    { value: 'oulfa', label: 'ولفا', color: '#5243AA', isFixed: true  },
    { value: 'racine', label: 'راسين', color: '#FF5630', isFixed: true },
    { value: 'rochesnoires', label: 'روش نوار', color: '#00B8D9', isFixed: true },
    { value: 'salmya2', label: 'السالمية 2', color: '#5243AA', isFixed: true  },
    { value: 'sbata', label: 'سباتا', color: '#FF5630', isFixed: true },
    { value: 'sidimaarouf', label: 'سيدي معروف', color: '#00B8D9', isFixed: true },
  ];


  export const FezDistrictSelectEN: readonly Options[] = [
    { value: 'plumber', label: 'Electrican', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Plumber', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];
  export const FezDistrictSelectFR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
  ];
  export const FezDistrictSelectAR: readonly Options[] = [
    { value: 'plumber', label: 'Plumber', color: '#00B8D9', isFixed: true },
    { value: 'electrician', label: 'Electrican', color: '#5243AA', isFixed: true  },
    { value: 'carpenter', label: 'Carpenter', color: '#FF5630', isFixed: true },
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
  