export interface Dataset {
  id: string;
  name: string;
  description: string;
  category: string;
  dataType: string[];
  useCases: string[];
  size: string;
  qualityScore: number;
  license: string;
  price: string;
  provider: string;
  verified: boolean;
}

export interface SearchRequest {
  query?: string;
  q?: string;
  category?: string;
}

export interface SearchResponse {
  query: string;
  count: number;
  results: Dataset[];
}
