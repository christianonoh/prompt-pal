const Footer = () => {
  return (
    <footer className="relative border-t w-full z-10 mx-auto sm:px-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/christianonoh"
            target="_blank"
            rel="noreferrer noopener"
          >
            Developed by <span className="text-green-400">Christian Onoh</span>
          </a>
        </small>
      </div>
    </footer>
  )
}

export default Footer;