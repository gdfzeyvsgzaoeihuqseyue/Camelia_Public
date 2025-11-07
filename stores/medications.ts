import { defineStore } from 'pinia'
import type { Medication, Pharmacy, AvailabilityStatus } from '~/types'

export const useMedicationsStore = defineStore('medications', {
  state: () => ({
    medications: [
      {
        id: '1',
        name: 'Paracétamol 1000mg',
        slug: 'paracetamol-1000mg',
        description: 'Antalgique et antipyrétique',
        status: 'en-stock' as AvailabilityStatus,
        pharmaciesCount: 12,
        pharmacies: [
          { pharmacyId: '1', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '2', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '3', status: 'stock-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '2',
        name: 'Amoxicilline 500mg',
        slug: 'amoxicilline-500mg',
        description: 'Antibiotique de la famille des pénicillines',
        status: 'stock-limite' as AvailabilityStatus,
        pharmaciesCount: 8,
        pharmacies: [
          { pharmacyId: '1', status: 'stock-limite' as AvailabilityStatus },
          { pharmacyId: '2', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '4', status: 'tres-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '3',
        name: 'Doliprane 500mg',
        slug: 'doliprane-500mg',
        description: 'Traitement symptomatique de la douleur et de la fièvre',
        status: 'en-stock' as AvailabilityStatus,
        pharmaciesCount: 15,
        pharmacies: [
          { pharmacyId: '1', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '2', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '3', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '4', status: 'stock-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '4',
        name: 'Ibuprofène 400mg',
        slug: 'ibuprofene-400mg',
        description: 'Anti-inflammatoire non stéroïdien',
        status: 'tres-limite' as AvailabilityStatus,
        pharmaciesCount: 3,
        pharmacies: [
          { pharmacyId: '1', status: 'tres-limite' as AvailabilityStatus },
          { pharmacyId: '3', status: 'epuise' as AvailabilityStatus }
        ]
      },
      {
        id: '5',
        name: 'Ventoline 100µg',
        slug: 'ventoline-100ug',
        description: 'Bronchodilatateur pour le traitement de l\'asthme',
        status: 'epuise' as AvailabilityStatus,
        pharmaciesCount: 0,
        pharmacies: [
          { pharmacyId: '1', status: 'epuise' as AvailabilityStatus },
          { pharmacyId: '2', status: 'epuise' as AvailabilityStatus },
          { pharmacyId: '3', status: 'epuise' as AvailabilityStatus },
          { pharmacyId: '4', status: 'epuise' as AvailabilityStatus }
        ]
      },
      {
        id: '6',
        name: 'Aspirine 100mg',
        slug: 'aspirine-100mg',
        description: 'Antiagrégant plaquettaire',
        status: 'stock-limite' as AvailabilityStatus,
        pharmaciesCount: 6,
        pharmacies: [
          { pharmacyId: '2', status: 'stock-limite' as AvailabilityStatus },
          { pharmacyId: '3', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '4', status: 'stock-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '7',
        name: 'Spasfon 80mg',
        slug: 'spasfon-80mg',
        description: 'Antispasmodique',
        status: 'en-stock' as AvailabilityStatus,
        pharmaciesCount: 10,
        pharmacies: [
          { pharmacyId: '1', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '2', status: 'en-stock' as AvailabilityStatus },
          { pharmacyId: '3', status: 'stock-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '8',
        name: 'Levothyrox 50µg',
        slug: 'levothyrox-50ug',
        description: 'Traitement hormonal substitutif de l\'hypothyroïdie',
        status: 'tres-limite' as AvailabilityStatus,
        pharmaciesCount: 2,
        pharmacies: [
          { pharmacyId: '1', status: 'tres-limite' as AvailabilityStatus },
          { pharmacyId: '4', status: 'epuise' as AvailabilityStatus }
        ]
      }
    ] as Medication[],

    pharmacies: [
      {
        id: '1',
        name: 'Pharmacie Centrale',
        address: '15 Avenue des Champs, 75001 Paris',
        phone: '01 42 33 44 55',
        hours: 'Lun-Sam: 8h-20h, Dim: 9h-13h',
        lat: 48.8566,
        lng: 2.3522,
        medications: [
          { medicationId: '1', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '2', status: 'stock-limite' as AvailabilityStatus },
          { medicationId: '3', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '4', status: 'tres-limite' as AvailabilityStatus },
          { medicationId: '5', status: 'epuise' as AvailabilityStatus },
          { medicationId: '7', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '8', status: 'tres-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '2',
        name: 'Pharmacie du Marché',
        address: '42 Rue de la République, 69002 Lyon',
        phone: '04 78 37 21 88',
        hours: 'Lun-Ven: 9h-19h, Sam: 9h-18h',
        lat: 45.7640,
        lng: 4.8357,
        medications: [
          { medicationId: '1', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '2', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '3', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '5', status: 'epuise' as AvailabilityStatus },
          { medicationId: '6', status: 'stock-limite' as AvailabilityStatus },
          { medicationId: '7', status: 'en-stock' as AvailabilityStatus }
        ]
      },
      {
        id: '3',
        name: 'Pharmacie de la Gare',
        address: '8 Place de la Gare, 31000 Toulouse',
        phone: '05 61 23 45 67',
        hours: 'Lun-Dim: 7h-22h',
        lat: 43.6047,
        lng: 1.4442,
        medications: [
          { medicationId: '1', status: 'stock-limite' as AvailabilityStatus },
          { medicationId: '3', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '4', status: 'epuise' as AvailabilityStatus },
          { medicationId: '5', status: 'epuise' as AvailabilityStatus },
          { medicationId: '6', status: 'en-stock' as AvailabilityStatus },
          { medicationId: '7', status: 'stock-limite' as AvailabilityStatus }
        ]
      },
      {
        id: '4',
        name: 'Pharmacie des Pins',
        address: '123 Boulevard des Pins, 13008 Marseille',
        phone: '04 91 76 54 32',
        hours: 'Lun-Sam: 8h30-19h30',
        lat: 43.2965,
        lng: 5.3698,
        medications: [
          { medicationId: '2', status: 'tres-limite' as AvailabilityStatus },
          { medicationId: '3', status: 'stock-limite' as AvailabilityStatus },
          { medicationId: '5', status: 'epuise' as AvailabilityStatus },
          { medicationId: '6', status: 'stock-limite' as AvailabilityStatus },
          { medicationId: '8', status: 'epuise' as AvailabilityStatus }
        ]
      }
    ] as Pharmacy[]
  }),

  getters: {
    getMedicationBySlug: (state) => {
      return (slug: string) => state.medications.find(m => m.slug === slug)
    },

    getPharmacyById: (state) => {
      return (id: string) => state.pharmacies.find(p => p.id === id)
    },

    getMedicationById: (state) => {
      return (id: string) => state.medications.find(m => m.id === id)
    },

    filteredMedications: (state) => {
      return (searchQuery: string, statusFilter: AvailabilityStatus | null) => {
        let filtered = state.medications

        if (searchQuery) {
          const query = searchQuery.toLowerCase()
          filtered = filtered.filter(m =>
            m.name.toLowerCase().includes(query) ||
            m.description.toLowerCase().includes(query)
          )
        }

        if (statusFilter) {
          filtered = filtered.filter(m => m.status === statusFilter)
        }

        return filtered
      }
    }
  }
})
