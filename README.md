# The Stack
After long contemplation between Svlte, HTMX, Unpoly, AlpineJS, Astro, etc,
I have decided to use, primarily, Svelte with Astro. However, there are
some parts that include Unpoly, for example in the landing page, the
register modal is handled by Unpoly which has built-in support for
create modals (layers in Unpoly). One area that I found Unpoly more
challenging is when I needed to send an Input validation to a different
API Endpoint than the form's action Endpoint. With htmx it's just
a matter of setting hx-post="/api/input-validation-endpoint". That said,
I really liked Unpoly. The second con of Unpoly, is the lack of
community material, which, in contrast, HTMX is flooded with.

## Svelte
I have built a fairly complex application logic with Svelte before, and
I liked it a lot. Building the current project with Svelte is much
easier and convenient for me than using AlpineJS. I struggled with all
the x-data and the linter giving me hell.

# Welcome
This is a potential spin-off from my forcard project, which is a web
page builder that has been built too broadly. This project can
potentially serve as a more specialized purpose while using some of the
same components, utilities and approach.

I must decide early on whether or not I'll be building for the Hebrew
community first or not. If yes, then I prefer to make the UI in Hebrew
**first**.

## Thoughts:

- Emphasize on building presets & blocks rather than building out
    section from scratch.
- Emphasize on building functional & common forms. Using pre-defined
    templates for simple use cases first.
- Offer pre determined design options for the whole site, rather
    customizing each and every component.

- Offer webhooks / integrations as early as possible, such as:
    - Notify by WhatsApp/Email on form submissions
    - Add submissions to a Google Sheets file.

## Engineering:
Use TailwindCSS as early as possible to simplify the whole design
process. No need to use complex CSS techniques to achieve nicities and
stuff to be proud of, just get shit done.


### Stack:
Option 1:
- Astro as the framework
- Svelte/Alpine for the Builder
- HTMX for the dashboard
- Bun & Hono for the backend? do I need Hono?

Option 2:
- Astro & Svelte/Alpine for everything

Option 3:
- Bun, Hono, JSX, HTMX for all.

#### 16th June, 2024 Addition:
Option 4:
- Laravel/Rails as a backend + Svelte frontend. This will provide full-control over authentication and an easily modeled DB with a great ORM.
- One of the main bonuses is it'll provide useful services such as: a mailer, cron if needed, monitoring, auth, easier integrations overall.
- MAIN bonus for Laravel is Cashier, which enables using PaddleJS without a sweat as compared to implementing everything myself.

## Database - Update:
I ended up using SQLite3 through Pocketbase. It seems perfectly fine, tbh. I leverage its Authentication as well.
I wonder whether I should spin-off a dedicated Backend service with Laravel/Rails or flow with PocketBase
