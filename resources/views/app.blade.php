<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'BaliHijau') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead

        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-light-32x32.png" media="(prefers-color-scheme: light)">
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-dark-32x32.png" media="(prefers-color-scheme: dark)">
        <link rel="apple-touch-icon" href="/apple-icon.png">
        <link rel="icon" type="image/svg+xml" href="/icon.svg">
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
