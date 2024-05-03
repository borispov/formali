import * as mongoose from 'mongoose';

const formDesignSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    fontFamily: { type: String, required: true},
    corners: { type: String, required: true},
    fields: {
      fontSize: { type: String, required: true},
      alignment: { type: String, required: true},
    },
    descriptors: {
      fontSize: { type: String, required: true},
      alignment: { type: String, required: true},
    },
    colors: {
      question: { type: String, required: true},
      answer: { type: String, required: true},
      button: { type: String, required: true},
      buttonText: { type: String, required: true},
      backgroundColor: { type: String, required: true},
      backgroundImg: String,
    },
  }
)

const formStepSchema = new mongoose.Schema(
  {
    question: String,
    type: String,
    required: Boolean,
    value: String,
    placeholder: String,
    description: String,
    options: [{ id: String, value: String }],
    from: Number,
    to: Number,
    labels: { left: String, mid: String, right: String},
    rating: Number,
  },
  {
    strict: false
  }
)

const formDataSchema = new mongoose.Schema(
  {
    id: String,
    name: { type: String, required: true},
    formSteps: [formStepSchema],
    design: {
      name: String,
      fontFamily: String,
      corners: String,
      fields: {
        fontSize: String,
        alignment: String,
      },
      descriptors: {
        fontSize: String,
        alignment: String,
      },
      colors: {
        question: String,
        answer: String,
        button: String,
        buttonText: String,
        backgroundColor: String,
        backgroundImg: String,
      },
    }
  }
)

const testSchema = new mongoose.Schema({
  name: String,
})

export const TestModel = mongoose.model('Test', testSchema)

export const FormModel = mongoose.model('Form', formDataSchema)
