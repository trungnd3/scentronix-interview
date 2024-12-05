'use client';

import * as React from 'react';
import NextLink from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { LOGO_SIZE, MENU_STRUCT } from '@/lib/contants';

function toIndex(value: number | boolean) {
  if (typeof value) {
  }
}

export default function Navigation() {
  const pathname = usePathname();
  const firstHref = '/' + pathname.split('/')[1];
  const menuItemIndex = MENU_STRUCT.findIndex(
    (item) => item.href === firstHref
  );

  const [value, setValue] = React.useState<number | boolean>(
    menuItemIndex ?? false
  );

  const handleChange = (
    _: React.SyntheticEvent,
    newValue: number | boolean
  ) => {
    setValue(newValue);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        backgroundColor: '#fff',
        width: '100%',
        zIndex: 10,
      }}
    >
      <Container maxWidth='md' sx={{ position: 'relative' }}>
        <Box
          sx={{ position: 'absolute', cursor: 'pointer' }}
          onClick={() => setValue(false)}
        >
          <Logo size={LOGO_SIZE} />
        </Box>
      </Container>
      <Container maxWidth='md' sx={{ height: '4rem' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='primary'
          indicatorColor='secondary'
          aria-label='Navigation tabs'
          role='navigation'
          sx={{ marginLeft: `${LOGO_SIZE}px` }}
        >
          {MENU_STRUCT.map((item) => (
            <Tab
              key={item.label}
              label={item.label}
              href={item.href}
              component={NextLink}
            />
          ))}
        </Tabs>
      </Container>
      <Box sx={{ backgroundColor: '#F8F5EF', height: '3rem' }}>
        <Container maxWidth='md'>
          {value !== false &&
            MENU_STRUCT[value as number] !== undefined &&
            MENU_STRUCT[value as number].children !== undefined &&
            MENU_STRUCT[value as number].children?.length > 0 && (
              <Tabs
                value={0}
                onChange={() => {}}
                aria-label='Navigation subtabs'
                role='navigation'
                sx={{ marginLeft: `${LOGO_SIZE}px` }}
              >
                {MENU_STRUCT[value as number].children.map((item) => (
                  <Tab key={item.label} label={item.label} href={item.href} />
                ))}
              </Tabs>
            )}
        </Container>
      </Box>
    </nav>
  );
}
