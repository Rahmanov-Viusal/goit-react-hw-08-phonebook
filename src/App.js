import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContatctList";
import FilterContact from "./components/FilterContact";
import Section from "./components/Section";
import Container from "./components/Container";
import "modern-normalize/modern-normalize.css";

export default function App() {
  return (
    <Container className="App">
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FilterContact />
        <ContactList />
      </Section>
    </Container>
  );
}
