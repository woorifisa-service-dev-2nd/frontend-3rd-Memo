import React from 'react'

const MemoDetail = ({ memo, onClose }) => {
    

    return (
        <>
          <div className="Modal-overlay" />
            <div className="Modal">
              <h1 className="title grid place-items-center text-3xl text-red-200"> MEMO </h1>
              <br/><br/>
              <form className='my-2'>
              <div className="content">
              <label className='block mb-2 text-xl text-black' htmlFor='writer'>Writer</label>
                <h4><p />{memo.writer}</h4>   
                <br/>
                <label className='block mb-2 text-xl text-black' htmlFor='title'>Title</label>
                <h4><p />{memo.title}</h4>   
                <br/>
                <label className='block mb-2 text-xl text-black' htmlFor='content'>Content</label>
                <p />{memo.content}
              </div>
              </form>
              <div className="button-wrap ">
                <button className='text-xl text-red-200' type='button' onClick={onClose}>닫기</button>
                
              </div>
            </div>
        </>
    )
}

export default MemoDetail