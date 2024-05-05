# TODOS:
- [x] Implement SelectInput as a list of cards-like items instead of <select>
- [x] Implement a validation upon each ```nextStep``` function call, i.e,
Landing Page:
- [x] Write a compelling copy section for the landing page
- [ ] Add More Images mimicking a form builder UI
- [ ] Add those images to the landing page
- [ ] Add SVGs and art to various sections to augment the experience.

BUILDER:
- [x] Add TextAreas with basic WYSIWYG elements (Bold, Italic, H2,H3,P for sizings) or maybe enable markdown? nah..
- [x] Add YouTube Embeds As Fields or Descriptions // added Link
- [x] DRAG & DROP functionality for side panel

ADD BLOCKS:
- [x] Create a block/form step creation modal - Settled on avoiding a modal.
- [x] Add Phone field
- [x] Added Next Button for Select and Text input fields
- [x] Add Star Rating
- [x] Add Opinion Scale
- [ ] Add Multichoice

SETTINGS:
- [ ] Create a settings page
- [ ] Create an integration page # or not
- [ ] Create a hook to send form submissions to user's email.

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

## Database 
Option 1: use NeonDB for a postgresql database to store everything.

Modeling my use case with Relation Datbase is seemingly challenging.

I have to model formSteps which isn't straightforward, becaues each form
block can be different and there can be way too many types of blocks,
i.e form field types.

I tried setting up Mongoose to use MongoDB. However, using mongoose
usually involves writing up a schema which is met with the same problem.
Therefore, using mongodb node driver is the solution I'm aiming for now.

### The Chosen Stack
