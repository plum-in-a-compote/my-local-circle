import { Container } from '../Container/Container';
import { Text } from '../Text/Text';

// @todo use Heading & define Text variant
export const Footer = () => {
  return (
    <footer className="bg-amber-50 pt-12 pb-24 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32">
      <Container as="div">
        <h3 className="text-2xl font-bold text-gray-800 mb-1.5 sm:text-3xl sm:mb-3 lg:text-4xl lg:mb-4">
          Stopka
        </h3>
        <Text content="Tworzymy razem lepszą sieć przez wzgląd na dostępność i szybkość działania." />
      </Container>
    </footer>
  );
};
