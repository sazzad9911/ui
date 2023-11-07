import { useEffect, useState } from 'react';

export default function useMenu() {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    
  }, []);

  return [open, setOpen];
}