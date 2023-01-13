import { string } from "joi"

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
            $ref:'#/definitions/Blogs',
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
},
'/api/v1/blogs/{id}': {
  get: {
    tags: ['blog'],
    summary: 'Get individual blog',
    description: 'Get individual blog',
    produces: ['application/json'],
    parameters:[{
      name:'id',
      in:'path',
      type:"string"
  }],
    responses: {
      200: {
      
        description: 'Ok',
      },
    
  },
},
},
// 'api/v1/blogs/{id}': {
//   patch: {
//     tags: ['blog'],
//     summary: 'update blog',
//     description: 'update blog',
//     parameters:[{
//       name: 'id',
//       in: 'path',
//       type:'string',
//       description: 'update new blog',
//       required: true,
      
//     },
//   ],
//     responses: {
//       200: {
      
//         description: 'Ok',
//       },
    
//   },
// },

// }
}
  export const blogDefinition ={
    Blogs: {
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

