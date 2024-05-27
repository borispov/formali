export type FormStep = {
  id: string;
  question: string;
  type: string;
  value: string|number;
  required: boolean;
  description: string;
  placeholder?: string;
  design: FormStepDesign;
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
  corners: string;
  // colors
  question: string;
  answer: string;
  button: string;
  buttonText: string;
  backgroundColor: string;
  backgroundImg: string;
}

// MAIN FORM OBJECT
export interface Form {
  id: string;
  name: string;
  design: FormDesign;
  formSteps: FormStep[];
}
