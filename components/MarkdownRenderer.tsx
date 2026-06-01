"use client";

import React from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const renderMarkdown = (text: string) => {
    // Split by lines
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: React.ReactNode[] = [];
    let inList = false;
    let listType: 'ordered' | 'unordered' | null = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Handle lists
      const orderedMatch = trimmedLine.match(/^(\d+)\.\s+(.*)/);
      const unorderedMatch = trimmedLine.match(/^[-*+]\s+(.*)/);

      if (orderedMatch || unorderedMatch) {
        const newType = orderedMatch ? 'ordered' : 'unordered';
        const itemContent = orderedMatch ? orderedMatch[2] : (unorderedMatch?.[1] || '');

        // Start new list if type changed
        if (listType !== newType) {
          if (inList) {
            // Close previous list
            elements.push(
              listType === 'ordered' ? 
                <ol key={`list-${i}`} className="ml-4 space-y-1">{currentList}</ol> :
                <ul key={`list-${i}`} className="ml-4 space-y-1">{currentList}</ul>
            );
            currentList = [];
          }
          listType = newType;
          inList = true;
        }

        // Add list item with inline formatting
        currentList.push(
          <li key={`item-${i}`} className="text-gray-200 leading-relaxed">
            {renderInlineFormatting(itemContent)}
          </li>
        );
      } else {
        // Close list if we were in one
        if (inList) {
          elements.push(
            listType === 'ordered' ? 
              <ol key={`list-end-${i}`} className="ml-4 space-y-1">{currentList}</ol> :
              <ul key={`list-end-${i}`} className="ml-4 space-y-1">{currentList}</ul>
            );
          currentList = [];
          inList = false;
          listType = null;
        }

        // Handle other elements
        if (trimmedLine === '') {
          // Empty line
          if (elements.length > 0) {
            elements.push(<br key={`br-${i}`} />);
          }
        } else if (trimmedLine.startsWith('#')) {
          // Headers
          const headerMatch = trimmedLine.match(/^(#{1,6})\s+(.*)/);
          if (headerMatch) {
            const level = headerMatch[1].length;
            const headerContent = headerMatch[2];
            const sizeClasses = ['text-lg', 'text-base', 'text-sm', 'text-xs', 'text-xs', 'text-xs'][level - 1];
            
            // Render header based on level
            const headerElement = React.createElement(
              `h${Math.min(level, 6)}`,
              {
                key: `header-${i}`,
                className: `${sizeClasses} font-bold text-white mt-3 mb-2`
              },
              renderInlineFormatting(headerContent)
            );
            elements.push(headerElement);
          }
        } else {
          // Regular paragraph
          elements.push(
            <p key={`p-${i}`} className="text-gray-200 leading-relaxed mb-2">
              {renderInlineFormatting(trimmedLine)}
            </p>
          );
        }
      }
    }

    // Close any remaining list
    if (inList && currentList.length > 0) {
      elements.push(
        listType === 'ordered' ? 
          <ol key="list-final" className="ml-4 space-y-1">{currentList}</ol> :
          <ul key="list-final" className="ml-4 space-y-1">{currentList}</ul>
      );
    }

    return elements;
  };

  const renderInlineFormatting = (text: string) => {
    // Handle bold text
    let processed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle italic text
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Handle inline code
    processed = processed.replace(/`(.*?)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-xs">$1</code>');
    
    return <span dangerouslySetInnerHTML={{ __html: processed }} />;
  };

  return (
    <div className={className}>
      {renderMarkdown(content)}
    </div>
  );
}
