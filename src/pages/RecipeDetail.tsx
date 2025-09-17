import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, Users, ChefHat, Flame } from 'lucide-react';
import { recipes } from '../data/recipes';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <Navigate to="/recipes" replace />;
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat py-8" style={{
      backgroundImage: 'linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url("https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1920")'
    }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {recipe.title}
              </h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                recipe.category === 'Vegetarian' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {recipe.category === 'Vegetarian' ? 'Vegetarian' : 'Non-Vegetarian'}
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              {recipe.description}
            </p>
            
            {/* Recipe Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Cook Time</div>
                  <div className="font-semibold">{recipe.cookTime}</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Servings</div>
                  <div className="font-semibold">{recipe.servings}</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <ChefHat className="h-5 w-5 text-green-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Difficulty</div>
                  <div className="font-semibold">{recipe.difficulty}</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Flame className="h-5 w-5 text-red-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Calories</div>
                  <div className="font-semibold">{recipe.calories}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-sm font-bold rounded-full mr-3 flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;