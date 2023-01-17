export const comment = {
    '/api/v1/blogs/{id}/comments': {
      post: {
        tags:['comment'],
        summary: 'CREATE',
        consumes:['application/json'],
        produces:['application/json'],
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
}

  export const commentDefinition ={
   Comments: {
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

