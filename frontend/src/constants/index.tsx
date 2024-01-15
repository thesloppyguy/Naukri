import SVGColors from "../atoms/SVGColors";

export const HEADER = {
  H_MOBILE: 4,
  H_DESKTOP: 20,
  H_DESKTOP_OFFSET: 80 - 16,
};

export const NAV = {
  WIDTH: 280,
};

const icon = (name: string) => (
  <SVGColors
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

export const navConfig = [
  {
    title: "overview",
    path: "overview",
    icon: icon("ic_analytics"),
  },
  {
    title: "search",
    path: "search",
    icon: icon("ic_search"),
  },
  {
    title: "jobs",
    path: "jobs",
    icon: icon("ic_jobs"),
  },
  {
    title: "users",
    path: "users",
    icon: icon("ic_users"),
  },
];
export const maintainerConfig = {
  title: "maintainer",
  path: "maintainer",
  icon: icon("ic_maintainer"),
};

export const settingsConfig = {
  title: "settings",
  path: "settings",
  icon: icon("ic_settings"),
};

export const industries = [
  "Agriculture & Forestry",
  "Automobiles & Components",
  "Banking & Financial Services",
  "Biotechnology",
  "Chemicals",
  "Construction & Real Estate",
  "Consumer Goods & Services",
  "Defense",
  "Education & Training",
  "Energy - Renewable & Non-Renewable",
  "Fashion & Textiles",
  "Food & Beverage Industry",
  "Healthcare & Pharmaceuticals",
  "Hospitality & Tourism",
  "Information Technology & Services",
  "Infrastructure",
  "Insurance",
  "Legal & Compliance",
  "Manufacturing",
  "Media & Entertainment",
  "Mining & Metals",
  "Oil & Gas",
  "Professional Services",
  "Retail",
  "Science & Technology",
  "Telecommunications",
  "Transportation & Logistics",
  "Utilities",
  "Waste Management & Recycling",
];

export default navConfig;
