// UUID alternative :-)
function generateId(start) {
let n = Date.now();
// pretty much a sequence, used to number html elements in the same app
return start + '-' + (++n).toString(36);
}

export const scaleDefaults = {
    type: 'scale',
    question: 'דרגו את שביעות רצונכם מהשירות',
    description: '',
    from: 1,
    to: 5,
    labels: {
        Left: '',
        mid: '',
        right: '',
    },
    value: '',
    required: true,
    placeholder: '',
}

export const ratingDefaults = {
    type: 'rating',
    question: 'מה דעתכם על המוצר שלנו?',
    description: 'השקענו מאמצים רבים עד כה והדרך עוד ארוכה, לא נוכל לעשות זאת ללא חוות דעת החשובה שלכם.',
    rating: 0,
    value: '',
    required: true,
    placeholder: '',
}

export const signatureDefaults = {
    type: 'signature',
    question: 'אנא חתמו כאן',
    description: '',
    value: '',
    required: true,
    placeholder: '',
}

export const textDefaults = {
    question: 'שם מלא',
    type: 'text',
    value: '',
    required: false,
    description: 'מלאו שם פרטי ושם משפחה',
    placeholder: 'שם הפרטי שלכם...'
}

export const descriptorDefaults = {
    question: 'כותרת תיאור',
    type: 'descriptor',
    value: '',
    required: false,
    description: 'תארו עבור ממלאי הטופס את מטרת הטופס, כמה זמן תערוך, מה צפוי להיות וכד׳',
    img: '',
    buttonText: 'שלח טופס'
}

export const emailDefaults = {
    question: 'כתובת דוא״ל',
    type: 'email',
    value: '',
    required: false,
    description: 'השאירו כתובת מייל כדי שנוכל לחזור אליכם',
    placeholder: 'כתובת מייל'
}

export const checkboxDefaults = {
    question: 'תחום העסק',
    type: 'select',
    value: '',
    required: false,
    description: '',
    options: [
        { id: '1', value: 'אפשרות מספר 1', },
        { id: '2', value: 'אפשרות מספר 2', },
     ]
}

export const phoneDefaults = {
    question: 'הזינו מספר נייד',
    type: 'tel',
    value: '',
    required: false,
    description: '',
    placeholder: '050-987-1234',
    minLength: 10,
    maxLength: 10,
}

export const designDefaults = {
    design: {
      bg: '#543636',
      textColor: '#e80e0e',
      btnBg: '#0445af',
      btnTextColor: '#fff',
    }
}

export function createInput(type, data) {
    switch (true) {
        case type === 'descriptor':
            return  {
                id: generateId('descriptor'),
                ...descriptorDefaults,
                ...designDefaults,
                ...data
            }
        case type === 'text':
            return  {
                id: generateId('text'),
                ...textDefaults,
                ...designDefaults,
                ...data
            }
        case type === 'email':
            return  {
                id: generateId('email'),
                ...emailDefaults,
                ...designDefaults,
                ...data
            }
        case type === 'tel':
            return  {
                id: generateId('tel-'),
                ...phoneDefaults,
                ...designDefaults,
                ...data
            }
        case type === 'select':
            return {
                id: generateId('select-'),
                ...checkboxDefaults,
                ...designDefaults,
                data
            }
        case type === 'signature':
            return {
                id: generateId('sign-'),
                ...signatureDefaults,
                ...designDefaults,
                data
            }
        case type === 'scale':
            return {
                id: generateId('scael-'),
                ...scaleDefaults,
                ...designDefaults,
            }
        case type === 'rating':
            return {
                id: generateId('rating-'),
                ...ratingDefaults,
                ...designDefaults,
                data
            }
        default:
            return new Error('type does not match any support form field type')
    }
}
