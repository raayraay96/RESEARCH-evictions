

export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}

export interface AIAnalysisResult {
  text: string;
  sources: GroundingChunk[];
}

export interface CountyData {
  name: string;
  filings: number;
  rate: number;
  lat: number;
  lng: number;
  risk: 'Critical' | 'High' | 'Moderate' | 'Low';
  population: number;
  dataQuality?: 'Complete' | 'Partial' | 'Estimated';
  sourceNotes?: string;
}

export interface TrendData {
    labels: string[];
    actual: (number | null)[];
    predicted: (number | null)[];
}

export interface CorporateLandlord {
    name: string;
    filings: number;
    rate: number;
}

export interface RacialData {
    white: { rate: number; disparity: number };
    black: { rate: number; disparity: number };
    hispanic: { rate: number; disparity: number };
    other: { rate: number; disparity: number };
}

export interface LegalRepresentation {
    landlords: number;
    tenants: number;
    unrepresented: number;
}

export interface JudicialFinding {
  type: 'Financial' | 'Statistical' | 'Procedural' | 'Ethical';
  summary: string;
  evidenceLink?: string; 
}

export interface JudicialProfile {
  name: string;
  jurisdiction: string;
  zone: 'Red' | 'Yellow' | 'Accountability Concern';
  imageUrl: string;
  summary: string;
  findings: JudicialFinding[];
}