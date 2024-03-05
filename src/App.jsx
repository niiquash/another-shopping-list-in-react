import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ item: "", category: "" });
  const [shoppingList, setShoppingList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShoppingList((prevList) => [...prevList, formData]);
    setFormData({ item: "", category: "" });
  };

  const handleDelete = (i) => {
    const filteredList = shoppingList.filter(
      (listItem) => listItem.item !== i.item
    );
    setShoppingList(filteredList);
  };

  return (
    <main className="app">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="item">
          Item:
        </label>
        <input
          required
          className="form-input"
          type="text"
          name="item"
          id="item"
          value={formData.item}
          onChange={handleInputChange}
        />
        <label className="form-label" htmlFor="category">
          Category:
        </label>
        <select
          required
          name="category"
          id="category"
          onChange={handleInputChange}
          value={formData.category}
        >
          <option value="">Select</option>
          <option value="clothing">Clothing</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
        </select>
        <button className="submit-btn" type="submit">
          Add Item
        </button>
      </form>
      <div className="list-section">
        <h2 className="shopping-list-heading">Shopping List Items</h2>
        {shoppingList.length < 1 ? (
          <p>No shopping list to display</p>
        ) : (
          <table className="list-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {shoppingList &&
                shoppingList.map((listItem, idx) => (
                  <tr key={idx}>
                    <td>{listItem.item}</td>
                    <td>{listItem.category}</td>
                    <td>
                      <button
                        className="list-delete"
                        onClick={() => handleDelete(listItem)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}

export default App;
