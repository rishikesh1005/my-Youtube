import React from 'react'
import CommentsList from './CommentsList'

const commentsData = [
    {
        name: 'Rishikesh',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies:[],
    },
    {
        name: 'Rishikesh',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies:[
            {
                name: 'Rishikesh',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies:[
                    {
                        name: 'Rishikesh',
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies:[],
                    },
                ],
            },
            {
                name: 'Rishikesh',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies:[],
            },
        ],
    },
    {
        name: 'Rishikesh',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies:[
            {
                name: 'Rishikesh',
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                replies:[
                    {
                        name: 'Rishikesh',
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies:[],
                    },
                    {
                        name: 'Rishikesh',
                        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        replies:[],
                    },
                ],
            },
        ]
    },
    {
        name: 'Rishikesh',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        replies:[],
    },
]

const CommentsContainer = () => {
  return (
    <div className='m-3 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;