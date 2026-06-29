<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
        >
          About me
        </span>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <div class="timeline-tabs" role="tablist" aria-label="About me sections">
            <button
              v-for="panel in panels"
              :key="panel.key"
              type="button"
              class="timeline-tab"
              :class="{ active: activePanel === panel.key, 'text-light': nightMode }"
              role="tab"
              :aria-selected="activePanel === panel.key"
              @click="activePanel = panel.key"
            >
              {{ panel.title }}
            </button>
          </div>
          <Timeline :data="activeTimeline" :nightMode="nightMode" />
        </div>
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 mt-5"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div class="about-text">
            <p>
              I am a passionate software developer with a strong background in computer science and a keen interest in developing innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies and improve my skills.
            </p>
            <p>
              In my free time, I enjoy working on personal projects, playing basketball, working out, and staying updated with the latest trends in technology. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from "./helpers/Timeline";
import info from "../../info";

export default {
  name: "About",
  components: {
    Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      activePanel: "experience",
      education: {
        title: "Education",
        data: info.education,
      },
      experience: {
        title: "Experience",
        data: info.Experience,
      },
    };
  },
  computed: {
    panels() {
      return [
        { key: "experience", title: "Experience" },
        { key: "education", title: "Education" },
      ];
    },
    activeTimeline() {
      return this.activePanel === "education" ? this.education : this.experience;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.timeline-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 18px 1rem 0;
}

.timeline-tab {
  border: 1px solid rgba(212, 149, 97, 0.35);
  border-radius: 6px;
  padding: 8px 14px;
  background: transparent;
  color: inherit;
  font-weight: 500;
  transition: all 0.25s;
}

.timeline-tab:hover,
.timeline-tab.active {
  background: rgba(212, 149, 97, 0.16);
}
</style>
