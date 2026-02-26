export interface Product {
  id: string;
  name: string;
  capacity: string;
  description: string;
  features: string[];
  image: string;
  useCase: string;
  specs: {
    dimensions: string;
    power: string;
    cycleTime: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
