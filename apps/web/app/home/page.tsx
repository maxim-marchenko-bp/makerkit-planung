import { PageBody, PageHeader } from '@kit/ui/page';

import { DashboardDemo } from '~/home/_components/dashboard-demo';
import Demo from "~/home/_components/demo-customers";

export default function HomePage() {
  return (
    <>
      <PageHeader description={'Your SaaS at a glance'} />

      <PageBody>
        <Demo></Demo>
        {/*<DashboardDemo />*/}
      </PageBody>
    </>
  );
}
