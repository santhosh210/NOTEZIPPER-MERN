import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Badge } from "react-bootstrap";
import Link from "react-router-dom/Link";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

const MyNotes = () => {
  const [notes, setnotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setnotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcome Santhosh Kumar Konda">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          create new note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex " }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header>{note.title}</Accordion.Header>
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>

              <Card.Body>
                <Accordion.Body>
                  <h4>
                    <Badge variant="success">category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      {" "}
                      Created On - date
                    </footer>
                  </blockquote>
                </Accordion.Body>
              </Card.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
