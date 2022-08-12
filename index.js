const axios = require('axios');

const config = {params: {
  "updated_after": "2020-03-01T23:26:53.402Z",
  "updated_before": "2025-03-01T23:26:53.402Z",
  "operation_type": "sale",
  "min_price": 500000,
  "max_price": 3000000,
  "min_bedrooms": 1,
  "min_bathrooms": 1,
  "min_parking_spaces": 1,
  "min_construction_size": 100,
  "max_construction_size": 1000,
  "min_lot_size": 100,
  "max_lot_size": 1000
}, headers: {
  'X-Authorization': 'l7u502p8v46ba3ppgvj5y2aad50lb9'
}}

class Properties {
  async getAllPropertiesTitle() {
    try {
      const response = await axios.get('https://api.stagingeb.com/v1/properties', config);
      const titles = response.data.content.map(property => property.title);
      
      return titles;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = {
  Properties
}
