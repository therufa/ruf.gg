import { component$ } from '@builder.io/qwik';
import Logo from '../logo';

export default component$(() => {
  return (
    <header>
      <div class="font-title">
        <a href="/" title="Ruf.gg">
          <Logo />
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
