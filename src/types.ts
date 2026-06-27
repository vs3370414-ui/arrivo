/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  distance: number; // in km from current position
  eta: number; // in minutes
  foodType: 'Veg' | 'Non-Veg' | 'Pure Veg' | 'Multi-cuisine';
  prepTime: number; // in minutes
  image: string;
  signatureDishes: string[];
  x: number; // percentage coordinate on route map
  y: number; // percentage coordinate on route map
  hasEVCharging: boolean;
  hasWashroom: boolean;
  hasParking: boolean;
}

export interface Order {
  id: string;
  travelerName: string;
  avatar: string;
  vehicleNo: string;
  items: string[];
  eta: number; // minutes remaining
  tableNo: string;
  status: 'Queued' | 'Preparing' | 'Ready' | 'Completed';
  countdown: number; // seconds remaining for current stage
  timeOrdered: string;
  totalAmount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Road Trip Family' | 'Business Traveler' | 'Restaurant Owner' | 'Taxi Driver' | 'Tourist';
  quote: string;
  avatar: string;
  rating: number;
  location: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  description: string;
}
