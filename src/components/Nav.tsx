import { Link, useLocation } from 'solid-app-router';
import { Component, createMemo, For } from 'solid-js';

const Nav: Component = () => {
  const location = useLocation();
  const currentLocation = createMemo(() => location.pathname);

  const links = [
    { text: '主页', to: '/' },
    // { text: 'WebAuthn', to: '/webauthn' },
    { text: '关于', to: '/about' },
  ];
  const activeClass = 'text-white bg-gray-900';
  const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-700';

  return (
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex items-baseline space-x-4">
              <For each={links}>
                {(link, index) => (
                  <Link
                    href={link.to}
                    class={`rounded-md px-3 py-2 text-sm font-medium ${
                      currentLocation() === link.to ? activeClass : inactiveClass
                    } ${index() > 0 && 'ml-4'}`}
                  >
                    {link.text}
                  </Link>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
