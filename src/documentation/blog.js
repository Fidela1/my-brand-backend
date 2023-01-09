export const blog = {
    '/api/v1/blogs': {
      post: {
        tags:['blog'],
        summary: 'CREATE',
        consumes:['application/json'],
        produces:['application/json'],
        parameters:[{
          name: 'body',
          in: 'body',
          description: 'Create a new blog',
          required: true,
          schema:{
            $ref:'#/definitions/update',
          },
        },
      ],
      responses: {
        200: {
          description: 'Success',
        },
        400: {
          description: 'Bad Request',
        },
        500: {
          description: 'Internal Server Error',
        }
      }
      }
    },
    '/api/v1/blogs/': {
        get: {
          tags: ['blog'],
          summary: 'Get All blogs',
          description: 'Get All blogss',
          produces: ['application/json'],
          responses: {
            200: {
            
              description: 'Ok',
            },
          
        },
  },
}
}
  export const blogDefinition ={
    update: {
      type:'object',
      in:'body',
      required:[
        'title',
        'description',
        
      ],
      properties: {
        title: {type:'string'},
        description: {type:'string'},
        
      }
    }
  }

