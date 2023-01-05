const CategoriesRepository = require('../repository/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    // const categories = await CategoriesRepository.findAll();
    return response.status(200).json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });
    return response.status(200).json(category);
  }
}

module.exports = new CategoryController();
