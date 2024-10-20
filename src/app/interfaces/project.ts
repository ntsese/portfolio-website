export interface Projects {
    projects: Project[];
  }
  
  export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
  }