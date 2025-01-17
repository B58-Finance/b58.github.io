import ArtAvatar from "./art-avatar"
import { defineMessages } from 'react-intl'
import f from "../lib/translate";

const messages = defineMessages({
  roadmapBodyScope: {
    id: 'roadmap.body.scope',
    defaultMessage: 'Scope Of Work'
  },
  roadmapBodyLovelace: {
    id: 'roadmap.body.lovelace',
    defaultMessage: 'Pioneer of Computer Science by writing the first algorithm to be execute in a computer.'
  },
  roadmapBodyWallet: {
    id: 'roadmap.body.wallet',
    defaultMessage: 'Wallet'
  },
  roadmapBodyWalletDescription: {
    id: 'roadmap.body.wallet.description',
    defaultMessage: 'Fully feature Cardano wallet, that is the core feature of B58 Finance - DeFi platform. Our aim is to bring the best user experience for Blockchain users.'
  },
  roadmapBodyWalletItems: {
    id: 'roadmap.body.wallet.items',
    defaultMessage: '<li>Multi Account Management</li>'+
    '<li>Send/Receive Tokens (ADA/Native Tokens)</li>'+
    '<li>Savings using Cardano Staking Pools, first at our own Pools</li>'+
    '<li>Voting integration with Project Catalyst Funds.</li>'
  },
  roadmapBodyWalletMore: {
    id: 'roadmap.body.wallet.more',
    defaultMessage: 'This stage includes the development of a Browser Extension, with web3 like integration.'+
    'And also a mobile Application for Android and iOS platform.'
  },
  roadmapBodySP: {
    id: 'roadmap.body.sp',
    defaultMessage: 'Stake Pool'
  },
  roadmapBodySPDescription: {
    id: 'roadmap.body.sp.description',
    defaultMessage: 'Development of the Stake pool infrastructure, with minimun of 2 nodes relays and 1 node core.'
  },
  roadmapBodyNetwork: {
    id: 'roadmap.body.network',
    defaultMessage: 'Network'
  },
  roadmapBodyNetworkDescription: {
    id: 'roadmap.body.network.description',
    defaultMessage: 'Development our first Mainnet version, which will provide the APIs the backend features.'
  },
  roadmapBodyMartin: {
    id: 'roadmap.body.martin',
    defaultMessage: 'Pioneer of Computer Science by developing the philosophical foundations of type theory.'
  },
  roadmapBodyMT: {
    id: 'roadmap.body.mt',
    defaultMessage:'Mission Transparency'
  },
  roadmapBodyMTDescription: {
    id: 'roadmap.body.mt.description',
    defaultMessage:'The Mission Transparency, is a feature focused on our Community Mission Driven Stake pools that will provide visibility to their Donations.'
  },
  roadmapBodyMTItems: {
    id: 'roadmap.body.mt.items',
    defaultMessage: '<li>Using Cardano’s Metadata Transaction we are going provide an immutable and trackable record of their Donations.</li>'+
    '<li>We also can support the payment of theses Donation through our wallet making partnership with the NGOs.</li>'
  },
  roadmapBodyTI: {
    id:'roadmap.body.ti',
    defaultMessage: 'Token Issue'
  },
  roadmapBodyTIDescription: {
    id: 'roadmap.body.ti.description',
    defaultMessage: 'The Token Issue is when we release our Native Token, and integrate with the wallet and our DeFi services.'
  },
  roadmapBodyTIItems: {
    id: 'roadmap.body.ti.items',
    defaultMessage: '<li>Issue our Utility token to serve as rewards and use in specific DeFi features that we’re going to develop.</li>'
  },
  roadmapBodyBL: {
    id:'roadmap.body.bl',
    defaultMessage: 'Borrowing and Lending'
  },
  roadmapBodyBLDescription: {
    id: 'roadmap.body.bl.description',
    defaultMessage: 'The Borrowing/Lending feature is using the collateralised standard already in place in the crypto market.'
  },
  roadmapBodyBLItems: {
    id: 'roadmap.body.bl.items',
    defaultMessage: '<li>As a lender, users can provide liquidity to contract pools, which will earn yields from the borrowing rate.</li>'+
    '<li>As a borrower, users can borrow against collateral assets, by paying an interest rate over the period of the borrowing of assets.</li>'
  },
  roadmapBodyFrege: {
    id: 'roadmap.body.frege',
    defaultMessage: 'Pioneer of Computer Science by Extending Aristotelian logic with first-order predicate calculus.'
  },
  roadmapBodyBS: {
    id: 'roadmap.body.bs',
    defaultMessage: 'Buy and Sell ADA'
  },
  roadmapBodyBSDescription: {
    id: 'roadmap.body.bs.description',
    defaultMessage: 'We\'re going to develop a liquidity system to provide the feature of buy/sell ADA with Fiat currency.'
  },
  roadmapBodyBSItems: {
    id: 'roadmap.body.bs.items',
    defaultMessage: '<li>Will also Evaluate liquidity providers available in market.</li>'
  },
  roadmapBodySL: {
    id: 'roadmap.body.sl',
    defaultMessage: 'Social Lending'
  },
  roadmapBodySLDescription: {
    id: 'roadmap.body.sl.description',
    defaultMessage: 'The Social lending feature that will fund Small Business through a Micro Lending Loan within a limit to be defined.'
  },
  roadmapBodySLItems: {
    id: 'roadmap.body.sl.items',
    defaultMessage: '<li>Users “Small Business” will be able to pitch their needs, and seek for fund through it.</li>'+
    '<li>Each Lender will be able to have one active lending and a maximum amount in our initial offer.</li>'
  },
  roadmapBodyDC: {
    id: 'roadmap.body.dc',
    defaultMessage: 'Debit Card'
  },
  roadmapBodyDCDescription: {
    id: 'roadmap.body.dc.description',
    defaultMessage: 'The Debit Card, will provide the pay with crypto feature to users.'
  },
  roadmapBodyDCItems: {
    id: 'roadmap.body.dc.items',
    defaultMessage: '<li>Users can get Debit cards with automatic conversion between Fiat/Crypto when using the card.</li>'+
    '<li>This feature will be provided via partnership with third party providers available in the market.</li>'
  },
  roadmapBodyHolberton: {
    id: 'roadmap.body.holberton',
    defaultMessage: 'Pioneer of Computer Science by writing the first mainframe sort merge on the Univac.'
  },
  roadmapBodyTS: {
    id: 'roadmap.body.ts',
    defaultMessage: 'Token Swap'
  },
  roadmapBodyTSDescription: {
    id: 'roadmap.body.ts.description',
    defaultMessage: 'The Token Swap feature is a way to users swap ADA and Native tokens.'
  },
  roadmapBodyTSItems: {
    id: 'roadmap.body.ts.items',
    defaultMessage: '<li>Users will be able to Swap assets in the Cardano Blockchain.</li>'+
    '<li>Users can provide liquidity to Contract Pools Pairs.</li>'
  },
  roadmapBodyTE: {
    id: 'roadmap.body.te',
    defaultMessage: 'Trade Exchange'
  },
  roadmapBodyTEDescription: {
    id: 'roadmap.body.te.description',
    defaultMessage: 'The Trade feature is a way of users get other Native tokens and future migrated tokens to Cardano Blockchain.'
  },
  roadmapBodyTEItems: {
    id: 'roadmap.body.te.items',
    defaultMessage: '<li>Users will be able to Buy/Sell assets.</li>'
  }
})

