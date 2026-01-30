export interface Testimonial {
  name: string;
  date: string;
  text: string;
  rating?: number;
}

export interface ValueProposition {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FormData {
  name: string;
  phone: string;
  petName: string;
  breed: string;
  message: string;
}

export interface ContactInfo {
  phone: string;
  address: string;
  email?: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface WebhookPayload extends FormData {
  source: string;
  timestamp: string;
}
