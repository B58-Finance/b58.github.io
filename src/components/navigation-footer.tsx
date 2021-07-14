import Menu from "./menu"

const NavigationFooter = () => {
  return (
    <nav>
      <div className="px-5 p-6 mx-auto flex justify-between">
        <div className="flex flex-shrink-0 text-white pl-2">
          <a href="#home" title="Home">
            <img src="/images/logo.svg" alt="B58 Finance Logo" className="w-8 md:w-16 float-left" />
          </a>
        </div>
        <div className="flex flex-col lg:items-center lg:w-auto border-l ml-8 pl-8">
          <div className="flex flex-col font-bold">
            <Menu hover="text-blue-light lg:mb-4" onClick={() => false} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationFooter
