import React, { useState } from 'react';
import FaqStyle from './Faq.style';
import SectionTitle from 'src/Components/SectionTitle/SectionTitle';

const FaqSection = () => {
    const [accordions, setAccordions] = useState([
        {
            id: 1,
            title: 'What distinguishes Project Merlin from other DAO projects and why do you call it DAO v2?',
            content: 'We are an innovative WEB3 project operating as a DAO. There are no other DAO projects that have functioned in this manner before. We are pioneering a new era in the industry, introducing a next-generation DAO ecosystem where the community plays a more active role. A future where proposals are not limited to three options, and the authority to create proposals is not concentrated within a specific minority. The governance system introduced by Project Merlin places the entire authority for proposal creation, candidate selection, and candidate voting, for the first time, entirely under the control of the community. This is why we refer to it as DAO v2. Furthermore, for the first time in a DAO project, the opportunity for the community to earn rewards is diversified to such an extent. An innovative project that combines Vote2Earn, Gamification, and Staking opportunities.',
            isOpen: true,
            icon: ''
        },
        {
            id: 2,
            title: 'What networks does Project Merlin run on?',
            content: 'It is built on the multi-chains (Polygon, Avalanche, ETH, BSC, Arbitrum, Zksync and Polkadot Parachains)',
            isOpen: false,
            icon: ''
        },
        {
            id: 3,
            title: 'What is the use case of NFTs on the platform?',
            content: "In Project Merlin, Non-Fungible Tokens (NFTs) play a significant role in recognizing and distinguishing users' contributions within the platform. There are three types of NFTs. Community members with the Member NFT have privileges to vote on proposals during the Community Assessment stage and to send Raven Messages. Users with the Editor NFT have the privilege of creating proposals, and users with the Senator NFT have the privilege of voting on proposals during the Senator Assessment stage. Community members with the Member NFT have the right to vote on options in Camelot and Excalibur (Core) proposals.",
            isOpen: false,
            icon: ''
        },
        {
            id: 4,
            title: 'What is the Vote2Earn?',
            content: 'The Vote2Earn feature within Project Merlin not only allows users to participate in the voting process but also offers them the opportunity to earn rewards for their engagement. Every community member contributing to the stages necessary for a preliminary proposal to become a Camelot proposal is rewarded. Users with Editor, Senator, and community member NFTs are required to fulfill their respective straightforward tasks in this context.',
            isOpen: false,
            icon: ''
        },
        {
            id: 5,
            title: 'How can I earn income with Project Merlin or Merlin Token?',
            content: "Project Merlin embraces the philosophy of 'Not one for all, but all for one,' emphasizing 'All for one.' Therefore, if the dreams, goals, or aspirations you present to the community gain approval, you can secure funding for these. Additionally, by fulfilling your responsibilities as a Senator, Editor, or Member within the community, you can also generate income.",
            content2: "Lastly, Merlin Token is designed with a 'deflationary' structure, as its maximum supply is capped and designed to exhibit a tendency towards decreasing total supply. Therefore, holding Merlin Token and anticipating its value to increase over time is a potential avenue for earning profits.",
            content3: "Lastly, Merlin Token is designed with a 'deflationary' structure, as its maximum supply is capped and designed to exhibit a tendency towards decreasing total supply. Therefore, holding Merlin Token and anticipating its value to increase over time is a potential avenue for earning profits.",
            isOpen: false,
            icon: ''
        },
    ]);

    const toggleAccordion = (accordionId) => {
        setAccordions(accordions.map(accordion => {
            if (accordion.id === accordionId) {
                return { ...accordion, isOpen: !accordion.isOpen };
            } else {
                return { ...accordion, isOpen: false };
            }
        }));
    };

    return (
        <FaqStyle className='faq-section' id="faq">
            <div className="container">
                <div className="faq-content">
                    <SectionTitle title="Frequently Asked Questions" alignment="center" titleMaxW="596px" titleMargin="auto" />
                    <div className="accordion-container">
                        {accordions.map(accordion => (
                            <div className={`ac ${accordion.isOpen ? 'active' : ''}`} key={accordion.id}>
                                <h2 className="ac-header">
                                    <button type="button" className="ac-trigger" onClick={() => toggleAccordion(accordion.id)}>
                                        {accordion.title}
                                        <span>{accordion.isOpen ? <img src="../assets/images/icons/minus.svg" alt="icon" /> : <img src="../assets/images/icons/plus.svg" alt="icon" />}</span>
                                    </button>
                                </h2>
                                {accordion.isOpen && (
                                    <div className="ac-panel">
                                        <p className="ac-text">{accordion.content}</p>
                                        <p className="ac-text">{accordion.content2}</p>
                                        <p className="ac-text">{accordion.content3}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FaqStyle>
    );
};

export default FaqSection;