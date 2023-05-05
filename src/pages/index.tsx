import Head from 'next/head'
import { useEffect } from 'react';
import { main } from '@/scripts';
import { X, PaperPlaneRight } from '@phosphor-icons/react'
import { UserInfo } from '@/components/UserInfo';
import { Message } from '@/components/Message';
import { MessagesView } from '@/components/MessagesView';

export default function Home() {
  useEffect(() => {
    main()
  }, []);

  return (
    <>
      <Head>
        <title>Message Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="app">
        <header id="top">
          <UserInfo name='Cecilia Sassaki' status='Online' />
          <div id="close-chat">
            <i className="ph-x-fill" title='Close Button'>
              <X weight='bold'></X>
            </i>
          </div>
        </header>

        <MessagesView />

        <footer>
          <form id="bottom">
            <input type="text" placeholder="Digite sua mensagem" />
            <button>
              <i className="ph-paper-plane-right-fill">
                <PaperPlaneRight weight='fill' />
              </i>
            </button>
          </form>
        </footer>
      </div>
    </>
  )
}
