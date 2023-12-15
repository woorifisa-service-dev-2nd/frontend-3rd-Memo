import { useState } from 'react'
import './App.css'
import MemoBody from './components/memo/MemoBody'

const dummyMemo = [
  {
    id: 1,
    title: '메모1',
    writer : '작성자1',
    content: '내용1',
  },
  {
    id: 2,
    title: '메모2',
    writer : '작성자2',
    content: '내용2',
  },
  {
    id: 3,
    title: '메모3',
    writer : '작성자3',
    content: '내용3',
  }
]

const App = () => {
  
  const [memos, setMemo] = useState(dummyMemo);
  
  const addHandler = ({ writer, title, content }) => {
    const newMemo = {
      id: self.crypto.randomUUID(),
      writer,
      title,
      content
    };

    const updatedMemo = [...memos, newMemo]; 
    setMemo(updatedMemo);

  }

  // const detailHandler = ({ writer, title, content })  => {

  // }

  return (
    <>
      <MemoBody memos={memos} onAdd={addHandler}/>
    </>
  )
}

export default App
