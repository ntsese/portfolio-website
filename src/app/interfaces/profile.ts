export interface Profile {
    email: string;
    location: string;
    name: string;
    phone: string;
    avatar: string;
    education: Education[];
    about: string;
    socials: Social[];
  }
  
  export interface Education {
    title: string;
    meta: string;
  }
  
  export interface Social {
    name: string;
    link: string;
    icon: string;
  }
