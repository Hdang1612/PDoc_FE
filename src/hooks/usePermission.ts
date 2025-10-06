// usePermission.ts
import { useState, useEffect } from 'react';
import { storage } from '../utils/localStorage';
import { Role } from '../interface/role';

// hook check role để render ui

export const usePermission = () => {
  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    const storedRole = storage.get('role');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const hasRole = (roles: string[]) => {
    return role ? roles.includes(role) : false;
  };

  return { role, hasRole };
};
