const context = {
  entrypoint: 'board',
  available: [
    {
      id: 'board',
      program: {
        url: 'modules/board/build/main.min.js',
      },
      meta: {},
    },
    {
      id: 'fibonacci',
      program: {
        url: 'modules/fibonacci/build/main.min.js',
      },
      meta: {},
    },
  ],
}

export default context
