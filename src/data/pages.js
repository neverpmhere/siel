import { lazy } from "react";

export const pages = {
  lebenslauf: {
    type: "info",
    title: "[ LEBENSLAUF ]",
    component: lazy(() => import("../pages/Lebenslauf")),
  },

  email: {
    type: "info",
    title: "[ EMAIL ]",
    component: lazy(() => import("../pages/Email")),
  },

  lain: {
  type: "module",
  component: lazy(() => import("../pages/Lain")),
  },

  google: {
    type: "external",
    url: "https://google.com",
  },

  youtube: {
    type: "external",
    url: "https://youtube.com",
  },

  gmail: {
    type: "external",
    url: "https://mail.google.com",
  },

  googledrive: {
    type: "external",
    url: "https://drive.google.com",
  },
};