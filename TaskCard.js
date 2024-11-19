import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import Modal from "./Modal";

export function TaskCard({ task }) {
  const [isModal, setIsModal] = useState(false);

  // Draggable setup
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  // Apply draggable transformation if it exists
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <>
      {/* Modal display logic */}
      {isModal && (
        <Modal>
          <h1>Modal Content</h1>
          <button onClick={() => setIsModal(false)}>Close Modal</button>
        </Modal>
      )}

      <div className="parent">
        <div
          ref={setNodeRef}
          {...listeners}
          {...attributes}
          className="task-box"
          style={style}
        >
          <h3 className="task-text">{task.title}</h3>
          <p className="task-details">{task.description}</p>

          {/* Clickable button */}
          <div
            className="button-container"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event interference
              console.log("Button container clicked!");
              setIsModal(true); // Open the modal
            }}
          ></div>
        </div>
        <button
          className="button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag events
            console.log("Button clicked!");
            // setIsModal(true); // Open the modal
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
