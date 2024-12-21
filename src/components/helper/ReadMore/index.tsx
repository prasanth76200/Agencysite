import { useState } from "react";

interface ReadMoreProps {
    content: JSX.Element | string; // Support JSX or string
    maxLength: number;
  }
  
  const ReadMore: React.FC<ReadMoreProps> = ({ content, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded((prev) => !prev);
    };
  
    const plainTextContent = typeof content === "string" ? content : content.props.children;
    const displayedText =
      isExpanded || typeof plainTextContent !== "string"
        ? content
        : `${plainTextContent.slice(0, maxLength)}...`;
  
    return (
      <div className="text-base lg:text-lg text-gray-700 leading-relaxed">
        {displayedText}
        {plainTextContent.length > maxLength && (
          <button
            onClick={toggleReadMore}
            className="mt-2 text-primary hover:underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    );
  };
  
  export default ReadMore;
  