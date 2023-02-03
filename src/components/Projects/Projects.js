import React, { useState } from "react";
import { GridImages, Imagesdiv,ModalDiv1,ModalDiv1Title,ModalDiv2,ModalDiv2Div,UtilityList,ExternalLinks,ModalDiv3 } from "./ProjectsStyles";
import {Section,SectionDivider,SectionTitle,SectionText} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { motion } from 'framer-motion'
import { IoMdInformation, IoMdClose } from "react-icons/io";

const Modal = ({ project, extendProjectInfo, setExtendProjectInfo }) => {
  return (
    <div class='loading-mask'style={{position: "fixed",zIndex: "1022",top: "0",left: 0,width: "100%",height: "100%",backgroundColor: " rgba(0, 0, 0, 0.5)",display: "flex",justifyContent: "center",alignContent: "center",alignItems: "center",}}
    >
      <div style={{borderRadius: "10px",backgroundColor: "black",width: "85%",height: "85%",maxWidth: "100%",overflowY: "auto",padding: "25px",}}
      >
        <div>

          <ModalDiv1>
            <ModalDiv1Title>{project.title}</ModalDiv1Title>
            <IoMdClose color='white' size="3rem" onClick={() => setExtendProjectInfo(!extendProjectInfo)}></IoMdClose>
          </ModalDiv1>

          <ModalDiv2>
            <Imagesdiv style={{gridColumn:"2/3",gridRow:"1/2"}}>
                <motion.div className='slider-container'>
                    <motion.div className='slider' drag='x' 
                     dragConstraints={{right: 0, left:-5123}} >
                        {project.images.map(image => (
                      <motion.div className='item'>
                          <img src={image} alt="" />
                      </motion.div>
                    ))}
                    </motion.div>
                </motion.div>
            </Imagesdiv>
            
            <ModalDiv2Div style={{gridRow:"1/3",gridColumn:"1/2", color:"white", fontSize:"17px",gridRow:"1/2"}}>
              <SectionText >{project.description}</SectionText>
            </ModalDiv2Div>
          </ModalDiv2>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [extendProjectInfo, setExtendProjectInfo] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      {
        <Section nopadding id='projects'>
          <SectionDivider />

          <SectionTitle main>Projects</SectionTitle>

          <GridImages>
            {projects.map((project) => (
              <divImg
                key={project.id}
                onClick={() => {
                  setExtendProjectInfo(!extendProjectInfo);
                  setSelectedProject(project);
                }}
              >
                <img
                  src={project.imageP}
                  style={{ width: "100%", height: "100%" }}
                />
              </divImg>
            ))}
          </GridImages>
        </Section>
      }
      {extendProjectInfo && (
        <Modal
          project={selectedProject}
          extendProjectInfo={extendProjectInfo}
          setExtendProjectInfo={setExtendProjectInfo}
        />
      )}
    </>
  );
};

export default Projects;