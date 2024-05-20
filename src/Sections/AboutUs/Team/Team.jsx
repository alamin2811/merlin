import React from 'react'
import TeamStyle from './Team.style'
import TeamCard from './TeamCard'
import SectionTitle from 'src/Components/SectionTitle/SectionTitle'

const Team = () => {
  return (
    <TeamStyle className='team-section'>
        <div className="container custom-container">
          <SectionTitle
            title="Meet The Team Members"
            alignment="center"
            titleMaxW="469px"
            titleMargin="auto"
          />
            <div className="team-row author">
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team1.png" teamMebername="HAKAN BEKTAŞ" degnation="Co-Founder-CEO" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team2.png" teamMebername="ÇAĞRI İMAL" degnation="Co-Founder-COO" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team3.png" teamMebername="Nazım Karaalp" degnation="Chief Marketing Officer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team5.png" teamMebername="IQBAL SINGH" degnation="Chief Technology Officer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team5.png" teamMebername="METE ALI BAŞKAYA" degnation="Advisor" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team6.png" teamMebername="AV. ELIF HILAL UMUCU" degnation="Legal Caunsel" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="big-card" teamMemberImg="../assets/images/team/team7.png" teamMebername="AV. SUNA DONDAR" degnation="Legal Caunsel" />
              </div>
            </div>

            <div className="team-row">
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team8.png" teamMebername="Kubilay Serbest" degnation="Growth Marketing Manager" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team9.png" teamMebername="HASAN MUMCU" degnation="Community Manager" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team10.png" teamMebername="ONUR YUCEL" degnation="Developer Team Lead" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team11.png" teamMebername="MUHARREM OZEL" degnation="Art Director" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team12.png" teamMebername="QUEEN WILLIAMS" degnation="Public Relations Director" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team13.png" teamMebername="MALKEET SINGH" degnation="Blockchain Solution Architect" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team14.png" teamMebername="JIGYASA MALHOTRA" degnation="Project Coordinator" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team15.png" teamMebername="MUNISH SANGRA" degnation="Sr. Content Strategist" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team16.png" teamMebername="ASHUTOSH MAURYA" degnation="Sr. Software Developer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team17.png" teamMebername="AKSHAY GARG" degnation="Sr. DevOps Engineer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team18.png" teamMebername="MANISH JINDAL" degnation="QA Engineer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team19.png" teamMebername="RIDHIM RAIZADA" degnation="Software Developer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team20.png" teamMebername="DEEPAK MINHAS" degnation="Software Developer" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team21.png" teamMebername="ERGIN YANAR" degnation="Artist" />
              </div>
              <div className="team-col">
                <TeamCard cardSize="small-card" teamMemberImg="../assets/images/team/team22.png" teamMebername="ANIL KUMAR" degnation="UX/UI Developer" />
              </div>
            </div>

            <div className="footer-logo">
              <a href="#"><img src="../assets/images/logo/fevicon.svg" alt="logo" /></a>
            </div>
        </div>
    </TeamStyle>
  )
}

export default Team