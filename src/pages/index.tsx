import Head from 'next/head'
import { useEffect } from 'react';
import { teste } from '@/scripts';
import { X, PaperPlaneRight } from '@phosphor-icons/react'
import { UserInfo } from '@/components/UserInfo';

export default function Home() {
  useEffect(() => {
    teste()
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


        <main id="messages">
          <div id="last-seen">
            <span>
              Hoje 11:30
            </span>
          </div>

          <div className="messages">
            <div className="message">
              <div className="top">Cecilia - 11:30</div>
              <div className="body">Tive uma ideia incrível para um projeto! 😍</div>
            </div>
            <div className="message you">
              <div className="top">Você - 11:32</div>
              <div className="body">Sério? Me conta mais.</div>
            </div>
            <div className="message">
              <div className="top">Cecilia - 11:34</div>
              <div className="body">
                E se a gente fizesse um chat moderno e responsivo em apenas uma
                semana?
              </div>
            </div>
            <div className="message you">
              <div className="top">Você - 11:36</div>
              <div className="body"><strong>#boraCodar! 🚀</strong></div>
            </div>
          </div>
        </main>

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
