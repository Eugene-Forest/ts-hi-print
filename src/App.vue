<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Designer</RouterLink>
    <RouterLink to="/render">Go to About</RouterLink>
    <RouterLink to="/designer">Designer</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>