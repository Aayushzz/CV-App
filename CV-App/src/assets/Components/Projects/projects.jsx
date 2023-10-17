import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./projects.module.css";
function Projects() {
  const { register, handleSubmit } = useForm();
  const [Open, setOpen] = useState(false);
  return (
    <div className={style.container}>
      <button
        className={style.opener}
        onClick={() => {
          setOpen(!Open);
        }}
      >
        {Open ? "-" : "+"}
      </button>
      {Open ? (
        <form
          className={style.formContainer}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setOpen(!Open)
          })}
        >
          <input
            {...register("projectName")}
            type="text"
            placeholder="Project Name"
          />
          <textarea
            {...register("project Info")}
            type="text"
            placeholder="Project Info"
          />
          <input type="submit" placeholder="Save" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Projects;
