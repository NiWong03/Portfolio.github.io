<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-white': !nightMode,
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
          Contact
        </span>
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div class="col-12 text-center">
          <div class="contact-info">
            <p data-aos="fade" data-aos-once="true" data-aos-duration="1000" data-aos-delay="300">
              <a href="mailto:Nicholasdwnwong@gmail.com" class="email-link">
                <i class="fas fa-envelope-square"></i>
              </a> 
              Email: Nicholasdwnwong@gmail.com
            </p>
            <p data-aos="fade" data-aos-once="true" data-aos-duration="1000" data-aos-delay="600">
              <i class="fas fa-phone-square"></i> Phone: (415) 601-3533
            </p>
            <p data-aos="fade" data-aos-once="true" data-aos-duration="1000" data-aos-delay="900">
              <i class="fas fa-map-marker-alt"></i> Location: San Francisco, CA<br>Open to Remote / Relocation
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
/* Base Styles */
.contact-container {
  max-width: 100%;
  margin: auto;
  padding: 40px 20px;
}

.title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center
}

.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.contact-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  background: #f8f9fa;
}

.icon {
  font-size: 30px; /* Increase the font size */
  margin-bottom: 5px;
}

/* Light Mode Colors */
.bg-light {
  background-color: #f8f9fa;
}

.text-dark {
  color: #333;
}

.icon-dark {
  color: #ff4081;
}

.text-muted-dark {
  color: #7d7d7d;
}

/* Dark Mode Colors */
.bg-dark {
  background-color: ##f8f9fa;
}

.text-light {
  color: #f8f9fa;

}

.icon-light {
  color: #ff79c6;
}

.text-muted-light {
  color: #b0b0b0;
}

.contact-text {
  flex-grow: 1;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  flex-direction: column;
}

.label {
  font-size: 16px;
}

.contact-text p {
  font-size: 14px;
  margin: 10px;
  flex-grow: 1;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
}

/* Responsive Styles */
@media screen and (max-width: 600px) {
  .contact-container {
    padding: 20px;
  }

  .title {
    font-size: 20px;
  }

  .contact-item {

    display:flex;
    align-items: center;
    padding: 10px;
    background: #f8f9fa
  }

  .icon {
    font-size: 30px;
    margin-bottom: 5px;
  }

  .label {
    font-size: 16px;
  }

  .contact-text p {
    font-size: 14px;
    flex-grow: 1;
    display: flex; 
    justify-content: center; /* Center horizontally */
    align-items: center;
  }
}


.bg-light {
  background-color: #f8f9fa;
}

.text-dark {
  color: #333;
}

.text-muted-dark {
  color: #7d7d7d;
}

.contact-info {
  font-size: 16px;
  line-height: 1.6;
  margin-top: 20px;
}

.contact-info i {
  margin-right: 10px; 
  font-size: 30px;
  color: #669db3ff; 
}

.contact-info i:hover {
  color:#6c757d; 
}

.contact-info p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.email-link {
  color: inherit; /* Inherit color from parent */
  text-decoration: none; /* Remove underline */
}

.email-link:hover {
  color: #6c757d; /* Change color on hover */
}
</style>
