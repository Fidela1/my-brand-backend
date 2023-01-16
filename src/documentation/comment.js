export const comment = {
    '/api/v1/blogs/{id}/comments': {
      post: {
        tags:['comment'],
        summary: 'CREATE',
        consumes:['application/json'],
        produces:['application/json'],
        parameters:[{
            name:'id',
            in:'path',
            type:'string'
        }],
        parameters:[{
          name: 'body',
          in: 'body',
          description: 'Create a newcomment',
          required: true,
          schema:{
            $ref:'#/definitions/Comments',
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
  
    '/api/v1/blogs/{id}/comments': {
        get: {
          tags: ['blog'],
          summary: 'Get individual blog',
          description: 'Get individual blog',
          produces: ['application/json'],
          parameters:[{
      name:'id',
      in:'path',
      type:'string'
          }],
          responses: {
            200: {
            
              description: 'Ok',
            },
          
        },
      },

}
}

  export const commentDefinition ={
    Blogs: {
      type:'object',
      in:'body',
      required:[
        'name',
        'comment',
        
      ],
      properties: {
        name: {type:'string'},
        comment: {type:'string'},
        
      }
    }
  }

