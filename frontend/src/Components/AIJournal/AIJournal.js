import React,{useState} from 'react'
import AINavbar from '../AINavbar/AINavbar'
import './AIJournal.css'
import SideBar from '../SideBar/SideBar';
import { LiaCommentMedicalSolid } from "react-icons/lia";
import { TbHeartFilled } from "react-icons/tb";
import maskImage from './Maskgroup.png';
import section3cImage from './section3c.png'
import section3bImage from './section3b.png'
import group12 from './Group12.png'
import voice from './voice.png'
import waves from './waves.png'
import { GoPlus } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { RiVoiceprintLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import SearchBar from '../SearchBar/SearchBar';




function AIJournal() {
  const [ctext,setctext] = useState("What's small win you experience today?")
  const handleTextChange = (event) => {
    // This function updates the state with the new value from the textarea
    setctext(event.target.value);
  };
  const handlewriting = () =>{
    
  }
  return (
    <div className='aijournal'>
      <div classname='sidebar' style={{ width: "81.92px", height: "888.92px", marginLeft: "29px", marginTop: "36px" }}>
        <SideBar />
      </div>
      <div className='aijournalcontent'>
      <div style={{marginTop:"40px"}}>
                    <SearchBar />
             </div>
        <div className='aiupperbar'>
          <div className='aitext' >AI Journal <BsStars className='stars'/></div>
          <div className='ainavbar'>
            <AINavbar />
          </div>
        </div>
        <div className='sections' style={{display:"flex",flexDirection:"row"}}>
          <div className='section1'>
                <div className='image12'> 
                  <img src={group12} className='group12' alt='mask' />
                </div>
                <div style={{fontSize:"12px",fontWeight:"500",color:"white",marginTop:"20px",marginBottom:"5px",width:"300px",textAlign:"center"}}>Probably playing the piano. Imagine just sitting
                  down and playing a beautiful piece effortlessly.
                  What about you?..</div>
                  <div className="images-container">
                    
                    <div><RiVoiceprintLine className='waves2'/></div>
                    <div><RiVoiceprintLine className='waves'/></div>
                    
                    <div><img src={voice} className='voice' alt='voice icon' /></div>
                    <div><RiVoiceprintLine className='waves'/></div>
                   
                    <div><RiVoiceprintLine className='waves2'/></div>
                  </div>
                <div className='inputbox'>
                  <div className="inputcontainer">
                        <div className="inputicon"><GoPlus  />
                        </div>
                        <input 
                          type="text" 
                          className="inputfield" 
                          placeholder="Enter your text here..."
                        />
                        <div className="inputicon2"><IoIosSend  />
                        </div>
                  </div>
                </div>
          </div>
          <div className='section2'>
            <div className='section2c'>
              <div className='stext'>AI Journal<BsStars className='stars'/></div>
              <div style={{ marginLeft: "40px", display: "flex", alignItems: "center",marginTop:"10px"}}>
                <div><LiaCommentMedicalSolid className='ficon' /> </div>
                <div className='gtext'>Today's Prompt</div>
                
              </div>
              <div className='textarea' style={{height:"100px"}} onChange={handleTextChange}>{ctext}</div>
              <div className='button'>
                <button onClick={handlewriting}> Start writing</button>
              </div>
            </div>
            <div className='section2c'>
            <div className='gtext' style={{margin : "20px 0px 0px 20px"}}>Recent Entries</div>
            <div className='csections'>
              <div className='csection' style={{alignItems:"centre",justifyContent:"center"}}>
                <div style={{display:"flex",margin: "10px 5px 10px 20px",height:"15px"}}>
                <div><TbHeartFilled className='ficon' /> </div>
                <div className='gtext' style={{fontSize:"14px",fontWeight:"500"}}>Today's Prompt</div>
                </div>
                <div style={{fontSize:"12px",fontWeight:"400",color:"white",margin:"0px 0px 0px 55px",opacity:"50%"}}>Today 9:30 AM</div>
              </div>
              <div className='csection'>
              <div style={{display:"flex",margin: "10px 5px 10px 20px",height:"15px"}}>
                <div><TbHeartFilled className='ficon' /> </div>
                <div className='gtext' style={{fontSize:"14px",fontWeight:"500"}}>Weekley Goals</div>
                </div>
                <div style={{fontSize:"12px",fontWeight:"400",color:"white",margin:"0px 0px 0px 55px",opacity:"50%"}}>Yesterday 8:30 AM</div>
              </div>
            </div>
            
            </div>
          </div>
        </div>

        <div className='section3'>
          <div className='section3a'>
                  <div style={{ marginLeft: "40px", display: "flex", alignItems: "center",marginTop:"50px",gap:"5px"}}>
                        <div><img src={maskImage} className='mask' alt='mask' /> </div>
                        <div style={{fontSize:"14px",fontWeight:"400",color:"white",margin:"0px 0px 0px 55px",opacity:"50%"}}>Overall your entries show increased optimism this week</div>
                  </div>
                  <div className='bars'>
                            <div className='barsection'>
                              <div>
                                Optimism <span style={{float:"right"}}> 92%</span>
                              </div>
                                  <progress value={92} max={100} />
                            </div>
                            <div className='barsection'>
                            <div>
                                Productivity <span style={{float:"right"}}> 82%</span>
                              </div>
                              <progress value={82} max={100} />
                            </div>
                    </div>
                  <div className='button'>
                        <button style={{marginTop:"40px"}}> View Details</button>
                  </div>
          </div>
          <div className='section3b'>
            <div className='imagec'> <img src={section3bImage} className='mask' alt='mask' style={{display: "block",margin: "auto"}}/></div>
            <div style={{fontSize:"16px",fontWeight:"500",color:"white",marginTop:"70px",marginBottom:"5px"}}>Meditation</div>
             <div style={{fontSize:"14px",fontWeight:"400",color:"white",width:"150px",textAlign:"center"}}>Guided mindfulness
and self-awareness.</div>
          </div>
          <div className='section3c'>
          <div className='imagec'> <img src={section3cImage} className='mask' alt='mask' style={{display: "block",margin: "auto"}}/></div>
             <div style={{fontSize:"16px",fontWeight:"500",color:"white",marginTop:"70px",marginBottom:"5px"}}>Resources</div>
             <div style={{fontSize:"14px",fontWeight:"400",color:"white",width:"150px",textAlign:"center"}}>Goal Seting and Motivation</div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default AIJournal