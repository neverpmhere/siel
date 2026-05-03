import { lazy } from "react";

const base = import.meta.env.BASE_URL;

export const lainPages = {
  love: {
    component: lazy(() => import("./Love")),
    audio: `${base}lain/audio/love.mp3`,
  },

  wind: {
    component: lazy(() => import("./Wind")),
    audio: `${base}lain/audio/wind.mp3`,
  },

  invlain: {
    component: lazy(() => import("./InvLain")),
    audio: `${base}lain/audio/invlain.mp3`,
  },

  hidden: {
    component: lazy(() => import("./Hidden")),
    audio: `${base}lain/audio/hidden.mp3`,
  },
  
  space: {
  component: lazy(() => import("./Space")),
  audio: `${base}lain/audio/space.mp3`,
  },

  headless: {
  component: lazy(() => import("./Headless")),
  audio: `${base}lain/audio/headless.mp3`,
  },

  connect: {
  component: lazy(() => import("./Connect")),
  audio: `${base}lain/audio/connect.mp3`,
  },

};