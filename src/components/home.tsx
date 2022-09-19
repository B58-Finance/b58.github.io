import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  homeTitle: {
    id: 'home.title',
    defaultMessage: 'It’s time to begin your web3 journey'
  },
  homeBody: {
    id: 'home.body',
    defaultMessage: 'Send, receive, earn, and browse DApps safely with Begin powered by the Cardano Blockchain.' +
    '{br}'
  },
  homeBtnDownload: {
    id: 'home.btn.download',
    defaultMessage: 'Begin Wallet'
  },
  homeBtnWhitePaper: {
    id: 'home.btn.whitepaper',
    defaultMessage: 'Read the Whitepaper'
  },
})

const Home = () => {

  return (
    <div id="home" className={"pt-16 -mt-16 lg:pt-32 lg:-mt-32"}>
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
              <a href="https://begin.is" target='_blank' role="button" className="w-full mb-4 text-center border-2 border-blue-light bg-blue-light hover:border-white hover:shadow-lg hover:bg-white hover:text-blue-light text-sm text-white uppercase font-bold py-4 px-6 rounded-md mr-10">
                {f(messages.homeBtnDownload)}
              </a>
              <a href="/assets/docs/whitepaper_v1.1_092022.pdf" target="_blank" role="button" className="w-full mb-4 text-center border-2 border-blue-light hover:border-white hover:text-white text-sm text-blue-light uppercase font-bold py-4 px-6 rounded-md">
                {f(messages.homeBtnWhitePaper)}
              </a>
            </div>
          </div>
          <div className='flex text-center items-center justify-center'>
            <img className='w-1/2' src="/images/begin_wallet_home.png"
              alt="Begin Wallet App Home"
              // className="img-light dark:hidden"
            />
            {/* <img src="/images/b58_app_home_dark.png"
              alt="B58 Finance App Home"
              className="img-dark dark:block"
              style={{ backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover' }}
            /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
