import { FooterContributor } from './FooterContributor';

const contributors = [
  {
    name: 'Bartłomieja Wiśniewskiego',
    projectRole: 'Programista | Twórca projektu graficznego strony',
    profileUrl: 'https://github.com/wisnie',
  },
  {
    name: 'Michała Ołubiec',
    projectRole: 'Programista | Model bazy danych',
    profileUrl: 'https://github.com/Skczu',
  },
  {
    name: 'Michała Markiewicza',
    projectRole: 'Model bazy danych | Pomoc w tłumaczeniu strony na język ukraiński',
    profileUrl: 'https://github.com/Milorys',
  },
  {
    name: 'Kacpra Sadowskiego',
    projectRole: 'Pomoc przy testowaniu',
    profileUrl: 'https://github.com/54D4',
  },
];

export const FooterContributors = () => {
  return (
    <ul className="flex flex-col gap-y-8 sm:grid sm:grid-cols-2 sm:gap-x-9 m:gap-y-9">
      {contributors.map((contributor) => (
        <li key={contributor.name}>
          <FooterContributor
            name={contributor.name}
            projectRole={contributor.projectRole}
            profileUrl={contributor.profileUrl}
          />
        </li>
      ))}
    </ul>
  );
};
