import React, {useState} from 'react'
import Modal from '../ui/Modal';
import { createPortal } from 'react-dom';
import MemoForm from './MemoForm';



const memos = [
    {
      id: "jiholine10",
      title: '안녕',
      summary: '안녕한다 얘들아',
      
    },
    {
      id: "park5606",
      title: '재밌게 놀사람',
      summary: '건대로 모여라',
      
    },
    {
      id: "jihwan",
      title: '소개 받을분',
      summary: '커피를 마시고 영화 ㄱㄱ',
      
    }
  ];


const MeomoBody = () => {

    const [plusmemo, setMemo] = useState(memos);

    const addMemoHandler = ({id, title, summary}) => {
      const newMemo = {
          id,
          title,
          summary
      };
  
      const updatedmemos = [...plusmemo, newMemo];
      setMemo(updatedmemos);
  
  
    }

    const [isOpen, open] = useState(false);
    const openModal = () => open(true);
    const closeModal = () => open(false);
    
  return (
    <table>
    <tbody>
    <tr className='trList'>
      {
        plusmemo.map(memo =>
          <td className='cell' key={memo.id}>
            <div className='inner'>
              <h2 > {memo.id} </h2>
              <h5 > {memo.title} </h5><br /><br />
              <h4 className="text-ellipsis overflow-hidden ..."> {memo.summary} </h4><br />
            </div>
          </td>
        )}
        <td className='cell' >
      <div className='inner' onClick={openModal}>
        <img src={'/plus.png'} className='picture' alt='logo' />
      </div>
    </td>

    </tr>
  </tbody>
  {isOpen && createPortal(
        <Modal >
            <MemoForm memos={memos} onClose={closeModal} onAdd={addMemoHandler}/>
        </Modal>, 
        document.body)}
  </table>
  )
}

export default MeomoBody