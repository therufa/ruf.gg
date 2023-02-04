import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      Hi, I'm Therufa, and I'm a software engineer. I'm currently working on website, using Qwik.
      SUP?
    </div>
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
