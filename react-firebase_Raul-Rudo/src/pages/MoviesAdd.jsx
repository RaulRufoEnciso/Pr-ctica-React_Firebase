// src/pages/MoviesAdd.jsx
import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase';

const MoviesAdd = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [direction, setDirection] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState(1);
  const [year, setYear] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "movies"), {
        title,
        description,
        direction,
        image,
        rate,
        year,
        duration
      });
      alert('Movie added successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Direction" value={direction} onChange={(e) => setDirection(e.target.value)} />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="number" placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)} min="1" max="5" />
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Duration (min)" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MoviesAdd;
