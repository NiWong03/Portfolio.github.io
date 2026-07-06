<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <div class="site-background" aria-hidden="true">
      <span class="particle-field particle-field-one"></span>
      <span class="particle-field particle-field-two"></span>
      <span class="particle-field particle-field-three"></span>
    </div>
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />
    <div class="parent">
      <Home :nightMode="nightMode" />
      <About id="about" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <Certifications id= "certifications" :nightMode="nightMode" />
      <Portfolio id="portfolio" :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer :nightMode="nightMode" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import info from "../info";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Certifications,
    Portfolio,
    Contact,
    Footer,
  },
  data() {
    return {
      nightMode: false,
      config: info.config,
    };
  },
  created() {
    if (this.config.use_cookies) {
      this.nightMode = this.$cookie.get("nightMode") === "true" ? true : false;
    }
  },
  mounted() {
    ["About", "Contact", "Skills", "Portfolio"].forEach((l) => {
      if (window.location.href.includes(l)) {
        var elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
  },
  methods: {
    switchMode(mode) {
      if (this.config.use_cookies) {
        this.$cookie.set("nightMode", mode);
      }
      this.nightMode = mode;
    },
    scrollTo(ele) {
      if (ele == "home") {
        this.$router.push(`/`);
        window.scrollTo({ top: -80, behavior: "smooth" });
      } else {
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
        if (this.$router.history.current.path !== `/${ele}`)
          this.$router.push(`/${ele}`);
      }
    },
  },
};
</script>

<style>
body {
  background-color: #f0ebe3;
}

.bg-white {
  background-color: rgba(240, 235, 227, 0.88) !important;
}

.bg-light {
  background-color: rgba(248, 249, 250, 0.74) !important;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: transparent;
}

#app > *:not(.site-background) {
  position: relative;
  z-index: 1;
}

.site-background {
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: #f0ebe3;

  background-image:
    linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px);

  background-size: 32px 32px;
}

.site-background::before,
.site-background::after {
  content: "";
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 229, 200, 0.2), transparent 22%),
    radial-gradient(circle at 76% 18%, rgba(245, 166, 35, 0.16), transparent 20%),
    radial-gradient(circle at 62% 84%, rgba(0, 191, 165, 0.16), transparent 24%);
  filter: blur(20px);
  opacity: 0.15;
  animation: background-drift 24s ease-in-out infinite alternate;
}

.site-background::after {
  opacity: 0.32;
  transform: rotate(12deg) scale(1.1);
  animation-duration: 34s;
  animation-direction: alternate-reverse;
}

.particle-field {
   position: absolute;
  top: 100px;
  left: 100px;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  z-index: 100;
  box-shadow:
    6vw 12vh rgba(0, 229, 200, 0.45),
    14vw 78vh rgba(245, 166, 35, 0.38),
    22vw 38vh rgba(0, 191, 165, 0.5),
    31vw 68vh rgba(0, 229, 200, 0.32),
    42vw 18vh rgba(245, 166, 35, 0.34),
    53vw 88vh rgba(0, 191, 165, 0.44),
    64vw 30vh rgba(0, 229, 200, 0.42),
    72vw 58vh rgba(245, 166, 35, 0.3),
    81vw 22vh rgba(0, 191, 165, 0.48),
    92vw 74vh rgba(0, 229, 200, 0.36);
  animation: particle-float 22s linear infinite;
}

.particle-field-two {
  width: 10px;
  height: 10px;
  background: rgba(245, 166, 35, 0.58);
  box-shadow:
    9vw 50vh rgba(245, 166, 35, 0.35),
    18vw 24vh rgba(0, 229, 200, 0.36),
    27vw 91vh rgba(0, 191, 165, 0.42),
    39vw 42vh rgba(245, 166, 35, 0.3),
    49vw 12vh rgba(0, 229, 200, 0.38),
    58vw 70vh rgba(0, 191, 165, 0.34),
    69vw 44vh rgba(245, 166, 35, 0.35),
    79vw 86vh rgba(0, 229, 200, 0.36),
    88vw 36vh rgba(0, 191, 165, 0.42),
    96vw 10vh rgba(245, 166, 35, 0.32);
  animation-duration: 30s;
  animation-direction: reverse;
}

.particle-field-three {
  width: 10px;
  height: 10px;
  background: rgba(0, 191, 165, 0.38);
  box-shadow:
    4vw 88vh rgba(0, 191, 165, 0.26),
    16vw 46vh rgba(0, 229, 200, 0.24),
    34vw 9vh rgba(245, 166, 35, 0.22),
    45vw 78vh rgba(0, 191, 165, 0.28),
    61vw 53vh rgba(0, 229, 200, 0.26),
    74vw 6vh rgba(245, 166, 35, 0.22),
    84vw 65vh rgba(0, 191, 165, 0.28),
    98vw 48vh rgba(0, 229, 200, 0.24);  animation-duration: 38s;
}

#app.text-light .site-background {
  background-color: #262c30;
  background-image:
    linear-gradient(rgba(0, 229, 200, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 200, 0.12) 1px, transparent 1px);
}

#app.text-light .bg-dark,
#app.text-light .bg-dark2 {
  background-color: rgba(38, 44, 48, 0.88) !important;
}

@keyframes particle-float {
  0% {
    transform: translate3d(-2vw, 3vh, 0);
  }

  50% {
    transform: translate3d(3vw, -4vh, 0);
  }

  100% {
    transform: translate3d(-2vw, 3vh, 0);
  }
}

@keyframes background-drift {
  0% {
    transform: translate3d(-2%, -1%, 0) scale(1);
  }

  100% {
    transform: translate3d(2%, 2%, 0) scale(1.04);
  }
}

@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

.parent {
  margin-top: 38px;
  padding-top: 40px;
  position: relative;
}

.pgray {
  color: #535a5e;
}

.pblue {
  color: #669db3ff;
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #d3d2d2 !important;
}

.p-st {
  transition: all 0.5s !important;
}

/* To set scrollbar width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid #f0ebe3;
  background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: rgb(212, 149, 97);
  color: white;
  border-radius: 8px;
  font-size: 10px;
  /* padding: 5px 10px 4px; */
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: rgb(212, 149, 97);
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 10px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
