export const sampleFormData = {
  name: 'formTest',
  design: {
    name: 'Default Blue',
    fontFamily: 'Arial',
    fieldsFontSize: 'sm',
    fieldsAlign: 'right',
    descriptorsFontSize: 'lg',
    descriptorsAlign: 'center',
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
    },
    {
      id: 'text-adc02',
      question: 'אנא ציינו את כתובת הדוא״ל שלכם',
      type: 'email',
      value: '',
      required: true,
      description: '',
      placeholder: 'elonmusk@tesla.com',
    },
  ]
}

export const sampleFormSteps = [
  {
    type: "email",
    question: "לאיזה אימייל תרצו שנשלח לכם הודעה?",
    description: "שורת תיאור נוספת, ניתן להשאירה ריקה.",
    placeholder: "name@example.com",
    required: true,
  },
  {
    type: "descriptor",
    question: "ברוכים הבאים, תודה על זמנכם.",
    description:
      "מילוי הטופס יקח רק 5 דקות מזמנכם ויעזור לנו באופן משמעותי בקידום ודיוק המערכת שלנו.",
    buttonText: "התחל",
  },
  {
    type: "tel",
    question: "הזינו מספר טלפון נייד",
    placeholder: "050-987-2345",
    description:
      "אנו צריכים את מספרכם לצורכי הרשמה בלבד, מספרכם לא נכנס לרשימת תפוצה כזו או אחרת",
    required: true,
  },
  {
    type: "select",
    question: "תחום התמחות החברה שלכם",
    required: true,
    options: [
      "שיווק ופרסום דיגיטל",
      "רשתות חברתיות",
      "ייעוץ ושירותים פיננסיים",
      "אחר",
    ],
  },
  {
    type: "text",
    question: "רשמו את שמכם הפרטי",
    description: "",
    placeholder: "גדעון בן יואש",
    required: true,
  },
  {
    type: "select",
    question: "אלו מבין האפשרויות הכי תואם אתכם?",
    description: "בחרו אפשרות אחת בלבד",
    required: false,
    options: [
      "חיפשתי בול מערכת כזו! פשוט תקחו את הכסף שלי.",
      "נראה חמוד, לא בטוח שיש לי צורך במערכת כרגע",
      "פחות מתחבר לי כל העניין",
      "לא!",
    ],
  },
  {
    type: "descriptor",
    question: "הגעתם לסוף :-)",
    description: "כעת, נסו לשגר את הטופס... קדימה!",
    buttonText: "שלח טופס",
  },
];
