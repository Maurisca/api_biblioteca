// const Libro = require("../models/libroModel");

// exports.getAllLibros = async (req, res) => {
//   try {
//     const libros = await Libro.find();
//     res.status(200).json(libros);
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener los libros" });
//   }
// };

// exports.getLibroById = async (req, res) => {
//   try {
//     const libro = await Libro.findById(req.params.id);
//     if (!libro) {
//       return res.status(404).json({ error: "Libro no encontrado" });
//     }
//     res.status(200).json(libro);
//   } catch (error) {
//     res.status(500).json({ error: "Error al obtener el Libro" });
//   }
// };

// exports.createLibro = async (req, res) => {
//   try {
//     const nuevoLibro = await Libro.create(req.body);
//     await nuevoLibro.save();
//     res.status(201).json(nuevoLibro);
//   } catch (error) {
//     res.status(500).json({ error: "Error al crear el Libro" });
//   }
// };

// exports.updateLibro = async (req, res) => {
//   try {
//     const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!libro) {
//       return res.status(404).json({ error: "Libro no encontrado" });
//     }

//     res.status(200).json(libro);
//   } catch (error) {
//     res.status(500).json({ error: "Error al actualizar el Libro" });
//   }
// };

// exports.deleteLibro = async (req, res) => {
//   try {
//     const libroId = req.params.id;

//     const libroEliminado = await Libro.findByIdAndRemove(libroId);

//     res.status(200).json(libroEliminado);
//   } catch (error) {
//     res.status(500).json({ error: "Error al eliminar el Libro" });
//   }
// };



// nueva parte, hecha con codeium
// Importar el modelo de Libro
const Libro = require("../models/libroModel");

// Obtener la lista completa de libros
exports.getAllLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.status(200).json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
};

// Obtener los detalles de un libro específico por su ID
exports.getLibroById = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el libro" });
  }
};

// Crear un nuevo libro
exports.createLibro = async (req, res) => {
  try {
    const nuevoLibro = await Libro.create(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el libro" });
  }
};

// Actualizar la información de un libro específico por su ID
exports.updateLibro = async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
};

// Eliminar un libro específico por su ID
exports.deleteLibro = async (req, res) => {
  try {
    const libroId = req.params.id;

    const libroEliminado = await Libro.findByIdAndRemove(libroId);

    res.status(200).json(libroEliminado);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
};
