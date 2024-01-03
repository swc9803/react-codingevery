import { React, useState } from 'react'

const Header = ({ word }) => {
  const [isShow, setIsShow] = useState(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <tr>
        <td>
            <input type='checkbox' />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button className='btn_del'>삭제</button>
        </td>
    </tr>
  )
}

export default Header
