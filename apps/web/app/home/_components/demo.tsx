import dynamic from 'next/dynamic';

import { LoadingOverlay } from '@kit/ui/loading-overlay';
import { Trans } from '@kit/ui/trans';

export const Demo = dynamic(() => import('./demo-customers'), {
  ssr: false,
  loading: () => (
    <LoadingOverlay>
      <span className={'text-muted-foreground'}>
        <Trans i18nKey={'common:loading'} />
      </span>
    </LoadingOverlay>
  ),
});
