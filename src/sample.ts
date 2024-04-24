type FormStep = {
  id: string;
  question: string;
  type: string;
  value: string|number;
  required: boolean;
  description: string;
  placeholder?: string;
  design: FormStepDesign;
  options?: string[];
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

export const formData: Form = {
  id: '',
  name: 'formTest',
  formSteps:  [
    {
      id: 'text-adc02',
      question: 'אנא ציינו את כתובת הדוא״ל שלכם',
      type: 'email',
      value: '',
      required: true,
      description: 'זוהי שורת תיאור',
      placeholder: 'tenCEO@gmail.com',
      design: {
        ...defaultDesign
      }
    },
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
