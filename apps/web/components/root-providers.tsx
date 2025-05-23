'use client';

import { useMemo } from 'react';

import dynamic from 'next/dynamic';

// import { ThemeProvider } from 'next-themes';

import { CaptchaProvider } from '@kit/auth/captcha/client';
import { I18nProvider } from '@kit/i18n/provider';
import { If } from '@kit/ui/if';
import { VersionUpdater } from '@kit/ui/version-updater';

import { AuthProvider } from '~/components/auth-provider';
import appConfig from '~/config/app.config';
import authConfig from '~/config/auth.config';
import featuresFlagConfig from '~/config/feature-flags.config';
import { i18nResolver } from '~/lib/i18n/i18n.resolver';
import { getI18nSettings } from '~/lib/i18n/i18n.settings';

import { ReactQueryProvider } from './react-query-provider';
const ThemeProvider = dynamic(() => import("next-themes").then((mod) => mod.ThemeProvider), { ssr: false });
const captchaSiteKey = authConfig.captchaTokenSiteKey;

const CaptchaTokenSetter = captchaSiteKey
  ? dynamic(() => import("@kit/auth/captcha/client").then(mod => mod.CaptchaTokenSetter), { ssr: false })
  : () => null;

export function RootProviders({
  lang,
  theme = appConfig.theme,
  children,
}: React.PropsWithChildren<{
  lang: string;
  theme?: string;
}>) {
  const i18nSettings = useMemo(() => getI18nSettings(lang), [lang]);

  return (
    <ReactQueryProvider>
      <I18nProvider settings={i18nSettings} resolver={i18nResolver}>
        <CaptchaProvider>
          <CaptchaTokenSetter siteKey={captchaSiteKey} />

          <AuthProvider>
            <ThemeProvider
              attribute="class"
              enableSystem
              disableTransitionOnChange
              defaultTheme={theme}
              enableColorScheme={false}
            >
              {children}
            </ThemeProvider>
          </AuthProvider>
        </CaptchaProvider>

        <If condition={featuresFlagConfig.enableVersionUpdater}>
          <VersionUpdater />
        </If>
      </I18nProvider>
    </ReactQueryProvider>
  );
}
