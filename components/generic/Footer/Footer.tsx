import { Container } from '../Container/Container';

// @todo use Heading & define Text variant
export const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-12 pb-24 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32">
      <Container as="div">
        <h3 className="text-2xl font-bold text-white mb-1.5 sm:text-3xl sm:mb-3 lg:text-4xl lg:mb-4">
          Stopka
        </h3>
        <p className="text-white text-xs leading-5 font-normal lg:text-base lg:leading-6">
          Tworzymy razem lepszą sieć przez wzgląd na dostępność i szybkość działania.
        </p>
      </Container>
    </footer>
  );
};
