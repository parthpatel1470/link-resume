import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import grey from "@mui/material/colors/grey";

import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import CertificationCard from "../components/CertificationCard";

import SectionBox from "../components/SectionBox";

import { useState } from "react";

const initData = {
  public_identifier: "parth-patel-1100b9180",
  profile_pic_url:
    "https://media.licdn.com/dms/image/D4D03AQEXjIf1DsIhVw/profile-displayphoto-shrink_400_400/0/1670177147438?e=1683763200&v=beta&t=9NHyTS7g8TTjU0uuYUoFW-WzMlb1j_Sndg6sdHtTlxA",
  background_cover_image_url: null,
  first_name: "Parth",
  last_name: "Patel",
  full_name: "Parth Patel",
  follower_count: null,
  occupation: "Software Developer at FERO.Ai",
  headline:
    "SDE-1 @FERO.Ai | Django | React.js | Vue.js | 6 stars on HackerRank",
  summary:
    "I am a Full stack web developer who is always eager to solve problems and agile to learn new technologies. Working with Django Rest Framework and Vuejs (Quasar) from past one year. My skills include Django, Django Rest Framework, Vue.js, Quasar, Vuex , Node.js, React.js, PostreSQL and MongoDB. These skills were acquired from my professional and academic experience. I am an engineering professional with a B. Tech focused in Information and Communication Technology from Ahmedabad University.",
  country: "IN",
  country_full_name: "India",
  city: "Ahmedabad",
  state: "Gujarat",
  experiences: [
    {
      starts_at: {
        day: 1,
        month: 6,
        year: 2022,
      },
      ends_at: null,
      company: "FERO.Ai",
      company_linkedin_profile_url: "https://www.linkedin.com/company/feroai/",
      title: "Software Developer",
      description:
        "Currently,  developing centralized dashboard/monitoring system using React.js with Material UI\n\nDeveloped REST APIs which collected and aggregated IVA usage data stored on MongoDB and visualized it on frontend web app using ApexCharts.js and Quasar Framework\n\nDeveloped a logistics Bidding module in a team of 3 by which bids were placed via WhatsApp channel and was managed by a Desktop Web application\n\nMigrated existing 240k+ rows of SQL data on PostgreSQL to MongoDB  using Django and PyMongo library",
      location: null,
      logo_url:
        "https://media.licdn.com/dms/image/C4D0BAQGVj6ncHV8yRg/company-logo_400_400/0/1595771092893?e=1686182400&v=beta&t=g6IzoQLOoCjnLdeIKfyPRuOVrB7hqU67itzWPiIH3ns",
    },
    {
      starts_at: {
        day: 1,
        month: 1,
        year: 2022,
      },
      ends_at: {
        day: 1,
        month: 5,
        year: 2022,
      },
      company: "FERO.Ai",
      company_linkedin_profile_url: "https://www.linkedin.com/company/feroai/",
      title: "Full stack developer intern",
      description:
        "Developed an internal tool which eased the process of Client POCs and on-boarding",
      location: "Ahmedabad, Gujarat, India",
      logo_url:
        "https://media.licdn.com/dms/image/C4D0BAQGVj6ncHV8yRg/company-logo_400_400/0/1595771092893?e=1686182400&v=beta&t=g6IzoQLOoCjnLdeIKfyPRuOVrB7hqU67itzWPiIH3ns",
    },
    {
      starts_at: {
        day: 1,
        month: 5,
        year: 2020,
      },
      ends_at: {
        day: 1,
        month: 7,
        year: 2020,
      },
      company: "Null Innovation",
      company_linkedin_profile_url:
        "https://www.linkedin.com/company/dolphyio/",
      title: "Web Developer",
      description:
        "Designed and developed responsive frontend web pages in Django templates using HTML, CSS and Javascript",
      location: "Ahmedabad, Gujarat, India",
      logo_url:
        "https://media.licdn.com/dms/image/C560BAQFklfwrNTimFw/company-logo_400_400/0/1641201182681?e=1686182400&v=beta&t=AESArGM7Tk28EJE_sx4cJvsG0T8-CfFVanpNxNE2YdI",
    },
  ],
  education: [
    {
      starts_at: {
        day: 1,
        month: 1,
        year: 2018,
      },
      ends_at: {
        day: 1,
        month: 1,
        year: 2022,
      },
      field_of_study: "Information and communication",
      degree_name: "BTech - Bachelor of Technology",
      school: "Ahmedabad University",
      school_linkedin_profile_url: null,
      description: null,
      logo_url:
        "https://media.licdn.com/dms/image/C510BAQHckPx_aapn0A/company-logo_400_400/0/1563162473649?e=1686182400&v=beta&t=N3c2KXQolxcgzrKEb93bRTvuIl3TzP89ncWUQcq7c74",
      grade: null,
      activities_and_societies: null,
    },
  ],
  languages: [],
  accomplishment_organisations: [],
  accomplishment_publications: [],
  accomplishment_honors_awards: [],
  accomplishment_patents: [],
  accomplishment_courses: [],
  accomplishment_projects: [],
  accomplishment_test_scores: [],
  volunteer_work: [
    {
      starts_at: {
        day: 1,
        month: 10,
        year: 2019,
      },
      ends_at: {
        day: 1,
        month: 3,
        year: 2020,
      },
      title: "Web Developer",
      cause: "SCIENCE_AND_TECHNOLOGY",
      company: "Ingenium 2020",
      company_linkedin_profile_url: null,
      description:
        "In a team of 3, designed and developed web page for Ahmedabad University's Annual Tech fest Ingenium",
      logo_url: null,
    },
    {
      starts_at: {
        day: 1,
        month: 1,
        year: 2018,
      },
      ends_at: {
        day: 1,
        month: 3,
        year: 2019,
      },
      title: "Marketing Volunteer",
      cause: "SCIENCE_AND_TECHNOLOGY",
      company: "Ingenium 2019",
      company_linkedin_profile_url: null,
      description: null,
      logo_url: null,
    },
  ],
  certifications: [
    {
      starts_at: {
        day: 1,
        month: 12,
        year: 2022,
      },
      ends_at: null,
      name: " The Ultimate Authentication Course with Django and VueJS",
      license_number: null,
      display_source: "udemy.com",
      authority: "Udemy",
      url: "https://www.udemy.com/certificate/UC-b4d5c374-7a8e-4e0e-8d20-bcdcd0d9f83c/",
    },
    {
      starts_at: {
        day: 1,
        month: 6,
        year: 2021,
      },
      ends_at: null,
      name: "Elastic Google Cloud Infrastructure: Scaling and Automation ",
      license_number: null,
      display_source: "coursera.org",
      authority: "Coursera",
      url: "https://coursera.org/share/095a56dd2d86a41f035636675dd36b1b",
    },
    {
      starts_at: {
        day: 1,
        month: 5,
        year: 2021,
      },
      ends_at: null,
      name: "Essential Google Cloud Infrastructure: Core Services",
      license_number: null,
      display_source: "coursera.org",
      authority: "Coursera",
      url: "https://coursera.org/share/ae32bac39bc4387ab84fbdaf1321866c",
    },
    {
      starts_at: {
        day: 1,
        month: 3,
        year: 2021,
      },
      ends_at: null,
      name: "Server-side Development with NodeJS, Express and MongoDB",
      license_number: null,
      display_source: "coursera.org",
      authority: "Coursera",
      url: "https://coursera.org/share/4e509ab68b1a2cd0ab573200ef313436",
    },
    {
      starts_at: {
        day: 1,
        month: 10,
        year: 2020,
      },
      ends_at: null,
      name: "Essential Google Cloud Infrastructure: Foundation",
      license_number: null,
      display_source: "coursera.org",
      authority: "Coursera",
      url: "https://coursera.org/share/b4a69d52b55478b1c893522e2835de1c",
    },
    {
      starts_at: {
        day: 1,
        month: 8,
        year: 2020,
      },
      ends_at: null,
      name: "Google Cloud Fundamentals: Core Infrastructure",
      license_number: null,
      display_source: "coursera.org",
      authority: "Coursera",
      url: "https://coursera.org/share/1a2af3859af10addd3062a2748f25573",
    },
    {
      starts_at: {
        day: 1,
        month: 8,
        year: 2019,
      },
      ends_at: null,
      name: "Web development",
      license_number: "14B70CD6-3AC2-E63D-FB43-88A710ED474B",
      display_source: "google.com",
      authority: "Internshala",
      url: "https://drive.google.com/file/d/11FZgQrFouNgL-cJnEa18dGQZaiYWG7ft/view?usp=drivesdk",
    },
    {
      starts_at: {
        day: 1,
        month: 7,
        year: 2019,
      },
      ends_at: null,
      name: "Java for android",
      license_number: null,
      display_source: "coursera.org",
      authority: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/certificate/6WKWH8NBD49G",
    },
  ],
  connections: null,
  people_also_viewed: [
    {
      link: "https://www.linkedin.com/in/jaxay-prajapati-378078170",
      name: "JAXAY  PRAJAPATI ",
      summary:
        "Data Scientist || Artificial Intelligence || Machine Learning || Deep Learning || NLP || Data analytics || SQL || Django || DRF || Computer Vision ||",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/abhishek-a-2382a6197",
      name: "Abhishek A.",
      summary: "Software Developer",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/mohitkumar-talreja",
      name: "Mohitkumar Talreja",
      summary: "Software Developer (Django) at FERO.AI",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/prashant-gabu-804318175",
      name: "Prashant Gabu",
      summary: "Full Stack Developer | Python | Django | Vue JS | Docker",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/adarsh-nigam-b5602b172",
      name: "ADARSH NIGAM",
      summary:
        "Python | Django | Django Rest Framework | Vue.Js| Nuxt.Js | Aws | Linux | Git | JavaScript | Jquery",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/rajendra-radiya-28a975188",
      name: "Rajendra Radiya",
      summary: "Position Frontend Developer at FERO.Ai",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/shiva-nand-chaudhari-831333194",
      name: "Shiva Nand  Chaudhari ",
      summary:
        "Software Engineer | Full Stack Developer | Python | Django | REST APIs| Vue Js | PostgreSQL",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/kashyap-padiya-ba56ab109",
      name: "Kashyap Padiya",
      summary: "Frontend Team Lead at FERO.Ai",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/surbhi-jain-011026172",
      name: "Surbhi Jain",
      summary: "Team Lead",
      location: null,
    },
    {
      link: "https://www.linkedin.com/in/vinay-yadav-vy",
      name: "Vinay Y.",
      summary: "Team Lead at FERO.Ai",
      location: null,
    },
  ],
  recommendations: [],
  activities: [],
  similarly_named_profiles: [],
  articles: [],
  groups: [],
  phone_numbers: [],
  social_networking_services: [],
  extra: {
    github_profile_id: null,
    twitter_profile_id: null,
    facebook_profile_id: null,
  },
  inferred_salary: {
    min: null,
    max: null,
  },
  gender: "male",
  birth_date: null,
  industry: null,
  interests: [],
  skills: [
    "Git",
    "PostgreSQL",
    "Vuex",
    "Vue.js",
    "Django REST Framework",
    "JavaScript",
    "React.js",
    "Quasar Framework",
    "MongoDB",
    "Python (Programming Language)",
    "Node.js",
    "Django",
    "GraphQL",
    "HTML",
    "Cascading Style Sheets (CSS)",
    "PHP",
    "Java",
    "C (Programming Language)",
    "SQL",
    "Microsoft Office",
  ],
  personal_numbers: [],
  personal_emails: [],
};

