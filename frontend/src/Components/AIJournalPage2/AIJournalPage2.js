import React from 'react'
import AINavbar from '../AINavbar/AINavbar';
import SideBar from '../SideBar/SideBar';
import { TbHeartFilled } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import './AIJournalPage2.css'

function AIJournalPage2() {

    const userEntries = [
        {
            "entry": "Summer Reflection",
            "Archived": "2 days ago"
        },
        {
            "entry": "Summer Reflection",
            "Archived": "2 days ago"
        }
    ];

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
                <div className='sections' style={{display:"flex",flexDirection:"row"}}>
                    <div>
                        <div className='dataname'> Recently Archived</div>
                        <div className='recentarchivedcontent'>
                            {userEntries.map((entries, index) => (
                                <div key={index} className="listitembox">


                                    <div className='icon'>
                                        <TbHeartFilled />
                                    </div>
                                    <div className='entryData'>
                                        <div className="entrytitle">
                                            {entries.entry}
                                        </div>
                                        <div className="archivedtext">
                                            {entries.Archived}
                                        </div>
                                    </div>
                                    <div className="righticons">
                                        <RiDeleteBin6Line />
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                    <div className='dataname'> Therapy and Coaching</div>
                    <div className='therapycoaching'>
                        {userEntries.map((entries, index) => (
                            <div key={index} className="listitembox">


                                <div className='icon'>
                                    <TbHeartFilled />
                                </div>
                                <div className='entryData'>
                                    <div className="entrytitle">
                                        {entries.entry}
                                    </div>
                                    <div className="archivedtext">
                                        {entries.Archived}
                                    </div>
                                </div>
                                <div className="righticons">
                                    <RiDeleteBin6Line />
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    <div>
                    <div className='dataname'> Older Archived</div>
                    <div className='olderarchived'>
                        {userEntries.map((entries, index) => (
                            <div key={index} className="listitembox">


                                <div className='icon'>
                                    <TbHeartFilled />
                                </div>
                                <div className='entryData'>
                                    <div className="entrytitle">
                                        {entries.entry}
                                    </div>
                                    <div className="archivedtext">
                                        {entries.Archived}
                                    </div>
                                </div>
                                <div className="righticons">
                                    <RiDeleteBin6Line />
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        ))}
                    </div>
                

                </div>

                

            </div>
            <div className='sectiontwo' style={{width:"560px"}}>
                <div className='stwocontent'>
                    <div className='arctext'>Archive Management</div>
                    <div className='enttext'>3 new entries from your partner this week. Latest:
"Weekend Plans'</div>
                </div>
                <div className='sectionbutton'>
                    <button className='settingsbutton'>Manage Settings</button>
                    <button className='learnbutton'>Learn More</button>
                </div>

            </div>
                
        </div>

        </div >
    )
}

export default AIJournalPage2