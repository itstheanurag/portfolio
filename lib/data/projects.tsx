export const WORK_PROJECTS = [
  {
    name: "Cadence",
    description:
      "A research app for NTU (Singapore) to study heart health with real-time chat and activity tracking.",
    longDescription:
      "Cadence was developed as a research-focused health application in collaboration with NTU (Singapore) to monitor and improve heart health among participants. The app included real-time chat between patients and coaches for personalized support, along with advanced features like sleep and step tracking. Daily and weekly action scores provided insights into user behavior and adherence to health goals. Automated health questionnaires collected critical data seamlessly, and comprehensive analytics dashboards enabled researchers to analyze patterns, engagement levels, and overall program impact.",
    link: "",
    techStack: [
      "NestJS",
      "PostgreSQL",
      "Sequelize",
      "TypeScript",
      "Firebase",
      "BigQuery",
      "GCP",
    ],
    coreFeatures: [
      "Real-time patient-coach chat",
      "Sleep and step tracking",
      "Daily and weekly action scores",
      "Medication tracker",
      "Detailed analytics for researchers",
      "Daily and weekly Action Scores",
      "Big Query and firebase integrations",
    ],
  },
  {
    name: "SDG",
    description:
      "A healthcare platform for patient engagement, payments, and medical record integrations.",
    longDescription:
      "SDG is a comprehensive healthcare platform designed to enhance patient engagement while simplifying provider workflows. It offers real-time communication between doctors and patients through secure chat, as well as medication reminders to improve adherence. The platform supports subscription-based patient programs, providing flexibility for recurring care plans. Integrated with Square for secure payment processing and ModMed for electronic medical records (EMR), SDG ensures seamless handling of both financial and clinical data. Its architecture leverages GCP Pub/Sub for real-time event-driven processing, enabling scalability and reliability across multiple healthcare operations.",
    link: "",
    techStack: [
      "NestJS",
      "PostgreSQL",
      "Socket.IO",
      "GCP Pub/Sub",
      "TypeScript",
      "Docker",
      "Square API",
      "ModMed Integration",
      "Firebase",
    ],
    coreFeatures: [
      "Subscription based payment for Patients",
      "Real-time doctor-patient chat",
      "Secure payment processing via Square",
      "Integration with ModMed for EMR",
      "Medication tracking with adherance",
      "Event-driven architecture with GCP Pub/Sub",
      "Subscription based Reminders, Notifications",
      "Activity for Insurance Purposes",
    ],
  },
  {
    name: "MedLinks",
    description:
      "A patient-care platform with personalized programs and health metric tracking.",
    longDescription:
      "MedLinks was designed to empower patients with access to tailored health programs and tools to monitor critical health metrics. Each program offered specific features for managing chronic conditions, preventive care, or recovery processes. Patients could log weight, blood pressure, and glucose readings, and view progress in a clear, user-friendly dashboard. The platform supported notifications and reminders to keep patients engaged and compliant with their care plans. By leveraging data analytics, MedLinks provided actionable insights to providers, enabling them to track patient performance and adjust care strategies as needed.",
    link: "",
    techStack: ["NestJS", "PostgreSQL", "TypeScript", "Firebase", "GCP"],
    coreFeatures: [
      "Custom health programs for patients",
      "Track weight, blood pressure, and glucose",
      "Program-specific features and dashboards",
      "Notifications and reminders",
      "Data-driven patient progress insights",
      "",
    ],
  },
];
