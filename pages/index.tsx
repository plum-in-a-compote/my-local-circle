import type { NextPage } from 'next';
import Head from 'next/head';

import { BudgetChart } from '../components/generic/BudgetChart/BudgetChart';
import { SMALL_HEIGHT, SMALL_WIDTH } from '../components/generic/Icons/constants';
import { ProjectIcon } from '../components/generic/Icons/ProjectIcon';
import { TimelineIcon } from '../components/generic/Icons/TimelineIcon';
import { MainLayout } from '../components/generic/MainLayout/MainLayout';
import { Tabs } from '../components/generic/Tabs/Tabs';
import { TabSection } from '../components/generic/Tabs/TabSection';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Strona główna - My local circle</title>
      </Head>
      <Tabs
        className="mb-4"
        tabs={[
          { name: 'Linia czasu', value: 'timeline', icon: <TimelineIcon /> },
          {
            name: 'Podania',
            value: 'projects',
            icon: <ProjectIcon width={SMALL_WIDTH} height={SMALL_HEIGHT} />,
          },
        ]}
        defaultActiveTab="timeline"
      />
      <TabSection value="timeline">Users</TabSection>
      <TabSection value="projects">Projects</TabSection>

      <BudgetChart
        projects={[
          {
            cost: 3000,
            id: '1',
            name: 'Wycieczka',
          },
          {
            cost: 2000,
            id: '2',
            name: 'Test',
          },
        ]}
      />
    </MainLayout>
  );
};

export default Home;
