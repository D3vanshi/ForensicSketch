
import mugshotUrl from "@assets/generated_images/futuristic_police_mugshot_of_a_cyber_criminal_with_digital_overlay_data.png";

export interface Criminal {
  id: string;
  name: string;
  age: number;
  crime: string;
  status: "Wanted" | "Captured" | "Incarcerated";
  matchScore: number; // 0-100
  imageUrl: string;
  department: string;
}

export const MOCK_RESULTS: Criminal[] = [
  {
    id: "CR-7789-X",
    name: "Viktor 'Cipher' Volkov",
    age: 34,
    crime: "Cyber-Espionage / Grand Theft Data",
    status: "Wanted",
    matchScore: 98.4,
    imageUrl: mugshotUrl,
    department: "Cyber Crimes Unit",
  },
  {
    id: "CR-9921-A",
    name: "Marcus Holloway",
    age: 29,
    crime: "Unauthorized Access / Hacktivism",
    status: "Incarcerated",
    matchScore: 87.2,
    imageUrl: mugshotUrl, // Reusing for mock, ideally would be different
    department: "Cyber Crimes Unit",
  },
  {
    id: "CR-1102-B",
    name: "Elena Fisher",
    age: 31,
    crime: "Art Forgery / Smuggling",
    status: "Wanted",
    matchScore: 76.5,
    imageUrl: mugshotUrl,
    department: "Interpol",
  },
  {
    id: "CR-3341-C",
    name: "Dante Sparda",
    age: 42,
    crime: "Arson / Property Damage",
    status: "Captured",
    matchScore: 65.1,
    imageUrl: mugshotUrl,
    department: "Local PD",
  },
  {
    id: "CR-5510-D",
    name: "Ada Wong",
    age: 28,
    crime: "Corporate Espionage",
    status: "Wanted",
    matchScore: 54.9,
    imageUrl: mugshotUrl,
    department: "Federal Bureau",
  },
];
