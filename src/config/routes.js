import React, {Component} from "react";
import HomeView from "../containers/HomeView"
import AboutView from "../containers/AboutView"
import WorkView from "../containers/WorkView"

export default [
  {
    path: "/",
    component: HomeView,
    label: "home"
  }, {
    path: "/about",
    component: AboutView,
    label: "about"
  }, {
    path: "/work",
    component: WorkView,
    label: "work"
  }
];
