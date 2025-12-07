export interface Clinic {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string[];
  imageUrl: string;
  mapUrl: string;
  features: string[];
  services: string[]; // Specific orthopedic focus for this location
  isMainOffice?: boolean;
}

export interface ClinicProps {
  clinic: Clinic;
  onSelect: (clinic: Clinic) => void;
}
