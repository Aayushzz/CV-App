import style from './summary.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function Summary(){
const { register, handleSubmit} = useForm();
const [Open, setOpen] = useState(false);
    return(
        <div className={style.container}>
             <button className={style.opener} onClick={() => {
            setOpen(!Open)
        }}>
            {Open ? "-" : "+"}
        </button>
            {Open ? (
                <form className={style.formContainer} onSubmit={handleSubmit((data) => {
                    console.log(data);
                    setOpen(!Open);
                })}
                >
                   <textarea {...register("summary")} />
                    <input type='submit' placeholder='Save' />
                </form>
            ) : ""}
        </div>
    )
}

export default Summary