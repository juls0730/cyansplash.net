<template>
  <div>
    <nav>
      <div class="bg-blue-gray-600 shadow-lg p-7">
        <div class="hidden md:block md:ml-1 md:pr-4 md:space-x-5">
          <router-link
            class="font-semibold text-gray-50 hover:underline"
            to="/"
          >
            Home
          </router-link>

          <a
            href="https://www.github.com/juls0730"
            class="font-semibold text-gray-50 hover:underline"
            >GitHub</a
          >

          <router-link
            class="font-semibold text-gray-50 hover:underline"
            to="/projects"
          >
            Projects
          </router-link>

          <router-link
            class="font-semibold text-gray-50 hover:underline"
            to="/about-me"
          >
            About me
          </router-link>
        </div>
        <header
          class="md:hidden px-2 bg-blue-gray-600 flex flex-wrap items-center py-0.5"
        >
          <label for="menu-toggle" class="pointer-cursor lg:hidden block"
            ><svg
              class="fill-current text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
          ></label>
          <input id="menu-toggle" class="hidden" type="checkbox" />

          <div id="menu" class="hidden w-full">
            <nav>
              <ul
                class="items-center justify-between text-base text-gray-50 pt-3"
              >
                <li>
                  <router-link
                    class="px-0 block border-transparent mb-2 hover:underline"
                    to="/"
                  >
                    Home
                  </router-link>
                </li>
                <li>
                  <a
                    class="px-0 block border-transparent mb-2 hover:underline"
                    href="https://www.github.com/juls0730"
                    >Github</a
                  >
                </li>
                <li>
                  <router-link
                    class="px-0 block border-transparent mb-2 hover:underline"
                    to="/projects"
                  >
                    Projects
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="px-0 block border-transparent mb-2 hover:underline"
                    to="/about-me"
                  >
                    About me
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </nav>
  </div>
</template>

<style>
#menu-toggle:checked + #menu {
  @apply block;
}
</style>
