import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <header>
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-5xl font-bold leading-tight tracking-tight text-gray-700">
            /uses
          </h1>
        </div>
      </header>
      <main>
        <article class="mx-auto sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold leading-tight tracking-tight text-gray-700 mt-8 mb-4">
            Editor + Terminal
          </h2>
          <ul class="marker:text-purple-800 list-[square] list-inside">
            <li class="mb-4">
              I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">VS Code</a> as my main editor at the moment, eversince I found wallaby.js but about that later.
            </li>
            <li class="mb-4">
              I also use <a href="https://neovim.io/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">Neovim</a>, I try to move my work to this one as much as possible.
            </li>
            <li class="mb-4">
              <a href="https://wezfurlong.org/wezterm/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">Wezterm</a> is my terminal of choice, I use it on my Mac and on my Waandows machine (yes, I use windows sometime).
            </li>
            <li class="mb-4">
              <a href="https://ohmyz.sh/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">Oh My Zsh</a> is the shell framework of my choice.
            </li>
            <li class="mb-4">
              I'm a unit test enjoyer and <a href="https://wallabyjs.com/" target="_blank" class="underline text-purple-900 hover:text-purple-700 transition-all">Wallaby</a> helps me to elevate the joy I get from writing tests. 🤗
            </li>
            <li class="mb-4">
              To provision and maintain my machines I use <a href="https://www.ansible.com/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">Ansible</a>.
            </li>
          </ul>
        </article>
        <article class="mx-auto sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold leading-tight tracking-tight text-gray-700 mt-8 mb-4">
            Backup Strategy / Home lab
          </h2>
          <p class="py-2 mb-2">
            I do have a regret. When it comes to data, I tend to be quite paranoid, therefore I have way more stuff than required.
          </p>
          <ul class="marker:text-purple-800 list-[square] list-inside">
            <li class="mb-4">
              I backup most of my data locally on a custom built NAS which runs <a href="https://unraid.net/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">UNRAID</a>.
            </li>
            <li class="mb-4">
              That NAS is backed up on a <a href="https://www.hetzner.com/storage/storage-box" class="underline text-purple-900 hover:text-purple-700 transition-all" target="_blank" rel="noopener">Hetzner Storage Box</a> using <a href="https://www.borgbackup.org/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">Borg</a>.
            </li>
            <li class="mb-4">
              I also use <a href="https://drive.google.com/">Google Docs</a> for some stuff.
            </li>
            <li class="mb-4">
              I run a few home services on a small cluster of <a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">Raspberry Pi 4</a> devices, as well as a few older generation <a href="https://support.hp.com/us-en/document/c04266271" target="_blank" rel="noopener" class="underline text-purple-900 hover:text-purple-700 transition-all">HP EliteDesk 800 G1</a> machines. 
            </li>
          </ul>
        </article>
      </main>
    </>

  );
});

export const head: DocumentHead = {
  title: '/uses - Ruf.gg',
  meta: [
    {
      name: 'description',
      content: 'Stuff I use to develop software and run my business.',
    },
  ],
};

