import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { StoreIcon, AboutIcon, BridgeIcon, UnitTesting, NotifyIcon, MerchantIcon, FreeIcon, PayCheckIcon, StashesIcon, MenuIcon, KeyPadIcon } from '@components/Icons';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.sloppydesigns.com${asPath}`;
  const description = frontMatter.description || "Documentation for Sloppy Designs";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/sd.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Sloppy Designs';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg height="30" viewBox="0 0 39.33 30.02" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.63,29.2c-.31-1.68-.62-3.27-.89-4.87C2.11,20.56,1.51,16.79.88,13c-.14-.87-.4-1.71-.52-2.58A1.63,1.63,0,0,1,2,8.4c5.88-.77,11.76-1.64,17.65-2.27,3.57-.39,7.17-.39,10.75-.61C32.16,5.41,34,5.23,35.73,5c2.15-.24,3.28.49,3.45,2.61.21,2.65.23,5.32.3,8q.12,4.37.18,8.73c0,2.1-.27,2.53-2.31,3.15A14.82,14.82,0,0,1,34.9,28c-.87.11-1.24.47-1.2,1.4,0,.58-.37,1.63-.61,1.62s-.47-1-.66-1.51a7.43,7.43,0,0,1-.19-1.09c-.33,0-.6,0-.87,0-1.8.11-1.75.12-2.15,1.88a8,8,0,0,1-.87,2.33,1.61,1.61,0,0,1-2.63.46,6.09,6.09,0,0,1-1-1,13.94,13.94,0,0,1-.83-1.31c-.73,1.7-1.24,3.53-3.1,4.09-2.2.66-2.85-1.34-3.94-2.66-.25.45-.47.87-.73,1.27-.65,1-1.59,1-2.1,0a22.21,22.21,0,0,1-1-3.28l-6.25,1a3.68,3.68,0,0,1-.93-.07,3.18,3.18,0,0,1-1.1-.5A3.23,3.23,0,0,1,3.63,29.2ZM18.12,13.25a6.92,6.92,0,0,1-.4-1.13c-.11-.54-.08-1.11-.17-1.66C17.14,8,16.26,7.35,13.77,7.78c-3.18.54-6.35,1.13-9.53,1.72-1.88.35-2.12.78-1.83,2.68.44,2.92.77,5.84,1.22,8.76.37,2.43.84,4.85,1.28,7.27a1,1,0,0,0,1.26.94c1.54-.17,3.1-.25,4.63-.49,2.8-.44,2.77-.47,3.53,2.21.16.55.61,1.8.93,1.8s.68-1.33.91-1.83c.7-1.46,1.18-1.51,2.11-.16.34.49.61,1,.94,1.52s.75,1.54,1.16,1.54.69-.87.86-1.29c.6-1.48,1.13-3,1.75-4.45.44-1.07,1-1.14,1.57-.19s.89,1.77,1.36,2.64c.26.49.76,1.47,1,1.47s.62-1.14.74-1.66c.66-2.81.91-3,3.83-3.26,1.69-.17,3.36-.58,5-.9a1.14,1.14,0,0,0,1-1.39A42.13,42.13,0,0,1,37.32,20c.15-3.78.41-7.55.63-11.33a1.66,1.66,0,0,0-1.68-2,8,8,0,0,0-1.55,0c-4.51.48-9,1-13.54,1.51-.42.06-1,2.59-1.57,2.43s-.74-2.08-1-2S18.59,13.14,18.12,13.25Z"
          transform="translate(-0.33 -4.99)"
          fill="currentColor"
        />
        <path
          d="M15.56,14.07l.39.6c1.21,1.82.88,2.52-1.31,2.68-1.52.11-3.05,0-4.55.23s-3,.59-4.36.87c.27.48.42.72.54,1,.39.84.77,1.69,1.15,2.54l0,0A4.88,4.88,0,0,0,12,24.18a5.82,5.82,0,0,0,4.2-3c.08.06-1,1.92-.78,2a1.81,1.81,0,0,0,1.09-1.59c.09-1.18.09-2.38.14-3.57a3,3,0,0,1,.12-.85C17.26,15.88,16.94,14.93,15.56,14.07Z"
          transform="translate(-0.33 -4.99)"
          fill="currentColor"
        />
        <path
          d="M34.74,15.87A32.61,32.61,0,0,0,31,15.73c-2.14.15-4.26.51-6.39.7-.93.09-1.29-.38-1.09-1.28A8.43,8.43,0,0,1,24,14c-.78.73-1.13,1-.81,2.11.24.8.52,1.58.83,2.36.37,1,.73,1.92,1.19,2.83A3.63,3.63,0,0,0,27,22.87c.21,0-.69-1.14-.65-1.11,3.92,2.51,8.21-.81,8-4.88C34.24,16.6,34.52,16.31,34.74,15.87Z"
          transform="translate(-0.33 -4.99)"
          fill="currentColor"
        />
      </svg>
      <span style={{ marginLeft: '1em', fontWeight: 800 }}>Sloppy Designs</span>
    </>
  ),
  project: {
    link: 'https://github.com/SloppyDesigns',
  },
  chat: {
    link: 'https://discord.gg/sloppydesigns',
  },
  /*
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Nextra 2.0 is released. Read more →
      </a>
    ),
  },
  */
  docsRepositoryBase: 'https://github.com/sloppydesigns/docs/tree/main',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://www.sloppydesigns.com/" target="_blank">
          Sloppy Designs
        </a>
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, type }) {
      if (title === 'Tebex') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{StoreIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'About') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{AboutIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Bridge') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{BridgeIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Unit') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{UnitTesting}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'SD-Notify') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{NotifyIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'SD-Merchants') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{MerchantIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      // Free Releases
      if (title === 'Free Releases') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{FreeIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'SD-Paycheck') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{PayCheckIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'SD-Stashes') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{StashesIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'SD-Menu') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{MenuIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'SD-KeyPad') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{KeyPadIcon}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      return <>{title}</>;
    },
  },
  head: useHead,
  primaryHue: { dark: 151, light: 151 },

  useNextSeoProps: useNextSeoProps,
};

export default config;
