import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./skills.module.css";

function Skills() {
  const { register, handleSubmit } = useForm();
  const [Open, setOpen] = useState(false);
  return (
    <div className={style.container}>
        <button className={style.opener} onClick={() => {
            setOpen(!Open)
        }}>
            {Open ? "-" : "+"}
        </button>
      {Open ? (
        <form
          className={style.formContainer}
          onSubmit={handleSubmit((data) => {
            console.log(data);
            setOpen(!Open);
          })}
        >
          <input {...register("Skill1")} type="text"/>
          <input {...register("Skill2")} type="text"/>
          <input {...register("Skill3")} type="text"/>
          <input {...register("Skill4")} type="text"/>
          <input type="submit"/>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Skills;
