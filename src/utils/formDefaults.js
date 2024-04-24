// UUID alternative :-)
function generateId(start) {
let n = Date.now();
// pretty much a sequence, used to number html elements in the same app
return start + '-' + (++n).toString(36);
}

export const textDefaults = {
    question: 'שם מלא',
    type: 'text',
    value: '',
    required: false,
    description: 'מלאו שם פרטי ושם משפחה',
    placeholder: 'שם הפרטי שלכם...'
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
        'שיווק ופרסום דיגיטלי',
        'פיתוח תוכנה ואתרים לעסקים',
        'קופרייטינג',
        'עיצוב גרפי',
        'ייעוץ עסקי ומנטורינג',
    ]
}

export const phoneDefaults = {
    question: 'מס טלפון',
    type: 'tel',
    value: '',
    required: false,
    description: '',
    placeholder: '',
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
        default:
            return new Error('type does not match any support form field type')
    }
}
