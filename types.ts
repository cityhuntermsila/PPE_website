export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  specifications: string[];
}

export interface ServicePlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}
