export type TabName = "overview" | "experience" | "projects";

export type TabEmits = { (e: "tabChanged", newTab: TabName): void };

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