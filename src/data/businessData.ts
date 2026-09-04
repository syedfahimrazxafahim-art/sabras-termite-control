import { ServiceItem, WorkGalleryItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: "Sabra's Termite Pest Weed Control",
  legalName: "Sabra's Termite & Pest Control",
  owner: "Sabra Thornburg",
  license: "LIC. #9110",
  state: "Arizona (Greater Phoenix Area)",
  address: "10645 N Tatum Blvd, Ste. C200-210, Phoenix, Arizona 85028",
  phone: "(602) 791-0077",
  phoneRaw: "+16027910077",
  whatsapp: "1 602-791-0077",
  whatsappLink: "https://wa.me/16027910077?text=Hello%20Sabra's%20Pest%20Control,%20I%20need%20a%20free%20inspection%20in%20Phoenix",
  email: "sabraspestcontrol@gmail.com",
  facebook: "http://facebook.com/sabraspestcontrol",
  taglines: [
    "We Put Your Pests to Rest",
    "Local. Trusted. Effective. Protecting What Matters Most.",
    "Protecting Homes. Protecting Families."
  ],
  stats: [
    { label: "Emergency Response", value: "24/7 Available" },
    { label: "Phoenix Homes Protected", value: "5,000+" },
    { label: "State Licensed", value: "AZ Lic. #9110" },
    { label: "Eco & Pet Safe", value: "100% Certified" },
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "termite-control",
    title: "Complete Termite Protection",
    category: "termite",
    shortDesc: "Comprehensive subterranean termite inspection, precision liquid barrier application, and full structural warranty.",
    fullDesc: "Subterranean termites cause millions in damage across the Sonoran Desert. Our specialized foundation trenches and perimeter sub-slab injections create an impenetrable zone of protection with long-term residual effectiveness.",
    iconName: "Bug",
    features: [
      "Thorough Attic & Foundation Probe Inspection",
      "Subterranean Termite Barrier Application",
      "Non-Repellent Undetectable Liquid Termiticides",
      "Pre-Construction & Real Estate Inspection Reports",
      "Renewable Annual Structural Guarantee"
    ],
    desertChallenge: "Caliche soil and intense Arizona desert heat require high-penetration liquid termiticides that bond to dry substrate without breaking down.",
    treatmentProtocol: "Trenching foundation perimeters, drilling expansion joints where necessary, and treating soil to 4-foot structural depth."
  },
  {
    id: "scorpion-pest",
    title: "Scorpion & General Pest Management",
    category: "pest",
    shortDesc: "Targeted Arizona bark scorpion defense, black widow spiders, roaches, ants, crickets, and desert invaders.",
    fullDesc: "Arizona bark scorpions climb vertical walls and slip through 1/16-inch cracks. We deploy targeted micro-encapsulated barrier sprays, blacklight tracking, and dust treatments in weep screeds and utility conduits.",
    iconName: "ShieldAlert",
    features: [
      "Targeted Arizona Bark Scorpion Defense",
      "Weep Screed & Foundation Powder Injections",
      "Blacklight Inspection Analysis",
      "Cockroach, Ant & Cricket Nest Eradication",
      "Family & Pet Safe Interior Formulations"
    ],
    desertChallenge: "Monsoon rains and summer 115°F temperatures force desert scorpions and desert roaches directly toward home irrigation lines and air-conditioned interiors.",
    treatmentProtocol: "30-foot perimeter barrier, rock bed saturation, wall void dusting, and exterior entry point sealing."
  },
  {
    id: "weed-control",
    title: "Desert Weed Control Solutions",
    category: "weed",
    shortDesc: "Pre-emergent and post-emergent solutions for gravel landscaping, granite rock beds, and seasonal Arizona weed prevention.",
    fullDesc: "Keep your Phoenix xeriscaping and gravel yards pristine. Our pre-emergents create an invisible underground germination barrier before monsoon weeds strike, backed by rapid post-emergent burndown.",
    iconName: "Flower2",
    features: [
      "Pre-Emergent Pre-Monsoon Ground Barrier",
      "Post-Emergent Broadleaf & Grass Eradication",
      "Decomposed Granite & Gravel Bed Maintenance",
      "HOA Compliance Guarantee",
      "Commercial Lot & Right-of-Way Clearing"
    ],
    desertChallenge: "Spurge, puncturevine, and Bermuda grass thrive in Phoenix heat and rapidly seed after sudden flash rains.",
    treatmentProtocol: "Uniform soil surface drench with UV-stabilized pre-emergent sealant followed by spot foliar applications."
  },
  {
    id: "commercial-industrial",
    title: "Commercial & Warehouse Management",
    category: "commercial",
    shortDesc: "Industrial pest exclusion, food warehouse sanitation compliance, and logistics facility perimeter defense.",
    fullDesc: "From distribution centers in southwest Phoenix to Scottsdale retail establishments, our commercial crew delivers full audit documentation, electronic monitoring traps, and high-capacity misting.",
    iconName: "Building2",
    features: [
      "Industrial Warehouse Pallet & Rack Spraying",
      "Health Inspection & Audit Documentation",
      "Rodent Baiting & Tamper-Resistant Stations",
      "Scheduled After-Hours Flexible Dispatch",
      "Licensed Hazmat Suit Technicians"
    ],
    desertChallenge: "Large rollup doors and pallet shipments create entry corridors for desert rodents, beetles, and German cockroaches.",
    treatmentProtocol: "Perimeter bait station grid, dock leveler foam sealing, interior pheromone monitoring, and monthly compliance logging."
  }
];

