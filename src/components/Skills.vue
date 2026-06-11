<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
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
          Skills
        </span>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="row skills-grid">
        <div
          class="col-3 text-center pb-3 px-2 skill-col"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class="bg-div skill-icon-wrap">
            <img :src="skill.icon" alt="Skill Icon" />
          </div>
          <div class="title2 pt-1">{{ skill.title }}</div>
          <hr
            width="50%"
            :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
          />
          <span class="title3">{{ skill.info.join(", ") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.bg-div img {
  display: block;
  max-width: 78px;
  max-height: 78px;
  object-fit: contain;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 12px;
  min-height: 50px;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
}

.skills-grid {
  margin-left: -5px;
  margin-right: -5px;
}

.skill-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
}

.skill-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92px;
  width: 100%;
}

.skill-col hr {
  margin-top: 8px;
  margin-bottom: 12px;
}

@media screen and (max-width: 580px) {
  .title2 {
    font-size: 18px;
    min-height: 46px;
  }

  .skill-icon-wrap {
    height: 82px;
  }

  .bg-div img {
    max-width: 68px;
    max-height: 68px;
  }
}
</style>
