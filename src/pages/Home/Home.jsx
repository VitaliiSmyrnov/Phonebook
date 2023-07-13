import HomeImage from 'assets/contactbook1.png';
import { Container } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <h1>Welcome to your PhoneBook!</h1>
      <img src={HomeImage} alt="contactbook" />
      <h2>
        Please, <span>register</span> or <span>logIn</span> to be able to use
        your Phonebook.
      </h2>
    </Container>
  );
}
