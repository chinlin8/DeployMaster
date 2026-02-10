
export interface DeploymentStep {
  title: string;
  description: string;
  command?: string;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  color: string;
  steps: DeploymentStep[];
  pros: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
