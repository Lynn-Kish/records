import React from 'react';

function DeleteCyclist({ cyclist, onDelete }) {
  const handleDelete = () => {
    // Call a function to delete the cyclist record
    onDelete(cyclist);
  };

  return (
    <div>
      <h2>Delete Boda-Boda Cyclist</h2>
      <p>Name: {cyclist.name}</p>
      {/* Display other cyclist information */}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteCyclist;
