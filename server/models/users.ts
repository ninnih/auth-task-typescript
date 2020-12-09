import { Schema, model, Document } from 'mongoose';

export interface UserInterface {
	name: string,
	password: string,
	email: string,
  date: Date,
  info: Object
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  info: {
    type: Object,
    required: true
  }
}) 

export const User = model<UserInterface & Document>('users', UserSchema)
