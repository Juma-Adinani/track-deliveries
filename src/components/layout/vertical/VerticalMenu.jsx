// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <MenuItem href='/' icon={<i className='ri-home-smile-line' />}>
          Dashboard
        </MenuItem>
        {/* <MenuSection label='Apps & Pages'>
          <MenuItem href='/account-settings' icon={<i className='ri-user-settings-line' />}>
            Account Settings
          </MenuItem>
          <SubMenu label='Auth Pages' icon={<i className='ri-shield-keyhole-line' />}>
            <MenuItem href='/login'>Login</MenuItem>
            <MenuItem href='/register'>Register</MenuItem>
            <MenuItem href='/forgot-password'>Forgot Password</MenuItem>
          </SubMenu>
          <SubMenu label='Miscellaneous' icon={<i className='ri-question-line' />}>
            <MenuItem href='/error'>Error</MenuItem>
            <MenuItem href='/under-maintenance'>Under Maintenance</MenuItem>
          </SubMenu>
          <MenuItem href='/card-basic' icon={<i className='ri-bar-chart-box-line' />}>
            Cards
          </MenuItem>
        </MenuSection>
        <MenuSection label='Forms & Tables'>
          <MenuItem href='/form-layouts' icon={<i className='ri-layout-4-line' />}>
            Form Layouts
          </MenuItem>
        </MenuSection> */}
        <MenuSection label='Deliveries'>
          <MenuItem href='/track-delivery' icon={<i className='ri-map-2-line' />}>
            Delivery map
          </MenuItem>
        </MenuSection>
        <MenuSection>
          <MenuItem href='/trip-list' icon={<i className='ri-map-2-line' />}>
            Trips
          </MenuItem>
        </MenuSection>
        {/* <MenuSection label='Misc'>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`}
            icon={<i className='ri-pantone-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            Foundation
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`}
            icon={<i className='ri-toggle-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            Components
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`}
            icon={<i className='ri-menu-search-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            Menu Examples
          </MenuItem>
          <MenuItem
            href={`https://github.com/themeselection/${process.env.NEXT_PUBLIC_REPO_NAME}/issues`}
            icon={<i className='ri-lifebuoy-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            Raise Support
          </MenuItem>
          <MenuItem
            href={process.env.NEXT_PUBLIC_DOCS_URL}
            icon={<i className='ri-book-line' />}
            suffix={<i className='ri-external-link-line text-xl' />}
            target='_blank'
          >
            Documentation
          </MenuItem>
          <SubMenu label='Others' icon={<i className='ri-more-line' />}>
            <MenuItem suffix={<Chip label='New' size='small' color='info' />}>Item With Badge</MenuItem>
            <MenuItem
              href='https://themeselection.com'
              target='_blank'
              suffix={<i className='ri-external-link-line text-xl' />}
            >
              External Link
            </MenuItem>
            <SubMenu label='Menu Levels'>
              <MenuItem>Menu Level 2</MenuItem>
              <SubMenu label='Menu Level 2'>
                <MenuItem>Menu Level 3</MenuItem>
                <MenuItem>Menu Level 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>Disabled Menu</MenuItem>
          </SubMenu>
        </MenuSection> */}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
