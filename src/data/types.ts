export interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  photo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  certifications: string[];
  photo: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  procedure: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}
