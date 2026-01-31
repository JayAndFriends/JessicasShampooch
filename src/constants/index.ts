import type { Testimonial, BusinessHours, ContactInfo } from '@types/index';

export const APP_NAME = import.meta.env.VITE_APP_NAME || "Jessica's Shampooch";

export const CONTACT_INFO: ContactInfo = {
  phone: import.meta.env.VITE_PHONE_NUMBER || '+12344301210',
  address: import.meta.env.VITE_ADDRESS || '2005 Pine Hollow Blvd, Hermitage, PA 16148',
};

export const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || '';

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mary McDermott',
    date: 'August 2025',
    text: 'Took my little man today. It is obvious that Jessica loves animals and does whatever she needs to do to make them feel comfortable!!',
    rating: 5,
  },
  {
    name: 'Shannon Lynn',
    date: 'March 2025',
    text: 'Anyone who can groom my crazy cat is 100% in my book!! They did amazing!!',
    rating: 5,
  },
  {
    name: 'Kate Mcsherry',
    date: 'May 2025',
    text: 'I wanted to say thank you for doing such a wonderful job on my dog... I think you do a great job and would recommend you to any and all!!',
    rating: 5,
  },
];

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: 'Mon - Fri:', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday:', hours: '10:00 AM - 3:00 PM' },
  { day: 'Sunday:', hours: 'Closed' },
];

export const NAVIGATION_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'instagram',
  },
];

export const SEO = {
  title: "Jessica's Shampooch - Premium Pet Grooming in Hermitage, PA",
  description:
    'Premium, stress-free pet grooming in Hermitage, PA. Gentle handling, personalized care, and a cozy environment for your furry family members.',
  keywords:
    'pet grooming, dog grooming, cat grooming, Hermitage PA, pet spa, professional groomer, gentle pet care',
  ogImage: '/og-image.jpg',
  url: 'https://jessicas-shampooch.com',
};
