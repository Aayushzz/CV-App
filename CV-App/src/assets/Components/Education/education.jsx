import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./education.module.css";

function Education() {
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
            setOpen(!Open);
          })}
        >
          <input
            {...register("institutionName")}
            type="text"
            placeholder="Name of Institution"
          />
          <input
            {...register("Major")}
            type="text"
            placeholder="Major"
          />
          <input {...register("edstartDate")} type="date" placeholder="Start Date" />
          <input {...register("edendDate")} type="date" placeholder="End Date" />
          <input type="submit" placeholder="Save" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default Education;
