export const siteConfig = {
  name: "EduReach",
  tagline: "Your Gateway to Smarter Education Decisions",
  established: "Est. 2005",
};

export const images = {
  // Campus & buildings
  hero: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014920/campus_lnna9a.avif",
  campus1: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014920/campuss_uehbkc.avif",
  campus2: "https://res.cloudinary.com/dpvbaiyus/image/upload/v1772014917/campus2_zf54py.jpg",
  collegeClassroom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  // Other graphics
  mentors: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop",
  library: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  avatar1: "https://i.pravatar.cc/150?img=32",
  avatar2: "https://i.pravatar.cc/150?img=12",
  avatar3: "https://i.pravatar.cc/150?img=68"
};

export const navLinks = [
  { name: "About", path: "#about" },
  { name: "Courses", path: "#courses" },
  { name: "Campus Life", path: "#campus" },
  { name: "Placements", path: "#placements" }
];

export const contactInfo = {
  email: "admissions@edureach.edu",
  phone: "+1 (800) 555-0199",
  address: "123 University Ave, Boston, MA 02116"
};

export const aboutContent = {
  heading: "Empowering Students to Reach Their Highest Potential",
  description: "EduReach connects students with top-tier education, specialized mentorship, and vibrant campus experiences. We equip future leaders with knowledge, skills, and the network needed to succeed in an ever-changing world.",
  bullets: [
    "World-Class Faculty and curriculum",
    "State-of-the-Art Research Labs",
    "95% Placement Rate for Graduates"
  ]
};

export const achievementsContent = {
  stats: [
    { label: "Students Enrolled", value: "15,000+" },
    { label: "Expert Faculty", value: "500+" },
    { label: "Global Alumni", value: "50k+" },
    { label: "Degree Programs", value: "120+" }
  ]
};

export const coursesContent = [
  {
    title: "Computer Science & AI",
    description: "B.Tech in CS with specialization in Artificial Intelligence and Machine Learning.",
    duration: "4 Years",
    students: "1,200 Enrolled",
    icon: "Code"
  },
  {
    title: "Business Administration",
    description: "BBA focused on global markets, entrepreneurship, and digital transformation.",
    duration: "3 Years",
    students: "850 Enrolled",
    icon: "Briefcase"
  },
  {
    title: "Design & UX",
    description: "B.Des in Product Design, Interaction Design, and Visual Communication.",
    duration: "4 Years",
    students: "400 Enrolled",
    icon: "PenTool"
  }
];

export const quotesContent = [
  {
    quote: "EduReach gave me the foundation and the network to launch my tech startup before even graduating.",
    author: "Sarah Jenkins",
    role: "Alumna, Class of 2023",
    avatar: images.avatar1
  },
  {
    quote: "The personalized mentorship and hands-on lab experiences were exactly what I needed to prepare for the industry.",
    author: "Michael Chang",
    role: "Current Senior",
    avatar: images.avatar2
  },
  {
    quote: "Moving to a new city was scary, but the campus life here immediately felt like home.",
    author: "Fatima Rahman",
    role: "Alumna, Class of 2022",
    avatar: images.avatar3
  }
];

export const mentorsContent = [
  { name: "Dr. Alan Turing", title: "Prof. of Computer Science" },
  { name: "Dr. Marie Curie", title: "Head of Applied Sciences" },
  { name: "Mr. Steve Jobs", title: "Visiting Lecturer, Design" },
  { name: "Ms. Ada Lovelace", title: "Algorithms Mentor" }
];

export const campusFeatures = [
  { title: "Central Library", description: "24/7 access to over 500,000 digital and physical resources.", image: images.library },
  { title: "Advanced Labs", description: "Cutting-edge equipment for AI, Robotics, and Bio-Tech.", image: images.lab },
  { title: "Sports Complex", description: "Olympic-sized pool, indoor courts, and a massive athletics field.", image: images.sports }
];

export const eventsGallery = [
  { title: "Annual Tech Symposium", image: images.campus1 },
  { title: "Cultural Fest 2025", image: images.campus2 },
  { title: "Hackathon Finals", image: images.collegeClassroom }
];

export const topRecruiters = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"];

export const deptPlacements = [
  { dept: "Computer Science", rate: "98%", avg: "$110k" },
  { dept: "Business", rate: "92%", avg: "$85k" },
  { dept: "Design", rate: "95%", avg: "$95k" }
];
