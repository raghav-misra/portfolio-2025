export type ExperienceData = {
  role: string;
  company: string;
  dateRange: [string, string];
  content: string;
};

export type ProjectData = {
  title: string;
  url: [string, string];
  description: string;
  award?: string;
};