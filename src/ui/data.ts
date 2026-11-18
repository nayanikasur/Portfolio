export const EMAIL = "nayanika.m19@gmail.com";
export const PHONE = "+91 79750 57557";
export const PHONE_HREF = "tel:+917975057557";
export const GITHUB = "https://github.com/nayanikasur";
export const LINKEDIN = "https://www.linkedin.com/in/nayanika-sur-49691b1a8/";
export const RESUME = "/Nayanika-Sur-Resume.pdf";

export type Act = {
  id: string;
  num: string;
  label: string;
  ac: string; // panel colour
  ai: string; // ink on panel
  ah: string; // highlight on panel
};

export const ACTS: Act[] = [
  { id: "about", num: "01", label: "About", ac: "#ef5533", ai: "#1d0b04", ah: "#ffd84d" },
  { id: "work", num: "02", label: "Work", ac: "#ee46d3", ai: "#1f0619", ah: "#ffe66d" },
  { id: "experience", num: "03", label: "Experience", ac: "#2f5bff", ai: "#ffffff", ah: "#ffd84d" },
  { id: "toolkit", num: "04", label: "Toolkit", ac: "#1bc47d", ai: "#05170e", ah: "#ffffff" },
];

export const NAV = [
  ...ACTS.map((a) => ({ id: a.id, label: a.label })),
  { id: "contact", label: "Contact" },
];
