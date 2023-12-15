import React, { useState } from 'react'
import Modal from '../ui/Modal';
import { createPortal } from 'react-dom';
import MemoForm from './MemoForm';
import MemoItem from './MemoItem';



const memos = [
  {
    uid: "1",
    id: "jiholine10",
    title: '안녕',
    summary: '안녕한다 얘들아',
  },
  {
    uid: "2",
    id: "park5606",
    title: '재밌게 놀사람',
    summary: '건대로 모여라',
  },
  {
    uid: "3",
    id: "jihwan",
    title: '소개 받을분',
    summary: '커피를 마시고 영화 ㄱㄱ',
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

  const [uid, setUid] = useState(4);
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);

  return (
    <table>
      <tbody>
        <tr className='trList'>
          {memos.map(memo => <MemoItem memo={memo} key={memo.uid} isOpen={isOpen} onOpen={openModal} onClose={closeModal} />)}

          <td className='cell' >
            <div className='inner' onClick={openModal}>
              <img src={'/plus.png'} className='picture' alt='logo' />
            </div>
          </td>

        </tr>
      </tbody>
      {isOpen && createPortal(
        <Modal onClose={closeModal}>
          <MemoForm memos={memos} onClose={closeModal} onAdd={addMemoHandler} />
        </Modal>,
        document.body)}
    </table>
  )
}

export default MeomoBody