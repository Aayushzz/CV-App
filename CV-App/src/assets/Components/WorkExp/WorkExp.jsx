import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./WorkExp.module.css";

function WorkExp() {
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
            {...register("companyName")}
            type="text"
            placeholder="Name of Company"
          />
          <input
            {...register("jobTitle")}
            type="text"
            placeholder="Title"
          />
          <input {...register("edstartDate")} type="date" placeholder="Start Date" />
          <input {...register("edendDate")} type="date" placeholder="End Date" />
          <textarea {...register("points")} placeholder="Points" />
          <input type="submit" placeholder="Save" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default WorkExp;
