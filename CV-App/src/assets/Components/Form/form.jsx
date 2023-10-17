import Education from "../Education/education";
import Info from "../Info/Info";
import Projects from "../Projects/projects";
import Skills from "../Skills/skills";
import Summary from "../Summary/summary";
import WorkExp from "../WorkExp/WorkExp";
import style from "./form.module.css";
function Form() {
  return (
    <div className={style.container}>
      <div className={style.Info}>
        <h2>Info</h2> 
        <Info />
      </div>
      <div className={style.Summary}>
        <h2>Summary</h2>
        <Summary />
      </div>
      <div className={style.Education}>
        <h2>Education</h2>
        <Education />
      </div>
      <div className={style.WorkExperience}>
        <h2>Work Experience</h2>
        <WorkExp />
      </div>
      <div className={style.Projects}>
        <h2>Projects</h2>
        <Projects />
      </div>
      <div className={style.Skills}>
        <h2>Skills</h2>
        <Skills />
      </div>
    </div>
  );
}

export default Form;
