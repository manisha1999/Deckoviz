import React,{useState} from 'react'
import './AIjournalwrite.css'
import AINavbar from '../AINavbar/AINavbar';
import SideBar from '../SideBar/SideBar';
import { BsStars } from "react-icons/bs";
import { LiaCommentMedicalSolid } from "react-icons/lia";
import { IoIosPlayCircle } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsEmojiSmileFill } from "react-icons/bs";

const initialTags = ['Morning Routine', 'Meditation'];
function AIjournalwrite() {

    const [contenttext, setcontenttext] = useState(`I woke up feeling refreshed today. The new morning routine is really working well for me. I managed to do a 10-minute meditation and some light stretching before checking my phone. Work projects are moving forward, though I'm a bit concerned about the timeline for the Henderson project. Need to discuss this with the team tomorrow. Overall, I'm feeling optimistic about the week ahead.`);
    const handletext = (e) =>{
        
        setcontenttext(e.target.value)
    }

    const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState('');
  const [isAddingTag, setIsAddingTag] = useState(false);

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddTag = () => {
    if (newTag.trim() !== '' && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag(''); 
      setIsAddingTag(false); 
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTag();
    }
  };


    return (
    
        <div className='aijournal'>
            <div classname='sidebar' style={{ width: "81.92px", height: "888.92px", marginLeft: "29px", marginTop: "36px", }}>
                <SideBar />
            </div>
            <div className='aijournalcontent' style={{ float: "right" }}>
                <div className='aiupperbar'>
                    <div className='aitext' >AI Journal <BsStars className='stars' /></div>
                    <div className='ainavbar'>
                        <AINavbar />
                    </div>
                </div>

                <div className='sections'>
                    <div className='sectionone'>
                        <div className='aijourn'>
                            <div className='headingone'>AI Journal<BsStars className='stars' /></div>
                            <div className='content'>
                                <div className='contentheading'>
                                    <LiaCommentMedicalSolid className='commenticon'/>
                                    <div className='headtext'>Transcript</div>
                                </div>
                                <div className='contenttextarea'><textarea onChange={handletext} value={contenttext}>{contenttext}</textarea></div>
                                <div className="righticons">
                                    <div><IoIosPlayCircle className='icon'/></div>
                                    <div><MdOutlineFileDownload  className='icon'/></div>
                                </div>
                            </div>
                        </div>
                        <div className='metanotes'>
                        <div className='headingone'>Meta Notes<BsStars className='stars' /></div>
                            <div className='content'>
                                <div className='contentheading'>
                                    <LiaCommentMedicalSolid className='commenticon'/>
                                    <div className='headtext'>AI Generated Summary</div>
                                </div>
                                <div className='contenttextarea'><textarea onChange={handletext} value={contenttext}>{contenttext}</textarea></div>
                                <div className="text">
                                   Overall Mood : Optimistic
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sectiontwo'>
                        <div className='primary boxs'>
                            <div className='primarycontent'><BsEmojiSmileFill className='smile'/></div>
                            <div className='primarycontent' style={{marginTop:"40px",paddingLeft:"10px"}}> Primary Emotion</div>
                            <div className='smalltext'> Optimism (65%)</div>
                        </div>
                        <div className='secondary boxs'>
                            <div className='primarycontent'><BsEmojiSmileFill className='smile'/></div>
                            <div className='primarycontent' style={{marginTop:"40px",paddingLeft:"10px"}}> Secondary Emotion</div>
                            <div className='smalltext'> Mild Concern (65%)</div>
                        </div>
                        <div className='smarttags boxs'>
                            <div className='smarttag' >Smart Tags</div>

                                <div className="tagslist">
                                        {tags.map((tag, index) => (
                                        <div key={index} className="tag">
                                            <span>{tag}</span>
                                            <span className="tagclose" onClick={() => handleRemoveTag(tag)}>×</span>
                                        </div>
                                        ))}

                                        {isAddingTag ? (
                                        <div className="addtaginputwrapper">
                                            <input
                                            type="text"
                                            className="addtaginput"
                                            value={newTag}
                                            onChange={(e) => setNewTag(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Type and press Enter"
                                            autoFocus
                                            />
                                        </div>
                                        ) : (
                                        <div className="addtagbutton" onClick={() => setIsAddingTag(true)}>
                                            Add Tag
                                        </div>
                                        )}
                                </div>
                        </div>
                    </div>

                    <div className='dashboard'>
                        Add to Dashboard
                    </div>


                </div>
            </div>

        </div>
    
  )
}

export default AIjournalwrite