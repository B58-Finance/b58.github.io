import { MouseEventHandler } from "react"

type Props = {
  hover: string
  onClick: MouseEventHandler 
}

const Menu = ( {hover, onClick}: Props ) => {
  return (
    <>
    <a href="#about" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      About
    </a>
    <a href="#wallet" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      Wallet
    </a>
    <a href="#defi" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      DeFi
    </a>
    <a href="#team" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      Team
    </a>
    <a href="#roadmap" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      Roadmap
    </a>
    <a href="https://b58finance.medium.com/" target="_blank" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      Blog
    </a>
    <a href="/assets/docs/whitepaper_062021.pdf" target="_blank" onClick={onClick} className={"block mt-4 lg:inline-block lg:mt-0 text-white mr-4 hover:"+hover}>
      Whitepaper
    </a>
    </>
  )
}

export default Menu