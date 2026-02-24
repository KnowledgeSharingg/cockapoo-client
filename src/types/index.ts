export interface Blog {
  id: number;
  name: string;
  url: string;
  category: 'domestic' | 'global';
}

export type CategoryFilter = 'all' | 'domestic' | 'global';