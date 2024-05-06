import React, { useState, useEffect, useRef } from 'react';
import { tagsData } from 'public/assets/data/CryptoTokenData/TokenTag';
import TokenTagStyle from './TokenTag.style';

const TokenTag = () => {
    const [visibleTags, setVisibleTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (
                containerRef.current &&
                containerRef.current.getBoundingClientRect().bottom <= window.innerHeight
            ) {
                // User has scrolled to the bottom
                loadMoreTags();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleTags]); // Trigger on visibleTags change to load more tags

    const loadMoreTags = () => {
        const newTags = [];
        for (let i = 0; i < 10; i++) {
            newTags.push(tagsData[(visibleTags.length + i) % tagsData.length]);
        }
        setVisibleTags(prevTags => [...prevTags, ...newTags]);
    };

    useEffect(() => {
        // Load initial set of tags
        loadMoreTags();
    }, []); // Trigger only once on component mount

    useEffect(() => {
        // Set loading to false after initial tags are loaded
        if (visibleTags.length > 0) {
            setLoading(false);
        }
    }, [visibleTags]);

    return (
        <TokenTagStyle ref={containerRef} className="crypto-token-tag-section">
            <div className="crypto-token-tag-inner">
                <div className="crypto-token-tag-list">
                    {loading && <div>Loading...</div>}
                    {!loading &&
                        visibleTags.map((tag, index) => (
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
