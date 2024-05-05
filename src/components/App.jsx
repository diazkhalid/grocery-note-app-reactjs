import Header from './Header';
import Form from './Form';
import Grocery from './Grocery';
import Footer from './Footer';
import groceryItems from '../data/GroceryItemDummy';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
    //excercise
    // const itemIndex = items.findIndex((item) => item.id === itemId);
    // const updatedItems = [...items];
    // updatedItems.splice(itemIndex, 1);
    // setItems(updatedItems);
  }

  function handleToggleItem(itemId) {
    setItems((items) => items.map((item) => (item.id === itemId ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <Grocery
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
