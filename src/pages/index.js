import { Avatar } from '@/components/Avatar'
import { PlusIcon } from '@/components/Icon'
import { TypingEffect } from '@/components/TypingEffect'
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

function Message({ ia, message }) {
  const avatar = ia ? (
    <img src='https://img.freepik.com/free-icon/robot_318-490792.jpg' />
  ) : (
    <img
      className='rounded-full'
      alt='foto_usuario'
      src='https://media.licdn.com/dms/image/D4E03AQHnBaZMcTxwDw/profile-displayphoto-shrink_400_400/0/1669702152451?e=1682553600&v=beta&t=YDlezHBJgZt7nOHz70U9jn4DyGtw2l8RoJvhORl79sU'
    />
  )

  const textElement = ia ? <TypingEffect text={message} /> : message
  return (
    <div className={ia ? 'bg-gptlightgray' : 'bg-gptgray'}>
      <article className='flex gap-4 p-4 m-auto max-w-3xl'>
        <Avatar>
          {avatar}
        </Avatar>
        <p className='flex-1'>{textElement}</p>
      </article>
    </div>
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
          <Message key={message.id} {...message} />
        ))}
      </main>
      <ChatForm />
    </div>
  )
}

function ChatForm() {
  return (
    <section className='absolute bottom-0 w-full left-0 right-0 ml-32'>
      <form className='flex flex-row max-w-3xl pt-6 m-auto'>
        <div className='relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-gptlightgray border-gray-900/50'>
          <textarea className='w-full h-[24px] resize-none bg-transparent m-0 border-0 outline-none' />
          <button className='absolute p-1 rounded-md bottom-2 right-2 '>
            Enviar
          </button>
        </div>
      </form>
    </section>
  )
}

export default function Home() {
  return (
    <Layout>
      <Chat />
    </Layout>
  )
}
