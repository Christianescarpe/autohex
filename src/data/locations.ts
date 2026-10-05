import { ALL_LOCATIONS, type LocationData } from './sheetContent';

export interface Location extends LocationData {
  region: string;
  blurb: string;
  local: string;
}

const LOCATION_EXTRAS: Record<string, { region: string; blurb: string; local: string }> = {
  oton: {
    region: 'Iloilo (Home Base)',
    blurb: 'Our main workshop is located right here in Oton on C1 Road, Abilay Sur. Drop by 24 hours or message us for a same-day assessment.',
    local: 'From local tricycle operators to transport fleets along C1 Road, Oton drivers trust Autohex for ECU work, remapping, and module repair without traveling into the city.',
  },
  leganes: {
    region: 'Metro Iloilo',
    blurb: 'Leganes drivers and fleet operators: dealer-level ECU diagnostics, remapping, and electronic repair are just a message away via the Circumferential Road.',
    local: 'Whether it is a family commuter or a delivery truck running the Leganes–Iloilo corridor daily, we keep your engine responsive and your fuel costs manageable.',
  },
  pavia: {
    region: 'Metro Iloilo',
    blurb: 'Pavia vehicle owners: skip dealer delays. We repair and program modules and tune diesel engines right along C1 Road, minutes from Ungka and Aganan.',
    local: 'Serving daily commuters, logistics vans, and commercial trucks passing through Pavia with fast computerized fault diagnosis and ECU calibration.',
  },
  tigbauan: {
    region: 'First District, Iloilo',
    blurb: 'Tigbauan is our immediate southern neighbor along the coast — most vehicle owners reach our Oton workshop in under 20 minutes.',
    local: 'Coastal utility vehicles, transport multicabs, and farm haulers in Tigbauan count on Autohex for DPF/EGR solutions, module repair, and honest electronics testing.',
  },
  guimbal: {
    region: 'First District, Iloilo',
    blurb: 'Guimbal motorists and heavy haulers: protect your vehicle with board-level module repairs that cost a fraction of dealer replacement.',
    local: 'From southern coastal pickups to heavy equipment passing along the highway, Guimbal customers benefit from 24-hour diagnostic support.',
  },
  'san-miguel': {
    region: 'Second District, Iloilo',
    blurb: 'San Miguel drivers enjoy direct, easy access to our Oton workshop via the San Miguel–Oton connector road without congested city traffic.',
    local: 'Agricultural machinery, delivery trucks, and family vehicles in San Miguel trust Autohex for no-start diagnostics, auto electrical fixes, and ECU remapping.',
  },
  'santa-barbara': {
    region: 'Second District, Iloilo',
    blurb: 'Santa Barbara motorists can reach our C1 Road shop quickly via the Pavia/Circumferential bypass for specialized module and diesel care.',
    local: 'Providing airport corridor drivers and commercial transport in Santa Barbara with reliable computer scanning, key pairing, and power remapping.',
  },
  'iloilo-city': {
    region: 'Iloilo City',
    blurb: 'Serving vehicle owners across all Iloilo City districts — City Proper, Jaro, La Paz, Molo, and Lapuz — just a short drive down the C1 bypass.',
    local: 'Iloilo City drivers seeking expert electronics solutions choose Autohex over dealer markups for ECU remapping, check-engine fault tracing, and mechatronic repair.',
  },
  mandurriao: {
    region: 'Iloilo City District',
    blurb: 'Located minutes from Iloilo Business Park, Megaworld, and Mandurriao commercial centers via the western C1 connection.',
    local: 'Corporate fleets, executive SUVs, and daily commuters in Mandurriao rely on Autohex for fast turnaround electronic repairs and expert performance tuning.',
  },
};

export const LOCATIONS: Location[] = ALL_LOCATIONS.map((l) => {
  const extra = LOCATION_EXTRAS[l.slug] || {
    region: 'Iloilo',
    blurb: l.metaDesc,
    local: 'Serving motorists across Iloilo with 24-hour electronics and mechanical repair.',
  };

  return {
    ...l,
    ...extra,
  };
});

export function findLocation(slug: string | undefined): Location | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();

  // Support /locations/iloilo-city/mandurriao or /locations/mandurriao
  if (clean === 'mandurriao' || clean === 'iloilo-city/mandurriao') {
    return LOCATIONS.find((l) => l.slug === 'mandurriao');
  }

  return LOCATIONS.find((l) => l.slug === clean);
}
