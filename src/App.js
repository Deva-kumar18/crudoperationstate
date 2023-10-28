
import './App.css';
import ADD from '../src/Assets/Add.png'
import Delete from '../src/Assets/delete.png'
import Edit from '../src/Assets/pencil.png'

import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([
    { id: 1, name: 'Steve' },
    { id: 2, name: 'Tony' },
    { id: 3, name: 'Peter' },
  ]);

  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const idCounter= data.length+1

  const handleAdd = () => {
    if (newItem) {
   setData([...data, { id: idCounter, name: newItem }]);
  setNewItem('');
    }
  };

  const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditItem(itemToEdit);
  };

  const handleUpdate = () => {
  const updatedData = data.map((item) => {
  if (item.id === editItem.id) {
  return editItem;
    }
  return item;
    });
    setData(updatedData);
  setEditItem(null);
  };

  const handleCancel = () => {
  setEditItem(null);
  };

  return (
    <div className='table-container'>
      <h1> Add, Delete,Edit Actions</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editItem?.id === item.id ? (
                  <input
                    type="text" className='edit-input'
                    value={editItem.name}
                    onChange={(e) =>
                      setEditItem({ ...editItem, name: e.target.value })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editItem?.id === item.id ? (
                  <div>
                    <div className='div-btns'>
                    <button className='update-btn' onClick={handleUpdate}><img className='edit-ico' src={Edit}/></button>
                    <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                    </div>
                    
                  </div>
                ) : (
                  <div>
                    <button className='edit-btn' onClick={() => handleEdit(item.id)}><img className='edit-ico' src={Edit}/></button>
                    <button className='delete-btn' onClick={() => handleDelete(item.id)}><img className='del-ico' src={Delete}/></button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        
      </table>
      <div className='input-section'>
        <input
          type="text"
          placeholder="New user"
          className='add-input'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className='add-btn' onClick={handleAdd}><img className='add-ico' src={ADD}/></button>
      </div>
    </div>
  );
}

export default App;
