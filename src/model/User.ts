import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    email?: string,
    nome?: string,
    telefone?: string,
    cpf?: string,
}

const UserSchema = new Schema({
    email: String,
    nome: String,
    telefone: String,
    cpf: String
},{
    timestamps: true,
});

 

export default model<UserInterface>('User', UserSchema);