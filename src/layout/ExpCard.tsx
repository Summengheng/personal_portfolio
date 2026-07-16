import React from 'react';
import type { ExperienceType } from '@/types';

export const ExpCard = ({ item }: { item: ExperienceType }) => {
  const descriptionPoints = React.useMemo(() => {
    if (!item.desc) return [];
    
    // Split by newlines or bullet points (•)
    return item.desc
      .split(/\n|•/)
      .map(point => point.trim())
      .filter(point => point.length > 0);
  }, [item.desc]);

  return (
    <div className='relative group'>
      <div className='absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300'></div>
      <span className='text-neutral-400 lining-nums group-hover:text-primary transition duration-300'>
        {item.year}
      </span>

      <h3 className='text-lg font-semibold mt-1'>{item.title}</h3>

      <p className='text-sm text-neutral-400 mb-1'>
        <span className='font-medium text-foreground'>{item.institute}</span>
      </p>
      
      {descriptionPoints.length > 1 ? (
        <ul className='list-disc pl-4 space-y-1.5 mt-2 text-sm text-neutral-400'>
          {descriptionPoints.map((point, index) => (
            <li key={index} className='leading-relaxed'>
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-sm text-neutral-400 mt-2 leading-relaxed'>{item.desc}</p>
      )}
    </div>
  );
};

export default ExpCard;
