import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  nftHomeTitle: {
    id: 'nft.home.title',
    defaultMessage: 'Klint, is our AI Artist that generates this incredible NFTs'
  },
  nftHomeBody: {
    id: 'nft.home.body',
    defaultMessage: 'She creates unique generative arts that you can collect.' +
    '{br}'+
    'An Art that lives on the Cardano Blockchain...'+
    '{br}' +
    'Purelly generate with code, mathematics and deep neural network.'+
    '{br}'
  },
  nftHomeBtnBuy: {
    id: 'home.btn.buy',
    defaultMessage: 'Buy Now'
  }
})

const Home = () => {

  return (
    <div id="home" className={"pt-16 -mt-16 lg:pt-32 lg:-mt-32 text-white bg-home dark:to-blue-dark"}>
      <section className="container mx-auto lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-0 md:row-gap-32">
          <div className="p-6">
            <h1 className="lg:mt-16 mb-8 lg:mr-10 text-3xl lg:text-6xl font-medium leading-tight">
              {f(messages.nftHomeTitle)}
            </h1>
            <p className="text-base lg:mr-8 text-justify lg:text-left">
              {f(messages.nftHomeBody, 
                {
                  br: <><br /><br /></>
                })
              }
            </p>
            <div className="lg:mt-10 lg:mb-10 flex flex-col lg:flex-row">
              <a href="#" role="button" className="w-full mb-4 text-center border-2 border-blue-light bg-blue-light hover:border-white hover:shadow-lg hover:bg-white hover:text-blue-light text-sm text-white uppercase font-bold py-4 px-6 rounded-md mr-10">
                {f(messages.nftHomeBtnBuy)}
              </a>
            </div>
          </div>
          <div className="pt-8">
            <img src="/nft/1024/00001.png" alt="" className="shadow-medium dark:shadow-mediumDark" />
            {/* <KLINT> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
