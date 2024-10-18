export interface Team {
    id: number;
    name: string;
    members: string[];
    performance: {
      wins: number;
      losses: number;
    };
  }
  