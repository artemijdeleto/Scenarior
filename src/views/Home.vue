<template>
	<div>
    <BackgroundContainer background-url="/assets/img/banner.png">
			<div class="text-center relative container min-h-screen flex flex-col mx-auto justify-center p-10">
				<h1 class="font-serif font-semibold text-6xl tracking-tight">Scenarior</h1>

				<p class="opacity-90 my-3 font-serif text-2xl tracking-wide">
					{{ $t('home.guest.description') }}
				</p>

        <hr class="opacity-10 my-5">

        <p class="text-center font-serif text-3xl tracking-wide">
          Feel free to <a :href="oauthLoginUrl" class="font-bold underline">{{ $t('home.guest.claim') }}</a>
        </p>
			</div>
    </BackgroundContainer>

    <BackgroundContainer backgroundUrl="https://images.unsplash.com/photo-1515734392280-e60c25eb9f01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80">
      <div class="font-serif relative container mx-auto p-10">
        <h2 class="text-4xl mb-5">Design your characters</h2>
        <p class="text-xl tracking-wide md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Non eligendi maiores mollitia adipisci recusandae ratione, cupiditate aliquam distinctio consequatur
          id dolorum voluptatibus odio harum animi minus nulla nostrum dolore doloremque.
        </p>
      </div>
    </BackgroundContainer>

    <BackgroundContainer backgroundUrl="https://images.unsplash.com/photo-1468857006728-bba1dba0eb7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1032&q=80">
      <div class="font-serif text-right relative container mx-auto p-10">
        <h2 class="text-4xl mb-5">From sketches to Hollywood-grade movie</h2>
        <p class="inline-block text-xl tracking-wide md:w-1/2">
          No matter what drives you to write a screenplay — personal interest, college task or commercial project. <br>
          Scenarior simply lets you compose a script for any needs and whatever scale you may want
        </p>
      </div>
    </BackgroundContainer>

    <BackgroundContainer backgroundUrl="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
      <div class="font-serif relative container mx-auto px-10 py-10 md:py-32">
        <h2 class="text-4xl mb-3">Turn the idea into complete screenplay</h2>
        <p class="text-xl tracking-wide md:w-1/2">
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </BackgroundContainer>

		<footer class="dark:bg-black mx-auto py-10">

			<p class="text-center text-muted">
				<strong>Scenarior</strong> — your friend in making graceful screenplays
				<br>
				<small>Using <strong>Scenarior</strong> is completely free</small>
			</p>

		</footer>

	</div>
</template>

<script setup>
import BackgroundContainer from '@/components/BackgroundContainer.vue';

const oauthLoginUrl = import.meta.env.VITE_APP_OAUTH_URL;
</script>
