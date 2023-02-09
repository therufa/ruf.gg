import { component$ } from '@builder.io/qwik';
import type { DocumentHead, RequestHandler} from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ response }) => {
  throw response.redirect('/about');
};

export default component$(() => {
  return (
    <>
      <header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Hey, Sup? I'm Max Ruf
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Attila Max Ruf - Full Stack Developer',
  meta: [
    {
      name: 'description',
      content: 'Transform your projects with the help of a top-notch full-stack dev. Act now!',
    },
  ],
};
