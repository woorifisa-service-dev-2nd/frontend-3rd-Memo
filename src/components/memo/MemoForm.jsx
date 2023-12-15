import '../../App.css'
import React, { useState } from 'react'

const MemoForm = ({ onAdd, onClose, memo, children }) => {


  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const newHandler = () => {
    onAdd({ writer, title, content });
    onClose();
    }
  return (
    <>
      <div className="Modal-overlay" />
        <div className="Modal">
          <h1 className="title grid place-items-center text-3xl text-red-200"> MEMO </h1>
          <br/><br/>
          <form className='my-2'>
          <div className="content">
          <label className='block mb-2 text-xl text-black' htmlFor='writer'>Writer</label>
            <h4><input type='text' placeholder='작성자를 입력하세요' name='writer'
                value={writer} onChange={event => setWriter(event.target.value)} /></h4>   
            <br/>
            <label className='block mb-2 text-xl text-black' htmlFor='title'>Title</label>
            <h4><input type='text' placeholder='제목을 입력하세요' name='title' 
                value={title} onChange={event => setTitle(event.target.value)}/></h4>   
            <br/>
            <label className='block mb-2 text-xl text-black' htmlFor='content'>Content</label>
            <textarea name='content' placeholder='내용을 입력하세요' rows='7'
            value={content} onChange={event => setContent(event.target.value)}/>
          </div>
          </form>
          <div className="button-wrap ">
            <button className='px-6 py-3 text-xl text-red-200' type='button' onClick={newHandler}>등록</button>
            <button className='text-xl text-red-200' type='button' onClick={onClose}>닫기</button>
            
          </div>
        </div>
    </>
  )
}

export default MemoForm