import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ChefHat, Utensils, Heart } from 'lucide-react';
import { recipes } from '../data/recipes';

const Home: React.FC = () => {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920")'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Easy Daily Recipe
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover delicious recipes for every occasion. From quick weeknight dinners 
              to special celebrations, we make cooking easy and enjoyable.
            </p>
            <Link
              to="/recipes"
              className="inline-flex items-center bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <ChefHat className="mr-2 h-5 w-5" />
              Explore Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cover bg-center bg-no-repeat relative" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1920")'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Easy Daily Recipe?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick & Easy</h3>
              <p className="text-gray-600">
                Most recipes can be prepared in 30 minutes or less, perfect for busy lifestyles.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Options</h3>
              <p className="text-gray-600">
                From vegetarian delights to hearty meat dishes, find recipes for every taste.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Tested</h3>
              <p className="text-gray-600">
                All recipes are tested and loved by real families, ensuring delicious results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-cover bg-center bg-no-repeat relative" style={{
        backgroundImage: 'linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1920")'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {recipe.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.cookTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings} servings
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      recipe.category === 'Vegetarian' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {recipe.category === 'Vegetarian' ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/recipes"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Trending Now
            </h2>
            <Link 
              to="/recipes" 
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tender Pot Roast */}
            <Link to="/recipe/beef-pot-roast" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Tender Pot Roast"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                TENDER POT ROAST
              </h3>
            </Link>

            {/* Chocolate Mousse */}
            <Link to="/recipe/chocolate-mousse" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Chocolate Mousse"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                CHOCOLATE MOUSSE
              </h3>
            </Link>

            {/* Bacony Deviled Eggs */}
            <Link to="/recipe/deviled-eggs" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Bacony Deviled Eggs"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                BACONY DEVILED EGGS
              </h3>
            </Link>

            {/* Carrot Cake */}
            <Link to="/recipe/carrot-cake" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Carrot Cake"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                CARROT CAKE
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Don't Miss Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Don't Miss
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mediterranean Diet Collection */}
            <Link to="/recipes" className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mediterranean Diet Recipes"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white text-sm font-medium mb-2 uppercase tracking-wide">
                  Collection
                </span>
                <h3 className="text-white text-xl font-bold leading-tight">
                  50 MEDITERRANEAN DIET RECIPES YOU'LL...
                </h3>
              </div>
            </Link>

            {/* Nachos Collection */}
            <Link to="/recipes" className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nachos Recipes"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white text-sm font-medium mb-2 uppercase tracking-wide">
                  Collection
                </span>
                <h3 className="text-white text-xl font-bold leading-tight">
                  NACHOS, 20 WAYS
                </h3>
              </div>
            </Link>

            {/* Italian Pasta Collection */}
            <Link to="/recipes" className="group relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Italian Pasta Recipes"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <span className="text-white text-sm font-medium mb-2 uppercase tracking-wide">
                  Collection
                </span>
                <h3 className="text-white text-xl font-bold leading-tight">
                  21 ESSENTIAL ITALIAN PASTAS
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* More Ideas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              More Ideas
            </h2>
            <Link 
              to="/recipes" 
              className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chicken Tikka Masala */}
            <Link to="/recipe/chicken-tikka-masala" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Chicken Tikka Masala"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                CHICKEN TIKKA MASALA
              </h3>
            </Link>

            {/* Vegan Bacon */}
            <Link to="/recipe/vegan-bacon" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Vegan Bacon"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                VEGAN BACON
              </h3>
            </Link>

            {/* Copycat McDonald's Big Mac Sauce */}
            <Link to="/recipe/big-mac-sauce" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/2282532/pexels-photo-2282532.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Big Mac Sauce"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                COPYCAT MCDONALD'S BIG MAC SAUCE
              </h3>
            </Link>

            {/* Crock-Pot Beef Roast */}
            <Link to="/recipe/crock-pot-beef-roast" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Crock-Pot Beef Roast"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                CROCK-POT BEEF ROAST
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;