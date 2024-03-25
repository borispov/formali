# TODOS:
- [ ] Implement SelectInput as a list of cards-like items instead of <select>


# Welcome

This is a potential spin-off from my forcard project, which is a web
page builder that has been built too broadly. This project can
potentially serve as a more specialized purpose while using some of the
same **components**, utilities and approach.

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

Use NeonDB for a postgresql database to store everything.

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

Option 4:
- Clojure
- ClojureScript / Hiccup
- HTMX

### The Chosen Stack

Option 1.

I know and love Astro. 
I can use whatever, Svelte/Alpine, React, and more.
I can use the BUN runtime as my server and add everything I need. A big
question is whether I can plug Hono as easily as I can to benefit from
middlewares.