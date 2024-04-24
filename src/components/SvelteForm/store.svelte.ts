export type FormStep = {
  id: string;
  question: string;
  type: string;
  value: string|number;
  required: boolean;
  description: string;
  placeholder?: string;
  design: FormStepDesign;
}

type FormStepDesign = {
  bg: string;
  textColor: string;
  btnBg: string;
  btnTextColor: string;
}

export type Form = {
  id: string;
  name: string;
  formSteps: FormStep[];
}

const defaultDesign = {
  bg: '#543636',
  textColor: '#e80e0e',
  btnBg: '#0445af',
  btnTextColor: '#fff',
}

export const formData = {
  id: '',
  name: 'formTest',
  formSteps:  [
    {
      id: 'select-adc001',
      question: 'מה משקף את עיסוקכם הכי טוב',
      type: 'select',
      value: '',
      required: true,
      description: '',
      placeholder: '',
      options: [
        'שיווק ופרסום דיגיטלי',
        'ייעוץ',
        'פרילאנסר בתחום ה web'
      ],
      design: {
        ...defaultDesign
      }
    },
    {
      id: 'text-adc02',
      question: 'אנא ציינו את כתובת הדוא״ל שלכם',
      type: 'email',
      value: '',
      required: true,
      description: '',
      placeholder: 'tenCEO@gmail.com',
      design: {
        ...defaultDesign
      }
    },
    {
      id: 'text-adc03',
      question: 'מה שמכם הפרטי?',
      type: 'text',
      value: '',
      required: true,
      description: 'שם מלא',
      placeholder: 'בוריס פובולוצקי',
      design: {
        ...defaultDesign
      }
    },
    {
      id: 'text-adc04',
      question: 'Favorite Band',
      type: 'text',
      value: '',
      required: false,
      description: '',
      placeholder: 'Led Zeppelinkkkkkkkkkkkk',
      design: {
        ...defaultDesign
      }
    },
  ]
}

export function createForm() {
  let form = $state<Form>(formData);
  let currentStep = $state(0);

  return {
    get form() {
      return form
    },

    set formSteps(newFormSteps) {
      form.formSteps = newFormSteps;
    },

    get formSteps() {
      return form.formSteps
    },

    get currentStep() {
      return currentStep
    },

    incStep: () => {
      currentStep++
    },

    decStep: () => {
      currentStep--
    },

    get getNextStep() {
      if (form.formSteps.length - 1 > currentStep) {
        return form.formSteps[currentStep + 1]
      }
    },

    addStep: (step: FormStep) => {
      form.formSteps.push(step)
    },

  }
}