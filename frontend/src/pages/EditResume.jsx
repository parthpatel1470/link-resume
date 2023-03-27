import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import grey from "@mui/material/colors/grey";

import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import CertificationCard from "../components/CertificationCard";

import SectionBox from "../components/SectionBox";

import update from "immutability-helper";
import { useCallback, useState } from "react";
import DndSectionsContainer from "../components/DndSectionsContainer";
import initData from "../newData.json";
// import GeneralForm from "../components/forms/GeneralForm";
// import ExperienceForm from "../components/forms/ExperienceForm";
// import EducationForm from "../components/forms/EducationForm";
import SkillForm from "../components/forms/SkillForm";

// const initData = ;

const EditResume = () => {
  const [sections, setSection] = useState([
    {
      id: 1,
      label: "General",
      isSelected: true,
      element: (
        <>
          <Typography variant="h6">{initData.general.fullName}</Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
            {`${initData.general.city}, ${initData.general.state}, ${initData.general.countryFullName}`}
          </Typography>
          <Typography variant="caption">{initData.general.summary}</Typography>
          <hr />
        </>
      ),
    },
    {
      id: 2,
      label: "Experience",
      isSelected: false,
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
      id: 3,
      label: "Education",
      isSelected: false,
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
      id: 4,
      label: "Skills",
      isSelected: false,
      element: (
        <>
          <Typography variant="subtitle1">SKIILLS</Typography>
          <hr />
          <Typography variant="caption">{initData.skills.join()}</Typography>
        </>
      ),
    },
    {
      id: 5,
      label: "Certifications",
      isSelected: false,
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
      id: 6,
      label: "Volunteer Work",
      isSelected: false,
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
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleIsSelected = (selectedIndex, isSelected) => {
    const newSections = sections.map((element, index) => {
      if (index === selectedIndex) {
        element.isSelected = isSelected;
      } else {
        element.isSelected = !isSelected;
      }
      return element;
    });
    setSection(newSections);
    setSelectedSection(newSections[selectedIndex]);
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setSection((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3">Edit Resume</Typography>
          <DndSectionsContainer
            sections={sections}
            moveCard={moveCard}
            handleIsSelected={handleIsSelected}
          />

          <Typography variant="h6">{selectedSection.label}</Typography>

          <SkillForm />
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
            <Box sx={{ backgroundColor: "white", padding: 2, width: "100vh" }}>
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
