import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Navigation from '../components/navigation'
import Stake from '../components/stake'
import Cardano from '../components/cardano'
import Extra from '../components/extra'
import Layout from '../components/layout'
import { getPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { useState } from 'react'
import Roadmap from '../components/roadmap'
import { GA_TRACKING_ID } from '../lib/gtag'


type Props = {
  allPosts: {
    hero: Post
    stories: Post[]
  }
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts.hero
  const morePosts = allPosts.stories

  return (
    <>
      <Layout>
        <Head>
          <title>B58 Finance - Multi Feature DeFi Wallet on Cardano</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@B58Finance" />
          <meta name="twitter:title" content="B58 Finance - Multi Feature DeFi Wallet on Cardano" />
          <meta name="twitter:description" content={`The easiest way of being part of a decentralized financial world. 
          Where everyone is welcome on B58 DeFi Wallet on Cardano, that you are in control of your finances.`} />
          {/* TODO: Change cover page */}
          <meta name="twitter:image" content="https://b58.finance/images/cover.jpeg" />
          <meta
            name="og:description"
            content={`The easiest way of being part of a decentralized financial world. 
            Where everyone is welcome on B58 DeFi Wallet on Cardano, that you are in control of your finances..`}
          />
          <meta property="og:image" content="/images/cover.jpeg" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <Navigation />
        <div id="home" className={"pt-16 -mt-16 lg:pt-32 lg:-mt-32 text-white bg-home dark:to-blue-dark"}>
          <section className="container mx-auto lg:px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-0 md:row-gap-32">
              <div className="p-6">
                <h1 className="lg:mt-16 mb-8 lg:mr-10 text-3xl lg:text-6xl font-medium leading-tight">
                  Be part of an open, secure and global  financial world
                </h1>
                <p className="text-base lg:mr-8 text-justify lg:text-left">
                  The easiest way of being part of a decentralized financial world. Where everyone is welcome on B58 DeFi Wallet on Cardano, that you are in control of your finances.
                  <br /><br />
                  Get access to global payments where transactions are borderless and low fees using it with friends and family or your business.
                  <br /><br />
                  Build up your wealth by earning rewards on your savings. At the same time, you're free to use your balance whenever you need.
                  <br /><br />
                </p>
                <div className="lg:mt-10 lg:mb-10 flex flex-col lg:flex-row">
                  <a href="#" role="button" className="w-full mb-4 text-center border-2 border-blue-light bg-blue-light hover:border-white hover:shadow-lg hover:bg-white hover:text-blue-light text-sm text-white uppercase font-bold py-4 px-6 rounded-md mr-10">
                    Available Soon
                  </a>
                  <a href="/assets/docs/whitepaper_v1_062021.pdf" target="_blank" role="button" className="w-full mb-4 text-center border-2 border-blue-light hover:border-white hover:text-white text-sm text-blue-light uppercase font-bold py-4 px-6 rounded-md">
                    Read the Whitepaper
                  </a>
                </div>
              </div>
              <div>
                <img src="/images/b58_app_home.png" 
                  alt="B58 Finance App Home" 
                  className="img-light dark:hidden"
                  style={{backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover'}}
                />
                <img src="/images/b58_app_home_dark.png" 
                  alt="B58 Finance App Home" 
                  className="img-dark dark:block"
                  style={{backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover'}}
                />
              </div>
            </div>
          </section>
        </div>
        <Container>
          <section id="about" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-6 row-gap-0 md:row-gap-6 lg:mb-10">
              <div className="flex flex-wrap content-center">
                <img src="/images/cardano_img.png" alt="B58 Finance Powered by Cardano" className="img-light dark:hidden"/>
                <img src="/images/cardano_img_dark.png" alt="B58 Finance Powered by Cardano" className="img-dark dark:block"/>
              </div>
              <div className="lg:ml-6 p-6">
                <h1 className="mb-8 text-3xl lg:text-6xl font-medium leading-tight">
                  About B58 Finance be powered by Cardano
                </h1>
                <p className="text-base text-justify lg:text-left lg:mr-8">
                  <strong>B58 Finance</strong> is a decentralized finance multi-feature wallet built on top of Cardano Blockchain. That provides the operational financial system infrastructure to our services.
                  <br /><br />
                  This allows us to build features that empower you to be your own bank, using Peer-to-Peer communication with no need for middle agents.
                  <br /><br />
                  We aim to bring the next generation of wallets to you and provide the same experience available today. By using traditional mobile banks and remove the complexity of the blockchain world.
                </p>
              </div>
            </div>
          </section>
          <section id="wallet" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
            <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-12 row-gap-0 md:row-gap-6 lg:mb-10">
              <div className="flex flex-wrap content-center lg:mr-6 p-6">
                <h1 className="mb-8 text-3xl lg:text-6xl font-medium leading-tight">
                  A Wallet that is simple and easy to use
                </h1>
                <p className="text-base text-justify lg:text-left lg:mr-8">
                  Our wallet is fully featured where <strong>Cardano ADA</strong> is our main currency but also allows you to transact native tokens available in the platform.
                  <br /><br />
                  You're able to receive payments through our personalized <strong>Card QR</strong> that allows you to express yourself by the selection of themes available.
                  <br /><br />
                  We also provide a Savings account ready and easy to use, where you earn rewards and can claim them every 5 days or build your retirement plan with it.
                  <br /><br />
                  One more thing that you will enjoy is our <strong><abbr title="Non-Fungible Tokens">NTF</abbr></strong> (Non-Fungible Tokens) manager available.
                </p>
              </div>
              <div>
                <img src="/images/b58_app_qr.png" 
                  alt="B58 Finance App Home"
                  className="img-light dark:hidden"
                  style={{backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}
                />
                <img src="/images/b58_app_qr_dark.png" 
                  alt="B58 Finance App Home" 
                  className="img-dark dark:block"
                  style={{backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}
                />
              </div>
            </div>
          </section>
          <section id="defi" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-6 row-gap-0 md:row-gap-6 lg:mb-10">
              <div className="item-center text-center hidden md:block">
                <img src="/images/peer_to_peer.png" alt="B58 Finance Peer to Peer Communication" className="inline-block"/>
              </div>
              <div className="lg:ml-6 p-6">
                <h1 className="mb-8 text-3xl lg:text-6xl font-medium leading-tight">
                  All you can do with Decentralized finance
                </h1>
                <div className="item-center text-center block md:hidden">
                  <img src="/images/peer_to_peer.png" alt="B58 Finance Peer to Peer Communication" className="inline-block"/>
                </div>
                <p className="text-base text-justify lg:text-left lg:mr-8">
                  Our <strong><abbr title="Decentralized Finance">DeFi</abbr></strong> (Decentralized Finance) services empower you to engage with others in the community, by providing liquidity to collateralized loans while you earn yields on your crypto assets.
                  <br /><br />
                  You can also promote an open world where you can use our <strong>Mission Transparency</strong> feature to Donate and register it on the blockchain.
                  <br /><br />
                  Plus help small business take off their ideas or farmers in remote locations that need a micro-loan to grow their production. All of it using our <strong>Social Lending</strong> based on our Social Proof algorithm.
                </p>
              </div>
            </div>
          </section>
          <section id="team" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
            <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-6 row-gap-0 md:row-gap-6 lg:mb-10">
              <div className="flex flex-wrap content-center p-6">
                <h1 className="text-3xl lg:text-6xl font-medium leading-tight">
                  We are the Team that is building it for you
                </h1>
              </div>
              <div className="lg:ml-6 p-6 pt-2 lg:pt-6">
                <p className="text-base text-justify lg:text-left lg:mr-8">
                  Our Team is building to use ourselves, which result in a high-quality product for you to use as well.
                  <br /><br />
                  We're committed to delivering the best in software development bringing a vast background from Enterprise Software, Cloud Engineer and Cyber Security.
                </p>
              </div>
            </div>
            <div className="p-6 lg:mt-6 grid grid-cols-1 md:grid-cols-3 md:col-gap-28 row-gap-0 md:row-gap-6 lg:mb-10">
              <div className="item-center text-center">
                <img src="/images/francis.jpeg" className="w-32 inline-block rounded-full border-4 border-gradient m-4" />
                <h2 className="text-lg text-bold">Francis Luz</h2>
                <small>Co-Founder</small>
                <p className="text-sm text-justify">20 years of experience in Software Development, working with a variety of languages. And being part of projects in South America as consultant, living and helping to develop the Social Security System of Angola Africa, and working as a Cyber Security Engineer at a Global Bank.</p>
                <p className="p-6">
                  <a
                    href="https://github.com/francisluz/"
                    target="_blank"
                    className="mx-1 hover:underline"
                  >
                    <svg role="img" className="fill-current inline-block h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Francis GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/francisluz"
                    target="_blank"
                    className="mx-1 hover:underline"
                  >
                    <svg role="img" className="fill-current inline-block h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Francis LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </p>
              </div>
              <div className="item-center text-center">
                <img src="/images/flavio.jpeg" className="w-32 inline-block rounded-full border-4 border-gradient m-4" />
                <h2 className="text-lg text-bold">Flavio Rasseli</h2>
                <small>Co-Founder</small>
                <p className="text-sm text-justify">20 years of experience in Backend Development specialized in developing Enterprise tools and integrations in SAP ecosystem, focused on Supply Chain, Manufacturing and Financial. As a consultant have worked with multinational companies and automakers such as Fiat and Chrysler.</p>
                <p className="p-6">
                  <a
                    href="https://github.com/frasseli/"
                    target="_blank"
                    className="mx-1 hover:underline"
                  >
                    <svg role="img" className="fill-current inline-block h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Flavio GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/frasseli"
                    target="_blank"
                    className="mx-1 hover:underline"
                  >
                    <svg role="img" className="fill-current inline-block h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Flavio LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </p>
              </div>
              <div className="item-center text-center">
                <img src="/images/gabriel.jpeg" className="w-32 inline-block rounded-full border-4 border-gradient m-4" />
                <h2 className="text-lg text-bold">Gabriel Guarnieri</h2>
                <small>Co-Founder</small>
                <p className="text-sm text-justify">11 years of experience in Software Development and Mobile specialist delivering cross-platform solutions, working developing custom ERP Systems for the Brazilian Market, and currently developing a iOS and Android Mobile solution for Health Insurance companies in the USA.</p>
                <p className="p-6">
                  <a
                    href="https://github.com/gabrielgc/"
                    target="_blank"
                    className="mx-1 hover:underline"
                  >
                    <svg role="img" className="fill-current inline-block h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Gabriel GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gabrielgc"
                    target="_blank"
                    className="mx-1 hover:underline"
                  >
                    <svg role="img" className="fill-current inline-block h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                      <title>Gabriel LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </section>
          <Roadmap/>
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'hero',
  ])

  return {
    props: { allPosts },
  }
}