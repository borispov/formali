import type { FormDesign } from "$src/types";

export const getTheme = () => {}

export const themes: FormDesign[]= [
  {
    name: "ברירת מחדל",
    fontFamily: 'Arial',
    descriptorsAlign: 'center',
    descriptorsFontSize: 'sm',
    fieldsAlign: 'start',
    fieldsFontSize: 'md',
    question: '#000000',
    answer: '#0445AF',
    button: '#0445AF',
    buttonText: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    backgroundImg: '',
    corners: 'sm',
  },
  {
    name: "תות",
    fontFamily: 'Arial',
    descriptorsAlign: 'center',
    descriptorsFontSize: 'sm',
    fieldsAlign: 'start',
    fieldsFontSize: 'md',
    question: '#8B3249',
    answer: '#C75875',
    button: '#C75875',
    buttonText: '#18080C',
    backgroundColor: '#FFFFFF',
    backgroundImg: '',
    corners: 'sm',
  },
  {
    name: "גט",
    fontFamily: 'Arial',
    descriptorsAlign: 'center',
    descriptorsFontSize: 'sm',
    fieldsAlign: 'start',
    fieldsFontSize: 'md',
    question: '#040404',
    answer: '#000000',
    button: '#252525',
    buttonText: '#E4E4E4',
    backgroundColor: '#F9CD48',
    backgroundImg: '',
    corners: 'sm',
  },
  {
    name: "אפר לילה",
    fontFamily: 'Arial',
    descriptorsAlign: 'center',
    descriptorsFontSize: 'sm',
    fieldsAlign: 'start',
    fieldsFontSize: 'md',
    question: '#F1ECE2',
    answer: '#F1ECE2',
    button: '#F1ECE2',
    buttonText: '#8F7645',
    backgroundColor: '#262626',
    backgroundImg: '',
    corners: 'sm',
  }
]

export class ThemeService {
}