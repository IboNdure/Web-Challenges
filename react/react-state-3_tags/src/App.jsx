import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  // Add a new tag to the list
  function handleAddTag(newTag) {
    setTags((prevTags) => [...prevTags, newTag]);
  }

  // Remove a tag from the list
  function handleDeleteTag(tagToDelete) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      {/* Pass handleAddTag to Form */}
      <Form onAddTag={handleAddTag} />
      {/* Pass tags and handleDeleteTag to List */}
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
