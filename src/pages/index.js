import { Avatar } from '@/components/Avatar'
import { PlusIcon } from '@/components/Icon'
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
          <PlusIcon />
          New chat
        </button>
      </nav>
    </aside>
  )
}

function Chat() {
  const message = [
    {
      id: 1,
      ia: false,
      message: 'Explain quantum comuputing to me in simple terms'
    },
    {
      id: 2,
      ia: true,
      message:
        'Quantum computing is a type of computing that uses quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data. A quantum computer is not a supercomputer that can run quantum algorithms, but rather a physical device that can carry out quantum operations.'
    }
  ]

  return (
    <div className='flex flex-col h-full flex-1 pl-[260px]'>
      <main>
        {message.map((message) => (
          <article key={message.id} className='flex gap-4 p-4 m-auto max-w-3xl'>
            <Avatar>
              <img
                alt='foto_usuario'
                src='https://media.licdn.com/dms/image/D4E03AQHnBaZMcTxwDw/profile-displayphoto-shrink_400_400/0/1669702152451?e=1682553600&v=beta&t=YDlezHBJgZt7nOHz70U9jn4DyGtw2l8RoJvhORl79sU'
              />
            </Avatar>
            <p>{message.message}</p>
          </article>
        ))}
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
