import React,{useState} from 'react'
import './AiNavbar.css'

function AINavbar() {

  const [activeLink, setActiveLink] = useState('/aijournalwrite');
  return (
    <div className='navbar'>
      
      <ul className="navbarlinks">
          <li><a href="/aijournalwrite" className={activeLink === '/aijournalwrite' ? 'active' : ''}
            onClick={() => setActiveLink('/aijournalwrite')}>Write</a></li>
          <li><a href="/aijournalarchive" className={activeLink === '/aijournalarchive' ? 'active' : ''}
            onClick={() => setActiveLink('/aijournalarchive')}>Archive</a></li>
          <li><a href="#">Tags</a></li>
        </ul>
        

    </div>
  )
}

export default AINavbar

