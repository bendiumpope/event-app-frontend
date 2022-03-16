import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, login } from "../../redux/actions";
import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";
import TextArea from "../../components/textArea/TextArea";


import classes from "./EventsPage.module.css";

const options: any = [
  { value: true, label: "True" },
  { value: false, label: "False" },
];

function Events() {
  const [openModal, setOpenModal] = useState(false);
  const [singleEvent, setSingleEvent] = useState(null);
  const [query, setQuery]: any = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const { events, token }: any = useSelector((state) => state);

  const showSingleEvent = (id: string) => {
    const currentEvent = events.find((event: any) => event._id === id);
    setSingleEvent(currentEvent);
    setOpenModal(true);
  };

  const addEventHandler = () => {
    
    navigate("/add-event")
  }
 

  return (
    <>
      {token && <div className={classes.event_button}><button onClick={addEventHandler}>Add Event</button></div>}
      <div className={classes.event_container}>
        {openModal && (
          <Modal singleEvent={singleEvent} setOpenModal={setOpenModal} />
        )}
      </div>
      <TextArea
        type="text"
        placeholder="Search by Category"
        handleChange={(event: { target: { value: any } }) =>
          setQuery(event.target.value)
        }
      />
      <div>
        {events
          .filter((post: { category: string }) => {
            if (query === "") {
              return post;
            } else if (
              post.category.toLowerCase().includes(query.toLowerCase())
            ) {
              return post;
            }
          })
          .slice(0)
          .reverse()
          .map((result: any) => (
            <div
              className={classes.hotlist}
              onClick={() => showSingleEvent(result._id)}
              key={result._id}
            >
              <Card
                title={result.title}
                category={result.category}
                date={result.date}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default Events;
