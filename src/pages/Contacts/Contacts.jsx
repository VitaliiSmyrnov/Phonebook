import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { getContacts } from 'redux/contacts/operations';
import { ContactForm, Filter, ContactList } from 'components';
import { Container, Wrapper, Section, Message } from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm />

        <Section>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && <p>Request in progress...</p>}

          {contacts.length > 0 && <ContactList />}

          {contacts.length === 0 && !error && !isLoading && (
            <Message>You don't have contacts yet.</Message>
          )}

          {error && (
            <Message>Oops, something went wrong. Reload the page</Message>
          )}
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Contacts;
