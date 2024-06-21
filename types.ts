export interface PhotoSrc {
    original: string;
    large2x: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  }
  
  export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    src: PhotoSrc;
  }
  
  export interface FetchResult {
    total_results: number;
    page: number;
    per_page: number;
    photos: Photo[];
  }