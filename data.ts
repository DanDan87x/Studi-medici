import { Clinic } from './types';

export const clinics: Clinic[] = [
  {
    id: '1',
    name: 'Centro Medico San Luca',
    city: 'Milano',
    address: 'Via Montenapoleone 12, Milano',
    phone: '+39 02 1234567',
    email: 'milano@dottrossi.it',
    hours: ['Lun - Mer: 09:00 - 18:00', 'Ven: 09:00 - 13:00'],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Montenapoleone+12+Milano',
    features: ['Convenzione Assicurativa', 'Sala Operatoria', 'Riabilitazione'],
    services: ['Chirurgia Ginocchio', 'Protesi Anca', 'Infiltrazioni'],
    isMainOffice: true
  },
  {
    id: '2',
    name: 'Studio Ortopedico EUR',
    city: 'Roma',
    address: 'Viale Europa 30, Roma',
    phone: '+39 06 9876543',
    email: 'roma@dottrossi.it',
    hours: ['Mar - Gio: 10:00 - 19:00'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Viale+Europa+30+Roma',
    features: ['Ascensore', 'Ecografia Muscolotendinea', 'Fisioterapia'],
    services: ['Traumatologia Sportiva', 'Spalla', 'Medicina Rigenerativa']
  },
  {
    id: '3',
    name: 'Clinica Villa Serena',
    city: 'Torino',
    address: 'Corso Vittorio Emanuele II 50, Torino',
    phone: '+39 011 5554443',
    email: 'torino@dottrossi.it',
    hours: ['Lun: 14:00 - 19:00', 'Sab: 09:00 - 12:00'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&q=80&w=800',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Corso+Vittorio+Emanuele+II+50+Torino',
    features: ['Convenzione SSN', 'Parcheggio Gratuito', 'RX in sede'],
    services: ['Chirurgia Mano', 'Piede', 'Ortopedia Pediatrica']
  },
  {
    id: '4',
    name: 'Medical Center Bologna',
    city: 'Bologna',
    address: 'Via Indipendenza 5, Bologna',
    phone: '+39 051 9988776',
    email: 'bologna@dottrossi.it',
    hours: ['Ven: 08:30 - 17:30'],
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Indipendenza+5+Bologna',
    features: ['Palestra Riabilitativa', 'Parcheggio', 'Wi-Fi'],
    services: ['Colonna Vertebrale', 'Posturologia', 'Visite di controllo']
  }
];
