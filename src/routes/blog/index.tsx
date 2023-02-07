import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Blog
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          No content here yet.
        </div>
      </main>
    </>

  );
});

export const head: DocumentHead = {
  title: 'Blog - Ruf.gg',
  meta: [
    {
      name: 'description',
      content: 'Just a blog about stuff',
    },
  ],
};


