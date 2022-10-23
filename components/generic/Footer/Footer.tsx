import { Container } from '../Container/Container';
import { FooterContributors } from './FooterContributors';
import { FooterFileLink } from './FooterFileLink';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-12 pb-24 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32">
      <Container as="div">
        <h3 className="text-2xl font-bold text-white mb-2 sm:text-3xl sm:mb-3 lg:text-4xl lg:mb-4">
          Autorzy projektu
        </h3>
        <span className="block mb-8 pb-3 text-sm leading-6 text-white border-b border-dashed border-amber-100 sm:text-base sm:border-none">
          Powyższy projekt jest dziełem współpracy:
        </span>
        <FooterContributors />
        <div className="flex justify-center gap-12 mt-16 lg:mt-28">
          <FooterFileLink name="humans.txt" />
          <FooterFileLink name="robots.txt" />
        </div>
      </Container>
    </footer>
  );
};
