import React from 'react';
import TokenTagStyle from './TokenTag.style';
import { tagsData } from 'public/assets/data/CryptoTokenData/TokenTag';
const TokenTag = () => {
    return (
        <TokenTagStyle className="crypto-token-tag-section">
            <div className="crypto-token-tag-inner">
                <div className="crypto-token-tag-list">
                    {tagsData.map((tag, index) => (
                        <a key={index} href="#" className={tag.className}>
                            {tag.label}
                        </a>
                    ))}
                </div>
                <div className="crypto-token-tag-list">
                    {tagsData.map((tag, index) => (
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
