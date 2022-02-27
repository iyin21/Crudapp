import styles from "./read.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
//import { useHistory } from 'react-router';
import { useNavigate } from "react-router";

interface Response {
  title: string;
  body: string;
  userId: number;
  id: number;
}

const Read = () => {
  const [apiData, setApiData] = useState<Response[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setApiData(response.data);
      })

      .catch((err) => {
        alert("an error occured!");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  //   apiData.map((data) => {
  //     data.userId;
  //   })
  // apiData.map((data) => {
  //   console.log(data.title);
  // });
  const handleSubmit = (id: number) => {};
  const handleDelete = (id: number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
        setApiData(response.data);
      })
      .then((data) => {
        console.log(data);
        getData();
      })
      .catch((err) => {
        alert("an error occured!");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <div className={styles.header}>
            <h2>CRUD APP</h2>
            <button
              type="button"
              onClick={() => {
                navigate("/create");
              }}
            >
              Create
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {apiData?.length > 0 &&
              apiData?.map((data, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{data.id}</td>

                    <td>{data.userId}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/update", {
                            state: {
                              title: data.title,
                              body: data.body,
                              id: data.id,
                              userId: data.userId,
                            },
                          });
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          console.log("hey");
                          handleDelete(data.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};
export default Read;
