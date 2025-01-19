import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String, required: [true, "O titulo do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      enum: {
        values: ["casa do codigo", "alura"],
        message: "a editora {VALUE} nao e permitida"
      }
    },
    numeroPaginas: {
      type: Number,
      // min: [10, "o numero minimo de paginas é de 10. valor fornecido: {VALUE}"],
      // max: [5000, "o numero maximo de paginas é de 5000. valor fornecido: {VALUE}"]
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "o numero deve ser entre 10 e 5000. valor fornecido: {VALUE}"
      }
    }
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;