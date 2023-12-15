import React, { useState } from 'react'




const MemoForm = ({memos, onClose, onAdd}) => {


    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');

const addMemoHandler = () => {
    onAdd({id, title, summary})
    onClose();
}

const date = new Date();
console.log(date);
const year = date.getFullYear();
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);

const dateString = year + '-' + month  + '-' + day;

    return (
        <div>
            <h1 className="title"> {'⌚️'+dateString+'😀'} </h1>
            <div className="content">
            
                <h4><input type='text' placeholder='제목' name='title' value={title} onChange={e => setTitle(e.target.value)}></input></h4>
                <br />
                <textarea name='content' value={summary} onChange={e => setSummary(e.target.value)}></textarea>
            </div>
            <div className="button-wrap">
                <button onClick={addMemoHandler}><p>기록</p></button>
                <button onClick={onClose}><p>닫기</p></button>
            </div>
        </div>

    )
}

export default MemoForm