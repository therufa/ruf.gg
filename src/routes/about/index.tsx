import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            About Me
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          I was born in 1985 in the United States. I grew up in a small town in the Midwest. I
          graduated from college in 2007. I have been working as a software engineer since 2008.

          <h2 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 mt-8">
            My Interests
          </h2>
          <ul class="list-disc list-inside">
            <li>Programming</li>
            <li>Music</li>
            <li>Video Games</li>
            <li>Reading</li>
            <li>Writing</li>
            <li>Traveling</li>
          </ul>
        </div>
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
