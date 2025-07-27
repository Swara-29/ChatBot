import React from 'react';
import Answers from "../components/Answers";

const QuestionAns = ({ item, index }) => {
  return (
    <li key={`item-${index}`} className={item.type === 'q' ? 'flex justify-end' : ''}>
      <div
        className={
          item.type === 'q'
            ? 'text-right p-1 border-8 dark:bg-zinc-700 dark:border-zinc-700 bg-red-400 border-red-300 mr-2 roundedl-tl-3xl rounded-br-3xl rounded-bl w-fit'
            : 'text-left p-1'
        }
      >
        {item.type === 'q' ? (
          <Answers ans={item.text} totalResult={1} index={index} type={item.type} />
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <div key={`a-${index}-${ansIndex}`} className="text-left p-1">
              <Answers
                ans={ansItem}
                totalResult={item.text.length}
                index={ansIndex}
                type={item.type}
              />
            </div>
          ))
        )}
      </div>
    </li>
  );
};

export default QuestionAns;
