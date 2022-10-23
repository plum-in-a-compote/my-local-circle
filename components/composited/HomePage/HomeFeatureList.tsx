import { FavoriteIcon } from '../../generic/Icons/FavoriteIcon';
import { PeopleIcon } from '../../generic/Icons/PeopleIcon';
import { ProjectIcon } from '../../generic/Icons/ProjectIcon';
import { TimelineIcon } from '../../generic/Icons/TimelineIcon';
import { HomeFeature } from './HomeFeature';

export const HomeFeatureList = () => {
  return (
    <ul className="sm:w-1/2 flex flex-col gap-y-8 lg:gap-y-16 lg:mt-16 xl:mt-24">
      <HomeFeature
        title="Własne społeczności"
        description="Utwórz własną społeczność, zarządzaj nią i miej kontrolę nad czynionymi przez członków zmianami."
      >
        <PeopleIcon
          width={40}
          height={40}
          className="fill-gray-600 shrink-0 p-1 rounded bg-blue-200 lg:w-14 lg:h-14"
        />
      </HomeFeature>
      <HomeFeature
        title="Tworzenie budżetów kwartalnych"
        description="Twoje wykresy będą dopasowane pod Ciebie. Projektuj co tylko chcesz, czekają na ciebie różne rodzaje budżetów."
      >
        <TimelineIcon
          width={40}
          height={40}
          className="shrink-0 p-1 rounded bg-blue-200 lg:w-14 lg:h-14"
        />
      </HomeFeature>
      <HomeFeature
        title="Głosowanie na projekty"
        description="Głosuj za projektami innych i obserwuj ich rozwój. Zgłaszaj też własne propozycje."
      >
        <ProjectIcon
          width={40}
          height={40}
          className="shrink-0 p-1 rounded bg-blue-200 lg:w-14 lg:h-14"
        />
      </HomeFeature>
      <HomeFeature
        title="Realizacja pomysłów"
        description="Zaproponuj ciekawe rozwiązanie i obserwuj, jak projekty otrzymują poparcie innych członków."
      >
        <FavoriteIcon
          width={40}
          height={40}
          className="fill-gray-600 shrink-0 p-1 rounded bg-blue-200 lg:w-14 lg:h-14"
        />
      </HomeFeature>
    </ul>
  );
};
