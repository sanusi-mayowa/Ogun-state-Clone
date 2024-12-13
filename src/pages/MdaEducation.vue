<template>
  <section class="mda-education" style="margin-top: -130px">
    <div class="d-flex align-center h-100 mda-education-description">
      <div class="text-center text-white child">
        <h1 class="text-white">
          Advancing Education Science and Technology in Ogun
        </h1>
        <p>
          To develop a purposeful, inclusive and engaging education system that
          produces successful, inspired, self-motivated lifelong learners, who
          possess the skills and knowledge necessary to be productive
          contributors to the State and the changing world.
        </p>
      </div>
    </div>
  </section>
  <section class="mda-education-main px-15 mt-10">
    <v-row>
      <v-col cols="12" md="6" class="mda-cols">
        <v-card class="bg-mda px-10 py-5 d-flex align-center">
          <div>
            <h1 class="text-primary">OUR VISION</h1>
            <p class="mt-5 text">
              To develop a purposeful, and engaging education system that
              produces successful, self-motivated individuals equipped with
              critical thinking skills, and a passion for lifelong learning.
              This system should foster equal opportunities for all, and nurture
              a sense of responsibility, global citizenship.
            </p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="mda-cols">
        <v-card class="bg-mda2 py-5 px-5 d-flex align-center">
          <div>
            <h1>OUR VISION</h1>
            <p class="mt-5 text">
              To provide qualitative and affordable education for all children
              in a caring, collaborative, supportive, student-centred
              environment, which respects individual dignity, fosters
              self-worth; encourages personal excellence; and where all
              education partners are respected and valued.
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-10">
      <h1 style="font-size: 35px">About Us</h1>
      <p class="mt-2" style="font-size: 18px">
        Ministry of Education Science & Technology
      </p>
    </div>
    <div class="mt-10">
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <div>
            <img
              width="100%"
              class="rounded-xl"
              src="/assets/girl.png"
              alt=""
            />
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div>
            <p style="font-size: 18px" class="text">
              To develop a purposeful, inclusive and engaging education system
              that produces successful, inspired, self-motivated lifelong
              learners, who possess the skills and knowledge necessary to be
              productive contributors to the State and the changing world
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="projects mt-16">
      <h1 class="text-center mb-5" style="font-size: 30px">News & Projects</h1>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="position-relative"
          v-for="project in projects"
          :key="project"
        >
          <v-card>
            <div class="projects-img">
              <img width="100%" :src="project.img" alt="" />
              <div class="projects-img-child"></div>
            </div>
            <div class="projects-img-description px-8 py-5">
              <span class="text-grey" style="font-weight: 500">{{
                project.date
              }}</span>
              <h1 class="my-2">{{ project.title }}</h1>
              <p>{{ project.description }}</p>
            </div>
          </v-card>
          <div class="position-absolute news-top">
            <v-btn flat class="bg-primary rounded-pill">News</v-btn>
          </div>
          <div class="position-absolute news2-top">
            <h2 class="text-white">{{ project.news2 }}</h2>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="meet-commissioner mt-10">
      <h1 class="text-center">Meet the Commissioner</h1>
      <p class="mt-2 text-center">Ministry of Education Science & Technology</p>
      <div class="mt-10">
        <v-row class="justify-space-between">
          <v-col cols="12" md="6">
            <div class="mt-10">
              <p>
                Professor Abayomi Adelaja Arigbabu is the Commissioner for
                Education, Science, and Technology in Ogun State, Nigeria.
                Formerly Vice-Chancellor of Tai Solarin University of Education,
                he holds B.Sc. and M.Sc. degrees in Mathematics from the
                University of Lagos and a Ph.D. in Mathematics Education from
                the University of South Africa. With over three decades in
                strategic pedagogical planning, he has numerous academic
                publications and serves as an external examiner for doctoral
                theses and postgraduate programs nationally and internationally
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div>
              <img
                style="height: 400px; width: 100%; object-fit: contain"
                src="/assets/mda-executivesco.png"
                alt=""
              />
              <div class="text-center mt-3">
                <h1>Prof Abayomi Arigbabu</h1>
                <span class="text-grey"
                  >COMMISSIONER, Ministry of Education Science &
                  Technology</span
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
  <section class="mt-16 video-section bg-video text-center pt-8 pb-8">
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/cuFzeeWySQo"
        title="Governor's Projects in Ogun State"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
<script>
export default {
  name: "MdaEducationPage",
  data() {
    return {
      projects: [
        {
          img: "/assets/project1.png",
          date: "April 15, 2021",
          title: "Flag-Off Of Ogun State Digital Economy Empowerment Project",
          description:
            "Today is one of my proudest days as a citizen of Ogun State because today, Ogun State has taken the lead in digital technology in Nigeria by this first-of-its-kind massive investment in the digital infrastructure in our great State",
          news2: "Ministry News",
        },
        {
          img: "/assets/Project2.png",
          date: "April 16, 2022",
          title: "Ogun Govt Earmarks N109.219bn For Education Sector In 2024",
          description:
            "Ogun State Government has earmarked a sum of N109.219.62 billion for the Education sector in its 2024 Appropriation Bill presented to the State House of Assembly for consideration and approval.",
          news2: "Ministry Project",
        },
      ],
    };
  },
};
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
