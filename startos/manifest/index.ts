import { setupManifest } from '@start9labs/start-sdk'
import { depLndDescription, long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bolt12-pay',
  title: 'BOLT12 Pay',
  license: 'mit',
  packageRepo: 'https://github.com/Start9-Community/bolt12-pay-startos',
  upstreamRepo: 'https://github.com/Alex71btc/lndk-pay',
  marketingUrl: 'https://github.com/Alex71btc/lndk-pay',
  docsUrls: ['https://github.com/Alex71btc/lndk-pay'],
  donationUrl: null,
  description: { short, long },
  volumes: ['main', 'startos'],
  images: {
    main: {
      source: {
        dockerBuild: {},
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {
    lnd: {
      description: depLndDescription,
      optional: false,
      metadata: {
        title: 'LND',
        icon: 'https://raw.githubusercontent.com/Start9Labs/lnd-startos/6a24e93761aa9046d427d0e62021defcaf9b47f3/icon.svg',
      },
    },
  },
})
