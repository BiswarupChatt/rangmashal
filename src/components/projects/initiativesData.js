import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FestivalIcon from "@mui/icons-material/Festival";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SchoolIcon from "@mui/icons-material/School";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupsIcon from "@mui/icons-material/Groups";

export const heroImage =
  "https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg";

export const categoryNav = [
  { id: "asomoye", label: "Asomoye Tomader Pashe", shortLabel: "Asomoye" },
  { id: "sharodiyar", label: "Sharodiyar Porosh", shortLabel: "Sharodiyar" },
  { id: "disaster-relief", label: "Disaster Relief & Rehabilitation", shortLabel: "Relief" },
  { id: "education", label: "Education & Child Development", shortLabel: "Education" },
  { id: "healthcare", label: "Healthcare & Community Well-being", shortLabel: "Healthcare" },
  { id: "humanitarian", label: "Humanitarian & Social Welfare", shortLabel: "Welfare" },
  { id: "csr", label: "Corporate Social Responsibility Partnerships", shortLabel: "CSR" },
  { id: "community", label: "Community Engagement & Fundraising", shortLabel: "Community" },
];

export const flagshipInitiatives = [
  {
    id: "asomoye",
    icon: CoronavirusIcon,
    eyebrow: "Flagship Initiative",
    title: "Asomoye Tomader Pashe",
    meaning: "Standing Beside You in Difficult Times",
    period: "2020-2022",
    summary:
      "Rangmashal Foundation's pandemic response stood beside COVID-positive patients, quarantined families, and vulnerable households with essential supplies, medical coordination, oxygen support, sanitisation, and emotional care.",
    highlights: [
      "Ration kits, groceries, food supplies, and household necessities delivered to homes",
      "Essential medicines, hygiene products, and emergency coordination for affected families",
      "Oxygen cylinders and the Foundation's oxygen concentrator made available free of cost",
      "Home sanitisation support after medical guidance and quarantine protocols",
      "Regular communication with patients and families facing anxiety and isolation",
      "COVID-awareness podcast series on safety, mental well-being, and responsible community behaviour",
    ],
    details: [
      "The programme began during lockdowns and continued through the gradual restoration of normalcy, with volunteers responding to urgent requests from families unable to safely access basic supplies.",
      "Beyond relief distribution, the initiative became a symbol of compassion, resilience, and collective responsibility during one of the most difficult public health crises in recent history.",
    ],
  },
  {
    id: "sharodiyar",
    icon: FestivalIcon,
    eyebrow: "Flagship Annual Initiative",
    title: "Sharodiyar Porosh",
    meaning: "Spreading the Joy of Durga Puja Through Compassion and Community",
    summary:
      "Created around Durga Puja, Sharodiyar Porosh helps children, women, elderly people, and economically disadvantaged families celebrate the festive season with dignity, warmth, and belonging.",
    highlights: [
      "Festive clothing and saree distribution",
      "Ration support, nutritious meals, and community lunches",
      "Child welfare, elderly care, and orphanage outreach",
      "Cultural inclusion through pandal visits, interaction, and volunteer-led celebration",
    ],
    details: [
      "What began as a modest festive outreach has grown into an annual tradition of child welfare, women's dignity, educational support, nutritional assistance, cultural preservation, and community participation.",
    ],
  },
];

export const sharodiyarTimeline = [
  {
    year: "1st Year",
    title: "Sharing Meals, Sharing Hope",
    points: ["Orphanage ration support", "Nutritious community lunch", "Activities and interaction with children"],
  },
  {
    year: "2nd Year",
    title: "Delivering Happiness Beyond Material Gifts",
    points: ["Box of Happiness", "Clothing distribution in Kumartuli", "Support for Dhaki families", "Financial assistance"],
  },
  {
    year: "3rd Year",
    title: "Building Futures While Celebrating Festivals",
    points: ["School-building construction at Dakshin Barasat", "Box of Happiness", "Durga Puja pandal hopping for underprivileged children", "Community lunch"],
  },
  {
    year: "4th Year",
    title: "Celebrating Festivals with Dignity",
    points: ["New clothes for underprivileged children", "Sarees for women", "Community engagement"],
  },
  {
    year: "5th Year",
    title: "Extending Love to Our Senior Citizens",
    points: ["Old-age-home outreach", "Clothes and ration support", "Community lunch", "Companionship and cultural interaction"],
  },
  {
    year: "6th Year",
    title: "Continuing a Tradition of Compassion",
    points: ["Clothes for children", "Sarees for women", "Volunteer interaction and community support"],
  },
];

