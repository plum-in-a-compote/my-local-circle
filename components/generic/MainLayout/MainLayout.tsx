import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col pb-16">
        <Header />
        <Container as="main" className="py-10 sm:py-12 lg:py-16">
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  );
};
