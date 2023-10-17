import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import style from "./Info.module.css";

function Info() {
  const { register, handleSubmit, control } = useForm({
    firstName: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  // Function to save data to local storage
  const ToLocalStorage = (data) => {
    localStorage.setItem("infoData", JSON.stringify(data));
  };

  return (
    <div className={style.container}>
      <button
        className={style.opener}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && (
        <form
          className={style.formContainer}
          onSubmit={handleSubmit((data) => {
            setIsOpen(!isOpen);
            ToLocalStorage(data); // Save data to local storage
          })}
        >
          <div className={style.inputRow}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="First Name"
                  className={style.input}
                />
              )}
              name="firstName"
            />

            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className={style.input}
            />
          </div>
          <div className={style.inputRow}>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={style.input}
            />
            <input
              {...register("Title")}
              type="text"
              placeholder="Title"
              className={style.input}
            />
          </div>
          <input type="submit" value="Save" className={style.submitButton} />
        </form>
      )}
    </div>
  );
}

export default Info;
