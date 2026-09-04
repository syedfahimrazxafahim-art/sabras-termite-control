export interface ServiceItem {
  id: string;
  title: string;
  category: 'termite' | 'pest' | 'weed' | 'commercial';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  desertChallenge: string;
  treatmentProtocol: string;
}

export interface WorkGalleryItem {
  id: string;
  title: string;
  category: 'trailer' | 'field' | 'termites' | 'pests' | 'warehouse' | 'weeds';
  categoryLabel: string;
  description: string;
  location: string;
  result: string;
  badge: string;
  colorScheme: string;
  svgType: 'trailer' | 'spraying' | 'termites' | 'cricket' | 'roaches' | 'hazmat' | 'warehouse' | 'weeds' | 'shield';
}

export interface TestimonialItem {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  zipCode: string;
  serviceType: string;
  pestConcern: string;
  urgency: 'immediate' | 'standard' | 'preventative';
  notes?: string;
}
