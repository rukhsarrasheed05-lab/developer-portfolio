export const navLinks = [
  { id: "about", title: "About" },
  { id: "tech", title: "Stack" },
  { id: "experience", title: "Experience" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Data Analytics",
    icon: "server",
    description:
      "Transforming raw data into meaningful insights using Python, SQL, Excel, and Power BI with interactive dashboards and reports.",
  },
  {
    title: "AI & Machine Learning",
    icon: "layers",
    description:
      "Building intelligent solutions using Machine Learning and Deep Learning techniques for data-driven applications.",
  },
  {
    title: "Python Development",
    icon: "terminal",
    description:
      "Developing practical applications and data-driven solutions using Python, Pandas, NumPy, Scikit-learn, and Streamlit.",
  },
  {
    title: "Web Development",
    icon: "layout",
    description:
      "Creating responsive and interactive web applications using HTML, CSS, JavaScript, React, and modern frontend technologies.",
  },
];

export const technologies = [
  

  { name: "Kafka", color: "#a688ff" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Python", color: "#3776AB" },
  { name: "SQL", color: "#F29111" },
  { name: "Pandas", color: "#150458" },
  { name: "NumPy", color: "#4DABCF" },
  { name: "Power BI", color: "#F2C811" },
  { name: "Excel", color: "#217346" },
  { name: "Scikit-learn", color: "#F7931E" },
  { name: "Matplotlib", color: "#11557C" },
  { name: "Plotly", color: "#3F4F75" },
  { name: "Streamlit", color: "#FF4B4B" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "LaTeX", color: "#008080" },
];

export const experiences = [
  {
    title: "AI Vision Volunteer",
    company_name: "Elite AI Team",
    date: "2025 — Present",
    points: [
      "Contributed to AI and technology-focused initiatives as part of the Elite AI Team and AI Vision Volunteer Fellowship.",
    "Explored practical applications of Artificial Intelligence, Data Science, and emerging technologies through learning activities and projects.",
    "Collaborated with team members on technology-related tasks, knowledge sharing, and community-focused initiatives.",
    "Strengthened practical skills in AI, problem-solving, research, and professional collaboration.",
    ],
  },
  {
    
    title: "Data Analyst Intern",

    company_name: "Techcame",
    date: "2023 — 2024",
    points: 
      ["Worked with data to identify trends, patterns, and insights that support data-driven decision making.", "Used Python, SQL, Excel, and Power BI for data cleaning, analysis, visualization, and reporting.", "Created interactive dashboards and reports to communicate key business insights effectively.", "Applied analytical and problem-solving skills to transform raw data into meaningful and actionable information."
    ],
  },
  {
    title: "AI & Data Science Developer",
    company_name: "Softronic Systems",
    date: "2025 — 2026",
    points: [
      "Developed data-driven applications using Python, SQL, Power BI, and machine learning techniques.",
    "Built and analyzed machine learning models including Linear Regression, Logistic Regression, Decision Trees, Random Forest, KNN, and Naive Bayes.",
    "Created interactive dashboards and analytical solutions to transform complex datasets into meaningful business insights.",
    "Worked on AI-powered applications involving data processing, predictive analysis, automation, and intelligent decision-making.",
    ],
  },
];

export const projects = [
  {
    name: "AI HR Assistant ----RAG + LLM",
    description:
      "An intelligent HR assistant that uses Retrieval-Augmented Generation (RAG) and an LLM to provide accurate, context-aware answers from HR documents. The system processes and retrieves relevant information from uploaded documents and uses an LLM to generate natural-language responses, making HR information faster and easier to access.",
    tags: [
      { name: "Python", color: "text-teal-300" },
      { name: "RAG", color: "text-violet-300" },
      { name: "Longchain", color: "text-pink-300" },
      { name: "Groq", color: "text-blue-300" },

    ],
    gradient: "from-[#3a2b6b] to-[#12102b]",
      image: "hr.png",
    source_code_link: "https://github.com/rukhsarrasheed05-lab/Assistant_HR-RAG",
  },
  {
    name: "Sales Data Analytics Dashboard",
    description:
      "An interactive data analytics dashboard designed to transform raw sales data into clear and actionable business insights. The project focuses on data cleaning, KPI analysis, trend identification, and interactive visualizations to understand sales performance and customer behavior.",
    tags: [
      { name: "Power BI", color: "text-teal-300" },
      { name: "Excel", color: "text-violet-300" },
      { name: "Data Analysis", color: "text-pink-300" },
    ],
    gradient: "from-[#1f3a52] to-[#0f1a2b]",
      image: "dashboard.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather Dashboard",
    description:
      "An interactive weather dashboard built to provide real-time weather information for different cities. The application integrates a weather API to display current conditions and weather trends through a clean and responsive interface with interactive visualizations.",
    tags: [
      { name: "swift", color: "text-teal-300" },
      { name: "coredata", color: "text-violet-300" },
      { name: "swiftui", color: "text-pink-300" },
    ],
    gradient: "from-[#3a2440] to-[#160f24]",
      image: "Weather.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Traffic Monitoring System",
    description:
      "An AI-powered traffic monitoring application built with YOLOv8 for real-time vehicle detection and traffic analysis. The system uses computer vision to process traffic footage, detect vehicles, monitor road activity, and support automated traffic monitoring and violation analysis.",
    tags: [
      { name: "Python", color: "text-teal-300" },
      { name: "YOLOv8", color: "text-violet-300" },
      { name: "OpenCV", color: "text-pink-300" },
      { name: "Computer Vision", color: "text-pink-300" },
    ],
    gradient: "from-[#3a2440] to-[#160f24]",
      image: "Traffic.png",
    source_code_link: "https://github.com/rukhsarrasheed05-lab/Traffic-Monitoring-Application",
  },
];