type Props = {
  activeTab: string
}

const RoadmapBody = ({ activeTab }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row mt-6 mb-10">
      {("lovelace" === activeTab) &&
        <>
        <div className="w-full lg:w-3/6 lg:text-left md:text-center">
          <ArtAvatar
            stage="01"
            name="Ada Lovelace"
            picture="/images/ada_lovelace.jpeg"
            description={f(messages.roadmapBodyLovelace)}
          />
        </div>
        <div className="w-full lg:w-4/6 lg:ml-6 p-6 pt-0 lg:p-0">
          <h1 className="mt-6 text-2xl lg:text-5xl">{f(messages.roadmapBodyScope)}</h1>
          <h2 className="text-lg lg:text-2xl text-gray-700">Q3 - Q4 2022</h2>
          <div className="flex mt-4 lg:mt-20">
            <div className="pt-6 pr-8 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg  className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 64 64" id="img" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 9.87827 0.842855 7.84344 2.34315 6.34315C3.84344 4.84285 5.87827 4 8 4H62C62.5304 4 63.0391 4.21071 63.4142 4.58579C63.7893 4.96086 64 5.46957 64 6C64 6.53043 63.7893 7.03914 63.4142 7.41421C63.0391 7.78929 62.5304 8 62 8H60V16C61.0609 16 62.0783 16.4214 62.8284 17.1716C63.5786 17.9217 64 18.9391 64 20V54C64 55.5913 63.3679 57.1174 62.2426 58.2426C61.1174 59.3679 59.5913 60 58 60H10C7.34784 60 4.8043 58.9464 2.92893 57.0711C1.05357 55.1957 0 52.6522 0 50L0 12ZM4 18.928V50C4 51.5913 4.63214 53.1174 5.75736 54.2426C6.88258 55.3679 8.4087 56 10 56H58C58.5304 56 59.0391 55.7893 59.4142 55.4142C59.7893 55.0391 60 54.5304 60 54V20H8C6.59544 20.0018 5.2154 19.632 4 18.928ZM4 12C4 13.0609 4.42143 14.0783 5.17157 14.8284C5.92172 15.5786 6.93913 16 8 16H56V8H8C6.93913 8 5.92172 8.42143 5.17157 9.17157C4.42143 9.92172 4 10.9391 4 12Z" />
                  <path d="M32.1685 26.073C32.757 25.7655 33.4753 26.4788 33.1627 27.068C32.9811 27.5482 32.2926 27.676 31.9409 27.3099C31.5683 26.9586 31.6898 26.2642 32.1685 26.073ZM25.839 26.7567C26.1965 26.6093 26.649 26.9375 26.6126 27.3279C26.6505 27.7517 26.1333 28.0637 25.769 27.8622C25.2862 27.6749 25.3414 26.8896 25.839 26.7567ZM38.8025 27.8741C38.2439 27.8065 38.1555 26.9264 38.6933 26.7491C39.1105 26.5453 39.4932 26.9276 39.5542 27.3238C39.4667 27.6622 39.1841 27.9719 38.8025 27.8741ZM27.2792 29.4563C27.8769 29.0775 28.7297 29.6416 28.6377 30.3372C28.6067 31.0396 27.6757 31.4465 27.1504 30.9717C26.6426 30.5987 26.7195 29.7431 27.2792 29.4563ZM36.4027 29.8582C36.6693 29.1696 37.7497 29.1488 38.0532 29.8191C38.3531 30.3407 37.9842 30.9867 37.4497 31.164C36.7418 31.2965 36.0693 30.5296 36.4027 29.8582ZM31.4063 31.125C31.4005 30.5331 31.9385 30.0921 32.4998 30.0518C32.8721 30.1266 33.2779 30.2855 33.4376 30.662C33.7353 31.1814 33.471 31.8965 32.9332 32.1348C32.6872 32.2729 32.3964 32.2211 32.1286 32.205C31.7191 32.0036 31.3743 31.6086 31.4063 31.125ZM21.9934 31.9874C22.5394 31.6511 23.2759 32.2648 23.0692 32.8591C22.9554 33.3732 22.2659 33.5823 21.8717 33.2541C21.4509 32.9467 21.5176 32.2073 21.9934 31.9874ZM42.2063 31.9863C42.6695 31.6259 43.4339 32.0393 43.3786 32.6254C43.4097 33.1597 42.7489 33.5627 42.2891 33.2876C41.7827 33.0595 41.731 32.2788 42.2063 31.9863ZM34.0534 33.0503C34.8178 32.7751 35.7256 33.1044 36.1613 33.7873C36.736 34.6221 36.4302 35.8935 35.5384 36.3725C34.6143 36.9391 33.265 36.4588 32.9237 35.4247C32.5363 34.499 33.1007 33.3405 34.0534 33.0503ZM29.5687 33.1413C30.4158 32.7406 31.5559 33.0768 31.9651 33.9452C32.4466 34.7904 32.0743 35.9673 31.2134 36.4038C30.3514 36.8943 29.1353 36.5224 28.7182 35.6149C28.2504 34.7374 28.6658 33.5454 29.5687 33.1413ZM25.0782 34.6797C25.1426 34.1328 25.6575 33.7769 26.1769 33.7401C26.7367 33.8077 27.1838 34.2433 27.2447 34.811C27.2079 35.3729 26.7746 35.9222 26.1803 35.9188C25.5265 35.9752 24.9533 35.3234 25.0782 34.6797ZM38.3417 33.859C39.0129 33.4675 39.9449 34.0374 39.9151 34.8102C39.9611 35.6289 38.9296 36.2058 38.2612 35.7256C37.5669 35.3257 37.621 34.1995 38.3417 33.859ZM27.7436 36.7445C28.5286 36.5281 29.4263 36.8989 29.8113 37.622C30.233 38.3498 30.0606 39.3609 29.4056 39.8947C28.5655 40.6777 27.0161 40.3633 26.569 39.2947C26.0552 38.3152 26.6793 37.0024 27.7436 36.7445ZM36.2498 36.7405C37.013 36.5217 37.9095 36.8165 38.3198 37.5132C38.8622 38.31 38.6033 39.4985 37.7957 40.0121C36.9498 40.6086 35.6395 40.2954 35.174 39.3628C34.6097 38.3981 35.1775 37.0347 36.2498 36.7405ZM22.6945 37.6496C23.3726 37.3925 24.1243 38.1424 23.8495 38.8161C23.6817 39.4299 22.8185 39.6567 22.3726 39.2042C21.8509 38.7793 22.0441 37.8338 22.6945 37.6496ZM41.0747 38.6273C41.0552 38.0642 41.4662 37.5656 42.0424 37.5344C42.5068 37.6082 42.9584 37.9836 42.9217 38.4902C42.9642 39.1593 42.1596 39.6141 41.5907 39.2997C41.3241 39.1639 41.1873 38.8898 41.0747 38.6273ZM19.3603 37.9801C19.7682 37.8016 20.2729 38.1559 20.1797 38.6099C20.1578 39.124 19.4005 39.3217 19.1222 38.8921C18.8764 38.5938 19.0236 38.1339 19.3603 37.9801ZM45.0836 37.9698C45.3708 37.7648 45.8317 37.9122 45.9455 38.2485C46.1386 38.6158 45.7846 39.119 45.3721 39.0569C44.7929 39.1098 44.6055 38.2253 45.0836 37.9698ZM29.9595 40.4375C31.033 40.1577 32.187 41.0547 32.1938 42.1624C32.2638 43.2817 31.1273 44.2743 30.0284 44.0158C29.1789 43.8787 28.5124 43.0588 28.54 42.1987C28.5377 41.376 29.1572 40.6114 29.9595 40.4375ZM34.2109 40.4352C35.3005 40.13 36.4889 41.0431 36.4716 42.1764C36.5291 43.275 35.4281 44.2341 34.3521 44.0162C33.3396 43.885 32.5925 42.7702 32.8752 41.7857C33.0179 41.1295 33.565 40.596 34.2109 40.4352ZM26.0139 41.117C26.7678 40.988 27.4747 41.831 27.1689 42.5484C26.9459 43.3129 25.8357 43.5202 25.3448 42.8958C24.769 42.2961 25.1989 41.1998 26.0139 41.117ZM38.4818 41.1507C39.1541 40.8685 39.9793 41.4512 39.9276 42.1824C39.9546 42.9874 38.9358 43.5424 38.2783 43.0726C37.5337 42.6508 37.6692 41.4094 38.4818 41.1507ZM41.9667 44.6534C41.7034 44.1616 42.1816 43.5098 42.7265 43.6009C42.9977 43.5963 43.1873 43.8104 43.361 43.9901C43.3966 44.2815 43.4564 44.6291 43.215 44.8537C42.8872 45.2694 42.1447 45.1508 41.9667 44.6534ZM21.9911 43.7378C22.5004 43.3981 23.2331 43.9047 23.1187 44.5013C23.0578 45.0289 22.3945 45.3304 21.9577 45.0311C21.4888 44.7593 21.5061 43.9855 21.9911 43.7378ZM32.0513 44.8422C32.718 44.5474 33.5672 45.129 33.5041 45.8648C33.5535 46.6778 32.503 47.2409 31.8513 46.7527C31.1273 46.3334 31.2479 45.1001 32.0513 44.8422ZM27.3918 45.9315C27.9596 45.6321 28.7216 46.1492 28.6699 46.7859C28.6871 47.3088 28.1779 47.7544 27.663 47.6772C27.2366 47.668 26.9585 47.2849 26.8217 46.9205C26.8287 46.5235 26.9918 46.0813 27.3918 45.9315ZM36.8302 45.9407C37.4141 45.5791 38.2439 46.0984 38.1887 46.7794C38.2037 47.4912 37.2658 47.9471 36.7222 47.4795C36.1958 47.113 36.2601 46.2321 36.8302 45.9407ZM38.4715 50.0068C38.2118 49.613 38.5176 49.1386 38.9393 49.0488C39.2784 49.1179 39.637 49.3735 39.5657 49.7674C39.5163 50.3005 38.7382 50.4641 38.4715 50.0068ZM25.4425 49.6649C25.546 49.3528 25.7965 49.0426 26.1632 49.1237C26.6976 49.1617 26.8563 49.969 26.3885 50.2178C25.9678 50.502 25.4798 50.1128 25.4425 49.6649ZM31.7283 50.0229C31.8306 49.5612 32.427 49.3367 32.8202 49.5819C33.0799 49.6937 33.1558 49.9849 33.2225 50.2325C33.1868 50.3614 33.155 50.4905 33.1236 50.6194C32.9627 50.8106 32.7559 51.0017 32.4881 50.9948C31.9903 51.0533 31.5413 50.4894 31.7283 50.0229Z" />
                </svg>
                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyWallet)}</p>
              <p>
                {f(messages.roadmapBodyWalletDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyWalletItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
              <p className="mb-12">
                {f(messages.roadmapBodyWalletMore)}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.16603 2.9865C6.79426 3.35528 5.43138 3.75639 4.07853 4.1895C3.95611 4.22729 3.84682 4.29886 3.76324 4.39597C3.67966 4.49308 3.62517 4.61181 3.60603 4.7385C2.80653 10.584 4.65153 14.85 6.85203 17.6595C7.95603 19.0695 9.15153 20.1135 10.1475 20.799C10.647 21.141 11.0865 21.39 11.433 21.549C11.607 21.6285 11.748 21.6825 11.856 21.714C11.9037 21.7293 11.9523 21.7413 12.0015 21.75C12.012 21.7485 12.0585 21.7425 12.147 21.7155C12.255 21.6825 12.396 21.6285 12.57 21.549C12.915 21.39 13.3575 21.141 13.8555 20.799C15.1045 19.9227 16.2153 18.8645 17.151 17.6595C19.3515 14.85 21.1965 10.584 20.397 4.7385C20.3779 4.61181 20.3234 4.49308 20.2398 4.39597C20.1562 4.29886 20.047 4.22729 19.9245 4.1895C18.9855 3.8895 17.4015 3.4005 15.837 2.9865C14.238 2.565 12.7665 2.25 12.0015 2.25C11.2365 2.25 9.76653 2.565 8.16603 2.9865ZM7.78203 1.5375C9.34653 1.1235 11.007 0.75 12.0015 0.75C12.9945 0.75 14.6565 1.1235 16.221 1.5375C17.6165 1.91216 19.0029 2.31978 20.379 2.76C21.171 3.012 21.768 3.6945 21.8835 4.536C22.743 10.8315 20.7495 15.4965 18.333 18.5835C17.3033 19.9083 16.0807 21.0712 14.706 22.0335C14.2281 22.3683 13.7228 22.6623 13.1955 22.9125C12.7905 23.0985 12.3585 23.25 12.0015 23.25C11.6445 23.25 11.2125 23.0985 10.8075 22.9125C10.2802 22.6626 9.77488 22.3685 9.29703 22.0335C7.92295 21.0711 6.70087 19.9082 5.67153 18.5835C3.25203 15.4965 1.26003 10.8315 2.11953 4.536C2.177 4.12811 2.3488 3.74483 2.61506 3.43052C2.88132 3.11622 3.23114 2.88374 3.62403 2.76C5.00021 2.31979 6.38659 1.91217 7.78203 1.5375Z" />
                  <path d="M14.25 9.75029C14.2502 10.2158 14.1061 10.6699 13.8375 11.05C13.5688 11.4302 13.1889 11.7176 12.75 11.8728L13.3275 14.8578C13.3485 14.9664 13.3453 15.0782 13.318 15.1854C13.2907 15.2926 13.24 15.3924 13.1696 15.4776C13.0992 15.5629 13.0109 15.6316 12.9108 15.6787C12.8108 15.7259 12.7016 15.7503 12.591 15.7503H11.409C11.2985 15.7501 11.1895 15.7255 11.0896 15.6783C10.9898 15.631 10.9016 15.5623 10.8314 15.4771C10.7612 15.3918 10.7107 15.2921 10.6834 15.185C10.6562 15.078 10.653 14.9662 10.674 14.8578L11.25 11.8728C10.8611 11.7353 10.5176 11.4936 10.2568 11.174C9.99601 10.8545 9.82809 10.4694 9.77138 10.0609C9.71466 9.65235 9.77132 9.23609 9.93518 8.85759C10.099 8.47908 10.3638 8.1529 10.7005 7.91469C11.0372 7.67647 11.4329 7.53539 11.8443 7.50686C12.2558 7.47832 12.6672 7.56343 13.0335 7.75289C13.3999 7.94235 13.7071 8.22887 13.9217 8.58113C14.1362 8.93339 14.2498 9.33784 14.25 9.75029Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodySP)}</p>
              <p className="mb-12">
                {f(messages.roadmapBodySPDescription)}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 5.25C9 4.65326 9.23705 4.08097 9.65901 3.65901C10.081 3.23705 10.6533 3 11.25 3H12.75C13.3467 3 13.919 3.23705 14.341 3.65901C14.7629 4.08097 15 4.65326 15 5.25V6.75C15 7.34674 14.7629 7.91903 14.341 8.34099C13.919 8.76295 13.3467 9 12.75 9V10.5H21C21.1989 10.5 21.3897 10.579 21.5303 10.7197C21.671 10.8603 21.75 11.0511 21.75 11.25V12.75C21.75 12.9489 21.671 13.1397 21.5303 13.2803C21.3897 13.421 21.1989 13.5 21 13.5C20.8011 13.5 20.6103 13.421 20.4697 13.2803C20.329 13.1397 20.25 12.9489 20.25 12.75V12H12.75V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V12H3.75V12.75C3.75 12.9489 3.67098 13.1397 3.53033 13.2803C3.38968 13.421 3.19891 13.5 3 13.5C2.80109 13.5 2.61032 13.421 2.46967 13.2803C2.32902 13.1397 2.25 12.9489 2.25 12.75V11.25C2.25 11.0511 2.32902 10.8603 2.46967 10.7197C2.61032 10.579 2.80109 10.5 3 10.5H11.25V9C10.6533 9 10.081 8.76295 9.65901 8.34099C9.23705 7.91903 9 7.34674 9 6.75V5.25ZM12.75 7.5C12.9489 7.5 13.1397 7.42098 13.2803 7.28033C13.421 7.13968 13.5 6.94891 13.5 6.75V5.25C13.5 5.05109 13.421 4.86032 13.2803 4.71967C13.1397 4.57902 12.9489 4.5 12.75 4.5H11.25C11.0511 4.5 10.8603 4.57902 10.7197 4.71967C10.579 4.86032 10.5 5.05109 10.5 5.25V6.75C10.5 6.94891 10.579 7.13968 10.7197 7.28033C10.8603 7.42098 11.0511 7.5 11.25 7.5H12.75ZM0 17.25C0 16.6533 0.237053 16.081 0.65901 15.659C1.08097 15.2371 1.65326 15 2.25 15H3.75C4.34674 15 4.91903 15.2371 5.34099 15.659C5.76295 16.081 6 16.6533 6 17.25V18.75C6 19.3467 5.76295 19.919 5.34099 20.341C4.91903 20.7629 4.34674 21 3.75 21H2.25C1.65326 21 1.08097 20.7629 0.65901 20.341C0.237053 19.919 0 19.3467 0 18.75L0 17.25ZM2.25 16.5C2.05109 16.5 1.86032 16.579 1.71967 16.7197C1.57902 16.8603 1.5 17.0511 1.5 17.25V18.75C1.5 18.9489 1.57902 19.1397 1.71967 19.2803C1.86032 19.421 2.05109 19.5 2.25 19.5H3.75C3.94891 19.5 4.13968 19.421 4.28033 19.2803C4.42098 19.1397 4.5 18.9489 4.5 18.75V17.25C4.5 17.0511 4.42098 16.8603 4.28033 16.7197C4.13968 16.579 3.94891 16.5 3.75 16.5H2.25ZM9 17.25C9 16.6533 9.23705 16.081 9.65901 15.659C10.081 15.2371 10.6533 15 11.25 15H12.75C13.3467 15 13.919 15.2371 14.341 15.659C14.7629 16.081 15 16.6533 15 17.25V18.75C15 19.3467 14.7629 19.919 14.341 20.341C13.919 20.7629 13.3467 21 12.75 21H11.25C10.6533 21 10.081 20.7629 9.65901 20.341C9.23705 19.919 9 19.3467 9 18.75V17.25ZM11.25 16.5C11.0511 16.5 10.8603 16.579 10.7197 16.7197C10.579 16.8603 10.5 17.0511 10.5 17.25V18.75C10.5 18.9489 10.579 19.1397 10.7197 19.2803C10.8603 19.421 11.0511 19.5 11.25 19.5H12.75C12.9489 19.5 13.1397 19.421 13.2803 19.2803C13.421 19.1397 13.5 18.9489 13.5 18.75V17.25C13.5 17.0511 13.421 16.8603 13.2803 16.7197C13.1397 16.579 12.9489 16.5 12.75 16.5H11.25ZM18 17.25C18 16.6533 18.2371 16.081 18.659 15.659C19.081 15.2371 19.6533 15 20.25 15H21.75C22.3467 15 22.919 15.2371 23.341 15.659C23.7629 16.081 24 16.6533 24 17.25V18.75C24 19.3467 23.7629 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H20.25C19.6533 21 19.081 20.7629 18.659 20.341C18.2371 19.919 18 19.3467 18 18.75V17.25ZM20.25 16.5C20.0511 16.5 19.8603 16.579 19.7197 16.7197C19.579 16.8603 19.5 17.0511 19.5 17.25V18.75C19.5 18.9489 19.579 19.1397 19.7197 19.2803C19.8603 19.421 20.0511 19.5 20.25 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75V17.25C22.5 17.0511 22.421 16.8603 22.2803 16.7197C22.1397 16.579 21.9489 16.5 21.75 16.5H20.25Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyNetwork)}</p>
              <p className="mb-12">
                {f(messages.roadmapBodyNetworkDescription)}
              </p>
            </div>
          </div>
        </div>
        </>
      }
      {("martin" === activeTab) &&
        <>
        <div className="w-full lg:w-3/6 lg:text-left md:text-center">
          <ArtAvatar
            stage="02"
            name="Per Martin-Löf"
            picture="/images/per_martin.jpeg"
            description={f(messages.roadmapBodyMartin)}
          />
        </div>
        <div className="w-full lg:w-4/6 lg:ml-6 p-6 pt-0 lg:p-0">
          <h1 className="mt-6 text-2xl lg:text-5xl">{f(messages.roadmapBodyScope)}</h1>
          <h2 className="text-lg lg:text-2xl text-gray-700">Q1 - Q2 2023</h2>
          <div className="flex mt-4 lg:mt-20">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.167 0.1275C22.2693 0.195956 22.3532 0.288554 22.4113 0.397119C22.4694 0.505684 22.4999 0.626877 22.5 0.75V12C22.5 12.1498 22.4551 12.2961 22.3711 12.4202C22.2872 12.5442 22.168 12.6403 22.029 12.696L21.75 12L22.029 12.696L22.0245 12.6975L22.0155 12.702L21.981 12.7155C21.7838 12.7939 21.5853 12.8689 21.3855 12.9405C20.9895 13.083 20.439 13.275 19.815 13.4655C18.591 13.8435 16.9965 14.25 15.75 14.25C14.4795 14.25 13.428 13.83 12.513 13.4625L12.471 13.4475C11.52 13.065 10.71 12.75 9.75 12.75C8.7 12.75 7.293 13.095 6.0945 13.4655C5.55788 13.6327 5.02616 13.8153 4.5 14.013V23.25C4.5 23.4489 4.42098 23.6397 4.28033 23.7803C4.13968 23.921 3.94891 24 3.75 24C3.55109 24 3.36032 23.921 3.21967 23.7803C3.07902 23.6397 3 23.4489 3 23.25V0.75C3 0.551088 3.07902 0.360322 3.21967 0.21967C3.36032 0.0790176 3.55109 0 3.75 0C3.94891 0 4.13968 0.0790176 4.28033 0.21967C4.42098 0.360322 4.5 0.551088 4.5 0.75V1.173C4.839 1.0545 5.244 0.918 5.685 0.783C6.909 0.408 8.505 0 9.75 0C11.01 0 12.036 0.4155 12.9315 0.7785L12.996 0.8055C13.929 1.182 14.742 1.5 15.75 1.5C16.8 1.5 18.207 1.155 19.4055 0.7845C20.0885 0.571218 20.7634 0.33306 21.429 0.0705L21.4575 0.06L21.4635 0.057H21.465L22.167 0.1275ZM21 1.8315C20.67 1.9485 20.28 2.082 19.851 2.214C18.636 2.592 17.043 2.9985 15.75 2.9985C14.421 2.9985 13.362 2.5695 12.4455 2.1975L12.4335 2.193C11.493 1.815 10.7085 1.5 9.75 1.5C8.7465 1.5 7.341 1.8435 6.1275 2.217C5.58016 2.38587 5.03747 2.56944 4.5 2.7675V12.417C4.83 12.3 5.22 12.1665 5.649 12.0345C6.864 11.655 8.457 11.25 9.75 11.25C11.0205 11.25 12.072 11.67 12.987 12.0375L13.029 12.0525C13.98 12.435 14.79 12.75 15.75 12.75C16.752 12.75 18.159 12.4065 19.3725 12.033C19.9198 11.8641 20.4625 11.6805 21 11.4825V1.833V1.8315Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyMT)}</p>
              <p>
                {f(messages.roadmapBodyMTDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyMTItems,{
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.65 1.05C4.71986 0.956853 4.81045 0.88125 4.91459 0.82918C5.01873 0.777109 5.13357 0.75 5.25 0.75H18.75C18.8664 0.75 18.9813 0.777109 19.0854 0.82918C19.1896 0.88125 19.2801 0.956853 19.35 1.05L23.814 7.011C24.0375 7.2885 24.048 7.686 23.829 7.977L12.6 22.95C12.5301 23.0431 12.4396 23.1187 12.3354 23.1708C12.2313 23.2229 12.1164 23.25 12 23.25C11.8836 23.25 11.7687 23.2229 11.6646 23.1708C11.5604 23.1187 11.4699 23.0431 11.4 22.95L0.15 7.95C0.0526334 7.82018 0 7.66228 0 7.5C0 7.33772 0.0526334 7.17982 0.15 7.05L4.65 1.05ZM21.729 6.7275L19.02 3.1125L17.856 6.732L21.729 6.7275ZM16.2795 6.7335L17.721 2.25H6.279L7.7235 6.7425L16.2795 6.7335ZM8.205 8.2425L15.798 8.235L12 20.049L8.205 8.2425ZM6.1485 6.744L4.9785 3.111L2.2515 6.7485L6.1485 6.744ZM2.2485 8.25L6.6285 8.2455L9.918 18.4755L2.25 8.25H2.2485ZM14.082 18.4755L17.373 8.2335L21.7665 8.229L14.082 18.4755Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyTI)}</p>
              <p className="mb-12">
                {f(messages.roadmapBodyTIDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyTIItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 0H19.5C20.2956 0 21.0587 0.316071 21.6213 0.87868C22.1839 1.44129 22.5 2.20435 22.5 3V21C22.5 21.7956 22.1839 22.5587 21.6213 23.1213C21.0587 23.6839 20.2956 24 19.5 24H4.5C3.70435 24 2.94129 23.6839 2.37868 23.1213C1.81607 22.5587 1.5 21.7956 1.5 21V19.5H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V3C21 2.60218 20.842 2.22064 20.5607 1.93934C20.2794 1.65804 19.8978 1.5 19.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V4.5H1.5V3C1.5 2.20435 1.81607 1.44129 2.37868 0.87868C2.94129 0.316071 3.70435 0 4.5 0V0Z" />
                  <path d="M1.5 7.5V6.75C1.5 6.55109 1.57902 6.36032 1.71967 6.21967C1.86032 6.07902 2.05109 6 2.25 6C2.44891 6 2.63968 6.07902 2.78033 6.21967C2.92098 6.36032 3 6.55109 3 6.75V7.5H3.75C3.94891 7.5 4.13968 7.57902 4.28033 7.71967C4.42098 7.86032 4.5 8.05109 4.5 8.25C4.5 8.44891 4.42098 8.63968 4.28033 8.78033C4.13968 8.92098 3.94891 9 3.75 9H0.75C0.551088 9 0.360322 8.92098 0.21967 8.78033C0.0790176 8.63968 0 8.44891 0 8.25C0 8.05109 0.0790176 7.86032 0.21967 7.71967C0.360322 7.57902 0.551088 7.5 0.75 7.5H1.5ZM1.5 12V11.25C1.5 11.0511 1.57902 10.8603 1.71967 10.7197C1.86032 10.579 2.05109 10.5 2.25 10.5C2.44891 10.5 2.63968 10.579 2.78033 10.7197C2.92098 10.8603 3 11.0511 3 11.25V12H3.75C3.94891 12 4.13968 12.079 4.28033 12.2197C4.42098 12.3603 4.5 12.5511 4.5 12.75C4.5 12.9489 4.42098 13.1397 4.28033 13.2803C4.13968 13.421 3.94891 13.5 3.75 13.5H0.75C0.551088 13.5 0.360322 13.421 0.21967 13.2803C0.0790176 13.1397 0 12.9489 0 12.75C0 12.5511 0.0790176 12.3603 0.21967 12.2197C0.360322 12.079 0.551088 12 0.75 12H1.5ZM1.5 16.5V15.75C1.5 15.5511 1.57902 15.3603 1.71967 15.2197C1.86032 15.079 2.05109 15 2.25 15C2.44891 15 2.63968 15.079 2.78033 15.2197C2.92098 15.3603 3 15.5511 3 15.75V16.5H3.75C3.94891 16.5 4.13968 16.579 4.28033 16.7197C4.42098 16.8603 4.5 17.0511 4.5 17.25C4.5 17.4489 4.42098 17.6397 4.28033 17.7803C4.13968 17.921 3.94891 18 3.75 18H0.75C0.551088 18 0.360322 17.921 0.21967 17.7803C0.0790176 17.6397 0 17.4489 0 17.25C0 17.0511 0.0790176 16.8603 0.21967 16.7197C0.360322 16.579 0.551088 16.5 0.75 16.5H1.5Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.2819 9.21888C16.3518 9.28854 16.4072 9.37131 16.445 9.46242C16.4828 9.55354 16.5023 9.65122 16.5023 9.74988C16.5023 9.84853 16.4828 9.94621 16.445 10.0373C16.4072 10.1284 16.3518 10.2112 16.2819 10.2809L11.7819 14.7809C11.7123 14.8507 11.6295 14.9061 11.5384 14.9439C11.4473 14.9818 11.3496 15.0012 11.2509 15.0012C11.1523 15.0012 11.0546 14.9818 10.9635 14.9439C10.8724 14.9061 10.7896 14.8507 10.7199 14.7809L8.46995 12.5309C8.40022 12.4611 8.3449 12.3784 8.30716 12.2873C8.26942 12.1961 8.25 12.0985 8.25 11.9999C8.25 11.9013 8.26942 11.8036 8.30716 11.7125C8.3449 11.6214 8.40022 11.5386 8.46995 11.4689C8.53968 11.3991 8.62246 11.3438 8.71357 11.3061C8.80468 11.2684 8.90233 11.2489 9.00095 11.2489C9.09956 11.2489 9.19721 11.2684 9.28832 11.3061C9.37943 11.3438 9.46222 11.3991 9.53195 11.4689L11.2509 13.1894L15.2199 9.21888C15.2896 9.14903 15.3724 9.09362 15.4635 9.05581C15.5546 9.018 15.6523 8.99854 15.7509 8.99854C15.8496 8.99854 15.9473 9.018 16.0384 9.05581C16.1295 9.09362 16.2123 9.14903 16.2819 9.21888Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyBL)}</p>
              <p className="mb-12">
                {f(messages.roadmapBodyBLDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyBLItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </>
      }
      {("frege" === activeTab) &&
        <>
        <div className="w-full lg:w-3/6 lg:text-left md:text-center">
          <ArtAvatar
            stage="03"
            name="Gottlob Frege"
            picture="/images/gottlob_frege.jpeg"
            description={f(messages.roadmapBodyFrege)}
          />
        </div>
        <div className="w-full lg:w-4/6 lg:ml-6 p-6 pt-0 lg:p-0">
          <h1 className="mt-6 text-2xl lg:text-5xl">{f(messages.roadmapBodyScope)}</h1>
          <h2 className="text-lg lg:text-2xl text-gray-700">Q3 2023</h2>
          <div className="flex mt-4 lg:mt-20">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.5H1.5C1.5 4.10218 1.65804 3.72064 1.93934 3.43934C2.22064 3.15804 2.60218 3 3 3H21C21.3978 3 21.7794 3.15804 22.0607 3.43934C22.342 3.72064 22.5 4.10218 22.5 4.5H21Z" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.5 7.5H1.5V19.5H22.5V7.5ZM1.5 6C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5L0 19.5C0 19.8978 0.158035 20.2794 0.43934 20.5607C0.720644 20.842 1.10218 21 1.5 21H22.5C22.8978 21 23.2794 20.842 23.5607 20.5607C23.842 20.2794 24 19.8978 24 19.5V7.5C24 7.10218 23.842 6.72064 23.5607 6.43934C23.2794 6.15804 22.8978 6 22.5 6H1.5Z"  />
                    <path d="M19.5 7.5C19.5 8.29565 19.8161 9.05871 20.3787 9.62132C20.9413 10.1839 21.7044 10.5 22.5 10.5V7.5H19.5ZM4.5 7.5C4.5 8.29565 4.18393 9.05871 3.62132 9.62132C3.05871 10.1839 2.29565 10.5 1.5 10.5V7.5H4.5ZM19.5 19.5C19.5 18.7044 19.8161 17.9413 20.3787 17.3787C20.9413 16.8161 21.7044 16.5 22.5 16.5V19.5H19.5ZM4.5 19.5C4.5 18.7044 4.18393 17.9413 3.62132 17.3787C3.05871 16.8161 2.29565 16.5 1.5 16.5V19.5H4.5ZM15 13.5C15 14.2956 14.6839 15.0587 14.1213 15.6213C13.5587 16.1839 12.7956 16.5 12 16.5C11.2044 16.5 10.4413 16.1839 9.87868 15.6213C9.31607 15.0587 9 14.2956 9 13.5C9 12.7044 9.31607 11.9413 9.87868 11.3787C10.4413 10.8161 11.2044 10.5 12 10.5C12.7956 10.5 13.5587 10.8161 14.1213 11.3787C14.6839 11.9413 15 12.7044 15 13.5Z"/>
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyBS)}</p>
              <p>
                {f(messages.roadmapBodyBSDescription)}
              </p>
              <div className="m-4">
                <ul>
                  {f(messages.roadmapBodyBSItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.5 21C22.5 21 24 21 24 19.5C24 18 22.5 13.5 16.5 13.5C10.5 13.5 9 18 9 19.5C9 21 10.5 21 10.5 21H22.5ZM10.533 19.5H22.467C22.474 19.4992 22.481 19.4982 22.488 19.497L22.5 19.494C22.497 19.098 22.2495 17.949 21.36 16.914C20.532 15.9435 19.077 15 16.5 15C13.9245 15 12.4695 15.945 11.64 16.914C10.7505 17.949 10.5015 19.0995 10.5 19.494C10.511 19.4961 10.522 19.4981 10.533 19.5ZM16.5 10.5C17.2956 10.5 18.0587 10.1839 18.6213 9.62132C19.1839 9.05871 19.5 8.29565 19.5 7.5C19.5 6.70435 19.1839 5.94129 18.6213 5.37868C18.0587 4.81607 17.2956 4.5 16.5 4.5C15.7044 4.5 14.9413 4.81607 14.3787 5.37868C13.8161 5.94129 13.5 6.70435 13.5 7.5C13.5 8.29565 13.8161 9.05871 14.3787 9.62132C14.9413 10.1839 15.7044 10.5 16.5 10.5ZM21 7.5C21 8.09095 20.8836 8.67611 20.6575 9.22208C20.4313 9.76804 20.0998 10.2641 19.682 10.682C19.2641 11.0998 18.768 11.4313 18.2221 11.6575C17.6761 11.8836 17.0909 12 16.5 12C15.9091 12 15.3239 11.8836 14.7779 11.6575C14.232 11.4313 13.7359 11.0998 13.318 10.682C12.9002 10.2641 12.5687 9.76804 12.3425 9.22208C12.1164 8.67611 12 8.09095 12 7.5C12 6.30653 12.4741 5.16193 13.318 4.31802C14.1619 3.47411 15.3065 3 16.5 3C17.6935 3 18.8381 3.47411 19.682 4.31802C20.5259 5.16193 21 6.30653 21 7.5ZM10.404 13.92C9.80397 13.7311 9.18545 13.6069 8.559 13.5495C8.207 13.516 7.85359 13.4995 7.5 13.5C1.5 13.5 0 18 0 19.5C0 20.5005 0.4995 21 1.5 21H7.824C7.60163 20.5317 7.49074 20.0183 7.5 19.5C7.5 17.985 8.0655 16.437 9.135 15.144C9.4995 14.703 9.924 14.2905 10.404 13.92ZM7.38 15C4.878 15.03 3.4575 15.96 2.64 16.914C1.7445 17.955 1.5 19.1085 1.5 19.5H6C6 17.9325 6.4845 16.371 7.38 15ZM2.25 8.25C2.25 7.05653 2.72411 5.91193 3.56802 5.06802C4.41193 4.22411 5.55653 3.75 6.75 3.75C7.94347 3.75 9.08807 4.22411 9.93198 5.06802C10.7759 5.91193 11.25 7.05653 11.25 8.25C11.25 9.44347 10.7759 10.5881 9.93198 11.432C9.08807 12.2759 7.94347 12.75 6.75 12.75C5.55653 12.75 4.41193 12.2759 3.56802 11.432C2.72411 10.5881 2.25 9.44347 2.25 8.25ZM6.75 5.25C5.95435 5.25 5.19129 5.56607 4.62868 6.12868C4.06607 6.69129 3.75 7.45435 3.75 8.25C3.75 9.04565 4.06607 9.80871 4.62868 10.3713C5.19129 10.9339 5.95435 11.25 6.75 11.25C7.54565 11.25 8.30871 10.9339 8.87132 10.3713C9.43393 9.80871 9.75 9.04565 9.75 8.25C9.75 7.45435 9.43393 6.69129 8.87132 6.12868C8.30871 5.56607 7.54565 5.25 6.75 5.25Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodySL)}</p>
              <p>
                {f(messages.roadmapBodyBLDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodySLItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3Z" />
                  <path d="M3 8.25C3 8.05109 3.07902 7.86032 3.21967 7.71967C3.36032 7.57902 3.55109 7.5 3.75 7.5H6.75C6.94891 7.5 7.13968 7.57902 7.28033 7.71967C7.42098 7.86032 7.5 8.05109 7.5 8.25V9.75C7.5 9.94891 7.42098 10.1397 7.28033 10.2803C7.13968 10.421 6.94891 10.5 6.75 10.5H3.75C3.55109 10.5 3.36032 10.421 3.21967 10.2803C3.07902 10.1397 3 9.94891 3 9.75V8.25Z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 12.75C3 12.5511 3.07902 12.3603 3.21967 12.2197C3.36032 12.079 3.55109 12 3.75 12H11.25C11.4489 12 11.6397 12.079 11.7803 12.2197C11.921 12.3603 12 12.5511 12 12.75C12 12.9489 11.921 13.1397 11.7803 13.2803C11.6397 13.421 11.4489 13.5 11.25 13.5H3.75C3.55109 13.5 3.36032 13.421 3.21967 13.2803C3.07902 13.1397 3 12.9489 3 12.75ZM3 15.75C3 15.5511 3.07902 15.3603 3.21967 15.2197C3.36032 15.079 3.55109 15 3.75 15H5.25C5.44891 15 5.63968 15.079 5.78033 15.2197C5.92098 15.3603 6 15.5511 6 15.75C6 15.9489 5.92098 16.1397 5.78033 16.2803C5.63968 16.421 5.44891 16.5 5.25 16.5H3.75C3.55109 16.5 3.36032 16.421 3.21967 16.2803C3.07902 16.1397 3 15.9489 3 15.75ZM7.5 15.75C7.5 15.5511 7.57902 15.3603 7.71967 15.2197C7.86032 15.079 8.05109 15 8.25 15H9.75C9.94891 15 10.1397 15.079 10.2803 15.2197C10.421 15.3603 10.5 15.5511 10.5 15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5H8.25C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75ZM12 15.75C12 15.5511 12.079 15.3603 12.2197 15.2197C12.3603 15.079 12.5511 15 12.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H12.75C12.5511 16.5 12.3603 16.421 12.2197 16.2803C12.079 16.1397 12 15.9489 12 15.75ZM16.5 15.75C16.5 15.5511 16.579 15.3603 16.7197 15.2197C16.8603 15.079 17.0511 15 17.25 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5H17.25C17.0511 16.5 16.8603 16.421 16.7197 16.2803C16.579 16.1397 16.5 15.9489 16.5 15.75Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyDC)}</p>
              <p>
                {f(messages.roadmapBodyDCDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyDCItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </>
      }
      {("holberton" === activeTab) &&
        <>
        <div className="w-full lg:w-3/6 lg:text-left md:text-center">
          <ArtAvatar
            stage="04"
            name="Betty Holberton"
            picture="/images/betty_holberton.jpeg"
            description={f(messages.roadmapBodyHolberton)}
          />
        </div>
        <div className="w-full lg:w-4/6 lg:ml-6 p-6 pt-0 lg:p-0">
          <h1 className="mt-6 text-2xl lg:text-5xl">{f(messages.roadmapBodyScope)}</h1>
          <h2 className="text-lg lg:text-2xl text-gray-700">Q4 2023</h2>
          <div className="flex mt-4 lg:mt-20">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3011 10.5H23.1991C23.2704 10.5001 23.3402 10.5204 23.4003 10.5586C23.4604 10.5969 23.5084 10.6515 23.5386 10.716C23.5688 10.7805 23.58 10.8523 23.5709 10.923C23.5618 10.9937 23.5327 11.0603 23.4871 11.115L20.5381 14.655C20.5029 14.6972 20.4589 14.7312 20.4091 14.7545C20.3594 14.7778 20.3051 14.7899 20.2501 14.7899C20.1952 14.7899 20.1409 14.7778 20.0911 14.7545C20.0414 14.7312 19.9973 14.6972 19.9621 14.655L17.0131 11.115C16.9675 11.0603 16.9385 10.9937 16.9293 10.923C16.9202 10.8523 16.9314 10.7805 16.9617 10.716C16.9919 10.6515 17.0399 10.5969 17.1 10.5586C17.1601 10.5204 17.2299 10.5001 17.3011 10.5ZM0.801129 13.5H6.69913C6.77038 13.5 6.84016 13.4797 6.90028 13.4414C6.9604 13.4032 7.00838 13.3486 7.0386 13.2841C7.06881 13.2195 7.08002 13.1477 7.07091 13.0771C7.06179 13.0064 7.03273 12.9398 6.98713 12.885L4.03813 9.34504C4.00294 9.30283 3.9589 9.26888 3.90913 9.24558C3.85936 9.22228 3.80508 9.21021 3.75013 9.21021C3.69518 9.21021 3.6409 9.22228 3.59113 9.24558C3.54136 9.26888 3.49732 9.30283 3.46213 9.34504L0.513129 12.885C0.467526 12.9398 0.438465 13.0064 0.42935 13.0771C0.420236 13.1477 0.431444 13.2195 0.461663 13.2841C0.491882 13.3486 0.539861 13.4032 0.599981 13.4414C0.660101 13.4797 0.729874 13.5 0.801129 13.5Z"  />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 4.50033C9.67201 4.50033 7.59001 5.56083 6.21451 7.22733C6.15309 7.30694 6.07629 7.37339 5.98867 7.42272C5.90106 7.47206 5.80442 7.50327 5.7045 7.5145C5.60458 7.52573 5.50342 7.51676 5.40703 7.48812C5.31065 7.45947 5.22101 7.41174 5.14345 7.34775C5.06588 7.28377 5.00198 7.20484 4.95553 7.11567C4.90908 7.02649 4.88103 6.92888 4.87306 6.82865C4.86509 6.72841 4.87736 6.6276 4.90913 6.5322C4.9409 6.43681 4.99153 6.34877 5.05801 6.27333C6.1563 4.94362 7.6134 3.95735 9.25601 3.43182C10.8986 2.90628 12.6576 2.86361 14.3238 3.30887C15.9899 3.75413 17.4932 4.66858 18.6546 5.94346C19.8161 7.21835 20.587 8.80001 20.8755 10.5003H19.35C19.0037 8.80655 18.0831 7.28432 16.7438 6.19105C15.4046 5.09778 13.7288 4.50055 12 4.50033ZM4.65001 13.5003C4.93398 14.8873 5.60454 16.1656 6.58423 17.1875C7.56392 18.2095 8.81275 18.9335 10.1865 19.2758C11.5602 19.6181 13.0027 19.5647 14.3473 19.1219C15.692 18.6791 16.884 17.8649 17.7855 16.7733C17.8469 16.6937 17.9237 16.6273 18.0113 16.5779C18.099 16.5286 18.1956 16.4974 18.2955 16.4862C18.3954 16.4749 18.4966 16.4839 18.593 16.5126C18.6894 16.5412 18.779 16.5889 18.8566 16.6529C18.9341 16.7169 18.998 16.7958 19.0445 16.885C19.0909 16.9742 19.119 17.0718 19.127 17.172C19.1349 17.2723 19.1227 17.3731 19.0909 17.4685C19.0591 17.5639 19.0085 17.6519 18.942 17.7273C17.8437 19.057 16.3866 20.0433 14.744 20.5688C13.1014 21.0944 11.3424 21.1371 9.67625 20.6918C8.01009 20.2465 6.50687 19.3321 5.3454 18.0572C4.18392 16.7823 3.41306 15.2007 3.12451 13.5003H4.65001Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyTS)}</p>
              <p>
                {f(messages.roadmapBodyTSDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyTSItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="pr-8 pt-6 mr-8 border-r-2 border-blue-light">
              <div className="relative">
                <svg className="fill-current mb-20 w-8 h-8 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1.5V22.5H24V24H0V0ZM15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.35L15.5805 13.9755C15.5142 14.0565 15.4316 14.1227 15.3381 14.1698C15.2447 14.217 15.1424 14.244 15.0378 14.2493C14.9332 14.2545 14.8288 14.2378 14.731 14.2002C14.6333 14.1626 14.5446 14.105 14.4705 14.031L10.59 10.1505L5.106 17.691C4.98603 17.8435 4.81161 17.9437 4.61938 17.9703C4.42714 17.9969 4.23207 17.948 4.07516 17.8338C3.91824 17.7196 3.8117 17.549 3.77792 17.3579C3.74413 17.1668 3.78574 16.9701 3.894 16.809L9.894 8.559C9.95769 8.47127 10.0396 8.39839 10.1342 8.34538C10.2288 8.29237 10.3337 8.26049 10.4418 8.25194C10.5498 8.24338 10.6585 8.25836 10.7602 8.29583C10.8619 8.3333 10.9543 8.39238 11.031 8.469L14.9445 12.384L20.1675 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25Z" />
                </svg>

                <span className="timeline-dot -mt-4 lg:mt-0"></span>
              </div>
            </div>
            <div className="pt-6 mr-4">
              <p className="text-lg mb-4">{f(messages.roadmapBodyTE)}</p>
              <p>
                {f(messages.roadmapBodyTEDescription)}
              </p>
              <div className="m-4">
                <ul >
                  {f(messages.roadmapBodyTEItems, {
                    li: (chunk) => <li>{chunk}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </>
      }
    </div>
  )
}

export default RoadmapBody
