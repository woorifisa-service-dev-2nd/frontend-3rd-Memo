import React, { useState } from 'react'


const MemoForm = ({memos, onClose, onAdd}) => {


    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

const addMemoHandler = () => {
    onAdd({id, title, summary})
    onClose();
}



    return (
        <div>
            <h1 className="title"> 메모를 기록하세요! </h1>
            <div className="content">
                <h4><input type='text' placeholder='아이디를 입력하세요' name='author' onChange={e => setId(e.target.value) }></input></h4>
                <br />
                <h4><input type='text' placeholder='제목을 입력하세요' name='title'onChange={e => setTitle(e.target.value)}></input></h4>
                <br />
                <textarea name='content' onChange={e => setSummary(e.target.value)}></textarea>
            </div>
            <div className="button-wrap">
                <button onClick={addMemoHandler}><p>메모 추가하기</p></button>
                <button onClick={onClose}><p>닫기</p></button>
            </div>
        </div>

    )
}

export default MemoForm