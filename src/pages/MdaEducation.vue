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
      <v-row class="align-stretch">
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div style="height: 100%; width: 100%">
            <img
              style="height: 100%; width: 100%; object-fit: cover"
              src="/assets/girl.png"
              alt=""
            />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <div style="height: 100%">
            <h3 class="purpose">
              Developing a Purposeful, Inclusive, and Engaging Education System
            </h3>
            <p class="paragraph mt-2">
              Education is the cornerstone of any society, shaping the
              individuals who will lead, innovate, and contribute to its
              development. A purposeful, inclusive, and engaging education
              system is not merely a collection of schools and curricula but a
              dynamic framework that fosters lifelong learning, critical
              thinking, and adaptability. It aims to empower learners with the
              skills and knowledge needed to thrive as productive contributors
              to their communities, their state, and the rapidly changing world.
            </p>
            <h2 class="mt-3">Purposeful Education</h2>
            <p class="paragraph mt-2">
              A purposeful education system is built on clear objectives that
              address both individual and societal needs. It aligns with a
              vision that prioritizes not only academic excellence but also
              personal development, ethical values, and social responsibility.
              It recognizes that education is not a one-size-fits-all endeavor;
              instead, it emphasizes relevance by integrating practical
              knowledge and real-world skills into the curriculum. This ensures
              that learners are equipped to solve modern challenges, navigate
              complex global issues, and seize emerging opportunities in fields
              such as technology, healthcare, and entrepreneurship.
            </p>
            <h3 class="mt-3">Cultivating Skills for a Changing World</h3>
            <p class="paragraph mt-2">
              The modern world demands individuals who can adapt to constant
              change. A purposeful education system emphasizes critical
              thinking, problem-solving, communication, and digital literacy as
              core competencies. By integrating these skills into the
              curriculum, students become prepared for the demands of the
              21st-century workforce. Additionally, fostering global awareness
              and cultural sensitivity ensures that learners are not only
              capable of contributing locally but also globally.
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
    <div class="meet-commissioner mt-10 pb-16">
      <h1 class="text-center">Meet the Commissioner</h1>
      <p class="mt-2 text-center">Ministry of Education Science & Technology</p>
      <div class="mt-10">
        <v-row class="align-stretch">
          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <div style="height: 100%">
              <p class="paragraph">
                <span class="highlight"
                  >Professor Abayomi Adelaja Arigbabu</span
                >
                is a distinguished academic and administrator currently serving
                as the
                <span class="highlight"
                  >Commissioner for Education, Science, and Technology in Ogun
                  State, Nigeria</span
                >. A renowned figure in the field of Mathematics Education,
                Professor Arigbabu has dedicated over three decades to advancing
                pedagogy, research, and educational administration.
              </p>
              <p class="mt-3">
                Born and raised in Nigeria, Professor Arigbabu earned his B.Sc.
                and M.Sc. degrees in Mathematics from the University of Lagos,
                one of Nigeria's most prestigious institutions. His academic
                journey culminated in a Ph.D. in Mathematics Education from the
                University of South Africa, a testament to his commitment to
                bridging theory and practice in education.
              </p>
              <p class="mt-3 paragraph">
                Prior to his appointment as Commissioner, he served as the
                Vice-Chancellor of the Tai Solarin University of Education
                (TASUED), the first specialized university of education in
                Nigeria. Under his leadership, TASUED experienced significant
                growth in academic standards, research output, and
                infrastructural development.
              </p>
              <p class="mt-3 paragraph">
                Professor Arigbabu has made substantial contributions to
                academia through his numerous publications in peer-reviewed
                journals. His research interests span mathematics education,
                curriculum development, and teacher training. A passionate
                advocate for educational excellence, he has presented papers at
                various international conferences and continues to mentor
                upcoming scholars in the field.
              </p>
              <p class="mt-3 paragraph">
                His expertise extends beyond Nigeria, as he serves as an
                external examiner for doctoral theses and postgraduate programs
                across Africa and beyond, further solidifying his reputation as
                a global authority in mathematics education.
              </p>
              <p class="mt-3 paragraph">
                As Commissioner for Education, Science, and Technology,
                Professor Arigbabu is committed to fostering innovation,
                improving STEM education, and ensuring that Ogun State remains a
                hub for academic and technological advancements. Through
                strategic policymaking and collaboration with stakeholders, he
                is spearheading initiatives to equip students with 21st-century
                skills and promote sustainable development in the region.
              </p>
              <p class="mt-3 paragraph">
                In addition to his professional accomplishments, Professor
                Arigbabu is known for his humility, dedication to community
                service, and unwavering passion for empowering future
                generations through education.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-center align-center">
            <div style="height: 100%; width: 100%">
              <img
                src="/assets/mda-executivesco.png"
                style="height: 100%; width: 100%; object-fit: cover"
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
.paragraph {
  font-size: 16px;
  text-align: justify;
}
.highlight {
  font-weight: bold;
}
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
