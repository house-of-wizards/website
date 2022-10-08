/* eslint-disable jsx-a11y/media-has-caption */
import Notice from '@/components/Notice';
import Head from 'next/head';
import Associations from '../components/associations/Associations';
import GridGallery from '../components/gridGallery/GridGallery';
import HomeAbout from '../components/homeAbout/HomeAbout';
import Screen from '../components/screen/Screen';
import Sponsors from '../components/sponsors/Sponsors';
import TechStack from '../components/techStack/TechStack';
import Video from '../components/video/Video';

export default function Home() {
  return (
    <Screen>
      <Notice />
      <Head>
        <title>House of wizards</title>
        <meta
          name="description"
          content="House of wizards is the official club of veltech multitech that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Video />
      <HomeAbout />
      <TechStack />
      <GridGallery />
      <Sponsors />
      <Associations />
    </Screen>
  );
}
