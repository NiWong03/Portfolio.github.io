let info = {
  name: "Nicholas Wong",
  logo_name: "Nicholas",
  flat_picture: require("./src/assets/pfp.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a student at the University of California, Riverside currently studying Computer Science with Business Applications.",
  links: {
    linkedin: "https://www.linkedin.com/in/nicholas-wong-110b2b231/",
    github: "https://github.com/NiWong03",
    instagram: "https://www.instagram.com/notn1ckwong",
    resume:
      "/Resume.pdf"
  },
  education: [
    {
      name: "Galileo Academy of Science and Technology",
      place: "San Fracisco, CA",
      date: "Aug, 2017 - Jun, 2021",
      degree: "High School Diploma",
    },
    {
      name: "University of California, Riverside",
      place: "Riverside, CA",
      date: "Sep, 2021 - Jun, 2025",
      degree: "B.S. Computer Science with Business Applications",
    }
  ],
  skills: [
    {
      title: "C/C++",
      info: [
      ],
      icon: require("./assets/skills/C.svg")
    },
    {
      title: "AWS",
      info: [
      ],
      icon: require("./assets/skills/AWS.svg")
    },
    {
      title: "CSS",
      info: [
      ],
      icon: require("./assets/skills/CSS.svg")
    },
    {
      title: "JavaScript",
      info: [
      ],
      icon: require("./assets/skills/JavaScript.svg")
    },
    {
      title: "HTML",
      info: [
      ],
      icon: require("./assets/skills/HTML.svg")
    },
    {
      title: "Node.js",
      info: [
      ],
      icon: require("./assets/skills/NodeJs.svg")
    },
    {
      title: "Python",
      info: [
      ],
      icon: require("./assets/skills/Python.svg")
    },
    {
      title: "React",
      info: [
      ],
      icon: require("./assets/skills/React.svg")
    },
    {
      title: "FastApi",
      info: [
      ],
      icon: require("./assets/skills/fastapi.svg")
    },
    {
      title: "Flask",
      info: [
      ],
      icon: require("./assets/skills/Flask.png")
    },
    {
      title: "Bash",
      info: [
      ],
      icon: require("./assets/skills/bash.png")
    },
    {
      title: "Git",
      info: [
      ],
      icon: require("./assets/skills/git.svg")
    },
    {
      title: "Vue",
      info: [
      ],
      icon: require("./assets/skills/vue.png")
    },
    {
      title: "Excel",
      info: [
      ],
      icon: require("./assets/skills/excel.svg")
    },
    {
      title: "QT",
      info: [
      ],
      icon: require("./assets/skills/java.svg")
    },
    {
      title: "Java",
      info:[
      ],
      icon: require('./assets/skills/java.svg')
    },
    {
      title: "SQL",
      info:[
      ],
      icon: require('./assets/skills/sql.png')
    }
  ],
  portfolio: [
    {
      name: "MangaReact",
      pictures: [
        {
          img: require("./src/assets/portfolio/MangaReact/mangareact copy.gif")
        },
        {
          img: require("./src/assets/portfolio/MangaReact/ss_home copy.png")
        },
        {
          img: require("./src/assets/portfolio/MangaReact/ss_about copy.png")
        },
        {
          img: require("./src/assets/portfolio/MangaReact/ss_recentlyadded copy.png")
        }
      ],
      technologies: ["React","AWS", "EC2", "REST API", "MUI"],
      category: "Web App",
      github:
        "https://github.com/NiWong03/MangadexReact",
      visit: "https://github.com/NiWong03/MangadexReact",
      description:
        "MangaReact is a responsive web application designed to enhance your manga reading experience. Our app leverages the power of React and the extensive MangaDex API to bring you a seamless, user-friendly interface for discovering and enjoying your favorite manga. "
    },
    {
      name: "SkyTrack",
      pictures: [
        {
          img: require("./src/assets/portfolio/ST/ss1.png")
        },
        {
          img: require("./src/assets/portfolio/ST/ss2.png")
        },
        {
          img: require("./src/assets/portfolio/ST/ss3.png")
        },
        {
          img: require("./src/assets/portfolio/ST/ss4.png")
        },
        {
          img: require("./src/assets/portfolio/ST/ss5.png")
        }
      ],
      technologies: ["QT", "C++", "OpenWeatherApi"],
      category: "Desk App",
      github: "https://github.com/NiWong03/CS100-Weather-DeskApp",
      visit: "https://github.com/NiWong03/CS100-Weather-DeskApp",
      description:
        "A Weather Desktop application using C++ and the QT framework, featuring a Pomodoro timer,to-do list, quote generator, calendar, and temperature converter."
    },
    {
      name: "Chrome Extension Theme",
      pictures: [
        {
          img: require("./src/assets/portfolio/CT.png")
        },
      ],
      technologies: [
        "JavaScript",
        "FastApi",
        "HTML",
        "CSS",
      ],
      category: "Chrome Theme",
      github: "https://github.com/NiWong03/extension1",
      visit: "https://github.com/NiWong03/extension1",
      description:
        "Customized Chrome extension theme using HTML and CSS to integrate date and time widgets. Implemented JavaScript to display weather information through the OpenWeatherMap API."
    },
    {
      name: "Deb Game",
      pictures: [
        {
          img: require("./src/assets/portfolio/DB.png")
        },
      ],
      technologies: [
        "Python",
        "Pygame",
      ],
      category: "2-D Game (Python)",
      github: "https://github.com/NiWong03/2D-Game",
      visit: "https://github.com/NiWong03/2D-Game",
      description:
        "A 2D Zelda-style game with depth and collision features using Python and the Pygame library."
    }
  ],
  portfolio_design: [
    {
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/MoodBoard.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/Mockups 2.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/App Elements.png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore."
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/MoodBoard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pantree/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pantree/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Moodboard.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 1.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 2.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/bunder/Mockup 3.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 1.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/designs/bunder/Market Research 2.png"),
          title: "Market Research 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    }
  ]
};

export default info;
