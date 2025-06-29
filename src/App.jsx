import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
