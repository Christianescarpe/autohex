import { ALL_SERVICES, type ServiceData } from './sheetContent';

export interface Service extends ServiceData {
  short: string;
  hero: string;
  symptoms: string[];
  includes: string[];
  vehicles: string;
}

const SERVICE_EXTRAS: Record<string, { short: string; hero: string; symptoms: string[]; includes: string[]; vehicles: string }> = {
  'ecu-remapping': {
    short: 'More power, better fuel economy, sharper throttle — custom tunes for your ECU.',
    hero: 'Unlock the power your engine already has',
    symptoms: [
      'Underpowered feel, especially when loaded or overtaking',
      'High fuel consumption on daily routes',
      'Flat or delayed throttle response',
      'Stock limits holding back vehicle potential',
    ],
    includes: [
      'Stage 1 & Stage 2 performance calibrations',
      'Economy / fuel-efficiency maps',
      'Torque limit & throttle response calibration',
      'Before / after diagnostic verification',
      'Safe backup of your original stock file',
    ],
    vehicles: 'Cars, SUVs, pickups, vans, trucks & heavy equipment',
  },
  'ecu-repair': {
    short: 'Dead, flooded, or shorted ECU? Board-level diagnosis, micro-soldering, and cloning.',
    hero: 'Dealer said “replace it”? We repair it.',
    symptoms: [
      'No-start or intermittent starting with no mechanical fault',
      'Water-damaged or shorted ECU circuit board',
      'ECU not communicating with diagnostic scanners',
      'Bought a replacement ECU requiring coding to your vehicle',
    ],
    includes: [
      'Microscope board-level diagnosis & trace repair',
      'Component-level IC & capacitor replacement',
      'ECU cloning (full immobilizer & calibration transfer)',
      'Bench testing with power supply & signal simulators',
      'Post-repair on-car functional verification',
    ],
    vehicles: 'Cars, SUVs, trucks, heavy equipment — all major controller brands',
  },
  'automotive-diagnostics': {
    short: 'Dealer-level scan tools and live data — we trace the fault, not just the code.',
    hero: 'Stop guessing. Start diagnosing.',
    symptoms: [
      'Check engine, ABS, airbag or transmission warning lights',
      'Intermittent electronic faults other shops could not solve',
      'Multiple confusing fault codes after battery replacement',
      'Rough idling, misfires, or mysterious electrical glitches',
    ],
    includes: [
      'Full-system dealer-level OBD & CAN-bus scanning',
      'Live sensor data stream & oscilloscope waveform analysis',
      'Bidirectional actuation testing of solenoids & pumps',
      'Wiring harness & ground point integrity checks',
      'Clear, honest fault report and explanation before repair',
    ],
    vehicles: 'All passenger vehicles, light commercial trucks & diesel machinery',
  },
  'dpf-egr-adblue': {
    short: 'Limp mode, low power, black smoke? Permanent diagnostic and software solutions.',
    hero: 'Limp mode ends here',
    symptoms: [
      'DPF or exhaust emission warning lamp illuminated',
      'Vehicle stuck in limp mode (restricted RPM/speed)',
      'AdBlue / DEF countdown refusing engine restart',
      'Excessive exhaust smoke and frequent failed regenerations',
    ],
    includes: [
      'Emissions system soot load & differential pressure testing',
      'EGR valve actuation & position sensor diagnosis',
      'DEF / SCR tank, heater & injector pump testing',
      'Permanent ECU software calibration solutions',
      'Complete road test verification and fault clearing',
    ],
    vehicles: 'Modern common rail turbo-diesel cars, pickups, vans & fleet trucks',
  },
  'module-repair-programming': {
    short: 'ABS, BCM, TCM, EPS, airbag and instrument cluster repair and online coding.',
    hero: 'Specialized electronics for every module',
    symptoms: [
      'ABS pump running continuously or wheel speed faults',
      'Transmission (TCM) slamming into limp mode or missing gears',
      'Electric power steering (EPS) suddenly heavy or disabled',
      'Body controller (BCM) lighting, lock, or power window failures',
    ],
    includes: [
      'ABS module pump & solenoid board repair',
      'TCM / TCU mechatronic testing and coding',
      'EPS electronic power steering torque sensor calibration',
      'Airbag / SRS crash data clearing and module reset',
      'Donor module adaptation, VIN writing & variant coding',
    ],
    vehicles: 'All automotive electronic control modules across Asian & European brands',
  },
  'immo-dtc-solutions': {
    short: 'Immobilizer faults, key recognition issues, and permanent diagnostic trouble code solutions.',
    hero: 'Immobilizer & diagnostic fault solutions',
    symptoms: [
      'Key icon flashing on dash; engine cranks but will not start',
      'Security lockout after battery drain or jump-start',
      'Keyless entry or start-stop push button not responding',
      'Persistent phantom trouble codes that return after clearing',
    ],
    includes: [
      'Immobilizer antenna & transponder communication checks',
      'Key registration and transponder chip pairing',
      'ECU / BCM security synchronization',
      'Specific DTC permanent software suppression where appropriate',
      'Safe backup of all security cryptography registers',
    ],
    vehicles: 'Cars, SUVs, vans, and commercial vehicles with factory transponder security',
  },
  'car-repair': {
    short: 'Comprehensive mechanical repairs backed by precise computerized electronics.',
    hero: 'Reliable mechanical repair with electronic precision',
    symptoms: [
      'Unusual engine knocking, grinding, or squealing sounds',
      'Coolant leaks, engine temperature rising, or thermostat faults',
      'Brake spongy feel, vibration when stopping, or pedal pulsing',
      'Suspension clunking, uneven tire wear, or wandering steering',
    ],
    includes: [
      'Engine mechanical inspection, belt & tensioner replacement',
      'Brake pad, rotor, caliper overhaul and fluid bleeding',
      'Cooling system pressure testing, radiator & pump repair',
      'Suspension bushing, shock absorber & ball joint service',
      'Pre-travel inspection and comprehensive safety check',
    ],
    vehicles: 'All passenger vehicles, utility pickups, and light commercial vehicles',
  },
  'auto-electrical-repair': {
    short: 'Parasitic battery drain, alternator charging, short circuits, and wiring harness repair.',
    hero: 'Complete automotive electrical repair',
    symptoms: [
      'Battery going flat overnight or after standing for two days',
      'Alternator charging light on or voltage fluctuating',
      'Melted fuse box, burning smell, or repeated blown fuses',
      'Headlights, starter motor, or power accessories failing',
    ],
    includes: [
      'Parasitic milliamp drain test with clamp meter',
      'Alternator diode ripple & starter motor draw testing',
      'Wiring harness tracing, crimp repair & weatherproofing',
      'Relay, fuse block, and main ground bus refurbishment',
      'Auxiliary light, inverter & audio electrical safety audits',
    ],
    vehicles: '12V and 24V automotive, commercial truck, and marine electrical systems',
  },
  'diesel-engine-diagnostics': {
    short: 'Common rail diesel pressure, injector flow, turbo boost, and compression testing.',
    hero: 'Deep-level diesel diagnostic expertise',
    symptoms: [
      'Hard starting in the morning or prolonged cranking when cold',
      'Black smoke under acceleration or white/grey smoke at idle',
      'Loss of turbo boost pressure or loud whistling/fluttering sound',
      'Diesel engine misfire, knocking, or uneven idle vibration',
    ],
    includes: [
      'Common rail fuel rail pressure & SCV duty cycle test',
      'Injector balance rate & leak-off backleak measurement',
      'Turbocharger VNT actuator & wastegate boost pressure testing',
      'Intake manifold carbon inspection & boost leak smoke test',
      'Compression verification and crankcase blowby inspection',
    ],
    vehicles: 'Common rail turbo-diesel (CRDi) engines on pickups, vans, SUVs & trucks',
  },
  'preventive-maintenance': {
    short: 'Preventive service, fluid flushes, filters, and computerized system health check.',
    hero: 'Protect your engine before issues occur',
    symptoms: [
      'Due for periodic oil and filter replacement',
      'Dirty, burnt automatic transmission or differential fluid',
      'Decreased brake fluid boiling point or dark coolant',
      'Planning a long provincial road trip across Panay Island',
    ],
    includes: [
      'Full synthetic engine oil & genuine OEM filter change',
      'Transmission fluid, differential & transfer case service',
      'Brake fluid moisture check & high-temp flush',
      'Full electronic health scan across all on-board computers',
      'Multi-point suspension, battery, tire, and belt inspection',
    ],
    vehicles: 'All gasoline and diesel cars, SUVs, pickups, vans, and fleet fleets',
  },
};

export const SERVICES: Service[] = ALL_SERVICES.map((s) => {
  const extra = SERVICE_EXTRAS[s.slug] || {
    short: s.primaryKeyword,
    hero: s.h1,
    symptoms: ['Performance concerns', 'Dashboard warnings', 'Maintenance required'],
    includes: ['Comprehensive inspection', 'Computer scan', 'Professional repair'],
    vehicles: 'Cars, trucks & heavy equipment',
  };

  return {
    ...s,
    ...extra,
  };
});

// Helper for finding service by slug (including legacy alias support)
export function findService(slug: string | undefined): Service | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim();

  // Aliases for backward compatibility
  if (clean === 'ecu-repair-programming') return SERVICES.find((s) => s.slug === 'ecu-repair');
  if (clean === 'diagnostics-coding') return SERVICES.find((s) => s.slug === 'automotive-diagnostics');
  if (clean === 'module-repair') return SERVICES.find((s) => s.slug === 'module-repair-programming');

  return SERVICES.find((s) => s.slug === clean);
}
