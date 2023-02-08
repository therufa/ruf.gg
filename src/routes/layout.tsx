import { component$, Slot, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import Logo from '~/components/logo';

interface State {
  navOpen: boolean;
}

export const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Blog',
    href: '/blog',
    classes: 'text-red-400',
  },
  {
    name: '/uses',
    href: '/uses',
  },
];

export default component$(() => {
  const store = useStore<State>({
    navOpen: false,
  });

  return (
    <>
      <div class="min-h-full">
        <nav class="border-b border-gray-200 bg-purple-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 justify-between">
              <div class="flex justify-between flex-1">
                <div class="flex flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navItems.map(item =>
                    <Link
                      key={item.href}
                      href={item.href}
                      class={['border-transparent text-gray-50 hover:border-purple-100 hover:text-white inline-flex items-center px-1 pt-1 border-b-4 text-sm font-normal lowercase', item.classes]}
                    >{item.name}</Link>
                  )}
                </div>
              </div>
              
              <div class="-mr-2 flex items-center sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  aria-controls="mobile-menu"
                  aria-expanded={store.navOpen ? 'true' : 'false'}
                  onClick$={() => store.navOpen = !store.navOpen}
                >
                  <span class="sr-only">Open main menu</span>
                  X
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div class={['sm:hidden', store.navOpen ? 'block' : 'hidden']}  id="mobile-menu">
            <div class="space-y-1 pt-2 pb-3"
              onClick$={() => store.navOpen = !store.navOpen}
            >
              {navItems.map(item =>
                <Link
                  key={item.href}
                  href={item.href}
                  class="border-transparent text-gray-50 hover:bg-purple-600 hover:border-purple-400 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >{item.name}</Link>
              )}
            </div>
          </div>
        </nav>

        <div class="py-10">
          <Slot />
        </div>
      </div>
    </>
  );
});
