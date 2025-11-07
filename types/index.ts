export type AvailabilityStatus = 'en-stock' | 'stock-limite' | 'tres-limite' | 'epuise'

export interface Medication {
  id: string
  name: string
  slug: string
  description: string
  status: AvailabilityStatus
  pharmaciesCount: number
  pharmacies: PharmacyAvailability[]
}

export interface PharmacyAvailability {
  pharmacyId: string
  status: AvailabilityStatus
}

export interface Pharmacy {
  id: string
  name: string
  address: string
  phone: string
  hours: string
  lat: number
  lng: number
  medications: MedicationAvailability[]
}

export interface MedicationAvailability {
  medicationId: string
  status: AvailabilityStatus
}

export interface Report {
  pharmacyName: string
  reason: string
  date: string
}

export interface Suggestion {
  currentName: string
  suggestedName: string
  comment?: string
  date: string
}
