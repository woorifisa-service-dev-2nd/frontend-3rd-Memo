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
const MeomoBody = () => {
  const [plusmemo, setMemo] = useState(memos);
  const addMemoHandler = ({ id, title, summary }) => {
    const newMemo = {
      uid,
      id,
      title,
      summary
    };
    setUid(uid + 1);
    const updatedmemos = [...plusmemo, newMemo];
    setMemo(updatedmemos);
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
                <button onClick={()=>{starClick(memo.uid)}} className={returnFavClass(memo.favorite)}>{returnStar(memo.favorite)}</button>
                <div onClick={() => { openModal(memo.uid) }}>
                   <h5 > {memo.title} </h5>
                  <div className='container right-fix user-id'><div> {memo.id} </div></div>
                  <h4 className="text-ellipsis overflow-hidden ..."> {memo.summary} </h4>
                  <h1>{memo.updateTime}</h1>
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