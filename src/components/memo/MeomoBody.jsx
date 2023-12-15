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
      favorite: false,
    },
    {
      uid:"2",
      id: "park5606",
      title: '재밌게 놀사람',
      summary: '건대로 모여라',
      favorite: false,
    },
    {
      uid:"3",
      id: "jihwan",
      title: '소개 받을분',
      summary: '커피를 마시고 영화 ㄱㄱ',
      favorite: false,
    }
  ];


const MeomoBody = () => {

    const [plusmemo, setMemo] = useState(memos);

    const addMemoHandler = ({id, title, summary}) => {
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
    const returnStar = (favorite) => {
      if(favorite){
        return '★';
      }
      else{
        return '☆';
      }
    }
    const returnFavClass = (favorite) => {
      if(favorite){
        return 'left-fix star-btn fav';
      }
      else{
        return 'left-fix star-btn';
      }
    }
    const starClick = (uid) => {
      const newMemo = plusmemo.map(memo => {
        if(memo.uid === uid){
          memo.favorite = !memo.favorite;
        }
        return memo;
      })
      newMemo.sort((a, b) => {
        if(a.favorite && b.favorite){
          if(a.id < b.id) return -1;
          if(a.id > b.id) return 1;
        }
        if(a.favorite && !b.favorite) return -1;
        if(!a.favorite && b.favorite) return 1;
        return 0;
      })
      setMemo(newMemo);
    }
  return (
    <table>
    <tbody>
      <tr className='trList'>
        {
          plusmemo.map(memo =>{
            <td className='cell' key={memo.uid}>
              <div className='inner'>
                <button onClick={()=>{starClick(memo.uid)}} className={returnFavClass(memo.favorite)}>{returnStar(memo.favorite)}</button>
                <h2 > {memo.id} </h2>
                <h5 > {memo.title} </h5><br /><br />
                <h4 className="text-ellipsis overflow-hidden ..."> {memo.summary} </h4><br />
              </div>
            </td>})
        }
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