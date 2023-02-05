import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <header>
      <div class="logo">
        <a href="/" title="Ruf.gg">
          Ruf.gg
        </a>
      </div>
      <ul>
        <li>
          <a href="/about/">
            About
          </a>
          <a href="/star-wars">
            Star Wars
          </a>
        </li>
      </ul>
    </header>
  );
});
