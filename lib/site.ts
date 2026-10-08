export const site = {
  name: 'Mahek Overseas',
  tagline: 'Global Recruitment Solutions',
  email: 'Mahekinternationaloverseas@gmail.com',
  owners: ['Rizwan Patel', 'Mahek Shaikh'],
  address: 'Office address coming soon, Mumbai, Maharashtra, India',
  mapQuery: 'Mumbai, Maharashtra, India',
  contacts: [
    { name: 'Mahek', display: '+91 99203 45440', number: '919920345440' },
    { name: 'Rizwan', display: '+91 99203 45441', number: '919920345441' },
  ],
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
} as const

export const primaryContact = site.contacts[0]

export function telLink(number: string) {
  return `tel:+${number}`
}

export function whatsappLink(number: string, text?: string) {
  const base = `https://wa.me/${number}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#process', label: 'Process' },
  { href: '#jobs', label: 'Jobs' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export const jobCategories = [
  'Construction',
  'Hospitality',
  'Healthcare',
  'Oil & Gas',
  'Logistics & Warehousing',
  'Retail',
  'Security',
  'Manufacturing',
  'Facility Management',
  'Driving & Transport',
  'Other',
]

export const destinationCountries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Oman',
  'Bahrain',
  'Malaysia',
  'Romania',
  'Poland',
  'Other',
]
