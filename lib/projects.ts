export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  img: string;
  status: "complete" | "in-progress" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "tiny-graphics",
    title: "ESP32C6 Tiny Graphics",
    shortDescription:
      "An embedded display driver for the ESP32-C6 that cycles GIFs, images, and rendered function graphs.",
    fullDescription:
      "A holiday gift turned embedded systems project. Runs on the ESP32-C6 and drives a small display through a custom graphics pipeline — cycling between animated GIFs, static images, and real-time function graph rendering. Built close to the metal with ESP-IDF, handling framebuffer management and display timing by hand.",
    tech: ["C++", "ESP-IDF", "ESP32-C6", "Embedded Systems"],
    repoUrl: "https://github.com/brankominick/tiny-graphics",
    img: "/assets/images/projects/tiny-graphics.png",
    status: "complete",
  },
  {
    id: "plant-monitoring",
    title: "Plant Monitoring System",
    shortDescription:
      "ESP32 firmware that collects plant health data and streams it over MQTT to a Grafana dashboard.",
    fullDescription:
      "An IoT pipeline for monitoring plant conditions in real time. The ESP32 reads from environmental sensors and publishes data to HiveMQ over MQTT. A Grafana dashboard ingests the feed and visualizes temperature, humidity, and soil metrics over time. Built with ESP-IDF v5.4.3. Future work includes additional sensor types and lower-power operation modes.",
    tech: ["C++", "ESP-IDF", "ESP32", "MQTT", "HiveMQ", "Grafana"],
    repoUrl: "https://github.com/brankominick/plant-data-monitoring",
    img: "/assets/images/projects/plant-monitoring.png",
    status: "in-progress",
  },
  {
    id: "ecommerce",
    title: "Java Swing eCommerce App",
    shortDescription:
      "A desktop eCommerce simulator built in Java with a full shopping cart, inventory management, and order workflow.",
    fullDescription:
      "A desktop application built for a Data Structures course at West Chester University. Implements a full eCommerce workflow — account creation, product browsing, shopping cart, inventory management, and order processing — using Java Swing for the UI. Containerized with Docker. Accompanied by a written technical report documenting the data structure decisions underlying each component.",
    tech: ["Java", "Java Swing", "Maven", "Docker"],
    repoUrl: "https://github.com/brankominick/ecommerce",
    img: "/assets/images/projects/ecommerce.png",
    status: "complete",
  },
  {
    id: "canine-tracking",
    title: "Canine Performance Tracker",
    shortDescription:
      "A cross-platform mobile app for competitive dog handlers to log, track, and analyze performance data.",
    fullDescription:
      "A React Native application addressing a real pain point for competitive dog sport handlers — the lack of structured tooling for tracking trial performance, training progress, and handler notes over time. Designed with input from active competitors. Currently in development; the app and company site will be linked when ready.",
    tech: ["React Native", "TypeScript"],
    liveUrl: "https://canineperformancetracker.com/",
    img: "/assets/images/projects/canine-tracking.png",
    status: "coming-soon",
  },
];
