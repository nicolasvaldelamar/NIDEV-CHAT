import Head from 'next/head'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>nidev Chat GPT</title>
      </Head>
      <div className='w-full relative bg-gptgray h-screen'>
        <Aside />
        {children}
      </div>
    </>
  )
}
function Aside() {
  return (
    <aside className='bg-gptdarkgray fixed flex w-[260px] h-screen flex-col'>
      <nav className='flex flex-col flex-1 h-full p-2 space-y-1'>
        <button className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path d='M12 5L12 19'></path>
            <path d='M5 12L19 12'></path>
          </svg>
          New chat
        </button>
      </nav>
    </aside>
  )
}

function Chat() {
  return (
    <div>
      <main>
        <h1>Chat</h1>
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <Chat />
    </Layout>
  )
}
