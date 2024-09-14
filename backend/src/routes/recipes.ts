import express from 'express';
import RecipeController from '../controllers/RecipeController';
import uploadRecipeFiles from '../helpers/uploadRecipeFiles';

const recipesRoutes = express.Router();

recipesRoutes.get('', RecipeController.index);
recipesRoutes.get('/:_id', RecipeController.show);
recipesRoutes.post('', uploadRecipeFiles ,  RecipeController.store);


export default recipesRoutes;