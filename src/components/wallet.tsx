import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  walletTitle: {
    id: 'wallet.title',
    defaultMessage: 'A Wallet that is simple and easy to use'
  },
  walletBody: {
    id: 'wallet.body',
    defaultMessage: 'Our wallet is fully featured where <b>Cardano ADA</b> is our main currency but also allows you to transact native tokens available in the platform.' +
    '{br}'+
    'You\'re able to receive payments through our personalized <b>Card QR</b> that allows you to express yourself by the selection of themes available.' +
    '{br}'+
    'We also provide a Savings account ready and easy to use, where you earn rewards and can claim them every 5 days or build your retirement plan with it.'+
    '{br}'+
    'One more thing that you will enjoy is our <babbr>NTF</babbr> (Non-Fungible Tokens) manager available.'
  },
  walletAbbr: {
    id: 'wallet.abbr',
    defaultMessage: 'Non-Fungible Tokens'
  }
})

const Wallet = () => {

  return (
    <section id="wallet" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
      <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-12 row-gap-0 md:row-gap-6 lg:mb-10">
        <div className="flex flex-wrap content-center lg:mr-6 p-6">
          <h1 className="mb-8 text-3xl lg:text-6xl font-medium leading-tight">
            {f(messages.walletTitle)}
          </h1>
          <p className="text-base text-justify lg:text-left lg:mr-8">
            {f(messages.walletBody, {
              b: (chunk) => <strong>{chunk}</strong>,
              babbr: (chunk) => <strong><abbr title={f(messages.walletAbbr)}>{chunk}</abbr></strong>,
              br: <><br/><br/></>  
            })}
          </p>
        </div>
        <div className='flex text-center items-center justify-center'>
          <img className='w-1/2' src="/images/begin_wallet_qr.png"
            alt="Begin Wallet App QR Card"
            // className="img-light dark:hidden"
            // style={{ backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          />
          {/* <img src="/images/b58_app_qr_dark.png"
            alt="B58 Finance App Home"
            className="img-dark dark:block"
            style={{ backgroundImage: `url('/images/bg_b58_app_home.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Wallet
