import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const age = new Date().getFullYear() - 1989;

  return (
    <>
      <header class="mb-4">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold leading-tight tracking-tight text-gray-700">
            About Me
          </h1>
        </div>
      </header>
      <main>
        <article class="mx-auto max-w-7xl px-6 lg:px-8">
          <p class="py-2">
            Hi, I'm Attila, and I'm a web developer.
          </p>
          <p class="py-2">
            I'm a full-stack developer, but I'm most passionate about front-end development, from ... you decide. At the moment I reside in Sopron, Hungary 🇭🇺.
          </p>
          <p class="py-2">
            I'm ~{age} years old, and I've been making websites since I was 12. I've been working as a freelancer since 2015.
          </p>
          <p class="py-2">
            I use <a href="https://www.typescriptlang.org/" class="underline text-purple-900 hover:text-purple-700 transition-all">TypeScript</a>, <a href="https://vuejs.org/" class="underline text-purple-900 hover:text-purple-700 transition-all">Vue.js</a> and <a href="https://reactjs.org/" class="underline text-purple-900 hover:text-purple-700 transition-all">React</a> for most of my projects, but I love to experiment with new technologies.
          </p>

          <h2 class="text-2xl font-semibold leading-tight tracking-tight text-gray-700 mt-8 mb-4">
            My current Focus
          </h2>

          <h3 class="text-xl leading-tight tracking-tight text-gray-700 underline mt-6 mb-2">
            <a href="https://meteoalarm.org/" class="underline text-purple-900 hover:text-purple-700 transition-all">Meteoalarm</a>
          </h3>
          <p class="py-2">
            Meteoalarm is a project I in collaboration with my team started for <a href="https://zamg.ac.at" class="underline text-purple-900 hover:text-purple-700 transition-all">ZAMG</a> in 2019 by under development eversince.
          </p>
          <p class="py-2">
            It's a weather alert system for Europe. It's a web application that shows the weather alerts for the current day and the next 3 days.
          </p>

          <h3 class="text-xl leading-tight tracking-tight text-gray-700 mt-6 mb-2">
            <a href="https://ruf.gg" class="underline underline text-purple-900 hover:text-purple-700 transition-all">Ruf.gg</a> <span class="align-sub">(this website 😉)</span>
          </h3>

          <p class="py-2">
            I started this website as part of the <a href="https://www.100daysofcode.com/" class="underline text-purple-900 hover:text-purple-700 transition-all">#100DaysOfCode</a> challenge on twitter.
          </p>
          <p class="py2">
            I wanted to learn more about Qwik and deploy it to Vercel. So far I enjoy the experience.
          </p>

          <h3 class="text-xl leading-tight tracking-tight underline text-gray-700 mt-6 mb-2">
            Other interests
          </h3>

          <p class="py-2">
            I'm also interested in:
          </p>

          <ul class="list-disc list-inside list-">
            <li>Web Performance</li>
            <li>Programming languages</li>
            <li>Freelancing</li>
          </ul>

          <h2 class="text-2xl font-semibold leading-tight tracking-tight text-gray-700 mt-8 mb-4">
            Contact
          </h2>

          <p class="py-2">
            You can find me on:
          </p>

          <ul class="list-disc list-inside list-">
            <li><a href="mailto:therufa@gmail.com" class="underline text-purple-900 hover:text-purple-700 transition-all">Email</a></li>
            <li><a href="https://twitter.com/therufa" class="underline text-purple-900 hover:text-purple-700 transition-all">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/attila-max-ruf-647659101/" class="underline text-purple-900 hover:text-purple-700 transition-all">LinkedIn</a></li>
          </ul>

        </article>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'About - Ruf.gg',
  meta: [
    {
      name: 'description',
      content: 'About me',
    },
  ],
};
