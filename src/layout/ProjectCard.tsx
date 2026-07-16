import { fadeUp } from '@/lib/animations';
import { motion } from 'motion/react';
import type { ProjectType } from '@/types';
import { ExternalLink } from 'lucide-react';

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
  description,
  tech,
}: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className='group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-primary transition duration-300 flex flex-col h-full'
    >
      <a 
        href={projectLink} 
        target='_blank' 
        rel='noopener noreferrer' 
        className='block overflow-hidden relative aspect-video'
      >
        <img
          src={imgSrc}
          alt={title}
          className='transition duration-500 hover:scale-105 w-full h-full object-cover'
        />
        {tags && tags.length > 0 && (
          <div className='absolute top-3 left-3 flex gap-2'>
            {tags.map((tag, i) => (
              <span
                key={i}
                className='bg-black/75 text-white/90 text-xs py-1 px-2.5 rounded-full font-medium'
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </a>
      
      <div className='p-5 flex flex-col flex-grow gap-3'>
        <div className='flex items-start justify-between gap-4'>
          <a 
            href={projectLink} 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-xl font-semibold hover:text-primary transition duration-200 group-hover:text-primary'
          >
            {title}
          </a>
          <a 
            href={projectLink} 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-neutral-400 hover:text-primary p-1 transition duration-200'
            aria-label='View live project'
          >
            <ExternalLink className='size-5' />
          </a>
        </div>

        {description && (
          <p className='text-sm text-neutral-400 leading-relaxed line-clamp-3'>
            {description}
          </p>
        )}

        {tech && tech.length > 0 && (
          <div className='mt-auto pt-4 flex flex-wrap gap-2'>
            {tech.map((t, i) => (
              <span
                key={i}
                className='bg-neutral-800 text-neutral-300 text-xs py-1 px-2.5 rounded-md font-mono'
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
