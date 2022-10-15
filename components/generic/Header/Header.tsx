import { Container } from '../Container/Container';
import { MenuIcon } from '../Icons/MenuIcon';

export const Header = () => {
  return (
    <header className="bg-gray-50">
      <Container className="py-4 sm:py-5 lg:py-6" as="nav">
        <MenuIcon width={24} height={24} />
        <div></div>
      </Container>
    </header>
  );
};
