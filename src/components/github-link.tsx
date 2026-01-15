import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function GithubLink() {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='scale-95 rounded-full'
      asChild
    >
      <a
        href='https://github.com/Sukriti-m/Admin_Insights'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='View on GitHub'
      >
        <Github className='size-[1.2rem]' />
      </a>
    </Button>
  )
}

