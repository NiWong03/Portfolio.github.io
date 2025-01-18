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
          <Timeline :data="education" :nightMode="nightMode" />
        </div>
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 mt-5"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div class="about-text">
            <p>
              <!-- Add your text content here -->
              I am a passionate software developer with a strong background in computer science and a keen interest in developing innovative solutions. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies and improve my skills.
            </p>
            <p>
              <!-- Add more text content as needed -->
              In my free time, I enjoy working on personal projects, playing basketball, working out, and staying updated with the latest trends in technology. I believe in continuous learning and strive to keep myself updated with the latest advancements in the field.
            </p>
          </div>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
          <Timeline :data="experience" :nightMode="nightMode" />
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
      education: {
        title: "Education",
        data: info.education,
      },
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
