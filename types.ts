import React from 'react';

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  features: string[];
  isPremium?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface SaasMovie {
  title: string;
  match: string;
  category: string;
  imageColor: string;
}

export interface CatalogRow {
  title: string;
  items: SaasMovie[];
}

export interface SaaSIdea {
  title: string;
  tagline: string;
  description: string;
  monetization: string;
  techStack: string[];
}