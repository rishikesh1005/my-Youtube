import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex bg-gray-100 p-2 shadow-md rounded-lg'>
        <img
            className="h-12"
            alt="user-icon"
            src="https://imgs.search.brave.com/XLM6WQZOOjg4USteTMmA56CbGwKhBGOcLHTpbDno-xU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE3/MTM4MjYzMy92ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tYW5v/bnltb3VzLXBlcnNv/bi1zeW1ib2wtYmxh/bmstYXZhdGFyLWdy/YXBoaWMtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WndPRjZOZk9S/MHpoWUM0NHhPWDA2/cnlJUEFVaER2QWFq/clBzYVo2djEtdz0"
        />
        <div className='px-2'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment