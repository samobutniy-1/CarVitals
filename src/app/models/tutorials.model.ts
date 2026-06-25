export interface TutorialStep {
  order: string;
  text: string;
  image?: string;
}

export interface TutorialLink {
  title: string;
  link: string;
}

export interface Tutorial {
  id: string;
  name: string;
  systemId: string;
  tools: string[];
  steps: TutorialStep[];
  links: TutorialLink[];
}

export interface VehicleSystem {
  id: string;
  name: string;
}