export const GALLERY_ITEMS: WorkGalleryItem[] = [
  {
    id: "work-1",
    title: "Sabra's Dedicated Red Service Trailer Fleet",
    category: "trailer",
    categoryLabel: "Fleet & Equipment",
    description: "Our custom heavy-duty mobile treatment rig equipped with high-pressure hose reels, chemical tanks, and specialized desert dispersion equipment.",
    location: "Phoenix, AZ Metro Dispatch",
    result: "Instant On-Site Capability",
    badge: "Official Mobile Rig",
    colorScheme: "from-red-600 to-black",
    svgType: "trailer"
  },
  {
    id: "work-2",
    title: "Field Technician Precision Landscape Spraying",
    category: "field",
    categoryLabel: "Yard & Perimeter",
    description: "Owner Sabra Thornburg applying eco-safe soil barrier and rock bed pest deterrent along residential xeriscape property line.",
    location: "Paradise Valley / North Phoenix",
    result: "100% Perimeter Sealed",
    badge: "Owner-Operated Fieldwork",
    colorScheme: "from-red-700 to-slate-900",
    svgType: "spraying"
  },
  {
    id: "work-3",
    title: "Subterranean Termite Colony Detection",
    category: "termites",
    categoryLabel: "Termite Defense",
    description: "Macro inspection uncovering active subterranean termite worker tunnels inside structural wood framing prior to deep termiticide injection.",
    location: "Arcadia / Camelback, AZ",
    result: "Infestation Halted & Protected",
    badge: "Sub-Slab Termite Elimination",
    colorScheme: "from-amber-700 to-black",
    svgType: "termites"
  },
  {
    id: "work-4",
    title: "Desert Bark Scorpion & Cricket Eradication",
    category: "pests",
    categoryLabel: "Scorpions & Insects",
    description: "High-magnification analysis of field crickets and bark scorpion food sources eliminated through targeted micro-encapsulated treatments.",
    location: "Scottsdale / Desert Ridge",
    result: "Zero Re-entry in 60 Days",
    badge: "Targeted Insect Protocol",
    colorScheme: "from-slate-800 to-red-950",
    svgType: "cricket"
  },
  {
    id: "work-5",
    title: "American & Oriental Cockroach Colony Eradication",
    category: "pests",
    categoryLabel: "Cockroach Control",
    description: "Complete eradication of domestic cockroach cluster uncovered beneath plumbing fixtures and exterior foundation weep holes.",
    location: "Central Phoenix Residential",
    result: "Total Nest Neutralization",
    badge: "Immediate Knockdown",
    colorScheme: "from-red-800 to-neutral-900",
    svgType: "roaches"
  },
  {
    id: "work-6",
    title: "Commercial Warehouse High-Bay Pest Treatment",
    category: "warehouse",
    categoryLabel: "Commercial Facility",
    description: "Certified technicians in protective gear deploying ultra-low volume fogging and pallet base crack-and-crevice treatments in distribution hub.",
    location: "West Phoenix Industrial Park",
    result: "Audit Certified Passed",
    badge: "Commercial Grade Protocol",
    colorScheme: "from-slate-900 to-black",
    svgType: "warehouse"
  },
  {
    id: "work-7",
    title: "Two-Man Specialized Hazmat & Attic Defense Unit",
    category: "warehouse",
    categoryLabel: "Hazmat & Clean Room",
    description: "Team deployment in full respirators and protective clean suits for confined crawlspace and high-potency pest and bee eradication.",
    location: "Deer Valley Airport Logistics Center",
    result: "Zero Disruption to Operations",
    badge: "Full PPE Protocol",
    colorScheme: "from-red-900 to-slate-950",
    svgType: "hazmat"
  },
  {
    id: "work-8",
    title: "Pre-Emergent Gravel Bed Weed Barrier Treatment",
    category: "weeds",
    categoryLabel: "Weed Control",
    description: "Full gravel driveway and desert rock landscape treated with UV-resistant pre-emergent polymer stopping weed seed germination.",
    location: "North Tatum Blvd, Phoenix",
    result: "6-Month Weed-Free Guarantee",
    badge: "Xeriscape Weed Seal",
    colorScheme: "from-emerald-900 to-black",
    svgType: "weeds"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-1",
    author: "Marcus & Elena Vance",
    neighborhood: "Desert Ridge, Phoenix",
    rating: 5,
    date: "2 weeks ago",
    service: "Bark Scorpion & Spider Barrier",
    comment: "Living near the desert preserve, we were finding scorpions in our kids' bathroom every week. Sabra came out personally with her red trailer rig, treated the entire rock perimeter, and we haven't seen a single live scorpion since. Best pest service in Phoenix!"
  },
  {
    id: "rev-2",
    author: "Dave R. Richardson",
    neighborhood: "Biltmore Area, Phoenix",
    rating: 5,
    date: "1 month ago",
    service: "Subterranean Termite Treatment",
    comment: "Discovered mud tubes along our foundation during a remodel. Sabra gave us a straightforward quote without the huge corporate sales pitch. She completed the drilling and trenching quickly, clean and respectful of our patio tiles. Lic. #9110 is the real deal."
  },
  {
    id: "rev-3",
    author: "Gwen Gallagher (HOA Board Member)",
    neighborhood: "Paradise Valley Border",
    rating: 5,
    date: "3 weeks ago",
    service: "Weed Control & Common Area Maintenance",
    comment: "Our gravel lots used to get overwhelmed by weeds every monsoon. Sabra’s pre-emergent treatment completely saved us thousands in landscaping fines and physical weed pulling. Reliable, on-time, and always reachable via WhatsApp or phone."
  },
  {
    id: "rev-4",
    author: "Arturo Morales (Facility Director)",
    neighborhood: "Tolleson Logistics Hub",
    rating: 5,
    date: "Recent",
    service: "Commercial Warehouse Pest Audit",
    comment: "We manage a 60,000 sq ft warehouse with tight food safety requirements. Sabra’s team brought heavy-duty gear, fully suited, and handled our rodent and beetle prevention flawlessly. Documented compliance on file."
  }
];

export const FAQ_ITEMS = [
  {
    q: "How often should Phoenix homes be treated for scorpions?",
    a: "Due to Arizona's extreme summer heat and monsoons, we recommend bi-monthly or monthly exterior perimeter treatments during active peak season (March through October). Our residual micro-encapsulated treatments resist heat breakdown."
  },
  {
    q: "Are the treatments safe for dogs, cats, and small children?",
    a: "Yes. Once the liquid spray barrier dries (typically 30–45 minutes in our Arizona climate), it bonds tightly with the surface and poses no contact danger to your pets or family members. Interior treatments use pet-safe botanical and enclosed bait stations."
  },
  {
    q: "What are the first warning signs of termites in an Arizona home?",
    a: "Look for subterranean mud tubes creeping up foundation stem walls, pin-sized holes in drywall with faint dust piles, hollow-sounding baseboards, or spring swarmer wings near window sills. We offer free visual inspections."
  },
  {
    q: "How does weed pre-emergent work on desert gravel yards?",
    a: "Pre-emergent forms a microscopic chemical barrier in the top 1/2 inch of soil that prevents newly germinated weed seeds from pushing through. It must be applied before seasonal rain events to lock in defense for up to 6 months."
  }
];
