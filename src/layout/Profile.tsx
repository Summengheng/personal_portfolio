import { socialLinks } from '@/constants';
import { Button } from '@/components/ui/button';

export const Profile = () => {
  return (
    <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
      <div className='flex flex-col gap-1'>
        <div className=''>
          <h1 className='text-3xl font-bold'>Mengheng</h1>
          <p className='text-sm'>Web Developer</p>
        </div>

        <img
          src='/avatar.png'
          alt='Mengheng'
          className='lg:w-96 rounded-2xl object-cover'
        />
        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization</p>
          <p className='text-lg capitalize'>Frontend Developer</p>
        </div>
        <div>
          <p className='text-sm text-neutral-300'>Base in:</p>
          <p className='text-lg capitalize'>Phnom Penh, Cambodia</p>
        </div>
        <div className='flex gap-3 pt-2 text-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary transition duration-200'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
        </div>
        <Button
          className='mt-2'
          size='lg'
          asChild
        >
          <a
            href='https://t.me/summengheng'
            target='_blank'
            rel='noopener noreferrer'
          >
            Let's Work
          </a>
        </Button>
      </div>
    </aside>
  );
};

export default Profile;
