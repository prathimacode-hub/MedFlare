import React from "react";

const Hero = () => {
  return (
    <section class="relative bg-[url(https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong class="block font-extrabold text-[#43c86d]">
              Ambulance.
            </strong>
          </h1>

          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            MedFlare is a one stop solution for people who likes to get all the
            medical aid without delay.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              class="block w-full rounded bg-[#43c86d] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#3F7EFC] focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-[#43c86d] shadow hover:text-[#3F7EFC] focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
