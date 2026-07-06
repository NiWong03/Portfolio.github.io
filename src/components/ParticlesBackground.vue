@@
<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
  <div class="site-background" aria-hidden="true"></div>
    <div class = 'content'>
    <ParticleBackground />
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
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ParticleBackground from "./components/ParticlesBackground.vue";
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
    ParticleBackground,
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

.content {
  position: relative;
  z-index: 1;
}