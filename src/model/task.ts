import { Schema, model } from 'mongoose';

interface ITask {
    title: string;
    description: string;
    duDate: Date;
}

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duDate: { type: Date, required: true },
}, { timestamps: true });

export default model<ITask>('Task', taskSchema);
