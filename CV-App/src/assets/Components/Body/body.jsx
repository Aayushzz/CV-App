import Form from '../Form/form';
import Resume from '../resume/resume';
import style from './body.module.css'


function Body(){
    return (
        <div className={style.body}>
            <div className={style.formArea}>
                 <Form />
            </div>
            <div className={style.resumeArea}>
               <Resume />
            </div>
        </div>
    )
}

export default Body;