import React, { useState, useEffect } from 'react';
import TokenTagStyle from './TokenTag.style';
import { tagsData } from 'public/assets/data/CryptoTokenData/TokenTag';

// const tagsData = [
//     { label: 'Metaverse', className: 'tag skyblue' },
//     { label: 'DeFi', className: 'tag skyblue2' },
//     { label: 'Wallet', className: 'tag offwhite' },
//     { label: 'Blockchain', className: 'tag skyblue3' },
//     { label: 'Apps', className: 'tag pink' },
//     { label: 'Ecosystem', className: 'tag yellow' },
//     { label: 'NFTs', className: 'tag offwhite' },
//     { label: 'dApp', className: 'tag yellowgreen' },
//     { label: 'Digital', className: 'tag offwhite' },
//     { label: 'Digital', className: 'tag skyblue2' },
//     { label: 'DeFi', className: 'tag skyblue2' },
//     { label: 'Wallet', className: 'tag offwhite' },
//     { label: 'Metaverse', className: 'tag skyblue' },
//     { label: 'DeFi', className: 'tag skyblue2' },
//     { label: 'Wallet', className: 'tag offwhite' },
// ];

const TokenTag = () => {
    const [visibleTags, setVisibleTags] = useState([]);

    useEffect(() => {
        const loadMoreTags = () => {
            // For demonstration, let's load 10 tags at a time
            const newTags = [...visibleTags];
            for (let i = 0; i < 10; i++) {
                newTags.push(tagsData[i % tagsData.length]); // Cycle through tagsData
            }
            setVisibleTags(newTags);
        };

        // Load more tags when component mounts
        loadMoreTags();

        // Add event listener for scrolling to load more tags
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleTags]);

    const handleScroll = () => {
        // Check if user has scrolled to the bottom
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // Load more tags
            loadMoreTags();
        }
    };

    return (
        <TokenTagStyle className="crypto-token-tag-section">
            <div className="crypto-token-tag-inner">
                <div className="crypto-token-tag-list">
                    {visibleTags.map((tag, index) => (
                        <a key={index} href="#" className={tag.className}>
                            {tag.label}
                        </a>
                    ))}
                </div>
            </div>
        </TokenTagStyle>
    );
};

export default TokenTag;
