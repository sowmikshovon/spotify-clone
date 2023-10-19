This is a [Next.js](https://nextjs.org/) spotify-clone project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For database I used PostgreSQL with [Supabase](https://supabase.com/). Payment method [Stripe](https://stripe.com/) is intrigated. For style [TailwindCSS](https://tailwindcss.com/) was used.

For live demo Visit [https://spotify-clone-2-f8o4c3asg-sowmikshovon.vercel.app/](https://spotify-clone-2-omega.vercel.app/). You can create an account. Provide a test payment method. Then you can upload songs with a cover photo and listen them.


Key Features:

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- Cancelling Stripe subscriptions

For Development:

First clone or download the repo. Then

Install packages

```shell
npm install
```

Setup .env file

```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Add SQL Tables
Folow [Antonio](https://www.youtube.com/watch?v=2aeMRB8LL4o&t=3023s) for creating the database.

Start the app

```shell
npm run dev
```
