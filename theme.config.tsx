import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import { StoreIcon, AboutIcon, Unicorn, Pizza, Dialog, Discord, reFlowOS, Hunting, BridgeIcon } from '@components/Icons';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.reflow-store.com${asPath}`;
  const description = frontMatter.description || "Documentation for reFlow";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/reflow.ico" />
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
  const category = (arr[1][0] !== '#' && arr[1]) || ' reFlow';
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
      <svg xmlns="http://www.w3.org/2000/svg" height="28" fill="none" viewBox="0 0 497.66 101.56">
        <path d="M68.11,97.45v20.31H37.64V178.7H7.17V97.45Z" transform="translate(-7.17 -77.14)" fill="currentColor" />
        <path
          d="M78.27,178.7V97.45h71.09v50.78H108.73v10.16h40.63V178.7Zm40.62-50.78V117.76H108.73v10.16Z"
          transform="translate(-7.17 -77.14)"
          fill="currentColor"
        />
        <path
          d="M190,117.76h40.63v20.32H190V178.7H159.52V77.14h71.09V97.45H190Z"
          transform="translate(-7.17 -77.14)"
          fill="currentColor"
        />
        <path d="M271.23,77.14V178.7H240.77V77.14Z" transform="translate(-7.17 -77.14)" fill="currentColor" />
        <path
          d="M352.48,97.45V178.7H281.39V97.45Zm-40.62,20.31v40.63H322V117.76Z"
          transform="translate(-7.17 -77.14)"
          fill="currentColor"
        />
        <path
          d="M454.05,158.39V178.7H423.58V168.54H403.27V178.7H372.8V158.39H362.64V97.45h30.47v50.78h10.16V107.61h20.31v40.62h10.15V97.45H464.2v60.94Z"
          transform="translate(-7.17 -77.14)"
          fill="currentColor"
        />
        <path d="M504.83,158.39V178.7H474.36V158.39Z" transform="translate(-7.17 -77.14)" fill="currentColor" />
      </svg>
    </>
  ),
  
  /*
  project: {
    link: 'https://github.com/reFlowOrg',
  },
  */
  chat: {
    link: 'https://discord.gg/reflow',
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
  docsRepositoryBase: 'https://github.com/reFlowStore/docs/tree/main',
  feedback: {
    content: null
  },
  editLink: {
    component: null
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://reflow-store.com/" target="_blank">
          reFlow
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

      if (title === 'Discord') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{Discord}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Welcome') {
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

      if (title === 'Vanilla Unicorn') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{Unicorn}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Pizzaria') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{Pizza}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Dialog') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{Dialog}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      if (title === 'Hunting') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{Hunting}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }

      /*
      if (title === 'reFlowOS') {
        return (
          <>
            <div style={{ display: 'flex' }}>
              <span>{reFlowOS}</span>
              <span style={{ marginLeft: '1em' }}>{title}</span>
            </div>
          </>
        );
      }
      */


      return <>{title}</>;
    },
  },
  head: useHead,
  primaryHue: { dark: 0, light: 0 },
  primarySaturation: { dark: 0, light: 0 },

  useNextSeoProps: useNextSeoProps,
};

export default config;
