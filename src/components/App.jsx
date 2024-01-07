import { useEffect } from 'react';
import { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filtration from './Filtration/Filtration';
import Section from './Section/Section';

const App = () => {
  useEffect(() => {
    persistor.persist();
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Section>
        <h2>Phonebook</h2>
        <ContactForm />
      </Section>
      <Section>
        <Filtration />
        <ContactList />
      </Section>
    </PersistGate>
  );
};

export default App;

// import { useEffect } from 'react';
// import { persistor } from './store';
// import { PersistGate } from 'redux-persist/integration/react';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filtration from './components/Filtration';

// const App = () => {
//   useEffect(() => {
//     persistor.persist();
//   }, []);

//   return (
//     <PersistGate loading={null} persistor={persistor}>
//       <section>
//         <h2>Phonebook</h2>
//         <ContactForm />
//       </section>
//       <section>
//         <Filtration />
//         <ContactList />
//       </section>
//     </PersistGate>
//   );
// };

// export default App;
