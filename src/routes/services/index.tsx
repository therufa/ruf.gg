import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Services
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          I develop software
        </div>
      </main>
    </>

  );
});

export const head: DocumentHead = {
  title: 'Services - Ruf.gg',
  meta: [
    {
      name: 'description',
      content: 'Services - Ruf.gg',
    },
  ],
};
