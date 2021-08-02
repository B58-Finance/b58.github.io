import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  defiTitle: {
    id: 'defi.title',
    defaultMessage: 'All you can do with Decentralized finance'
  },
  defiBody: {
    id: 'defi.body',
    defaultMessage: 'Our <babbr>DeFi</babbr> (Decentralized Finance) services empower you to engage with others in the community, by providing liquidity to collateralized loans while you earn yields on your crypto assets.'+
    '{br}'+
    'You can also promote an open world where you can use our <b>Mission Transparency</b> feature to Donate and register it on the blockchain.'+
    '{br}'+
    'Plus help small business take off their ideas or farmers in remote locations that need a micro-loan to grow their production. All of it using our <b>Social Lending</b> based on our Social Proof algorithm.'
  },
  defiAbbr: {
    id: 'defi.abbr',
    defaultMessage: 'Non-Fungible Tokens'
  }
})

const Defi = () => {

  return (
    <section id="defi" className="pt-10 -mt-10 lg:pt-20 lg:-mt-20">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:col-gap-6 row-gap-0 md:row-gap-6 lg:mb-10">
        <div className="item-center text-center hidden md:block">
          <img src="/images/peer_to_peer.png" alt="B58 Finance Peer to Peer Communication" className="inline-block" />
        </div>
        <div className="lg:ml-6 p-6">
          <h1 className="mb-8 text-3xl lg:text-6xl font-medium leading-tight">
            {f(messages.defiTitle)}
          </h1>
          <div className="item-center text-center block md:hidden">
            <img src="/images/peer_to_peer.png" alt="B58 Finance Peer to Peer Communication" className="inline-block" />
          </div>
          <p className="text-base text-justify lg:text-left lg:mr-8">
            {f(messages.defiBody, {
              b: (chunk) => <strong>{chunk}</strong>,
              babbr: (chunk) => <strong><abbr title={f(messages.defiAbbr)}>{chunk}</abbr></strong>,
              br: <><br/><br/></>  
            })}
            {/* Our <strong><abbr title="Decentralized Finance">DeFi</abbr></strong> (Decentralized Finance) services empower you to engage with others in the community, by providing liquidity to collateralized loans while you earn yields on your crypto assets.
            <br /><br />
            You can also promote an open world where you can use our <strong>Mission Transparency</strong> feature to Donate and register it on the blockchain.
            <br /><br />
            Plus help small business take off their ideas or farmers in remote locations that need a micro-loan to grow their production. All of it using our <strong>Social Lending</strong> based on our Social Proof algorithm. */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Defi
