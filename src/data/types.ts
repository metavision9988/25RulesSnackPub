export interface Testimonial {
  name: string;
  comment: string;
}

export interface Download {
  name: string;
  format: 'pdf' | 'docx' | 'xlsx';
  size: string;
  url: string;
}

export interface Errata {
  page: number;
  error: string;
  correction: string;
  status: 'reported' | 'verified' | 'fixed';
}

export interface Book {
  id: string;
  series: 'snack' | 'soul';
  title: string;
  subtitle:string;
  tagline: string;
  author: string;
  publishDate: string; // YYYY-MM-DD
  pages: number;
  readingTime: string; // "10-15분"
  rating: number; // 1-5
  reviews: number;
  price: string; // "$9.99"
  cover: string; // URL to image
  description: string;
  tableOfContents: string[];
  preface: string;
  testimonials: Testimonial[];
  downloads: Download[];
  erratas: Errata[];
  tags: string[];
  category: string; // e.g., "Business SNACK"
}

export interface Series {
  id: 'snack' | 'soul';
  name: string;
  tagline: string;
  description: string;
  icon: string; // '🍿' or '🌙'
  colors: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  characteristics: string[];
  targetAudience: string;
  readingTime: string;
}
