import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  homeTitle: {
    id: 'home.title',
    defaultMessage: 'Be part of an open, secure and global financial world'
  },
  homeBody: {
    id: 'home.body',
    defaultMessage: 'The easiest way of being part of a decentralized financial world. Where everyone is welcome on B58 DeFi Wallet on Cardano, that you are in control of your finances.' +
    '{br}'+
    'Get access to global payments where transactions are borderless and low fees using it with friends and family or your business.'+
    '{br}' +
    'Build up your wealth by earning rewards on your savings. At the same time, you\'re free to use your balance whenever you need.'+
    '{br}'
  },
  homeBtnDownload: {
    id: 'home.btn.download',
    defaultMessage: 'Available Soon'
  },
  homeBtnWhitePaper: {
    id: 'home.btn.whitepaper',
    defaultMessage: 'Read the Whitepaper'
  },
})

const Home = () => {

  return (
    <div id="home" className={"pt-16 -mt-16 lg:pt-32 lg:-mt-32 text-white bg-home dark:to-blue-dark"}>
      <section className="container mx-auto lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-0 md:row-gap-32">
          <div className="p-6">
            <h1 className="lg:mt-16 mb-8 lg:mr-10 text-3xl lg:text-6xl font-medium leading-tight">
              {f(messages.homeTitle)}
            </h1>
            <p className="text-base lg:mr-8 text-justify lg:text-left">
              {f(messages.homeBody, 
                {
                  br: <><br /><br /></>
                })
              }
            </p>
            <div className="lg:mt-10 lg:mb-10 flex flex-col lg:flex-row">
              <a href="#" role="button" className="w-full mb-4 text-center border-2 border-blue-light bg-blue-light hover:border-white hover:shadow-lg hover:bg-white hover:text-blue-light text-sm text-white uppercase font-bold py-4 px-6 rounded-md mr-10">
                {f(messages.homeBtnDownload)}
              </a>
              <a href="/assets/docs/whitepaper_v1_062021.pdf" target="_blank" role="button" className="w-full mb-4 text-center border-2 border-blue-light hover:border-white hover:text-white text-sm text-blue-light uppercase font-bold py-4 px-6 rounded-md">
                {f(messages.homeBtnWhitePaper)}
              </a>
            </div>
          </div>
          <div>
            <img src="/images/b58_app_home.png"
              alt="B58 Finance App Home"
              className="img-light dark:hidden"
              style={{ backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover' }}
            />
            <img src="/images/b58_app_home_dark.png"
              alt="B58 Finance App Home"
              className="img-dark dark:block"
              style={{ backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover' }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
