import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
useEffect(()=>{
console.log(items)
},[items])
  // Helper Functions

  /* Adds a new item to the list array*/
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
      
    }

    const item = {
      id: Date.now(),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    // Get the current item
    // const currentItem = items.filter((item) => item.id === id);

    let newItems = items.map((el) => (
      el.id===id? {...el, value: newText}: el
  ))
  setItems(newItems);
  

    // // Create a new item with same id
    // const newItem = {
    //   id: currentItem.id,
    //   value: newText,
    // };

    // deleteItem(id);

    // Replace item in the item list
    // setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

  //
  

  // Main part of app
  return (
    <div className="app">
      {/* 1. Header  */}
      <h1>My Todo List</h1>

      {/* 2. Add new item (input) */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      {/* Add (button) */}
      <button onClick={() => addItem()}>Add</button>

      {/* 3. List of todos (unordered list) */}
      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>

              {showEdit == item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => editItem(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

// import "./App.css";
// import React, { useState } from "react";


// const App =()=>{

// }


// const App = () => {

//   const [todos, settodos] = useState([]);
//   const [value, setvalue] = useState("");
//   const [editing, setediting] = useState(false);
//   const [currentid, setcurrentid] = useState("");
//   const [currentValue, setcurrentValue] = useState("");
  

//   const onChange = (e) => {
//     setvalue(e.target.value)
//   };
//   const onAddTask = (e) => {
//     e.preventDefault();

//     const obj = {
//       name: value,
//       id: Date.now(),
//     };
//     if (value !== "") {
//       settodos(todos.concat(obj));
//       setvalue("")
//     }
//   };

//   const onDeleteTask = (itemId) => {
//     settodos([...todos].filter(id => id.id !== itemId))
//   }

//   const onEditTodo = (id, newValue) => {
//     todos.map((todo) => {
//       if (todo.id === id) {
//         todo.name = newValue;
//       }
//     });
//   };

//   const onSubmitEditTodo = (e) => {
//     e.preventDefault();
//     onEditTodo(currentid, currentValue);
//     setediting(false)

//   };

//   const onToggleEdit = (todo) => {
//     setediting(true)
//     setcurrentValue(todo.name);
//     setcurrentid(todo.id)
//     // setcurrentTodo(todo)

//   };

//   const onEditInputChange = (e) => {
//     setcurrentValue(e.target.value);

//   };


//   const mylist = todos.map((todo) => (
//     <li className="todo_item">
//       {todo.name}

//       <button onClick={onToggleEdit(todo)}>Edit</button>
//       <button onClick={onDeleteTask(todo.id)}>Remove</button>
//     </li>
//   ));

//   return (
//     <>
//       <div className="App">
//         {editing === false ? (
//           <form onSubmit={onAddTask}>
//             <input
//               placeholder="typeyour task"
//               value={value}
//               onChange={onChange}
//             />
//             <button onClick={onAddTask}>Add Item</button>
//           </form>
//         ) : (
//           <form onSubmit={onSubmitEditTodo}>
//             <input
//               placeholder="edit your task"
//               value={onSubmitEditTodo.name}
//               name={onSubmitEditTodo.name}
//               onChange={onEditInputChange}
//             />
//             <button onClick={onSubmitEditTodo}>Update Item</button>
//           </form>
//         )}

//         <ul className="todo_wrapper">{mylist}</ul>
//       </div>
//     </>
//   );

// }

// export default App;