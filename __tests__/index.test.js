require('jest');
const axios = require('axios');
const { Properties } = require('../')

jest.mock("axios");

describe('properties test', () => {
  const funcionalidad = new Properties();
  const apicall = [{title: 'Casa Mau'},{title: 'Casa Michi'},{title: 'Casa Nomi'}];

  axios.get.mockResolvedValue({ data: { content: apicall }});
  
  test('test title', async () => {
    expect(await funcionalidad.getAllPropertiesTitle()).toStrictEqual(['Casa Mau', 'Casa Michi', 'Casa Nomi']);
  });
});