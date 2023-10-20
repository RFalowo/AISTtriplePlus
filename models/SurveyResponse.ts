import mongoose, { Document, Schema } from 'mongoose';

export interface ISurveyResponse extends Document {
  valence: number;
  arousal: number;
}

const SurveyResponseSchema: Schema = new Schema({
  valence: { type: Number, required: true },
  arousal: { type: Number, required: true },
});

export default mongoose.model<ISurveyResponse>('SurveyResponse', SurveyResponseSchema);
