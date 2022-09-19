import { MouseEventHandler } from "react"
import { defineMessages } from 'react-intl'
import f, { setLanguage } from "../lib/translate";


const messages = defineMessages({
  about: {
    id: 'menu.about',
    defaultMessage: 'About'
  },
  wallet: {
    id: 'menu.wallet',
    defaultMessage: 'Wallet'
  },
  defi: {
    id: 'menu.defi',
    defaultMessage: 'DeFi'
  },
  team: {
    id: 'menu.team',
    defaultMessage: 'Team'
  },
  roadmap: {
    id: 'menu.roadmap',
    defaultMessage: 'Roadmap'
  },
  blog: {
    id: 'menu.blog',
    defaultMessage: 'Blog'
  },
  whitepaper: {
    id: 'menu.whitepaper',
    defaultMessage: 'Whitepaper'
  }
})

type Props = {
  hover: string
  onClick: MouseEventHandler 
}

const Menu = ( {hover, onClick}: Props ) => {
  return (
    <>
    <a href="#about" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.about)}
    </a>
    <a href="#wallet" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.wallet)}
    </a>
    <a href="#defi" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.defi)}
    </a>
    <a href="#team" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.team)}
    </a>
    <a href="#roadmap" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.roadmap)}
    </a>
    <a href="https://b58finance.medium.com/" target="_blank" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.blog)}
    </a>
    <a href="/assets/docs/whitepaper_v1.1_092022.pdf" target="_blank" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      {f(messages.whitepaper)}
    </a>
    </>
  )
}

export default Menu