import { combineReducers } from 'redux';
import fetchProductDetailReducer from './fetchProductDetail';
import fetchProductContent from './fetchProductsContent';
import fetchFAQentries from './fetchFAQentries';
import fetchTabDetails from './fetchTabDetails';
import fetchDetailedProduct from './fetchDetailedProduct';

const rootReducer = combineReducers({
  productsDetail: fetchProductDetailReducer,
  productsContent: fetchProductContent,
  FAQentries: fetchFAQentries,
  tabDetails: fetchTabDetails,
  detailedProducts: fetchDetailedProduct,
});

export default rootReducer;