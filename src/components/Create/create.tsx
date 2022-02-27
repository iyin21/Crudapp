import styles from "./create.module.scss";
import { FormEvent, useState } from "react";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => res.data)
      .then((response) => {
        alert("success");
        return response.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert("successdd");
        console.log(error.response);
        console.log(
          error?.response?.data?.message || "An Error occured, please try again"
        );
        //alert(error?.response?.data?.message || 'An Error occured, please try again');
        //setAppointmentError(error?.response?.data?.message || 'An Error occured, please try again')
      })
      .finally(() => {
        setSubmitLoading(false);
      });
  };
  return (
    <div>
      <form className={styles.center} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label className={styles.form_control_label}>Title:</label>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.form_control_label}>Body:</label>
          <input
            className={styles.form_input}
            type="text"
            placeholder="Enter your body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label className={styles.form_control_label}>User Id:</label>
          <input
            className={styles.form_input}
            type="number"
            placeholder="Enter your userId"
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            required
          />
        </div>
        <button type="submit" className="mb-5">
          {submitLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;
