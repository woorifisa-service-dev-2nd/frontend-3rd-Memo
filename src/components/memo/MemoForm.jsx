import React, { useState } from 'react'




const MemoForm = ({ memo, onAdd, onClose }) => {



    const addMemoHandler = () => {
        onAdd({getUid, id, title, summary });
        onClose();
    }
    if (!memo || memo === undefined) {
        memo = {
            uid: 0,
            id: '',
            title: '',
            summary: ''
        }
    }
    const getUid = memo.uid;
    const [id, setId] = useState(memo.id);
    const [title, setTitle] = useState(memo.title);
    const [summary, setSummary] = useState(memo.summary);

    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateString = year + '-' + month + '-' + day;

    return (
        <div>
            <h1 className="title"> {'⌚️' + dateString + '😀'} </h1>
            <div className="content">
                <h4><input type='text' placeholder='작성자를 입력하세요' name='id' value={id} onChange={e => setId(e.target.value)}></input></h4>
                <br />
                <h4><input type='text' placeholder='제목을 입력하세요' name='title' value={title} onChange={e => setTitle(e.target.value)}></input></h4>
                <br />
                <textarea name='content' placeholder='내용을 입력하세요' value={summary} onChange={e => setSummary(e.target.value)}></textarea>
            </div>
            <br /><br />
            <div className="button-wrap" style={{display: 'flex'}}>
                <button onClick={addMemoHandler}>등록</button>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>

    )
}

export default MemoForm