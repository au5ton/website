import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import lain from '../public/cover/lain05.jpg'
import styles from '../styles/Home.module.scss'

export default function Home() {
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
            {/* <div className={styles.cover}>
              <Image
                alt="cover picture"
                src={lain}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </div> */}
            <div className={styles.bgWrap}>
              <Image
                alt="cover picture"
                src={lain}
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
              Cover image: Copyright &copy; {'Lorem Ipsum'}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
