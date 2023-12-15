import React, { useState } from 'react'
import Modal from '../ui/Modal';
import { createPortal } from 'react-dom';
import MemoForm from './MemoForm';
const memos = [
    {
      uid: "1",
      id: "jiholine10",
      title: '안녕',
      summary: '안녕한다 얘들아',
      updateTime: '23.12.14 10:05:23',
      favorite: false,
    },
    {
      uid:"2",
      id: "park5606",
      title: '재밌게 놀사람',
      summary: '건대로 모여라',
      updateTime: '23.12.14 10:05:23',
      favorite: false,
    },
    {
      uid:"3",
      id: "jihwan",
      title: '소개 받을분',
      summary: '커피를 마시고 영화 ㄱㄱ',
      updateTime: '23.12.14 10:05:23',
      favorite: false,
    }
  ];

  function getTimeStamp() {
    const date = new Date();
    console.log(date);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = ('0' + date.getHours()).slice(-2);
    const min = ('0' + date.getMinutes()).slice(-2);
    const sec = ('0' + date.getSeconds()).slice(-2);
    const dateString = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  
    return dateString;
  }
  
  

const MeomoBody = () => {
  const [plusmemo, setMemo] = useState(memos);
  const addMemoHandler = ({ getUid, id, title, summary }) => {
    console.log(getUid);
    const newMemo = {
      uid: getUid ? getUid : uid,
      id,
      title,
      summary,
      updateTime: getTimeStamp(),
      favorite: false,
    };
    console.log(newMemo);
    let newMemos;
    if(getUid !== 0) {
      newMemos = plusmemo.map(memo =>{
        if(memo.uid == getUid){
          return newMemo;
        }else{
          return memo;
        }
      });
    }
    else{
      setUid(uid + 1);
      console.log(...plusmemo);
      newMemos = [...plusmemo, newMemo];
    }
    console.log(newMemos);
    setMemo(newMemos);
  }
  const [curUid, setCurUid] = useState(0);
  const [uid, setUid] = useState(4);
  const [isOpen, open] = useState(false);

  const openModal = (tmpUid) => {
    open(true);
    setCurUid(tmpUid);
  }
  const closeModal = () => open(false);
  const returnStar = (favorite) => {
    if (favorite) {
      return '★';
    }
    else {
      return '☆';
    }
  }
  const returnFavClass = (favorite) => {
    if (favorite) {
      return 'left-fix star-btn fav';
    }
    else {
      return 'left-fix star-btn';
    }
  }
  const starClick = (uid) => {
    const newMemo = plusmemo.map(memo => {
      if (memo.uid === uid) {
        memo.favorite = !memo.favorite;
      }
      return memo;
    })
    newMemo.sort((a, b) => {
      if (a.favorite && b.favorite) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
      }
      if (a.favorite && !b.favorite) return -1;
      if (!a.favorite && b.favorite) return 1
      if (!a.favorite && !b.favorite) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
      }
      return 0;
    })
    setMemo(newMemo);
  }
  return (
    <table>
      <tbody>
        <tr className='trList'>
          {
            plusmemo.map(memo =>
              <td className='cell' key={memo.uid}>
                <div className='inner'>
                  <button onClick={() => { starClick(memo.uid) }} className={returnFavClass(memo.favorite)}>{returnStar(memo.favorite)}</button>
                  <div onClick={() => { openModal(memo.uid) }}>
                    <div classNmae='title'> {memo.title} </div>
                    <h4 className="summary text-ellipsis overflow-hidden ..."> {memo.summary} </h4>
                    <div className='user-id'><div className='container right-fix time'> {memo.id} </div></div>
                    <div className='container right-fix time'>{memo.updateTime}</div>
                  </div>
                </div>

                {isOpen && createPortal(
                  <Modal onClose={closeModal}>
                    <MemoForm memo={plusmemo[curUid - 1]} onAdd={addMemoHandler} onClose={closeModal}>#</MemoForm>
                  </Modal>,
                  document.body
                )}
              </td>
            )}
          <td className='cell' >
            <div className='inner' onClick={openModal}>
              <img src={'/plus.png'} className='picture' alt='logo' />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
export default MeomoBody