const EditResume = () => {
  const [sections, setSection] = useState([
    {
      label: "General",
      element: (
        <>
          <Typography variant="h6">
            {`${initData.first_name} ${initData.last_name}`}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
            {`${initData.city}, ${initData.state}, ${initData.country}`}
          </Typography>
          <Typography variant="caption">{initData.summary}</Typography>
          <hr />
        </>
      ),
    },
    {
      label: "Experience",
      element: (
        <>
          <SectionBox
            title="WORK EXPERIENCE"
            list={initData.experiences}
            Component={ExperienceCard}
          />
        </>
      ),
    },
    {
      label: "Education",
      element: (
        <>
          <SectionBox
            title="EDUCATION"
            list={initData.education}
            Component={EducationCard}
          />
        </>
      ),
    },
    {
      label: "Skills",
      element: (
        <>
          <Typography variant="subtitle1">SKIILLS</Typography>
          <hr />
          <Typography variant="caption">{initData.skills.join()}</Typography>
        </>
      ),
    },
    {
      label: "Certifications",
      element: (
        <>
          <SectionBox
            title="CERTIFICATIONS"
            list={initData.certifications}
            Component={CertificationCard}
          />
        </>
      ),
    },
    {
      label: "Volunteer Work",
      element: (
        <>
          <SectionBox
            title="VOLUNTEER WORK"
            list={initData.volunteer_work}
            Component={ExperienceCard}
          />
        </>
      ),
    },
  ]);
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3">Edit Resume</Typography>
        </Grid>
        <Grid item xs={6} sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              backgroundColor: grey[200],
              padding: 4,
              overflowY: "scroll",
              maxHeight: "90%",
              scrollbarWidth: 0,
            }}
          >
            <Box sx={{ backgroundColor: "white", padding: 2 }}>
              {sections.map((section, index) => (
                <div key={index}>{section.element}</div>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EditResume;
