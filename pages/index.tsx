import { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { getAllCoverImagePaths } from '../lib/covers'
import placeholder from '../public/1x1.png'

import styles from '../styles/Home.module.scss'

interface ImageProps {
  blurDataURL: string;
  src: string;
  height: number;
  width: number;
  type?: string | undefined;
}

interface HomeProps {
  blurredCovers: ImageProps[];
}

export default function Home({ blurredCovers }: HomeProps) {
  const [cover, setCover] = useState<ImageProps>();
  const [copyright, setCopyright] = useState('');
  useEffect(() => {
    // set random cover
    const item = blurredCovers[Math.floor(Math.random()*blurredCovers.length)];
    const fileName = item.src.split('/').reverse()[0];
    setCover(item);
    const corp: { [Key: string]: string } = {
      'magi': 'GAINAX Co., Ltd.',
      'lain': 'Triangle Staff Co., Ltd.',
      'bebop': 'Sunrise Inc.',
      'psycho': 'Production I.G, Inc.'
    };
    for(let key of Object.keys(corp)) {
      if(fileName.startsWith(key)) {
        setCopyright(corp[key]);
      }
    }
  },[]);
  console.log(cover?.blurDataURL);

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
              { cover === undefined ? 
              <Image
                alt={`Image Copyright © ${copyright}`}
                src={placeholder}
                layout="fill"
                objectFit="cover"
                priority
              />
              :
              <Image
                alt={`Image Copyright © ${copyright}`}
                src={cover.src}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={cover.blurDataURL}
                priority
              />
              }
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
            Email: <a href="mailto:austinjckson@gmail.com">austinjckson@gmail.com</a>
            </li>
            <li>
            GitHub: <a href="https://github.com/au5ton">au5ton</a>
            </li>
            <li>
            Twitter: <a href="https://twitter.com/austinjckson">@austinjckson</a>
            </li>
            <li>
            PGP key: <a href="https://keybase.io/austinj">0xD15CFEA0EF51E1F5</a>
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

// From: https://github.com/joe-bell/plaiceholder/blob/67ed723f8ea0b8ad43d627477040b1db135d54cb/examples/next/src/pages/base64/multiple.tsx#L10-L33
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const imagePaths = getAllCoverImagePaths();

  console.time('generating plaiceholders');
  const images = await Promise.all(
    imagePaths.map(async (src) => {
      const { base64, img } = await getPlaiceholder(src, { size: 16 });
      return {
        ...img,
        blurDataURL: base64,
      };
    })
  );
  console.timeEnd('generating plaiceholders');

  return {
    props: {
      blurredCovers: images,
    }
  }
}
