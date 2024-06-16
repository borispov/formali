type Option = {
  id: string;
  value: string;
}
export type FormStep = {
  id: string;
  question: string;
  type: string;
  value: string|number;
  required: boolean;
  description: string;
  placeholder?: string;
  design?: FormStepDesign;
  img?: string;
  options?: Option[];
  rating?: number|string;
}

export interface WelcomeEndingStep {
  id: string;
  type: string;
  question: string;
  description: string;
  img?: string;
}

export interface RatingStep extends FormStep {
  rating: number;
}

type ScaleStepLabels = {
  left: string;
  center: string;
  right: string;
}

export interface ScaleStep extends FormStep {
  steps: number;
  zero_index: false;
  labels: ScaleStepLabels;
}

type FormStepDesign = {
  bg: string;
  textColor: string;
  btnBg: string;
  btnTextColor: string;
}

export type DesignColors = {
  question: string;
  answer: string;
  button: string;
  buttonText: string;
  backgroundColor: string;
  backgroundImg: string;
}

export type FormDesign = {
  name: string; // theme name
  fontFamily: string;
  fieldsFontSize: string;
  fieldsAlign: string;
  descriptorsFontSize: string;
  descriptorsAlign: string;
  colors?: DesignColors;
  corners: string;
  question: string;
  answer: string;
  button: string;
  buttonText: string;
  backgroundColor: string;
  backgroundImg: string;
}

export type Form = {
  id: string;
  name: string;
  design: FormDesign;
  formSteps: FormStep[];
  endings: FormStep[];
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
  design: {
    name: 'Default Blue',
    fontFamily: 'Arial',
    colors: {
      question: '#3d3d3d',
      answer: '#4FB0AE',
      button: '#4FB0AE',
      buttonText: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      backgroundImg: '',
    },
    corners: 'small',
  },
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
        { id: '1', value: 'שיווק ופרסום דיגיטלי'},
        { id: '2', value: 'ייעוץ'},
        { id: '3', value: 'פרילאנס'},
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
      placeholder: 'elonmusk@tesla.com',
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