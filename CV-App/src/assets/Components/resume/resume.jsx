import style from "./resume.module.css";

function Resume() {
  const infoDataString = localStorage.getItem("infoData");
  const infoData = JSON.parse(infoDataString);
  return (
    <div className={style.container}>
      <div className={style.info}>
        {infoData ? (
             <div>
             <h2>Resume Information</h2>
             <p>First Name: {infoData.firstName}</p>
             <p>Last Name: {infoData.lastName}</p>
             <p>Email: {infoData.email}</p>
             <p>Title: {infoData.Title}</p>
           </div>
        ):""}
      </div>
    </div>
  );
}
export default Resume;
