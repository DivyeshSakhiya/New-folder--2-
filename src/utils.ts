import { BarChartIcon, BriefCaseIcon, HomeIocn } from "./assets/custom_Icons";

export const headerNavLinksData = [
  { pathName: "/", title: "Home", icon: HomeIocn },
  { pathName: "/jobs", title: "Jobs", icon: BriefCaseIcon },
  { pathName: "/reports", title: "Reports", icon: BarChartIcon },
];

export const Darkmode = () => {
  document.querySelector(".app")?.classList.toggle("dark-theme");
  document.querySelector(".app")?.classList.remove("light-theme");
};

export const openCloseSidebar = () => {
  document.querySelector("body")?.classList.toggle("sidenav-toggled");
};
