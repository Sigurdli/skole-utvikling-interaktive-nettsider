const movie = {
    title: 'Film',
    name: 'movie',
    type: 'document',
    fields: [
      {
        title: 'Tittel',
        name: 'title',
        type: 'string',
        description: 'Tittel på filmen'
      },
      {
        title: 'Skuespiller',
        name: 'actor',
        type: 'reference',
        to: [{type: 'actor'}],
        description: 'Skuespiller i filmen'
      }
    ]
  }
  
  export default movie;