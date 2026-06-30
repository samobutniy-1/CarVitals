export interface TutorialStep {
  order: string;
  textKey: string;
  image?: string;
}

export interface TutorialLink {
  titleKey: string;
  link: string;
}

export interface Tutorial {
  id: string;
  nameKey: string;
  systemId: string;
  toolKeys: string[];
  steps: TutorialStep[];
  links: TutorialLink[];
}

export interface VehicleSystem {
  id: string;
  nameKey: string;
}
