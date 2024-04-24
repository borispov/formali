import { z } from 'astro:content'
import type { APIRoute } from "astro";

const emailSchema = z.string().email()

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.has('x-up-validate')) {
    const fd = await request.formData()
    const toValidate= request.headers.get('x-up-validate')
    switch (true) {
      // validate email
      case toValidate === 'email':
        console.log('validating email')
        const emailInput = fd.get('email')
        try {
          emailSchema.parse(emailInput)
          return new Response(`
            <div class="error hidden"></div>
          `)
          console.log('email is valid')
        } catch(err) {
          console.log('invalid')
          return new Response(`
          <div class="error flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">שגיאה! </span> מייל לא תקין
            </div>
          </div>
          `)
        }
        break;
      case toValidate === 'tel':
        // validate phone number
        break;
      default:
        break;
    }
  }

  // user defined rules or system predefined rules
  return new Response('<h1>HELLO UNPOLY</h1>')
};


function validateEmailInput() {

}
function validateTelInput() {}
function validateInput(inputValue) {
  switch (true) {
    case inputValue === 'email':
      break;
    default:
      break;
  }
}