export const initiativeSections = [
  {
    id: "disaster-relief",
    icon: VolunteerActivismIcon,
    title: "Disaster Relief and Rehabilitation",
    intro:
      "Rangmashal Foundation responds to disasters with immediate relief and rehabilitation-focused support, helping affected communities regain stability, dignity, and hope.",
    programmes: [
      {
        title: "Amphan Cyclone Relief Work",
        meta: "May 2020",
        tagline: "Rebuilding hope after devastation",
        summary: "Emergency relief for families affected by Cyclone Amphan across West Bengal.",
        highlights: ["Dry ration", "Food and drinking water", "Clothing and hygiene essentials", "Emergency assistance"],
      },
      {
        title: "Yaas Cyclone Relief Work",
        tagline: "Extending relief across coastal West Bengal",
        summary: "A two-phase relief response reaching some of the worst-affected coastal communities.",
        phases: [
          { label: "Phase I", location: "Sundarban and Patharpratima", points: ["Ration kits", "Food items", "Drinking water", "Clothing and hygiene products"] },
          { label: "Phase II", location: "Mandarmani", points: ["Essential supplies", "Humanitarian assistance", "Community support"] },
        ],
      },
      {
        title: "Anandapur Slum Fire Relief Work",
        tagline: "Helping families rebuild their lives",
        summary: "Relief and rehabilitation support after a devastating fire left families without homes and essentials.",
        highlights: ["Emergency necessities", "Clothing and household items", "Rehabilitation support", "Assistance with rebuilding damaged homes"],
      },
    ],
  },
  {
    id: "education",
    icon: SchoolIcon,
    title: "Education and Child Development",
    intro:
      "These initiatives combine creativity, mentorship, family participation, and long-term academic support so children can learn with confidence and dignity.",
    programmes: [
      { title: "Dwitiyo Parikalpona", tagline: "Creative learning through curiosity", summary: "A child-focused programme using art, science, food, and interactive learning to make education joyful.", highlights: ["Drawing competition", "Science demonstration", "Nutritious lunch", "Creative and interactive learning"] },
      { title: "Swapno Ki Ashiyana", tagline: "Strengthening families around learning", summary: "A programme encouraging children and parents to participate in education and child-development awareness.", highlights: ["Drawing competition", "Parent counselling", "Education and child-development awareness", "Positive parenting and family participation"] },
      { title: "Project Elevate", tagline: "Long-term support for equal learning opportunities", summary: "Educational assistance that helps children access resources, guidance, and mentorship over time.", highlights: ["Long-term educational support", "Educational resources", "Mentorship", "Academic guidance", "Equal learning opportunities"] },
      { title: "Storytelling Session with G. Shiva", tagline: "Imagination, listening, and emotional learning", summary: "An interactive session helping children build creativity, communication, listening skills, and moral awareness.", highlights: ["Interactive storytelling", "Imagination and creativity", "Communication and listening skills", "Moral and emotional learning"] },
    ],
  },
  {
    id: "healthcare",
    icon: HealthAndSafetyIcon,
    title: "Healthcare and Community Well-being",
    intro:
      "The Foundation's healthcare work promotes voluntary service, preventive awareness, medical access, and compassionate care for children and vulnerable communities.",
    programmes: [
      { title: "Blood Donation Camp", tagline: "Voluntary service that saves lives", summary: "Community blood donation drives encouraging healthy individuals to support hospitals and blood banks.", highlights: ["Voluntary blood donation", "Donor participation", "Awareness on the need for blood donation"] },
      { title: "Health Camp and Blood Donation Camp", tagline: "Preventive care with community participation", summary: "A combined healthcare and blood donation programme conducted under qualified medical supervision.", highlights: ["General health examinations", "Preventive healthcare awareness", "Qualified medical supervision", "Voluntary blood donation"] },
      { title: "Embrace of Love", tagline: "Care, compassion and dignity for every child", summary: "A holistic orphanage support initiative combining health checkups, essential supplies, nutritious food, and emotional care.", highlights: ["Orphanage healthcare support", "Ration, utensils, nutritious food, and daily necessities", "Medical consultations", "Emotional care and interaction with children"] },
    ],
  },
  {
    id: "humanitarian",
    icon: Diversity3Icon,
    title: "Humanitarian and Social Welfare",
    intro:
      "Rangmashal's welfare programmes address hunger, warmth, essential needs, cultural inclusion, and the dignity of communities often overlooked by society.",
    programmes: [
      { title: "Pratham Parikalpona", tagline: "Bringing warmth to those who need it most", summary: "The Foundation's first community outreach programme, providing blankets and direct support to homeless individuals and vulnerable families.", highlights: ["First community outreach programme", "Blanket distribution", "Support for homeless individuals and vulnerable families"] },
      { title: "December-er Shohorey", tagline: "Sharing food, sharing humanity", summary: "Freshly cooked meals distributed with dignity to homeless and economically disadvantaged people.", highlights: ["Freshly cooked meal distribution", "Support for homeless and economically disadvantaged people", "Dignified community interaction"] },
      { title: "Baishakhi Somarohey", tagline: "Celebrating the Bengali New Year with joy and dignity", summary: "A Poila Baishakh outreach helping underprivileged children celebrate through new clothing, interaction, and inclusion.", highlights: ["Bengali New Year celebration", "New clothes for underprivileged children", "Cultural inclusion and dignity"] },
    ],
  },
  {
    id: "csr",
    icon: HandshakeIcon,
    title: "CSR Partnerships",
    intro:
      "Rangmashal Foundation works with corporate partners through transparent, community-focused CSR collaborations rooted in shared social-development objectives.",
    programmes: [
      { title: "Canara Bank", tagline: "Strengthening communities through partnership", summary: "A CSR collaboration combining institutional support with grassroots community engagement.", highlights: ["Community welfare programmes", "Corporate participation", "Volunteerism and responsible citizenship", "Shared social-development objectives"] },
      { title: "Abzooba", tagline: "Creating positive change through corporate responsibility", summary: "A partnership enabling employee volunteering and Foundation-led implementation for underserved communities.", highlights: ["Employee volunteering", "Community outreach", "Collaborative planning and execution", "Accountable social service"] },
      { title: "Worley", tagline: "Advancing community development together", summary: "A CSR partnership focused on community welfare, social development, and active employee participation.", highlights: ["Community participation", "Employee volunteering", "Grassroots implementation", "Shared values and purpose"] },
    ],
  },
  {
    id: "community",
    icon: GroupsIcon,
    title: "Community Engagement and Fundraising",
    intro:
      "Community engagement sustains the Foundation's work by bringing volunteers, donors, artists, partners, and supporters together around shared responsibility.",
    programmes: [
      {
        title: "Fundraising Event with STB Collective",
        tagline: "Empowering change through community collaboration",
        summary:
          "A collaborative fundraising event that brought together artists, supporters, volunteers, and community members to support Rangmashal's education, healthcare, disaster relief, child welfare, and community development programmes.",
        highlights: ["Community collaboration", "Participation from artists and supporters", "Awareness generation", "Volunteer and donor engagement", "Support for education, healthcare, disaster relief, child welfare, and community development"],
      },
    ],
  },
];
