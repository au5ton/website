import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'

import placeholder from '../public/cover/1x1.png'
import bebop01 from '../public/cover/bebop01.jpg'
import bebop02 from '../public/cover/bebop02.jpg'
import bebop03 from '../public/cover/bebop03.jpg'
import lain01 from '../public/cover/lain01.jpg'
import lain02 from '../public/cover/lain02.jpg'
import lain03 from '../public/cover/lain03.jpg'
import lain04 from '../public/cover/lain04.jpg'
import lain05 from '../public/cover/lain05.jpg'
import lain06 from '../public/cover/lain06.jpg'
import lain07 from '../public/cover/lain07.jpg'
import magi01 from '../public/cover/magi01.jpg'
import psycho01 from '../public/cover/psycho01.jpg'

const covers = [
  bebop01,
  bebop02,
  bebop03,
  lain01,
  lain02,
  lain03,
  lain04,
  lain05,
  lain06,
  lain07,
  magi01,
  psycho01,
]

export default function Home() {
  //lain01.src.split('/').reverse()[0]
  // const [cover, setCover] = useState(placeholder);
  // const [copyright, setCopyright] = useState('');
  // useEffect(() => {
  //   // set random cover
  //   const item = covers[Math.floor(Math.random()*covers.length)];
  //   const fileName = item.src.split('/').reverse()[0];
  //   setCover(item);
  //   const corp: { [Key: string]: string } = {
  //     'magi': 'GAINAX Co., Ltd.',
  //     'lain': 'Triangle Staff Co., Ltd.',
  //     'bebop': 'Sunrise Inc.',
  //     'psycho': 'Production I.G, Inc.'
  //   };
  //   for(let key of Object.keys(corp)) {
  //     if(fileName.startsWith(key)) {
  //       setCopyright(corp[key]);
  //     }
  //   }
  // },[]);

  const cover = covers[Math.floor(Math.random()*covers.length)];
  let copyright = '';
  const fileName = cover.src.split('/').reverse()[0];
  const corp: { [Key: string]: string } = {
    'magi': 'GAINAX Co., Ltd.',
    'lain': 'Triangle Staff Co., Ltd.',
    'bebop': 'Sunrise Inc.',
    'psycho': 'Production I.G, Inc.'
  };
  for(let key of Object.keys(corp)) {
    if(fileName.startsWith(key)) {
      copyright = corp[key];
    }
  }


  return (
    <>
      <Head>
        <title>Austin Jackson &bull; Software Engineer</title>
        <meta name="description" content="Houston-area full-stack software developer, responsive web designer, and tutor." />
        <meta name="robots" content="nosnippet,noimageindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="container-xl gx-0 gy-0">
          <div className="d-flex align-items-center justify-content-center">
            <div className={styles.bgWrap}>
              <Image
                alt={`Image Copyright © ${copyright}`}
                src={cover}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </div>
            <div className={styles.bgText}>
              <div className="d-flex h-100 flex-column align-items-sm-center align-items-start justify-content-sm-center justify-content-end">
                <h1 className={styles.title}>Austin Jackson</h1>
                <h4 className={styles.subtitle}>Software Engineer</h4>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.cardPanel}>
          <h3 className={styles.cardTitle}>Education</h3>
          <ul className={styles.almamater}>
            <li>
              <strong>University of Houston, Computer Science 🎉</strong> <span>(2019-2021)</span>
            </li>
            <li>
              Texas A&amp;M University, College of Engineering <span>(2017-2019)</span>
            </li>
            <li>
              Heights High School (HISD) <span>(2013-2017)</span>
            </li>
          </ul>
        </section>
        <section className={styles.cardPanel}>
          <h3 className={styles.cardTitle}>Contact Me</h3>
          <ul className={styles.almamater}>
            <li>
            Telegram: <a href="https://t.me/austinj">@austinj</a>
            </li>
            <li>
            Email: <a href="mailto:austinjckson@gmail.com">austinjckson@gmail.com</a>
            </li>
            <li>
            Github: <a href="https://github.com/au5ton">au5ton</a>
            </li>
            <li>
            Twitter: <a href="https://twitter.com/austinjckson">@austinjckson</a>
            </li>
            <li>
            PGP key: <a href="https://keybase.io/austinj">0xD15CFEA0EF51E1F5</a>
            </li>
            <li>
            Texas A&amp;M Webpage: <a href="http://people.tamu.edu/~austinjckson/">people.tamu.edu</a>
            </li>
            <li>
            Resume: <a href="https://au5ton.github.io/resume/austin_jackson_resume.pdf">PDF</a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <div className="d-flex align-items-center justify-content-center">
          <div className={styles.footer}>
            <p>
              Made from Houston, Texas <br />
              Cover image: Copyright &copy; {copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}