import React from "react";
import SectionTitleStyleWrapper from "./SectionTitle.style";

const SectionTitle = ({ title, subtitle, alignment, titleMaxW, parentClass, titleMargin, subtitleClass, titleClass }) => {
  return (
    <SectionTitleStyleWrapper style={{ textAlign: alignment, maxWidth: titleMaxW, margin: titleMargin }} className="section-title">
      {subtitle && <span className={`sub-title ${subtitleClass}`}>{subtitle}</span>}
      {title && <h2 className={`title ${titleClass}`}>{title}</h2>}
    </SectionTitleStyleWrapper>
  );
};

export default SectionTitle;
