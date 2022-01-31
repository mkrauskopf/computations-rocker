const moduleUrl = (moduleId) => `modules/${moduleId}/build/main.min.js`

const context = {
  entrypoint: 'layout',
  available: [
    {
      id: 'layout',
      program: {
        url: moduleUrl('layout'),
      },
      meta: {},
    },
    {
      id: 'board',
      program: {
        url: moduleUrl('board'),
      },
      meta: {},
    },
    {
      id: 'fibonacci',
      program: {
        url: moduleUrl('fibonacci'),
      },
      meta: {},
    },
  ],
}

export default context
