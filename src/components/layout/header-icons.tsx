import { ConfigDrawer } from '@/components/config-drawer'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { GithubLink } from '@/components/github-link'

export function HeaderIcons() {
  return (
    <div className='ms-auto flex items-center space-x-4'>
      <Search />
      <ThemeSwitch />
      <GithubLink />
      <ConfigDrawer />
      <ProfileDropdown />
    </div>
  )
}



